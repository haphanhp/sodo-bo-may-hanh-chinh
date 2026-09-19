// validator.js — bắt lỗi tham chiếu & cảnh báo chất lượng dữ liệu.
const VERIFY_STALE_DAYS = 365;
export function validateData(data){
  const errors = [], warnings = [];
  const ids = new Map();
  const REF_OK = new Set();
  for (const [set, list] of Object.entries(data))
    for (const e of list ?? []){
      if (!e?.id){ errors.push(`[${set}] có entity thiếu id`); continue; }
      if (ids.has(e.id)) errors.push(`Trùng id "${e.id}" (ở ${ids.get(e.id)} và ${set})`);
      else ids.set(e.id, set);
      REF_OK.add(e.id);
    }
  const ref = (val, where) => { if (val && !REF_OK.has(val)) errors.push(`${where} → id "${val}" không tồn tại`); };

  for (const o of data.organizations ?? []){
    ref(o.parent_id, `organization ${o.id}.parent_id`);
    (o.source_ids ?? []).forEach(s => ref(s, `organization ${o.id}.source_ids`));
    (o.leadership ?? []).forEach(l => { ref(l.position_id, `organization ${o.id}.leadership.position_id`); ref(l.person_id, `organization ${o.id}.leadership.person_id`); });
    if (!(o.source_ids ?? []).length) warnings.push(`organization ${o.id} chưa có nguồn`);
    warnStale(o, `organization ${o.id}`, warnings);
  }
  for (const p of data.people ?? []){
    (p.positions ?? []).forEach(x => { ref(x.position_id, `person ${p.id}.positions.position_id`); ref(x.organization_id, `person ${p.id}.positions.organization_id`); });
    (p.source_ids ?? []).forEach(s => ref(s, `person ${p.id}.source_ids`));
    if (!(p.source_ids ?? []).length) warnings.push(`person ${p.id} chưa có nguồn`);
    warnStale(p, `person ${p.id}`, warnings);
  }
  for (const r of data.relationships ?? []){
    ref(r.from, `relationship ${r.id}.from`);
    ref(r.to, `relationship ${r.id}.to`);
    (r.source_ids ?? []).forEach(s => ref(s, `relationship ${r.id}.source_ids`));
  }
  for (const d of data.documents ?? []){
    ref(d.issuer_id, `document ${d.id}.issuer_id`);
    (d.source_ids ?? []).forEach(x => ref(x, `document ${d.id}.source_ids`));
    if (!(d.source_ids ?? []).length) warnings.push(`document ${d.id} chưa có nguồn`);
    if (d.url && !/^https?:\/\//i.test(d.url)) errors.push(`document ${d.id}.url không hợp lệ: ${d.url}`);
  }
  for (const pr of data.procedures ?? []){
    ref(pr.responsible_organization_id, `procedure ${pr.id}.responsible_organization_id`);
    ref(pr.receiving_organization_id, `procedure ${pr.id}.receiving_organization_id`);
    (pr.legal_basis_ids ?? []).forEach(x => ref(x, `procedure ${pr.id}.legal_basis_ids`));
    (pr.source_ids ?? []).forEach(x => ref(x, `procedure ${pr.id}.source_ids`));
    (pr.steps ?? []).forEach(st => ref(st.organization_id, `procedure ${pr.id}.steps.organization_id`));
    if (!(pr.source_ids ?? []).length) warnings.push(`procedure ${pr.id} chưa có nguồn`);
    warnStale(pr, `procedure ${pr.id}`, warnings);
  }
  for (const o of data.organizations ?? [])
    (o.documents ?? []).forEach(x => ref(x, `organization ${o.id}.documents`));

  for (const s of data.sources ?? [])
    if (s.url && !/^https?:\/\//i.test(s.url)) errors.push(`source ${s.id}.url không hợp lệ: ${s.url}`);

  const counts = Object.fromEntries(Object.entries(data).map(([k, v]) => [k, (v ?? []).length]));
  return { ok: errors.length === 0, errors, warnings, counts };
}
function warnStale(e, label, warnings){
  if (!e.last_verified) { warnings.push(`${label} chưa có last_verified`); return; }
  const days = Math.floor((Date.now() - Date.parse(e.last_verified)) / 864e5);
  if (days > VERIFY_STALE_DAYS) warnings.push(`${label} chưa kiểm chứng ${days} ngày`);
}
export function formatReport(r){
  const lines = ["DATA VALIDATION", "────────────────────────"];
  for (const [k, n] of Object.entries(r.counts)) if (n) lines.push(`${k.padEnd(16)}${n}`);
  lines.push("", `ERRORS: ${r.errors.length}`, `WARNINGS: ${r.warnings.length}`);
  r.errors.forEach(e => lines.push(`❌ ${e}`));
  r.warnings.slice(0, 30).forEach(w => lines.push(`⚠ ${w}`));
  if (r.warnings.length > 30) lines.push(`⚠ …và ${r.warnings.length - 30} cảnh báo khác`);
  return lines.join("\n");
}
