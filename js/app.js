import { APP } from "./core/config.js";
import { initRouter } from "./core/router.js";
import { on } from "./core/event-bus.js";
import { getState, setState } from "./core/state.js";
import { initNav, setActiveNav } from "./ui/tabs.js";
import { renderDetailEmpty } from "./ui/detail-panel.js";
import { VIEWS } from "./views/views.js";

function renderView(view){
  const def = VIEWS[view] ?? VIEWS[APP.defaultView];
  document.getElementById("view-root").innerHTML = def.render();
  document.getElementById("breadcrumbs").innerHTML =
    `<span>Bộ máy hành chính VN</span><span>${def.label}</span>`;
  document.title = `${def.label} — ${APP.name}`;
  setActiveNav(view);
}

function initTheme(){
  let theme = "light";
  try { theme = JSON.parse(localStorage.getItem(APP.storageKey) || "{}").theme || "light"; } catch {}
  applyTheme(theme);
  document.getElementById("theme-toggle").addEventListener("click", () => {
    applyTheme(getState().theme === "dark" ? "light" : "dark");
  });
}
function applyTheme(theme){
  document.documentElement.dataset.theme = theme;
  setState({ theme });
  try { localStorage.setItem(APP.storageKey, JSON.stringify({ theme })); } catch {}
}

function init(){
  initTheme();
  initNav();
  renderDetailEmpty();
  document.getElementById("detail-close")
    .addEventListener("click", () => document.getElementById("detail-panel").classList.add("is-hidden"));
  on("route:change", renderView);
  initRouter();
}
init();
