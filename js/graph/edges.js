export function edgeSVG({ from, to }){
  const x1 = from.x + from.w / 2, y1 = from.y + from.h;
  const x2 = to.x + to.w / 2,  y2 = to.y;
  const my = (y1 + y2) / 2;
  return `<path class="graph-edge e-${to.org.type}" d="M ${x1} ${y1} C ${x1} ${my}, ${x2} ${my}, ${x2} ${y2}"></path>`;
}
