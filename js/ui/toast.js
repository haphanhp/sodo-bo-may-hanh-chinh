export function toast(msg, ms = 2600){
  const root = document.getElementById("toast-root");
  const el = document.createElement("div");
  el.className = "toast"; el.textContent = msg;
  root.appendChild(el);
  setTimeout(() => el.remove(), ms);
}
