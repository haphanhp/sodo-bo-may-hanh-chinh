// search.js — tìm kiếm toàn cục trên mọi entity đã nạp (bỏ dấu tiếng Việt, không phân biệt hoa thường).
export const norm = s => String(s ?? "")
  .normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/gi, "d")
  .toLowerCase().replace(/\s+/g, " ").trim();

const GROUPS = {
  organizations: "Cơ quan", people: "Con người", positions: "Chức vụ",
  sources: "Nguồn", procedures: "Thủ tục", documents: "Văn bản", licenses: "Giấy phép"
};

export function buildSearchIndex(index){
  const docs = [];
  const add = (type, e, label, sub, extra = []) =>
    docs.push({ id: e.id, type, label, sub, hay: norm([label, sub, ...extra].join(" ")), labelN: norm(label) });

  index.perType.organizations.forEach(o => add("organizations", o, o.name.vi,
    [o.short_name, o.contact?.address].filter(Boolean).join(" · "),
    [o.short_name, o.contact?.address, ...(o.contact?.email ?? []), ...(o.contact?.phone ?? []),
     ...(o.contact?.website ?? []), ...(o.functions ?? []), o.notes]));
  index.perType.people.forEach(p => {
    const pos = p.positions?.[0] ?? {};
    const posName = index.get(pos.position_id)?.name?.vi ?? "";
    const orgName = index.get(pos.organization_id)?.name?.vi ?? "";
    add("people", p, p.name.vi, [posName, orgName].filter(Boolean).join(" · "), [posName, orgName]);
  });
  index.perType.positions.forEach(p => add("positions", p, p.name.vi, (p.functions ?? [])[0] ?? "", p.functions ?? []));
  index.perType.sources.forEach(s => add("sources", s, s.title, s.publisher?.name ?? "", [s.url]));
  ["procedures","documents","licenses"].forEach(t =>
    index.perType[t].forEach(e => add(t, e, e.name?.vi ?? e.title?.vi ?? e.id, "")));
  return docs;
}

export function search(docs, q, { limit = 24 } = {}){
  const nq = norm(q);
  if (nq.length < 2) return [];
  const terms = nq.split(" ");
  const hits = [];
  for (const d of docs){
    if (!terms.every(t => d.hay.includes(t))) continue;
    let score = 0;
    if (d.labelN === nq) score += 100;
    else if (d.labelN.startsWith(nq)) score += 60;
    else if (d.labelN.includes(nq)) score += 40;
    if (d.hay.includes(nq)) score += 10;
    const inLabel = terms.filter(t => d.labelN.includes(t)).length;
    score += inLabel * 12;                       // khớp ở TÊN quan trọng hơn khớp ở phần mô tả
    if (inLabel === terms.length) score += 35;   // tên chứa đủ mọi từ khoá
    score += { organizations: 6, people: 5, positions: 4, procedures: 3, documents: 2 }[d.type] ?? 0;
    hits.push({ ...d, score });
  }
  return hits.sort((a, b) => b.score - a.score || a.label.localeCompare(b.label, "vi")).slice(0, limit);
}

export function groupResults(hits){
  const out = new Map();
  for (const h of hits){
    const g = GROUPS[h.type] ?? h.type;
    (out.get(g) ?? out.set(g, []).get(g)).push(h);
  }
  return [...out.entries()];
}
