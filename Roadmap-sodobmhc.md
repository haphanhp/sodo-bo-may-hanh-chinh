---
tags: [sodobmhc]
type: roadmap
created: 2026-09-18
updated: 2026-09-18
---

### Roadmap-sodobmhc — Theo dõi tiến trình dự án

#### Cách dùng file này

- Đây là **nguồn sự thật duy nhất** về tiến độ dự án — AI nào vào sau đọc file này để biết đang ở đâu, việc gì đã xong.
- Đánh dấu `[x]` + thêm ✅ ngay khi 1 mục hoàn thành thật (không tick trước khi làm).
- **Không ghi bài học / lỗi / kinh nghiệm ở đây** — mọi bài học, lỗi gặp phải, cách khắc phục ghi trong `Build-logs-sodobmhc.md`.
- Làm đúng thứ tự Phase 0 → Phase 10 (luật số 12 trong `Claude-sodobmhc.md`), không nhảy cóc.

---

#### Trạng thái tổng quan

- Phase hiện tại: **Phase 0 — Kiến trúc & quy tắc dự án**
- Cập nhật lần cuối: 2026-09-18

---

#### Phase 0 — Kiến trúc & quy tắc dự án

- [x] ✅ Chốt kiến trúc kỹ thuật (database → graph → UI) — doc `context-bmhc`
- [x] ✅ Tạo `Claude-sodobmhc.md` (quy tắc chia việc 1 Pro + 5 Free)
- [x] ✅ Tạo `Roadmap-sodobmhc.md` (file này)
- [x] ✅ Tạo `Build-logs-sodobmhc.md`
- [x] ✅ Tạo `Promts-sodobmhc.md` (prompt #1 cho acc Free)
- [ ] Chốt JSON schema chi tiết cho: organization, person, position, relationship, procedure, document, license, facility, form, source
- [ ] Tạo `AGENTS.md` (15 luật nền, bản rút gọn cho code editor)
- [ ] Backup lần đầu lên GitHub `haphanhp/sodo-bo-may-hanh-chinh`

#### Phase 1 — Ứng dụng rỗng (chưa có dữ liệu thật)

- [ ] `index.html` (shell, không nhét dữ liệu)
- [ ] `css/` (main, layout, graph, components, responsive)
- [ ] Navigation + 8 tab: Bản đồ, Cơ quan, Con người, Thủ tục, Văn bản, Giấy phép, Nguồn, Hướng dẫn
- [ ] Empty states cho từng view

#### Phase 2 — Data engine

- [ ] `loader.js` (đọc các file `data/*.json`)
- [ ] `validator.js` (bắt lỗi: ID trùng, relationship trỏ tới entity không tồn tại...)
- [ ] `indexer.js` (Map theo ID để tra cứu nhanh)
- [ ] `state.js`
- [ ] Test bằng 5–10 entity giả

#### Phase 3 — Graph cơ quan (organization graph)

- [ ] Nodes / edges
- [ ] Zoom / pan
- [ ] Click / expand / collapse

#### Phase 4 — Detail panel

- [ ] Organization view
- [ ] Person view
- [ ] Position view

#### Phase 5 — Search

- [ ] Global search
- [ ] Filters
- [ ] Kết quả theo nhóm entity (Cơ quan / Chức vụ / Thủ tục / Văn bản...)

#### Phase 6 — Thủ tục hành chính (Procedures)

- [ ] Workflow các bước (nộp hồ sơ → kiểm tra → thẩm định → phê duyệt → nhận kết quả)
- [ ] Documents / forms liên quan
- [ ] Cơ quan chịu trách nhiệm / cơ quan tiếp nhận

#### Phase 7 — Văn bản pháp luật (Documents)

- [ ] Các loại: hiến pháp, luật, nghị quyết, nghị định, quyết định, thông tư, chỉ thị, công văn
- [ ] Quan hệ pháp lý giữa văn bản (căn cứ, sửa đổi, thay thế)

#### Phase 8 — Nguồn thông tin (Sources)

- [ ] Panel nguồn trích dẫn (đánh số [1], [2]... dạng foot note)
- [ ] Ngày kiểm chứng lần cuối (`last_verified`)
- [ ] Link chính thức, không bịa link

#### Phase 9 — Dữ liệu lịch sử (Time machine)

- [ ] `effective_from` / `effective_to` cho từng entity
- [ ] Timeline UI (xem cơ cấu tại 1 thời điểm trong quá khứ)

#### Phase 10 — Nhập dữ liệu thật

- [ ] Cấp trung ương: Quốc hội, Chủ tịch nước, Chính phủ, TAND tối cao, VKSND tối cao
- [ ] Các Bộ / cơ quan ngang Bộ
- [ ] Cấp tỉnh / thành phố trực thuộc trung ương
- [ ] Cấp huyện / quận / thị xã
- [ ] Cấp xã / phường / thị trấn
- [ ] Đối chiếu chéo nguồn, backup GitHub định kỳ

---

#### Tiến độ thu thập dữ liệu thô (song song, không phụ thuộc thứ tự Phase build app)

Việc tra cứu dữ liệu qua 5 acc Free (`Promts-sodobmhc.md`) chạy **song song** với các Phase build app ở trên — không cần chờ app xây xong mới thu thập dữ liệu. Dữ liệu thô được lưu ở các file đánh số (`01-...md`, `02-...md`...), chỉ ráp chính thức vào `data/*.json` khi tới Phase 10.

- [x] ✅ 01 — Cơ quan cấp trung ương (Quốc hội, Chủ tịch nước, Chính phủ, TAND tối cao, VKSND tối cao) — xem `01-co-quan-cap-trung-uong.md` (nguồn: Prompt #1, Brave, Sonnet 5 medium, 2026-09-18)
- [x] ✅ 02 — Danh sách 14 Bộ + 3 cơ quan ngang Bộ xác nhận (chưa chi tiết) — xem `02-danh-sach-bo-co-quan-ngang-bo.md` (nguồn: Prompt #3, Edge, Sonnet 5 extra, 2026-09-18)
- [x] ✅ 02a (nhóm 1/3) — Quốc phòng, Công an, Ngoại giao, Nội vụ, Tư pháp — xem `03-bo-nhom-1-5bo-dau.md`. HOÀN TẤT, mọi xung đột đã chốt (Prompt #6), sẵn sàng ráp JSON.
- [x] ✅ 02b — nhóm 2/3 Bộ: Tài chính, Công Thương, NN&MT, Xây dựng, VHTTDL — xem `04-bo-nhom-2-5bo-tiep.md` (Prompt #7). 3/5 vững, 2/5 (Xây dựng, VHTTDL) còn thiếu SĐT/email toàn cơ quan — không chặn tiến độ.
- [x] ✅ 02c — nhóm 3/3 Bộ còn lại (KH&CN, Giáo dục và Đào tạo, Y tế, Dân tộc và Tôn giáo) + 3 cơ quan ngang Bộ (Ngân hàng Nhà nước, Thanh tra Chính phủ, Văn phòng Chính phủ) — xem `05-bo-nhom-3-4bo-3coquanngangbo.md` (nguồn: Prompt #8, Brave theo lời user khai báo, Sonnet 5 medium, 2026-09-18). **🎉 Mốc: HOÀN TẤT thu thập dữ liệu thô cho toàn bộ 14 Bộ + 3 cơ quan ngang Bộ (17/17 đơn vị)** — mục 02 xem như xong, còn vài điểm nhỏ không chặn tiến độ (SĐT Bộ Y tế 2 nguồn khác nhau, 2/5 Bộ nhóm 2 thiếu SĐT/email toàn cơ quan).
- [ ] 03 — Cấp tỉnh / thành phố trực thuộc trung ương
- [ ] 04 — Cấp huyện / quận / thị xã
- [ ] 05 — Cấp xã / phường / thị trấn

---

#### Ghi chú

- Bài học, lỗi gặp phải, cách sửa → ghi trong `Build-logs-sodobmhc.md`, không ghi ở đây.
- Danh sách prompt đã giao cho 5 acc Free (Brave, Opera GX, Edge, Cốc Cốc, Arc) → xem `Promts-sodobmhc.md`.
