import { go } from "../core/router.js";
export function initNav(){
  const nav = document.getElementById("main-nav");
  nav.addEventListener("click", e => {
    const btn = e.target.closest(".nav-item");
    if (!btn) return;
    go(btn.dataset.view);
    nav.classList.remove("is-open");
  });
  document.getElementById("nav-toggle").addEventListener("click", () => nav.classList.toggle("is-open"));
}
export function setActiveNav(view){
  document.querySelectorAll("#main-nav .nav-item").forEach(b =>
    b.classList.toggle("is-active", b.dataset.view === view));
}
