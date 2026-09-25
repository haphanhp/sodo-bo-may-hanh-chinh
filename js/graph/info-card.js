// info-card.js — thẻ thông tin nổi ở góc dưới phải sơ đồ: số thành phần, chức năng, lãnh đạo của cơ quan đang chọn.
import { TYPE_ORDER } from "./graph-layout.js";
import { activeAt } from "../core/time.js";
import { leadersOf } from "../core/leaders.js";

const esc = v => String(v ?? "").replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const dmy = s => s ? String(s).split("-").reverse().join("/") : "";
const TYPE_CLASS = {
  legislature: "n-legislature", government: "n-government", ministry: "n-ministry",
  ministry_level_agency: "n-agency", court: "n-court", procuracy: "n-procuracy", agency: "n-agency",
  province: "n-province", municipality: "n-municipality"
};
const TAG = {
  legislature: "Lập pháp", government: "Hành pháp", court: "Tòa án", procuracy: "Kiểm sát",
  agency: "Nguyên thủ · Văn phòng", ministry: "Bộ", ministry_level_agency: "Cơ quan ngang Bộ",
  municipality: "TP trực thuộc TW", province: "Tỉnh"
};
const KID_LABEL = {
  ministry: "Bộ", ministry_level_agency: "cơ quan ngang Bộ", agency: "văn phòng",
  municipality: "thành phố trực thuộc TW", province: "tỉnh", legislature: "cơ quan lập pháp",
  government: "cơ quan hành pháp", court: "tòa án", procuracy: "viện kiểm sát"
};
const MAX_FN = 3;

// Đếm đơn vị trực thuộc tại mốc thời gian asOf: trực tiếp, tổng mọi cấp dưới, và tách theo loại.
export function countUnits(index, id, asOf){
  const all = [...index.perType.organizations.values()].filter(o => !asOf || activeAt(o, asOf));
  const kids = all.filter(o => o.parent_id === id);
  const seen = new Set([id]);
  const stack = [...kids];
  let total = 0;
  while (stack.length){
    const o = stack.pop();
    if (seen.has(o.id)) continue;
    seen.add(o.id); total++;
    all.forEach(x => { if (x.parent_id === o.id) stack.push(x); });
  }
  const byType = {};
  kids.forEach(k => { byType[k.type] = (byType[k.type] || 0) + 1; });
  return { direct: kids.length, total, byType };
}

export function infoCardHTML(o, { index, asOf, isOpen }){
  const u = countUnits(index, o.id, asOf);
  const cls = TYPE_CLASS[o.type] ?? "n-other";
  const leaders = leadersOf(o, index, asOf).filter(x => x.active).slice(0, 2);
  const fns = o.functions ?? [];
  const lead = leaders.length
    ? `<div class="ic-lead">${leaders.map(l => `${esc(l.position?.name?.vi ?? "")}: <strong data-entity="${esc(l.person.id)}">${esc(l.person.name.vi)}</strong>`).join("<br>")}</div>`
    : "";
  const chips = TYPE_ORDER.filter(t => u.byType[t]).map(t =>
    `<span class="ic-chip ${TYPE_CLASS[t] ?? "n-other"}"><i></i>${u.byType[t]} ${esc(KID_LABEL[t] ?? t)}</span>`).join("");
  const stats = u.direct
    ? `<div class="ic-stats">
         <div class="ic-stat"><b>${u.direct}</b><span>đơn vị trực thuộc<br>trực tiếp</span></div>
         ${u.total !== u.direct ? `<div class="ic-stat"><b>${u.total}</b><span>tổng các<br>cấp dưới</span></div>` : ""}
       </div>
       <div class="ic-chips">${chips}</div>
       ${u.total === u.direct ? `<p class="ic-muted">Chưa nạp cấp dưới của các đơn vị này (vụ, cục, tổng cục…).</p>` : ""}`
    : `<p class="ic-muted">Chưa nạp dữ liệu đơn vị trực thuộc (vụ, cục, tổng cục…).</p>`;
  const fnHTML = fns.length
    ? `<ul class="ic-fn">${fns.slice(0, MAX_FN).map(x => `<li>${esc(x)}</li>`).join("")}</ul>` +
      (fns.length > MAX_FN ? `<button class="ic-more" data-card="full">+ ${fns.length - MAX_FN} chức năng, nhiệm vụ khác…</button>` : "")
    : `<p class="ic-muted">Chưa có dữ liệu.</p>`;
  return `<div class="ic ${cls}" role="dialog" aria-label="Thông tin ${esc(o.name.vi)}">
    <div class="ic-head">
      <span class="ic-tag">${esc(TAG[o.type] ?? o.type)}${o.short_name ? ` · ${esc(o.short_name)}` : ""}</span>
      <button class="ic-x" data-card="close" title="Đóng (Esc)" aria-label="Đóng">×</button>
    </div>
    <div class="ic-body">
      <h3 class="ic-title">${esc(o.name.vi)}</h3>
      ${o.effective_to ? `<div class="ic-note">Đã kết thúc hoạt động từ ${esc(dmy(o.effective_to))}</div>` : ""}
      ${lead}
      <div class="ic-sec"><div class="ic-k">Thành phần</div>${stats}</div>
      <div class="ic-sec"><div class="ic-k">Chức năng</div>${fnHTML}</div>
    </div>
    <div class="ic-actions">
      ${u.direct ? `<button class="ic-btn" data-card="toggle">${isOpen ? "Thu gọn" : `Mở ${u.direct} đơn vị`}</button>` : ""}
      <button class="ic-btn ic-btn-primary" data-card="full">Xem đầy đủ →</button>
    </div>
  </div>`;
}
