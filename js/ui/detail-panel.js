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
  body.innerHTML = type === "organizations" ? orgHTML(e, st)
    : type === "people" ? personHTML(e, st)
    : type === "procedures" ? procedureHTML(e, st)
    : type === "positions" ? positionHTML(e, st)
    : type === "documents" ? documentHTML(e, st)
    : genericHTML(e);
  body.scrollTop = 0;
}

export function unverifiedFlag(e, st){
  const bad = st.index.sourcesOf(e).some(s => s.reliability === "unverified");
  return bad ? `<div class="notice notice-warn" style="margin-bottom:12px">⚠️ Mục này có dữ liệu <strong>chưa xác minh bằng nguồn chính thức</strong> — xem phần Nguồn bên dưới.</div>` : "";
}

function positionHTML(p, st){
  const holders = [...st.index.perType.people.values()].filter(x => (x.positions ?? []).some(y => y.position_id === p.id));
  return `<h3 class="d-title">${esc(p.name.vi)}</h3>
    ${unverifiedFlag(p, st)}
    <h4>Người đang giữ chức</h4>
    ${holders.length ? `<ul>${holders.map(h => `<li><strong data-entity="${esc(h.id)}">${esc(h.name.vi)}</strong></li>`).join("")}</ul>` : `<p class="muted-note">Chưa có dữ liệu.</p>`}
    <h4>Chức năng</h4>${li(p.functions)}
    <h4>Căn cứ pháp lý</h4>${li(p.legal_basis)}
    ${p.notes ? `<h4>Ghi chú</h4><p class="muted-note">${esc(p.notes)}</p>` : ""}
    <h4>Nguồn</h4>${sourcesHTML(p, st)}`;
}

const DOC_TYPE = { constitution: "Hiến pháp", law: "Luật", resolution: "Nghị quyết", decree: "Nghị định",
  decision: "Quyết định", circular: "Thông tư", directive: "Chỉ thị", regulation: "Quy định", official_letter: "Công văn" };
const REL_LABEL = { amends: "sửa đổi, bổ sung", guides: "hướng dẫn thi hành", based_on: "ban hành trên cơ sở",
  issues: "ban hành", replaces: "thay thế" };
const dmy = s => s ? String(s).split("-").reverse().join("/") : "";

function documentHTML(doc, st){
  const out = (st.index.outgoing.get(doc.id) ?? []).filter(r => r.to !== doc.id);
  const inc = (st.index.incoming.get(doc.id) ?? []);
  const relLine = r => {
    const other = st.index.get(r.from === doc.id ? r.to : r.from);
    const dir = r.from === doc.id ? "→" : "←";
    return `<li>${dir} ${esc(REL_LABEL[r.type] ?? r.type)}: <strong data-entity="${esc(other?.id ?? "")}">${esc(other?.title?.vi ?? other?.name?.vi ?? "")}</strong></li>`;
  };
  const procs = [...st.index.perType.procedures.values()].filter(p => (p.legal_basis_ids ?? []).includes(doc.id));
  return `<h3 class="d-title">${esc(doc.title.vi)}</h3>
    ${unverifiedFlag(doc, st)}
    <div class="d-badges"><span class="badge badge-accent">${esc(DOC_TYPE[doc.type] ?? doc.type)}</span>${doc.number ? `<span class="badge">${esc(doc.number)}</span>` : ""}</div>
    ${row("Cơ quan ban hành", doc.issuer_id ? `<strong data-entity="${esc(doc.issuer_id)}">${esc(st.index.get(doc.issuer_id)?.name?.vi)}</strong>` : "")}
    ${row("Ngày ban hành", dmy(doc.issued_date))}
    ${row("Ngày hiệu lực", dmy(doc.effective_date))}
    ${row("Toàn văn", doc.url ? `<a href="${esc(doc.url)}" target="_blank" rel="noopener">Xem văn bản</a>` : "")}
    ${(out.length || inc.length) ? `<h4>Quan hệ pháp lý</h4><ul>${[...out, ...inc].map(relLine).join("")}</ul>` : ""}
    ${procs.length ? `<h4>Thủ tục áp dụng</h4><ul>${procs.map(p => `<li><strong data-entity="${esc(p.id)}">${esc(p.name.vi)}</strong></li>`).join("")}</ul>` : ""}
    ${doc.notes ? `<h4>Ghi chú</h4><p class="muted-note">${esc(doc.notes)}</p>` : ""}
    <h4>Nguồn</h4>${sourcesHTML(doc, st)}`;
}

function procedureHTML(pr, st){
  const org = id => st.index.get(id)?.name?.vi ?? "";
  const steps = (pr.steps ?? []).sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  return `<h3 class="d-title">${esc(pr.name?.vi ?? pr.id)}</h3>
    ${unverifiedFlag(pr, st)}
    <h4>Cơ quan</h4>
    ${row("Chịu trách nhiệm", pr.responsible_organization_id ? `<strong data-entity="${esc(pr.responsible_organization_id)}">${esc(org(pr.responsible_organization_id))}</strong>` : "")}
    ${row("Tiếp nhận hồ sơ", pr.receiving_organization_id ? `<strong data-entity="${esc(pr.receiving_organization_id)}">${esc(org(pr.receiving_organization_id))}</strong>` : "")}
    ${row("Đối tượng", (pr.applicant?.types ?? []).map(t => ({ individual: "Cá nhân", organization: "Tổ chức" }[t] ?? t)).join(", "))}
    <h4>Quy trình ${steps.length ? `(${steps.length} bước)` : ""}</h4>
    ${steps.length ? `<ol class="wf">${steps.map(s => `<li class="wf-step">
        <div class="wf-name">${esc(s.name)}</div>
        <div class="muted-note">${esc({ applicant: "Người nộp hồ sơ thực hiện", organization: "Cơ quan thực hiện" }[s.actor] ?? s.actor ?? "")}${s.duration ? ` · ${esc(s.duration)}` : ""}</div>
        ${s.description ? `<div class="wf-desc">${esc(s.description)}</div>` : ""}
      </li>`).join("")}</ol>` : `<p class="muted-note">Chưa có dữ liệu các bước.</p>`}
    <h4>Hồ sơ yêu cầu</h4>${li(pr.requirements)}
    <h4>Lệ phí</h4>${li(pr.fees)}
    <h4>Kết quả</h4>${li(pr.result)}
    <h4>Căn cứ pháp lý</h4>
    ${(pr.legal_basis_ids ?? []).length
      ? `<ul>${pr.legal_basis_ids.map(id => { const dd = st.index.get(id); return `<li><strong data-entity="${esc(id)}">${esc(dd?.number || dd?.title?.vi || id)}</strong>${dd?.number && dd?.title?.vi ? ` — ${esc(dd.title.vi)}` : ""}</li>`; }).join("")}</ul>`
      : li(pr.legal_basis)}
    <h4>Nguồn</h4>${sourcesHTML(pr, st)}`;
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
    ${unverifiedFlag(o, st)}
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
    ${unverifiedFlag(p, st)}
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
