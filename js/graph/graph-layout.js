// graph-layout.js — tính toạ độ node theo cây phân cấp (thuần dữ liệu, không đụng DOM).
export const NODE_W = 172, NODE_H = 46, GAP_X = 18, GAP_Y = 104, PAGE_SIZE = 6;

const ORDER = { government: 0, legislature: 0, court: 0, procuracy: 0, agency: 1, ministry: 2, ministry_level_agency: 3, municipality: 4, province: 5 };
const sortKids = list => [...list].sort((a, b) =>
  (ORDER[a.type] ?? 9) - (ORDER[b.type] ?? 9) || a.name.vi.localeCompare(b.name.vi, "vi"));

export function buildTree(index, { expanded, pages = new Map() }){
  const all = [...index.perType.organizations.values()];
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
  return sortKids(index.roots().filter(o => o.status !== "dissolved")).map(r => walk(r, 0));
}
function groupLabel(slice){
  const t = new Set(slice.map(o => o.type));
  if (t.size === 1){
    const one = [...t][0];
    return { ministry: "Bộ", ministry_level_agency: "Cơ quan ngang Bộ", province: "Tỉnh", municipality: "TP trực thuộc TW" }[one] ?? "";
  }
  return "";
}

export function layout(trees, { maxPerRow = PAGE_SIZE } = {}){
  const nodes = [], edges = [], pagers = [];
  let cursorY = 40;
  const placeRow = (items, y) => {
    const rows = [];
    for (let i = 0; i < items.length; i += maxPerRow) rows.push(items.slice(i, i + maxPerRow));
    rows.forEach((row, ri) => {
      const width = row.length * NODE_W + (row.length - 1) * GAP_X;
      row.forEach((n, i) => { n.x = -width / 2 + i * (NODE_W + GAP_X); n.y = y + ri * (NODE_H + 22); });
    });
    return y + rows.length * (NODE_H + 22);
  };
  let level = trees.slice();
  while (level.length){
    const bottom = placeRow(level, cursorY);
    level.forEach(n => nodes.push(n));
    const next = [];
    level.forEach(p => {
      p.children.forEach(c => { edges.push({ from: p, to: c }); next.push(c); });
      if (p.pager) pagers.push({ ...p.pager, x: p.x, y: p.y + NODE_H + 8 });
    });
    cursorY = bottom + GAP_Y - NODE_H;
    level = next;
  }
  const xs = nodes.map(n => n.x), ys = nodes.map(n => n.y);
  const bounds = {
    minX: Math.min(...xs, 0) - 60, maxX: Math.max(...xs, 0) + NODE_W + 60,
    minY: 0, maxY: Math.max(...ys, 0) + NODE_H + 60
  };
  return { nodes, edges, pagers, bounds };
}
