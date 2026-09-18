import { getState } from "../core/state.js";
const esc = v => String(v ?? "").replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const li = arr => (arr ?? []).length ? `<ul>${arr.map(x => `<li>${esc(x)}</li>`).join("")}</ul>` : `<p class="muted-note">Chưa có dữ liệu.</p>`;
const row = (k, v) => `<div class="kv"><span class="k">${k}</span><span class="v">${v || "<em>chưa xác minh</em>"}</span></div>`;

export function renderDetailEmpty(){
  document.getElementById("detail-body").innerHTML = `
    <div class="empty-state" style="min-height:200px;border:0;background:none;padding:0">
      <div class="empty-ico">🔍</div>
      <div class="empty-title">Chưa chọn đối tượng</div>
      <p class="empty-desc">Bấm vào một cơ quan trong sơ đồ (hoặc trong bảng) để xem chức năng, nhiệm vụ, liên hệ và nguồn trích dẫn.</p>
    </div>`;
}

export function renderDetail(id){
  const st = getState();
  const body = document.getElementById("detail-body");
  const panel = document.getElementById("detail-panel");
  panel.classList.remove("is-hidden");
  const type = st.index?.typeOf(id);
  const e = st.index?.get(id);
  if (!e) return renderDetailEmpty();
  body.innerHTML = type === "organizations" ? orgHTML(e, st) : type === "people" ? personHTML(e, st) : genericHTML(e);
  body.scrollTop = 0;
}

function sourcesHTML(e, st){
  const list = st.index.sourcesOf(e);
  if (!list.length) return `<p class="muted-note">⚠ Chưa gắn nguồn.</p>`;
  return `<ol class="src-list">${list.map(s => `<li>
      ${s.url ? `<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.title)}</a>` : esc(s.title)}
      <div class="muted-note">${esc(s.publisher?.name)} · ${esc(s.reliability)} · truy cập ${esc(s.accessed_date)}</div>
    </li>`).join("")}</ol>`;
}

function orgHTML(o, st){
  const leaders = (o.leadership ?? []).map(l => {
    const p = st.index.get(l.person_id), pos = st.index.get(l.position_id);
    const from = p?.positions?.find(x => x.position_id === l.position_id)?.from;
    return `${esc(pos?.name?.vi ?? "")}: <strong data-entity="${esc(p?.id ?? "")}">${esc(p?.name?.vi ?? "chưa xác minh")}</strong>` +
      (from ? ` <span class="muted-note">(từ ${esc(from.split("-").reverse().join("/"))})</span>` : "");
  });
  const parent = o.parent_id ? st.index.get(o.parent_id) : null;
  const kids = [...st.index.perType.organizations.values()].filter(x => x.parent_id === o.id);
  const c = o.contact ?? {};
  return `<h3 class="d-title">${esc(o.name.vi)}</h3>
    <div class="d-badges"><span class="badge badge-accent">${esc(o.short_name || o.type)}</span><span class="badge">Kiểm chứng ${esc(o.last_verified)}</span></div>
    <h4>Lãnh đạo</h4>${leaders.length ? `<ul>${leaders.map(x => `<li>${x}</li>`).join("")}</ul>` : `<p class="muted-note">Chưa có dữ liệu.</p>`}
    <h4>Chức năng, nhiệm vụ, quyền hạn</h4>${li(o.functions)}
    <h4>Liên hệ</h4>
    ${row("Trụ sở", esc(c.address))}
    ${row("Điện thoại", (c.phone ?? []).map(esc).join(", "))}
    ${row("Fax", esc(c.fax))}
    ${row("Email", (c.email ?? []).map(esc).join(", "))}
    ${row("Website", (c.website ?? []).map(u => `<a href="${esc(u)}" target="_blank" rel="noopener">${esc(u.replace(/^https?:\/\//, ""))}</a>`).join("<br>"))}
    <h4>Quan hệ</h4>
    ${row("Cấp trên", parent ? esc(parent.name.vi) : "không có (cơ quan cao nhất)")}
    ${row("Trực thuộc", kids.length ? `${kids.length} đơn vị` : "chưa nạp dữ liệu")}
    ${o.notes ? `<h4>Ghi chú</h4><p class="muted-note">${esc(o.notes)}</p>` : ""}
    <h4>Nguồn</h4>${sourcesHTML(o, st)}`;
}

function personHTML(p, st){
  const pos = p.positions?.[0] ?? {};
  return `<h3 class="d-title">${esc(p.name.vi)}</h3>
    <h4>Chức vụ</h4>
    ${row("Chức danh", esc(st.index.get(pos.position_id)?.name?.vi))}
    ${row("Cơ quan", `<strong data-entity="${esc(pos.organization_id ?? "")}">${esc(st.index.get(pos.organization_id)?.name?.vi)}</strong>`)}
    ${row("Giữ chức từ", pos.from ? esc(pos.from.split("-").reverse().join("/")) : "")}
    ${(() => { const po = st.index.get(pos.position_id); return po?.notes ? `<p class="muted-note" style="margin-top:8px">${esc(po.notes)}</p>` : ""; })()}
    ${p.notes ? `<h4>Ghi chú</h4><p class="muted-note">${esc(p.notes)}</p>` : ""}
    <h4>Nguồn</h4>${sourcesHTML(p, st)}`;
}

function genericHTML(e){
  return `<h3 class="d-title">${esc(e.name?.vi ?? e.title ?? e.id)}</h3>
    <pre class="muted-note" style="white-space:pre-wrap">${esc(JSON.stringify(e, null, 2)).slice(0, 2000)}</pre>`;
}
