import { emit } from "./event-bus.js";
import { setState } from "./state.js";
import { APP } from "./config.js";
const VIEWS = ["map","organizations","people","positions","procedures","documents","licenses","sources","help"];
function current(){ const v = location.hash.replace(/^#\/?/, ""); return VIEWS.includes(v) ? v : APP.defaultView; }
export function go(view){ location.hash = "#/" + view; }
export function initRouter(){
  const apply = () => { const v = current(); setState({ currentView: v }); emit("route:change", v); };
  window.addEventListener("hashchange", apply);
  if (!location.hash) location.replace("#/" + APP.defaultView);
  apply();
}
