import { NODE_W, NODE_H } from "./graph-layout.js";
const esc = v => String(v ?? "").replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const TYPE_CLASS = {
  legislature: "n-legislature", government: "n-government", ministry: "n-ministry",
  ministry_level_agency: "n-agency", court: "n-court", procuracy: "n-procuracy", agency: "n-agency"
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
