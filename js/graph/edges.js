import { NODE_W, NODE_H } from "./graph-layout.js";
export function edgeSVG({ from, to }){
  const x1 = from.x + NODE_W / 2, y1 = from.y + NODE_H;
  const x2 = to.x + NODE_W / 2,  y2 = to.y;
  const my = (y1 + y2) / 2;
  return `<path class="graph-edge" d="M ${x1} ${y1} C ${x1} ${my}, ${x2} ${my}, ${x2} ${y2}"></path>`;
}
