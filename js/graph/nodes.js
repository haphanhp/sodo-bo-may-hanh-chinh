// nodes.js — vẽ thẻ cơ quan, dải phân cấp và thanh lật trang bằng SVG. Màu lấy từ CSS (graph.css) theo loại cơ quan.
import { TYPE_ORDER } from "./graph-layout.js";
import { leadersOf, shortTitle } from "../core/leaders.js";
const esc = v => String(v ?? "").replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const TYPE_CLASS = {
  legislature: "n-legislature", government: "n-government", ministry: "n-ministry",
  ministry_level_agency: "n-agency", court: "n-court", procuracy: "n-procuracy", agency: "n-agency",
  province: "n-province", municipality: "n-municipality"
};
const TAG = {
  legislature: "LẬP PHÁP", government: "HÀNH PHÁP", court: "TÒA ÁN", procuracy: "KIỂM SÁT",
  agency: "NGUYÊN THỦ QUỐC GIA", ministry: "BỘ", ministry_level_agency: "CƠ QUAN NGANG BỘ",
  municipality: "TP TRỰC THUỘC TW", province: "TỈNH"
};
const TYPE_LABEL = {
  legislature: "Lập pháp", government: "Hành pháp", court: "Tòa án", procuracy: "Kiểm sát",
  agency: "Nguyên thủ · Văn phòng", ministry: "Bộ", ministry_level_agency: "Cơ quan ngang Bộ",
  municipality: "TP trực thuộc TW", province: "Tỉnh"
};
const CENTRAL = ["ministry", "ministry_level_agency", "agency"], LOCAL = ["municipality", "province"];

function fit(text, max = 24){
  const t = String(text ?? "");
  return t.length > max ? t.slice(0, max - 1) + "…" : t;
}
// Ngắt tên thành tối đa `lines` dòng theo số ký tự mỗi dòng.
function wrap(text, max, lines = 2){
  const words = String(text ?? "").split(/\s+/).filter(Boolean);
  const out = [];
  let cur = "";
  for (const w of words){
    const next = cur ? cur + " " + w : w;
    if (!cur || next.length <= max) cur = next;
    else { out.push(cur); cur = w; }
  }
  if (cur) out.push(cur);
  if (out.length > lines){
    const keep = out.slice(0, lines);
    keep[lines - 1] = fit(out.slice(lines - 1).join(" "), max);
    return keep;
  }
  return out;
}
// Dải màu bo góc phía trên thẻ cấp cao (cao sh px).
function stripe(w, sh, r){
  return `M0 ${sh} V${r} A${r} ${r} 0 0 1 ${r} 0 H${w - r} A${r} ${r} 0 0 1 ${w} ${r} V${sh} Z`;
}
// Viền dày phía trên thẻ thường, đi theo góc bo.
function cap(w, r){
  const a = r - 2.5;
  return `M2.5 ${r} A${a} ${a} 0 0 1 ${r} 2.5 H${w - r} A${a} ${a} 0 0 1 ${w - 2.5} ${r}`;
}

export function nodeSVG(n, selectedId, ctx = {}){
  const o = n.org, top = n.depth === 0, w = n.w, h = n.h;
  const cls = ["graph-node-g", TYPE_CLASS[o.type] ?? "n-other", top ? "is-top" : "",
    selectedId === o.id ? "is-selected" : "", o.effective_to ? "is-ended" : ""].filter(Boolean).join(" ");
  const leaders = ctx.index ? leadersOf(o, ctx.index, ctx.asOf).filter(x => x.active) : [];
  const lead = leaders[0];
  const person = lead?.person?.name?.vi ?? "";
  const shortName = o.short_name && !o.name.vi.toLowerCase().includes(o.short_name.toLowerCase()) ? o.short_name : "";
  const lines = wrap(o.name.vi, top ? 31 : 25, 2);
  const nameY = top ? (lines.length > 1 ? [47, 63] : [55]) : (lines.length > 1 ? [27, 42] : [32]);
  const leadY = top ? h - 12 : h - 11;
  const leadTxt = top
    ? (person ? `${shortTitle(lead.position?.name?.vi)} · ${person}` : "")
    : [shortName, person].filter(Boolean).join(" · ");
  const tip = [o.name.vi, ...leaders.map(l => `${l.position?.name?.vi ?? ""}: ${l.person.name.vi}`)].join("\n");
  const toggle = n.hasChildren
    ? `<g class="node-toggle" data-toggle="${esc(o.id)}" transform="translate(${w - 40} ${h})">
         <rect class="toggle-bg" x="-25" y="-11" width="50" height="22" rx="11"></rect>
         <text class="toggle-tx" text-anchor="middle" dy="4">${n.children.length ? "−" : "+"} ${n.childCount}</text>
         <title>${n.children.length ? "Thu gọn" : `Mở ${n.childCount} đơn vị trực thuộc`}</title>
       </g>` : "";
  const head = top
    ? `<path class="node-stripe" d="${stripe(w, 26, 12)}"></path>
       <text class="node-tag" x="12" y="17.5">${esc(TAG[o.type] ?? "")}</text>
       ${shortName ? `<text class="node-tag node-tag-r" x="${w - 12}" y="17.5" text-anchor="end">${esc(fit(o.short_name, 12))}</text>` : ""}`
    : `<path class="node-cap" d="${cap(w, 12)}"></path>`;
  return `<g class="${cls}" data-node="${esc(o.id)}" transform="translate(${n.x} ${n.y})" tabindex="0">
    <rect class="node-box" width="${w}" height="${h}" rx="12"></rect>
    ${head}
    ${lines.map((t, i) => `<text class="node-label" x="12" y="${nameY[i]}">${esc(t)}</text>`).join("")}
    ${leadTxt ? `<text class="node-lead" x="12" y="${leadY}">${esc(fit(leadTxt, top ? 34 : 27))}</text>` : ""}
    ${toggle}
    <title>${esc(tip)}</title>
  </g>`;
}

function bandLabel(b){
  const t = [...b.types].sort((x, y) => TYPE_ORDER.indexOf(x) - TYPE_ORDER.indexOf(y));
  let sub = [...new Set(t.map(x => TYPE_LABEL[x]).filter(Boolean))].join(" · ");
  if (b.depth > 0 && sub === "Bộ") sub = "";
  let title = "CẤP TRỰC THUỘC";
  if (b.depth === 0) title = "CẤP THƯỢNG TẦNG";
  else if (t.every(x => CENTRAL.includes(x))) title = "CẤP BỘ";
  else if (t.every(x => LOCAL.includes(x))) title = "CẤP TỈNH · THÀNH PHỐ";
  else if (b.depth === 1) title = "CẤP BỘ · CẤP TỈNH";
  return { title, sub };
}
export function bandSVG(b, halfW){
  const { title, sub } = bandLabel(b);
  return `<g class="graph-band band-${b.depth % 3}">
    <rect class="band-bg" x="${-halfW}" y="${b.y0}" width="${halfW * 2}" height="${b.y1 - b.y0}" rx="18"></rect>
    <text class="band-title" x="${-halfW + 20}" y="${b.y0 + 24}">${esc(title)}<tspan class="band-sub" dx="12">${esc(sub)}</tspan></text>
  </g>`;
}

export function pagerSVG(p){
  const w = 214, x = p.x + (p.w - w) / 2;
  const prevDis = p.page === 0 ? " is-disabled" : "";
  const nextDis = p.page >= p.totalPages - 1 ? " is-disabled" : "";
  return `<g class="graph-pager" transform="translate(${x} ${p.y})">
    <rect class="pager-bg" width="${w}" height="26" rx="13"></rect>
    <g class="pager-btn${prevDis}" data-page="${esc(p.parentId)}:${p.page - 1}">
      <rect x="2" y="2" width="26" height="22" rx="11" class="pager-hit"></rect>
      <text x="15" y="17" text-anchor="middle">‹</text>
      <title>6 đơn vị trước</title>
    </g>
    <text class="pager-label" x="${w / 2}" y="17" text-anchor="middle">${p.from}–${p.to} / ${p.total}${p.label ? " " + esc(p.label) : ""}</text>
    <g class="pager-btn${nextDis}" data-page="${esc(p.parentId)}:${p.page + 1}">
      <rect x="${w - 28}" y="2" width="26" height="22" rx="11" class="pager-hit"></rect>
      <text x="${w - 15}" y="17" text-anchor="middle">›</text>
      <title>6 đơn vị tiếp theo</title>
    </g>
  </g>`;
}
