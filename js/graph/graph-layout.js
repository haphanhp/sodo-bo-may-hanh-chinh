// graph-layout.js — tính toạ độ node theo cây phân cấp (thuần dữ liệu, không đụng DOM).
import { activeAt } from "../core/time.js";

export const NODE_W = 196, NODE_H = 68, TOP_W = 236, TOP_H = 92, GAP_X = 14, GAP_Y = 104, PAGE_SIZE = 6;

// Thứ tự hiển thị: Quốc hội → Chủ tịch nước → Chính phủ → Tòa án → Kiểm sát → Bộ → cơ quan ngang Bộ → TP → Tỉnh
export const TYPE_ORDER = ["legislature", "agency", "government", "court", "procuracy", "ministry", "ministry_level_agency", "municipality", "province"];
const rank = t => { const i = TYPE_ORDER.indexOf(t); return i < 0 ? 99 : i; };
const sortKids = list => [...list].sort((a, b) =>
  rank(a.type) - rank(b.type) || a.name.vi.localeCompare(b.name.vi, "vi"));

export function buildTree(index, { expanded, pages = new Map(), asOf = null }){
  const all = [...index.perType.organizations.values()].filter(o => !asOf || activeAt(o, asOf));
  const childrenOf = id => sortKids(all.filter(o => o.parent_id === id));
  const walk = (org, depth) => {
    const node = { id: org.id, org, depth, children: [], pager: null };
    const kids = childrenOf(org.id);
    node.hasChildren = kids.length > 0;
    node.childCount = kids.length;
    if (kids.length && expanded.has(org.id)){
      const totalPages = Math.max(1, Math.ceil(kids.length / PAGE_SIZE));
      const page = Math.min(pages.get(org.id) ?? 0, totalPages - 1);
      const from = page * PAGE_SIZE;
      const slice = kids.slice(from, from + PAGE_SIZE);
      node.children = slice.map(k => walk(k, depth + 1));
      if (kids.length > PAGE_SIZE)
        node.pager = { parentId: org.id, page, totalPages, from: from + 1, to: from + slice.length, total: kids.length,
                       label: groupLabel(slice) };
    }
    return node;
  };
  const roots = all.filter(o => !o.parent_id);
  return sortKids(roots).map(r => walk(r, 0));
}
function groupLabel(slice){
  const t = new Set(slice.map(o => o.type));
  if (t.size === 1){
    const one = [...t][0];
    return { ministry: "Bộ", ministry_level_agency: "Cơ quan ngang Bộ", province: "Tỉnh", municipality: "TP trực thuộc TW" }[one] ?? "";
  }
  return "";
}

// Mỗi cấp (depth) là một "dải" ngang có nhãn riêng; cấp 0 dùng thẻ lớn hơn.
export function layout(trees, { maxPerRow = PAGE_SIZE } = {}){
  const nodes = [], edges = [], pagers = [], bands = [];
  let cursorY = 44, maxWidth = 0;
  const sizeOf = n => n.depth === 0 ? [TOP_W, TOP_H] : [NODE_W, NODE_H];
  const placeRow = (items, y) => {
    let cy = y, bottom = y;
    for (let i = 0; i < items.length; i += maxPerRow){
      const row = items.slice(i, i + maxPerRow);
      row.forEach(n => { const s = sizeOf(n); n.w = s[0]; n.h = s[1]; });
      const width = row.reduce((s, n) => s + n.w, 0) + (row.length - 1) * GAP_X;
      maxWidth = Math.max(maxWidth, width);
      let x = -width / 2;
      row.forEach(n => { n.x = x; n.y = cy; x += n.w + GAP_X; });
      const rowH = Math.max(...row.map(n => n.h));
      bottom = cy + rowH;
      cy += rowH + 24;
    }
    return bottom;
  };
  let level = trees.slice(), depth = 0;
  while (level.length){
    const top = cursorY;
    const bottom = placeRow(level, top);
    level.forEach(n => nodes.push(n));
    const hasPager = level.some(n => n.pager);
    const y0 = top - 40, y1 = bottom + (hasPager ? 50 : 24);
    bands.push({ depth, y0, y1, types: [...new Set(level.map(n => n.org.type))] });
    const next = [];
    level.forEach(p => {
      p.children.forEach(c => { edges.push({ from: p, to: c }); next.push(c); });
      if (p.pager) pagers.push({ ...p.pager, x: p.x, y: p.y + p.h + 10, w: p.w });
    });
    cursorY = y1 + 88;
    level = next; depth++;
  }
  const halfW = maxWidth / 2 + 28;
  const last = bands[bands.length - 1];
  const bounds = { minX: -halfW, maxX: halfW, minY: bands.length ? bands[0].y0 : 0, maxY: last ? last.y1 + 20 : 0 };
  return { nodes, edges, pagers, bands, bounds, halfW };
}
