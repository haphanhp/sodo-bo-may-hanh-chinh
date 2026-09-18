// graph.js — vẽ đồ thị tổ chức bằng SVG, hỗ trợ zoom / pan / expand / collapse / chọn node.
import { buildTree, layout } from "./graph-layout.js";
import { nodeSVG, pagerSVG } from "./nodes.js";
import { edgeSVG } from "./edges.js";
import { emit } from "../core/event-bus.js";
import { getState, setState } from "../core/state.js";

let view = { k: 1, x: 0, y: 0 };
let expanded = new Set();
let pages = new Map();

export function graphMarkup(){
  return `<div class="graph-canvas" id="graph-canvas">
    <div class="graph-toolbar">
      <button class="icon-btn" data-g="in" title="Phóng to">＋</button>
      <button class="icon-btn" data-g="out" title="Thu nhỏ">－</button>
      <button class="icon-btn" data-g="fit" title="Vừa màn hình">⤢</button>
      <button class="icon-btn" data-g="all" title="Mở hết cấp dưới">⇱</button>
    </div>
    <div class="graph-legend">
      <span><i class="lg n-legislature"></i>Lập pháp</span>
      <span><i class="lg n-government"></i>Hành pháp</span>
      <span><i class="lg n-court"></i>Tòa án</span>
      <span><i class="lg n-procuracy"></i>Kiểm sát</span>
      <span><i class="lg n-ministry"></i>Bộ</span>
      <span><i class="lg n-agency"></i>Cơ quan ngang Bộ</span>
      <span><i class="lg n-municipality"></i>TP trực thuộc TW</span>
      <span><i class="lg n-province"></i>Tỉnh</span>
    </div>
    <svg id="graph-svg" class="graph-svg"><g id="graph-stage"></g></svg>
    <div class="graph-hint">Kéo để di chuyển · lăn chuột để phóng to · bấm node để xem chi tiết · bấm dấu +/− để mở hoặc thu gọn</div>
  </div>`;
}

export function mountGraph(){
  const st = getState();
  if (!st.index) return;
  const canvas = document.getElementById("graph-canvas");
  if (!canvas) return;
  if (!expanded.size) st.index.roots().forEach(r => expanded.add(r.id));

  const svg = document.getElementById("graph-svg");
  draw();
  fit();

  canvas.addEventListener("click", e => {
    const g = e.target.closest("[data-g]");
    if (g){
      ({ in: () => zoom(1.2), out: () => zoom(1 / 1.2), fit, all: expandAll })[g.dataset.g]();
      return;
    }
    const pg = e.target.closest("[data-page]");
    if (pg && !pg.classList.contains("is-disabled")){
      const [id, p] = pg.dataset.page.split(":");
      if (+p >= 0){ pages.set(id, +p); draw(); }
      return;
    }
    const t = e.target.closest("[data-toggle]");
    if (t){ toggle(t.dataset.toggle); return; }
    const n = e.target.closest("[data-node]");
    if (n) select(n.dataset.node);
  });
  svg.addEventListener("wheel", e => { e.preventDefault(); zoom(e.deltaY < 0 ? 1.1 : 1 / 1.1); }, { passive: false });
  let drag = null;
  svg.addEventListener("pointerdown", e => { drag = { x: e.clientX, y: e.clientY, vx: view.x, vy: view.y }; svg.setPointerCapture(e.pointerId); svg.classList.add("is-dragging"); });
  svg.addEventListener("pointermove", e => {
    if (!drag) return;
    view.x = drag.vx + (e.clientX - drag.x);
    view.y = drag.vy + (e.clientY - drag.y);
    apply();
  });
  const stop = () => { drag = null; svg.classList.remove("is-dragging"); };
  svg.addEventListener("pointerup", stop);
  svg.addEventListener("pointerleave", stop);

  function draw(){
    const { index, selectedEntity } = getState();
    const { nodes, edges, pagers } = layout(buildTree(index, { expanded, pages }));
    document.getElementById("graph-stage").innerHTML =
      edges.map(edgeSVG).join("") + nodes.map(n => nodeSVG(n, selectedEntity)).join("") + pagers.map(pagerSVG).join("");
    setState({ graph: { ...getState().graph, expandedNodes: [...expanded] } });
  }
  function apply(){ document.getElementById("graph-stage").setAttribute("transform", `translate(${view.x} ${view.y}) scale(${view.k})`); }
  function zoom(f){ view.k = Math.min(2.4, Math.max(0.25, view.k * f)); apply(); }
  function fit(){
    const { index } = getState();
    const { bounds } = layout(buildTree(index, { expanded, pages }));
    const r = svg.getBoundingClientRect();
    const w = bounds.maxX - bounds.minX, h = bounds.maxY - bounds.minY;
    view.k = Math.min(1.1, Math.min((r.width - 40) / w, (r.height - 40) / h));
    view.x = r.width / 2 - ((bounds.minX + bounds.maxX) / 2) * view.k;
    view.y = 20 - bounds.minY * view.k;
    apply();
  }
  function toggle(id){ expanded.has(id) ? expanded.delete(id) : expanded.add(id); draw(); }
  function expandAll(){ getState().index.perType.organizations.forEach(o => expanded.add(o.id)); draw(); fit(); }
  function select(id){ setState({ selectedEntity: id, selectedEntityType: getState().index.typeOf(id) }); draw(); emit("entity:select", id); }
}
