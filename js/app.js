import { APP } from "./core/config.js";
import { initRouter } from "./core/router.js";
import { on } from "./core/event-bus.js";
import { getState, setState } from "./core/state.js";
import { initNav, setActiveNav } from "./ui/tabs.js";
import { renderDetailEmpty, renderDetail } from "./ui/detail-panel.js";
import { VIEWS } from "./views/views.js";
import { buildSearchIndex, search, groupResults } from "./search/search.js";
import { loadAllData } from "./data/loader.js";
import { validateData, formatReport } from "./data/validator.js";
import { buildIndexes } from "./data/indexer.js";

function renderView(view){
  const def = VIEWS[view] ?? VIEWS[APP.defaultView];
  const st = getState();
  document.getElementById("view-root").innerHTML = def.render(st);
  def.mount?.(st);
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
  const index = buildIndexes(data);
  setState({ data, index, report, searchDocs: buildSearchIndex(index) });
}

async function initSearch(){
  const input = document.getElementById("global-search");
  const box = document.getElementById("search-results");
  const st = getState();
  if (!st.searchDocs?.length){ input.placeholder = "Chưa nạp được dữ liệu để tìm kiếm"; return; }
  input.disabled = false;
  input.placeholder = `Tìm trong ${st.searchDocs.length} mục: cơ quan, người, chức vụ, nguồn…`;
  document.querySelector(".search-hint").textContent = "Ctrl + K";

  const close = () => { box.hidden = true; box.innerHTML = ""; };
  const run = () => {
    const q = input.value.trim();
    setState({ searchQuery: q });
    const hits = search(getState().searchDocs, q);
    if (!q || q.length < 2) return close();
    box.hidden = false;
    box.innerHTML = hits.length
      ? groupResults(hits).map(([g, items]) => `<div class="sr-group"><div class="sr-head">${g} (${items.length})</div>` +
          items.map(h => `<button class="sr-item" data-entity="${h.id}"><span class="sr-label">${h.label}</span>${h.sub ? `<span class="sr-sub">${h.sub}</span>` : ""}</button>`).join("") + `</div>`).join("")
      : `<div class="sr-empty">Không tìm thấy “${q}”. Thử bỏ dấu, gõ tên viết tắt (BTC, VKSNDTC) hoặc một phần địa chỉ.</div>`;
  };
  let t; input.addEventListener("input", () => { clearTimeout(t); t = setTimeout(run, 120); });
  input.addEventListener("focus", run);
  box.addEventListener("click", e => {
    const b = e.target.closest("[data-entity]");
    if (!b) return;
    renderDetail(b.dataset.entity);
    close(); input.blur();
  });
  document.addEventListener("keydown", e => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k"){ e.preventDefault(); input.focus(); input.select(); }
    if (e.key === "Escape") close();
  });
  document.addEventListener("click", e => {
    if (!e.target.closest(".search-box") && !e.target.closest("#search-results")) close();
  });
}

function init(){
  initTheme();
  initNav();
  await initData();
  initSearch();
  renderDetailEmpty();
  document.getElementById("detail-close")
    .addEventListener("click", () => document.getElementById("detail-panel").classList.add("is-hidden"));
  on("route:change", renderView);
  on("entity:select", renderDetail);
  const pick = e => {
    const el = e.target.closest("[data-entity]");
    if (el && el.dataset.entity) renderDetail(el.dataset.entity);
  };
  document.getElementById("view-root").addEventListener("click", pick);
  document.getElementById("detail-body").addEventListener("click", pick);
  initRouter();
  if (getState().report && !getState().report.ok) console.warn("[data] có lỗi tham chiếu — xem báo cáo ở trên");
}
init();
