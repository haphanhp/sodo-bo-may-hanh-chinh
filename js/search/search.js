// search.js — tìm kiếm toàn cục trên mọi entity đã nạp (bỏ dấu tiếng Việt, không phân biệt hoa thường).
export const norm = s => String(s ?? "")
  .normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/gi, "d")
  .toLowerCase().replace(/\s+/g, " ").trim();

// Người Việt hay gọi khác tên chính thức — mở rộng truy vấn để vẫn ra kết quả.
const SYNONYMS = [
  [["bang lai", "bang lai xe", "gplx"], "giay phep lai xe"],
  [["cmnd", "cccd", "the can cuoc"], "can cuoc"],
  [["lltp"], "ly lich tu phap"],
  [["dkkd", "giay phep kinh doanh"], "dang ky doanh nghiep"]
];
function expand(nq){
  for (const [keys, target] of SYNONYMS)
    for (const k of keys) if (nq.includes(k)) return nq.replace(k, target);
  return nq;
}

const GROUPS = {
  organizations: "Cơ quan", people: "Con người", positions: "Chức vụ",
  sources: "Nguồn", procedures: "Thủ tục", documents: "Văn bản", licenses: "Giấy phép"
};

export function buildSearchIndex(index){
  const docs = [];
  const add = (type, e, label, sub, extra = []) =>
    docs.push({ id: e.id, type, label, sub,
      hay: norm([label, sub, ...extra, ...(SYNONYMS[type] ? [] : [])].join(" ")),
      labelN: norm(label), keyN: norm(e.number ?? e.short_name ?? "") });

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
  index.perType.documents.forEach(d => add("documents", d, d.title?.vi ?? d.id,
    [d.number, index.get(d.issuer_id)?.name?.vi].filter(Boolean).join(" · "),
    [d.number, d.notes, d.type]));
  index.perType.procedures.forEach(p => add("procedures", p, p.name?.vi ?? p.id,
    index.get(p.receiving_organization_id)?.name?.vi ?? "",
    [...(p.requirements ?? []), ...(p.result ?? []), ...(p.legal_basis ?? []), p.notes]));
  index.perType.licenses.forEach(e => add("licenses", e, e.name?.vi ?? e.id, ""));
  return docs;
}

export function search(docs, q, { limit = 24 } = {}){
  const nq = expand(norm(q));
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
    const titleN = d.labelN + " " + d.keyN;      // tên + số hiệu văn bản / tên viết tắt
    const inLabel = terms.filter(t => titleN.includes(t)).length;
    score += inLabel * 12;                       // khớp ở TÊN quan trọng hơn khớp ở phần mô tả
    if (inLabel === terms.length) score += 35;   // tên (hoặc số hiệu) chứa đủ mọi từ khoá
    if (d.keyN){                                  // khớp số hiệu văn bản / tên viết tắt
      if (d.keyN.includes(nq) || terms.every(t => d.keyN.includes(t))) score += 50;
      else if (terms.some(t => t.length > 1 && d.keyN.includes(t))) score += 45;
    }
    score += { organizations: 6, people: 5, positions: 4, procedures: 5, documents: 5, sources: -20 }[d.type] ?? 0;
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
