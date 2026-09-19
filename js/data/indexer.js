// indexer.js — dựng Map tra cứu theo id + chỉ mục quan hệ.
import { DATASETS } from "./loader.js";
export function buildIndexes(data){
  const byId = new Map();
  const perType = {};
  for (const name of DATASETS){
    const m = new Map();
    for (const e of data[name] ?? []){
      if (!e?.id) continue;
      m.set(e.id, e);
      byId.set(e.id, { type: name, entity: e });
    }
    perType[name] = m;
  }
  const outgoing = new Map(), incoming = new Map();
  const push = (map, k, v) => (map.get(k) ?? map.set(k, []).get(k)).push(v);
  for (const rel of data.relationships ?? []){
    if (rel?.from) push(outgoing, rel.from, rel);
    if (rel?.to)   push(incoming, rel.to, rel);
  }
  const childrenOf = id => (outgoing.get(id) ?? []).filter(r => ["supervises","contains","parent_of"].includes(r.type));
  // Đếm ngược: mỗi nguồn đang được bao nhiêu mục trích dẫn
  const citedBy = new Map();
  for (const [name, m] of Object.entries(perType))
    if (name !== "sources")
      for (const e of m.values())
        for (const sid of e.source_ids ?? [])
          (citedBy.get(sid) ?? citedBy.set(sid, []).get(sid)).push({ type: name, id: e.id });

  return {
    byId, perType, outgoing, incoming, childrenOf, citedBy,
    get: id => byId.get(id)?.entity ?? null,
    typeOf: id => byId.get(id)?.type ?? null,
    org: id => perType.organizations.get(id) ?? null,
    sourcesOf: e => (e?.source_ids ?? []).map(s => perType.sources.get(s)).filter(Boolean),
    roots: () => [...perType.organizations.values()].filter(o => !o.parent_id)
  };
}
