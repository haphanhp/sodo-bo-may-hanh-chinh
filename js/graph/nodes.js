import { NODE_W, NODE_H } from "./graph-layout.js";
const esc = v => String(v ?? "").replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const TYPE_CLASS = {
  legislature: "n-legislature", government: "n-government", ministry: "n-ministry",
  ministry_level_agency: "n-agency", court: "n-court", procuracy: "n-procuracy", agency: "n-agency",
  province: "n-province", municipality: "n-municipality"
};
function fit(text, max = 24){
  const t = String(text ?? "");
  return t.length > max ? t.slice(0, max - 1) + "…" : t;
}
export function nodeSVG(n, selectedId){
  const o = n.org;
  const cls = `graph-node-g ${TYPE_CLASS[o.type] ?? "n-other"}${selectedId === o.id ? " is-selected" : ""}`;
  const label = fit(o.short_name && o.short_name.length < o.name.vi.length ? o.name.vi : o.name.vi, 26);
  const leader = (o.leadership ?? []).length;
  const toggle = n.hasChildren
    ? `<g class="node-toggle" data-toggle="${esc(o.id)}" transform="translate(${NODE_W - 20} ${NODE_H - 10})">
         <circle r="10" class="toggle-bg"></circle>
         <text class="toggle-tx" text-anchor="middle" dy="4">${n.children.length ? "−" : "+"}</text>
         <title>${n.children.length ? "Thu gọn" : `Mở ${n.childCount} đơn vị trực thuộc`}</title>
       </g>` : "";
  return `<g class="${cls}" data-node="${esc(o.id)}" transform="translate(${n.x} ${n.y})" tabindex="0">
    <rect class="node-box" width="${NODE_W}" height="${NODE_H}" rx="10"></rect>
    <text class="node-label" x="12" y="20">${esc(label)}</text>
    <text class="node-sub" x="12" y="36">${esc(o.short_name || "")}${leader ? " · có lãnh đạo" : ""}</text>
    ${toggle}
    <title>${esc(o.name.vi)}</title>
  </g>`;
}

export function pagerSVG(p){
  const w = 214, x = p.x + (NODE_W - w) / 2;
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
