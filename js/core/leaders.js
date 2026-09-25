// leaders.js — lãnh đạo của một cơ quan tại một thời điểm.
// Dựa trên ngày giữ chức (from/to) ghi ở từng người, nên Time Machine hiện đúng người đương nhiệm mà không cần đổi schema.
import { activeAt } from "./time.js";

const TITLE_RE = /^(Bộ trưởng, Chủ nhiệm|Bộ trưởng|Chủ tịch nước|Chủ tịch Quốc hội|Thủ tướng|Chánh án|Viện trưởng|Tổng Thanh tra|Thống đốc|Chủ nhiệm|Chủ tịch UBND|Bí thư)/;

export function shortTitle(name){
  const s = String(name ?? "");
  return TITLE_RE.exec(s)?.[1] ?? s.split(" ").slice(0, 3).join(" ");
}

export function leadersOf(org, index, asOf){
  const out = [];
  for (const l of org.leadership ?? []){
    const person = index.get(l.person_id);
    if (!person) continue;
    const position = index.get(l.position_id);
    const rec = (person.positions ?? []).find(x => x.position_id === l.position_id && x.organization_id === org.id) ?? {};
    const from = rec.from ?? null, to = rec.to ?? null;
    out.push({ person, position, from, to,
      active: activeAt({ effective_from: from, effective_to: to }, asOf),
      former: !!to && to < asOf });
  }
  return out;
}
