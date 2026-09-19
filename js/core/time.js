// time.js — Time Machine: lọc entity theo thời điểm.
export const TODAY = new Date().toISOString().slice(0, 10);
export const MILESTONES = [
  { date: "2025-02-28", label: "Trước sáp nhập Bộ", hint: "Cơ cấu cũ: 18 Bộ + cơ quan ngang Bộ, còn Bộ KH&ĐT, GTVT, TT&TT, TN&MT, NN&PTNT, LĐ-TB&XH, Ủy ban Dân tộc" },
  { date: "2025-03-01", label: "Sau sáp nhập Bộ", hint: "14 Bộ + 3 cơ quan ngang Bộ theo Nghị quyết 176/2025/QH15" },
  { date: "2025-07-01", label: "Chính quyền 2 cấp", hint: "Kết thúc cấp huyện, 63 tỉnh/thành còn 34" },
  { date: "2026-04-30", label: "Đồng Nai lên TP", hint: "27 tỉnh + 7 thành phố trực thuộc Trung ương" }
];
/** Entity có tồn tại tại thời điểm `at` (chuỗi yyyy-mm-dd) không? */
export function activeAt(e, at){
  if (!e) return false;
  if (e.effective_from && e.effective_from > at) return false;
  if (e.effective_to && e.effective_to < at) return false;
  return true;
}
export const isPast = at => at < TODAY;
export const dmy = s => s ? String(s).split("-").reverse().join("/") : "";
