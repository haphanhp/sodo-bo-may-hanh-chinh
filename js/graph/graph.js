// graph.js — vẽ đồ thị tổ chức bằng SVG, hỗ trợ zoom / pan / expand / collapse / chọn node.
import { buildTree, layout } from "./graph-layout.js";
import { nodeSVG, pagerSVG, bandSVG } from "./nodes.js";
import { edgeSVG } from "./edges.js";
import { infoCardHTML, countUnits } from "./info-card.js";
import { emit, on } from "../core/event-bus.js";
import { getState, setState } from "../core/state.js";
import { TODAY, MILESTONES, isPast, dmy } from "../core/time.js";

let view = { k: 1, x: 0, y: 0 };
let expanded = new Set();
let pages = new Map();
let api = null, cardBound = false;

export function timeBarMarkup(asOf){
  return `<div class="timebar${isPast(asOf) ? " is-past" : ""}">
    <span class="tb-label">📅 Xem bộ máy tại thời điểm</span>
    <input type="date" id="asof-input" value="${asOf}" max="2030-12-31">
    ${MILESTONES.map(m => `<button class="tb-chip${m.date === asOf ? " is-on" : ""}" data-asof="${m.date}" title="${m.hint}">${m.label}</button>`).join("")}
    <button class="tb-chip${asOf === TODAY ? " is-on" : ""}" data-asof="${TODAY}">Hôm nay</button>
    ${isPast(asOf) ? `<span class="tb-warn">Đang xem quá khứ (${dmy(asOf)}) — dữ liệu hiển thị là cơ cấu tại thời điểm đó</span>` : ""}
  </div>`;
}

export function graphMarkup(){
  return `<div class="graph-canvas" id="graph-canvas">
    <div class="graph-head">
      <div class="graph-legend">
        <span class="n-legislature"><i class="lg"></i>Lập pháp</span>
        <span class="n-government"><i class="lg"></i>Hành pháp</span>
        <span class="n-court"><i class="lg"></i>Tòa án</span>
        <span class="n-procuracy"><i class="lg"></i>Kiểm sát</span>
        <span class="n-agency"><i class="lg"></i>Cơ quan ngang Bộ · Văn phòng</span>
        <span class="n-ministry"><i class="lg"></i>Bộ</span>
        <span class="n-municipality"><i class="lg"></i>TP trực thuộc TW</span>
        <span class="n-province"><i class="lg"></i>Tỉnh</span>
      </div>
      <div class="graph-toolbar">
        <button class="icon-btn" data-g="in" title="Phóng to">＋</button>
        <button class="icon-btn" data-g="out" title="Thu nhỏ">－</button>
        <button class="icon-btn" data-g="fit" title="Vừa màn hình">⤢</button>
        <button class="icon-btn" data-g="all" title="Mở hết cấp dưới">⇱</button>
        <button class="icon-btn" data-g="none" title="Thu gọn hết">⇲</button>
      </div>
    </div>
    <div class="graph-stagebox">
      <svg id="graph-svg" class="graph-svg"><g id="graph-stage"></g></svg>
      <div class="graph-hint">Kéo để di chuyển · lăn chuột để phóng to · bấm một ô để mở/thu gọn cấp dưới và xem thông tin</div>
      <div class="graph-info" id="graph-info" hidden></div>
    </div>
  </div>`;
}

export function mountGraph(){
  const st = getState();
  if (!st.index) return;
  const canvas = document.getElementById("graph-canvas");
  if (!canvas) return;

  const svg = document.getElementById("graph-svg");
  draw();
  fit();
  api = { close: closeCard };
  if (!cardBound){ cardBound = true; on("card:close", () => { if (document.getElementById("graph-info")) api?.close(); }); }
  const sel0 = getState().selectedEntity;
  if (sel0 && st.index.typeOf(sel0) === "organizations") showCard(sel0);

  const tb = document.querySelector(".timebar");
  if (tb){
    tb.addEventListener("click", e => {
      const c = e.target.closest("[data-asof]");
      if (c){ setState({ asOf: c.dataset.asof }); emit("asof:change", c.dataset.asof); }
    });
    tb.querySelector("#asof-input").addEventListener("change", e => {
      if (e.target.value){ setState({ asOf: e.target.value }); emit("asof:change", e.target.value); }
    });
  }

  canvas.addEventListener("click", e => {
    if (moved && e.target.closest("svg")){ moved = false; return; }   // vừa kéo bản đồ, không tính là bấm
    const c = e.target.closest("[data-card]");
    if (c){ cardAction(c.dataset.card); return; }
    const g = e.target.closest("[data-g]");
    if (g){
      ({ in: () => zoom(1.2), out: () => zoom(1 / 1.2), fit, all: expandAll, none: collapseAll })[g.dataset.g]();
      return;
    }
    const pg = e.target.closest("[data-page]");
    if (pg && !pg.classList.contains("is-disabled")){
      const [id, p] = pg.dataset.page.split(":");
      if (+p >= 0){ pages.set(id, +p); draw(); }
      return;
    }
    const n = e.target.closest("[data-node]");
    if (n){ activate(n.dataset.node); return; }
    if (e.target.closest("svg")) closeCard();   // bấm nền trống → bỏ chọn, ẩn thẻ thông tin
  });
  svg.addEventListener("wheel", e => { e.preventDefault(); zoom(e.deltaY < 0 ? 1.1 : 1 / 1.1); }, { passive: false });
  // Chỉ "bắt" con trỏ khi thật sự kéo (>5px). Nếu bắt ngay lúc nhấn, Chrome gửi sự kiện click tới khung SVG
  // thay vì tới ô được bấm → không chọn được ô, không mở được bảng chi tiết.
  let drag = null, moved = false;
  svg.addEventListener("pointerdown", e => { drag = { x: e.clientX, y: e.clientY, vx: view.x, vy: view.y, id: e.pointerId }; moved = false; });
  svg.addEventListener("pointermove", e => {
    if (!drag) return;
    const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
    if (!moved){
      if (Math.hypot(dx, dy) < 5) return;
      moved = true;
      try { svg.setPointerCapture(drag.id); } catch {}
      svg.classList.add("is-dragging");
    }
    view.x = drag.vx + dx;
    view.y = drag.vy + dy;
    apply();
  });
  const stop = () => { drag = null; svg.classList.remove("is-dragging"); };
  svg.addEventListener("pointerup", stop);
  svg.addEventListener("pointercancel", stop);
  canvas.addEventListener("keydown", e => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const n = e.target.closest?.("[data-node]");
    if (n){ e.preventDefault(); activate(n.dataset.node); }
  });

  function draw(){
    const { index, selectedEntity, asOf } = getState();
    const { nodes, edges, pagers, bands, halfW } = layout(buildTree(index, { expanded, pages, asOf }));
    const ctx = { index, asOf };
    document.getElementById("graph-stage").innerHTML =
      bands.map(b => bandSVG(b, halfW)).join("") + edges.map(edgeSVG).join("") +
      nodes.map(n => nodeSVG(n, selectedEntity, ctx)).join("") + pagers.map(pagerSVG).join("");
    setState({ graph: { ...getState().graph, expandedNodes: [...expanded] } });
  }
  function apply(){ document.getElementById("graph-stage").setAttribute("transform", `translate(${view.x} ${view.y}) scale(${view.k})`); }
  function zoom(f){ view.k = Math.min(2.4, Math.max(0.25, view.k * f)); apply(); }
  function fit(){
    const { index } = getState();
    const { bounds } = layout(buildTree(index, { expanded, pages, asOf: getState().asOf }));
    const r = svg.getBoundingClientRect();
    const w = bounds.maxX - bounds.minX, h = bounds.maxY - bounds.minY;
    view.k = Math.min(1.1, Math.min((r.width - 40) / w, (r.height - 40) / h));
    view.x = r.width / 2 - ((bounds.minX + bounds.maxX) / 2) * view.k;
    view.y = Math.max(14, (r.height - h * view.k) / 3) - bounds.minY * view.k;
    apply();
  }
  function expandAll(){ getState().index.perType.organizations.forEach(o => expanded.add(o.id)); draw(); fit(); showCard(getState().selectedEntity); }
  function collapseAll(){ expanded.clear(); pages.clear(); draw(); fit(); showCard(getState().selectedEntity); }
  // Nếu sau khi mở thêm cấp mà sơ đồ tràn khỏi khung nhìn thì tự căn lại.
  function ensureVisible(){
    const { index, asOf } = getState();
    const { bounds } = layout(buildTree(index, { expanded, pages, asOf }));
    const r = svg.getBoundingClientRect();
    if (view.y + bounds.maxY * view.k > r.height - 12 || view.y + bounds.minY * view.k < 0) fit();
  }
  // Bấm thẻ: chọn + mở/thu gọn cấp dưới (nếu có) + hiện thẻ thông tin góc dưới phải.
  function activate(id){
    const { index, asOf } = getState();
    if (!index.get(id)) return;
    const canOpen = countUnits(index, id, asOf).direct > 0;
    const wasOpen = expanded.has(id);
    if (canOpen) wasOpen ? expanded.delete(id) : expanded.add(id);
    setState({ selectedEntity: id, selectedEntityType: index.typeOf(id) });
    draw();
    showCard(id);
    if (canOpen && !wasOpen) ensureVisible();
  }
  function showCard(id){
    const { index, asOf } = getState();
    const box = document.getElementById("graph-info");
    if (!box) return;
    const o = id && index.typeOf(id) === "organizations" ? index.get(id) : null;
    if (!o){ box.hidden = true; box.innerHTML = ""; return; }
    box.innerHTML = infoCardHTML(o, { index, asOf, isOpen: expanded.has(id) });
    box.hidden = false;
  }
  function closeCard(){
    const box = document.getElementById("graph-info");
    if (box){ box.hidden = true; box.innerHTML = ""; }
    if (getState().selectedEntity){ setState({ selectedEntity: null, selectedEntityType: null }); draw(); }
  }
  function cardAction(a){
    const id = getState().selectedEntity;
    if (a === "close") closeCard();
    else if (a === "full" && id) emit("entity:select", id);   // mở ngăn "Chi tiết" đầy đủ (liên hệ, quan hệ, nguồn)
    else if (a === "toggle" && id){
      const wasOpen = expanded.has(id);
      wasOpen ? expanded.delete(id) : expanded.add(id);
      draw(); showCard(id);
      if (!wasOpen) ensureVisible();
    }
  }
}
