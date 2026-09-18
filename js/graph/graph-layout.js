// graph-layout.js — tính toạ độ node theo cây phân cấp (không đụng DOM).
export const NODE_W = 172, NODE_H = 46, GAP_X = 18, GAP_Y = 96;

export function buildTree(index, { expanded }){
  const roots = index.roots().filter(o => o.status !== "dissolved");
  const childrenOf = id => [...index.perType.organizations.values()].filter(o => o.parent_id === id);
  const walk = (org, depth) => {
    const node = { id: org.id, org, depth, children: [] };
    const kids = childrenOf(org.id);
    node.hasChildren = kids.length > 0;
    node.childCount = kids.length;
    if (kids.length && expanded.has(org.id)) node.children = kids.map(k => walk(k, depth + 1));
    return node;
  };
  return roots.map(r => walk(r, 0));
}

// Bố cục: mỗi cấp là 1 hàng ngang, con của 1 node được gói thành nhiều dòng nếu quá rộng.
export function layout(trees, { maxPerRow = 6 } = {}){
  const nodes = [], edges = [];
  let cursorY = 40;

  const placeRow = (items, y) => {
    const rows = [];
    for (let i = 0; i < items.length; i += maxPerRow) rows.push(items.slice(i, i + maxPerRow));
    rows.forEach((row, ri) => {
      const width = row.length * NODE_W + (row.length - 1) * GAP_X;
      row.forEach((n, i) => {
        n.x = -width / 2 + i * (NODE_W + GAP_X);
        n.y = y + ri * (NODE_H + 22);
      });
    });
    return y + rows.length * (NODE_H + 22);
  };

  let level = trees.slice();
  while (level.length){
    const bottom = placeRow(level, cursorY);
    level.forEach(n => nodes.push(n));
    const next = [];
    level.forEach(p => p.children.forEach(c => { edges.push({ from: p, to: c }); next.push(c); }));
    cursorY = bottom + GAP_Y - NODE_H;
    level = next;
  }
  const xs = nodes.map(n => n.x), ys = nodes.map(n => n.y);
  const bounds = {
    minX: Math.min(...xs, 0) - 60, maxX: Math.max(...xs, 0) + NODE_W + 60,
    minY: 0, maxY: Math.max(...ys, 0) + NODE_H + 60
  };
  return { nodes, edges, bounds };
}
