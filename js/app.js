import { APP } from "./core/config.js";
import { initRouter } from "./core/router.js";
import { on, emit } from "./core/event-bus.js";
import { getState, setState } from "./core/state.js";
import { initNav, setActiveNav } from "./ui/tabs.js";
import { renderDetailEmpty, renderDetail } from "./ui/detail-panel.js";
import { VIEWS } from "./views/views.js";
import { buildSearchIndex, search, browse, GROUP_LABELS, SEARCH_TYPES } from "./search/search.js";
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

function initSearch(){
  const input = document.getElementById("global-search");
  const box = document.getElementById("search-results");
  const wrap = input.closest(".search-box");
  const st = getState();
  if (!st.searchDocs?.length){ input.placeholder = "Chưa nạp được dữ liệu để tìm kiếm"; return; }
  const docs = st.searchDocs, byId = new Map(docs.map(d => [d.id, d]));
  input.disabled = false;
  input.placeholder = `Tìm trong ${docs.length} mục: cơ quan, người, chức vụ, thủ tục, văn bản, nguồn…`;
  document.querySelector(".search-hint").textContent = "Ctrl + K";

  const esc = v => String(v ?? "").replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
  const RECENT_KEY = "vnadmin.recent";
  const recentIds = () => { try { return JSON.parse(localStorage.getItem(RECENT_KEY) || "[]"); } catch { return []; } };
  const remember = id => { try { localStorage.setItem(RECENT_KEY, JSON.stringify([id, ...recentIds().filter(x => x !== id)].slice(0, 6))); } catch {} };
  const item = (h, withTag) => `<button class="sr-item" data-entity="${esc(h.id)}" role="option">` +
    `<span class="sr-label">${withTag ? `<span class="sr-tag">${esc(GROUP_LABELS[h.type] ?? h.type)}</span>` : ""}${esc(h.label)}</span>` +
    `${h.sub ? `<span class="sr-sub">${esc(h.sub)}</span>` : ""}</button>`;

  let cat = "all", activeIdx = -1, closeT = null, t = null;
  const isOpen = () => !box.hidden;
  const close = () => { box.hidden = true; activeIdx = -1; cat = "all"; };

  function render(){
    const q = input.value.trim();
    const searching = q.length >= 2;
    const hits = searching ? search(docs, q, { limit: 500 }) : [];
    const src = searching ? hits : docs;
    const counts = {};
    src.forEach(d => { counts[d.type] = (counts[d.type] || 0) + 1; });
    const cats = SEARCH_TYPES.filter(k => counts[k]);
    if (cat !== "all" && !counts[cat]) cat = "all";
    const chips = `<div class="sr-cats" role="tablist" aria-label="Loại kết quả">` +
      `<button class="sr-cat${cat === "all" ? " is-on" : ""}" data-cat="all">Tất cả <span class="sr-n">${src.length}</span></button>` +
      cats.map(k => `<button class="sr-cat${cat === k ? " is-on" : ""}" data-cat="${k}">${esc(GROUP_LABELS[k])} <span class="sr-n">${counts[k]}</span></button>`).join("") + `</div>`;
    let body = "";
    if (searching){
      if (!hits.length) body = `<div class="sr-empty">Không tìm thấy “${esc(q)}”. Thử bỏ dấu, gõ tên viết tắt (BTC, VKSNDTC) hoặc một phần địa chỉ.</div>`;
      else if (cat === "all") body = cats.map(k => {
        const list = hits.filter(h => h.type === k);
        return `<div class="sr-group"><div class="sr-head">${esc(GROUP_LABELS[k])} (${list.length})</div>` +
          list.slice(0, 5).map(h => item(h)).join("") +
          (list.length > 5 ? `<button class="sr-more" data-cat="${k}">Xem cả ${list.length} kết quả ${esc(GROUP_LABELS[k].toLowerCase())} →</button>` : "") + `</div>`;
      }).join("");
      else body = `<div class="sr-group"><div class="sr-head">${esc(GROUP_LABELS[cat])} (${counts[cat]})</div>` +
        hits.filter(h => h.type === cat).slice(0, 40).map(h => item(h)).join("") + `</div>`;
    } else if (cat === "all"){
      const rec = recentIds().map(id => byId.get(id)).filter(Boolean);
      body = (rec.length ? `<div class="sr-group"><div class="sr-head">Xem gần đây</div>${rec.map(h => item(h, true)).join("")}</div>` : "") +
        `<div class="sr-hint">Gõ để tìm, hoặc chọn một loại ở trên để duyệt toàn bộ danh sách. Gõ không dấu vẫn ra kết quả.</div>`;
    } else {
      body = `<div class="sr-group"><div class="sr-head">${esc(GROUP_LABELS[cat])} (${counts[cat]}) — sắp theo tên</div>` +
        browse(docs, cat, { limit: 40 }).map(h => item(h)).join("") + `</div>`;
    }
    box.innerHTML = chips + `<div class="sr-body">${body}</div>`;
    box.hidden = false;
    activeIdx = -1;
  }

  input.addEventListener("input", () => { clearTimeout(t); t = setTimeout(() => { setState({ searchQuery: input.value.trim() }); render(); }, 120); });
  input.addEventListener("focus", () => { clearTimeout(closeT); render(); });
  wrap.addEventListener("mouseenter", () => { clearTimeout(closeT); if (!isOpen()) render(); });
  wrap.addEventListener("mouseleave", () => { if (document.activeElement !== input) closeT = setTimeout(close, 280); });
  box.addEventListener("mousedown", e => { if (e.target.closest("[data-cat]")) e.preventDefault(); });
  box.addEventListener("click", e => {
    const c = e.target.closest("[data-cat]");
    if (c){ cat = c.dataset.cat; render(); return; }
    const b = e.target.closest("[data-entity]");
    if (!b) return;
    remember(b.dataset.entity);
    renderDetail(b.dataset.entity);
    close(); input.blur();
  });
  input.addEventListener("keydown", e => {
    const items = [...box.querySelectorAll(".sr-item")];
    if (e.key === "ArrowDown" || e.key === "ArrowUp"){
      if (!items.length) return;
      e.preventDefault();
      activeIdx = (activeIdx + (e.key === "ArrowDown" ? 1 : -1) + items.length) % items.length;
      items.forEach((el, i) => el.classList.toggle("is-active", i === activeIdx));
      items[activeIdx].scrollIntoView({ block: "nearest" });
    } else if (e.key === "Enter"){
      const el = items[activeIdx] ?? items[0];
      if (el) el.click();
    }
  });
  document.addEventListener("keydown", e => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k"){ e.preventDefault(); input.focus(); input.select(); }
    if (e.key === "Escape"){
      if (isOpen()){ close(); input.blur(); }
      else {
        const dp = document.getElementById("detail-panel");
        if (!dp.classList.contains("is-hidden")) dp.classList.add("is-hidden");
        else emit("card:close");
      }
    }
  });
  document.addEventListener("click", e => { if (!e.target.closest(".search-box")) close(); });
}

async function init(){
  initTheme();
  initNav();
  await initData();
  initSearch();
  renderDetailEmpty();
  document.getElementById("detail-close")
    .addEventListener("click", () => document.getElementById("detail-panel").classList.add("is-hidden"));
  on("route:change", renderView);
  on("entity:select", renderDetail);
  on("asof:change", () => renderView(getState().currentView));
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
