import { APP } from "./core/config.js";
import { initRouter } from "./core/router.js";
import { on } from "./core/event-bus.js";
import { getState, setState } from "./core/state.js";
import { initNav, setActiveNav } from "./ui/tabs.js";
import { renderDetailEmpty } from "./ui/detail-panel.js";
import { VIEWS } from "./views/views.js";
import { loadAllData } from "./data/loader.js";
import { validateData, formatReport } from "./data/validator.js";
import { buildIndexes } from "./data/indexer.js";

function renderView(view){
  const def = VIEWS[view] ?? VIEWS[APP.defaultView];
  document.getElementById("view-root").innerHTML = def.render(getState());
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

async function initData(){
  const data = await loadAllData();
  const total = Object.values(data).reduce((n, a) => n + a.length, 0);
  if (!total){
    setState({ loadError: location.protocol === "file:"
      ? "Trình duyệt chặn đọc file JSON khi mở trực tiếp bằng file:// — chạy một web server tĩnh trong thư mục dự án (ví dụ: python -m http.server 8080) rồi mở http://localhost:8080"
      : "Không đọc được dữ liệu trong thư mục data/." });
    return;
  }
  const report = validateData(data);
  console.log(formatReport(report));
  setState({ data, index: buildIndexes(data), report });
}

async function init(){
  initTheme();
  initNav();
  await initData();
  renderDetailEmpty();
  document.getElementById("detail-close")
    .addEventListener("click", () => document.getElementById("detail-panel").classList.add("is-hidden"));
  on("route:change", renderView);
  initRouter();
  if (getState().report && !getState().report.ok) console.warn("[data] có lỗi tham chiếu — xem báo cáo ở trên");
}
init();
