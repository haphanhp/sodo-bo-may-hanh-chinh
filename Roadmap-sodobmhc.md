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

- Phase hiện tại: **Phase 1 ĐÃ XONG (ứng dụng rỗng) — sẵn sàng chuyển Phase 2 (data engine)**
- **⚠️ Phạm vi thu hẹp (user chốt 2026-09-18)**: chỉ đào sâu **cấp thượng tầng + cấp tỉnh/thành phố trực thuộc trung ương**. Cấp xã/phường/đặc khu **dừng ở mức liệt kê** (đã xong), không tra tên đầy đủ từng đơn vị. Phần liệt kê cấp xã đã hoàn tất **cả nước 34/34 tỉnh (tới An Giang)**. Prompt #20–#24 giữ nguyên trong `Promts-sodobmhc.md` nhưng KHÔNG giao. → Thu thập dữ liệu thô xem như **ĐÃ ĐỦ** cho Phase 10. — song song, dữ liệu thô cấp tỉnh/thành (mục 03) vẫn tiếp tục thu thập độc lập
- Cập nhật lần cuối: 2026-09-18

---

#### Phase 0 — Kiến trúc & quy tắc dự án

- [x] ✅ Chốt kiến trúc kỹ thuật (database → graph → UI) — doc `context-bmhc`
- [x] ✅ Tạo `Claude-sodobmhc.md` (quy tắc chia việc 1 Pro + 5 Free)
- [x] ✅ Tạo `Roadmap-sodobmhc.md` (file này)
- [x] ✅ Tạo `Build-logs-sodobmhc.md`
- [x] ✅ Tạo `Promts-sodobmhc.md` (prompt #1 cho acc Free)
- [x] ✅ Chốt JSON schema chi tiết cho 9 loại entity (organization, person, position, relationship, procedure, document, license — dùng chung cho license/certificate/form, facility, source) — xem `schemas/*.schema.json`, tạo bởi Claude Code (2026-09-18). `facility.schema.json` còn PROPOSED, chưa duyệt chi tiết.
- [x] ✅ Tạo `AGENTS.md` (15 luật rút gọn cho code editor) — xem file ở gốc thư mục dự án, tạo bởi Claude Code (2026-09-18).
- [x] ✅ Backup lần đầu lên GitHub `haphanhp/sodo-bo-may-hanh-chinh` — commit `ef8f239`, nhánh `main`, tạo bởi Claude Code (2026-09-18). **🎉 Phase 0 HOÀN TẤT.**

#### Phase 1 — Ứng dụng rỗng (chưa có dữ liệu thật)

- [x] ✅ `index.html` (shell 3 vùng: header + nav + main + detail panel, không chứa dữ liệu hành chính) — Claude Cowork (Opus 5), 2026-09-18
- [x] ✅ `css/` đủ 5 file: `main.css` (token + reset, có dark mode), `layout.css`, `components.css`, `graph.css` (placeholder Phase 3), `responsive.css`
- [x] ✅ Navigation + 9 tab: Bản đồ, Cơ quan, Con người, Chức vụ, Thủ tục, Văn bản, Giấy phép, Nguồn, Hướng dẫn (thêm tab Chức vụ so với dự kiến 8 tab, vì Position tách riêng khỏi Person trong schema)
- [x] ✅ Empty states cho từng view + empty state cho detail panel, mỗi cái ghi rõ sẽ có dữ liệu ở Phase nào
- [x] ✅ Bonus: router hash (`#/organizations`), event-bus, state skeleton, toggle sáng/tối lưu localStorage, tab Hướng dẫn đã viết nội dung thật. **🎉 Phase 1 HOÀN TẤT.**
- [x] ✅ Backup Phase 1 lên GitHub — commit `7ed7d2c`, nhánh main, đẩy bởi Claude Code (2026-09-18)

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
- [x] ~~Cấp huyện / quận / thị xã~~ — KHÔNG áp dụng (đã kết thúc hoạt động 01/7/2025, chỉ giữ giá trị lịch sử)
- [ ] Cấp xã / phường / đặc khu — **chỉ nạp ở mức liệt kê**: tổng số + cơ cấu (số xã / phường / đặc khu) theo từng tỉnh, KHÔNG nạp tên từng đơn vị
- [ ] Đối chiếu chéo nguồn, backup GitHub định kỳ

---

#### Tiến độ thu thập dữ liệu thô (song song, không phụ thuộc thứ tự Phase build app)

Việc tra cứu dữ liệu qua 5 acc Free (`Promts-sodobmhc.md`) chạy **song song** với các Phase build app ở trên — không cần chờ app xây xong mới thu thập dữ liệu. Dữ liệu thô được lưu ở các file đánh số (`01-...md`, `02-...md`...), chỉ ráp chính thức vào `data/*.json` khi tới Phase 10.

- [x] ✅ 01 — Cơ quan cấp trung ương (Quốc hội, Chủ tịch nước, Chính phủ, TAND tối cao, VKSND tối cao) — xem `01-co-quan-cap-trung-uong.md` (nguồn: Prompt #1, Brave, Sonnet 5 medium, 2026-09-18)
- [x] ✅ 02 — Danh sách 14 Bộ + 3 cơ quan ngang Bộ xác nhận (chưa chi tiết) — xem `02-danh-sach-bo-co-quan-ngang-bo.md` (nguồn: Prompt #3, Edge, Sonnet 5 extra, 2026-09-18)
- [x] ✅ 02a (nhóm 1/3) — Quốc phòng, Công an, Ngoại giao, Nội vụ, Tư pháp — xem `03-bo-nhom-1-5bo-dau.md`. HOÀN TẤT, mọi xung đột đã chốt (Prompt #6), sẵn sàng ráp JSON.
- [x] ✅ 02b — nhóm 2/3 Bộ: Tài chính, Công Thương, NN&MT, Xây dựng, VHTTDL — xem `04-bo-nhom-2-5bo-tiep.md` (Prompt #7). 3/5 vững, 2/5 (Xây dựng, VHTTDL) còn thiếu SĐT/email toàn cơ quan — không chặn tiến độ.
- [x] ✅ 02c — nhóm 3/3 Bộ còn lại (KH&CN, Giáo dục và Đào tạo, Y tế, Dân tộc và Tôn giáo) + 3 cơ quan ngang Bộ (Ngân hàng Nhà nước, Thanh tra Chính phủ, Văn phòng Chính phủ) — xem `05-bo-nhom-3-4bo-3coquanngangbo.md` (nguồn: Prompt #8, Brave theo lời user khai báo, Sonnet 5 medium, 2026-09-18). **🎉 Mốc: HOÀN TẤT thu thập dữ liệu thô cho toàn bộ 14 Bộ + 3 cơ quan ngang Bộ (17/17 đơn vị)** — mục 02 xem như xong, còn vài điểm nhỏ không chặn tiến độ (SĐT Bộ Y tế 2 nguồn khác nhau, 2/5 Bộ nhóm 2 thiếu SĐT/email toàn cơ quan).
- [x] ✅ 03 (danh sách) — 34 tỉnh/thành phố trực thuộc trung ương sau sáp nhập 12/6/2025 (28 tỉnh + 6 TP) — xem `06-danh-sach-tinh-thanh.md` (nguồn: Prompt #9, 2026-09-18, Nghị quyết 202/2025/QH15). 22/34 trung tâm hành chính còn ⚠️/❌ chưa xác minh đầy đủ — cần Prompt #10+ tra chi tiết theo nhóm.
- [x] ✅ 03 (chi tiết) — trụ sở/SĐT/lãnh đạo 34/34 tỉnh/thành ĐÃ XONG qua 3 prompt song song: #10 (Brave, xem `07-...md`), #11 (Edge, xem `08-...md`), #12 (Arc, xem `09-...md`). Toàn bộ 12 trung tâm hành chính từng chưa rõ đã xác định. **🎉 Phát hiện quan trọng: Đồng Nai đã lên Thành phố trực thuộc TW (30/4/2026)** — cơ cấu hiện tại là 27 tỉnh + 7 TP (đã sửa `06-danh-sach-tinh-thanh.md`). Còn thiếu: Bí thư Tỉnh/Thành ủy (đa số tỉnh), và 6 tên Chủ tịch UBND chỉ có 1 nguồn chưa đối chiếu chéo — không chặn tiến độ.
- [x] ✅ 04 — Cấp huyện / quận / thị xã — **ĐÃ XÁC NHẬN CHÍNH THỨC (Prompt #13, file 10): cấp huyện đã KẾT THÚC HOẠT ĐỘNG TOÀN QUỐC từ 01/7/2025**, căn cứ Điều 2 Nghị quyết 203/2025/QH15 (sửa Hiến pháp) + Điều 1 Luật 72/2025/QH15 (chính quyền 2 cấp: tỉnh – xã). Mục này CHUYỂN SANG trạng thái LỊCH SỬ — không cần tra dữ liệu "cấp huyện hiện hành" nữa, chỉ giữ cho mục đích lịch sử (Time Machine, `effective_to: 2025-06-30`) nếu cần.
- [x] ✅ 05 — Cấp xã / phường / đặc khu (KHÔNG còn "thị trấn") — **cấp hành chính cuối/thấp nhất hiện hành**, thay vai trò cấp huyện cũ. **HOÀN TẤT tổng quan cấp xã (tổng số + cơ cấu xã/phường/đặc khu) cho toàn bộ 34/34 tỉnh/thành**, qua 5 nhóm chạy song song: #15 Brave → `12-cap-xa-nhom1-7tinh.md` (7 tỉnh), #16 Opera GX → `13-cap-xa-nhom2-7tinh.md` (7 tỉnh, 🟡 Thái Nguyên: Pro đã tự tra thêm, nghiêng rõ về 77x/15p (chinhphu.vn 04/08/2025 vẫn giữ số này), chưa 100% loại trừ đề xuất 69x/23p của HĐND tỉnh), #17 Microsoft Edge → `14-cap-xa-nhom3-7tinh.md` (7 tỉnh), #18 Cốc Cốc → `15-cap-xa-nhom4-7tinh.md` (7 tỉnh, có timeline chi tiết Đồng Nai), #19 Arc → `16-cap-xa-nhom5-va-danhsach-13-dackhu.md` (6 tỉnh + danh sách đầy đủ 13 đặc khu cả nước). Tổng cả nước: **3.321 đơn vị** (2.636 xã + 672 phường + 13 đặc khu, số liệu chốt 10/7/2025, xem file 10). **🛑 CHỐT DỪNG (2026-09-18)**: user thu hẹp phạm vi — cấp xã chỉ cần liệt kê tới đây là đủ. Liệt kê cấp xã đã phủ **đủ 34/34 tỉnh/thành, tới An Giang** — mục 05 **HOÀN TẤT**. Danh sách TÊN đầy đủ 3.321 đơn vị KHÔNG làm nữa; Prompt #20–#24 vẫn giữ nguyên nội dung trong `Promts-sodobmhc.md` (không giao), dùng lại được nếu mở lại phạm vi.
  **Bổ sung 2026-09-18 (sau khi đã hủy Prompt #20-24)**: user vẫn tự tra một phần danh sách TÊN đầy đủ qua acc Pro trực tiếp (không qua acc Free, không tính vào pipeline 5-acc), và 3 tỉnh cuối (Đồng Tháp, Cà Mau, An Giang) do Pro tự tra qua WebFetch trực tiếp chinhphu.vn theo yêu cầu user — lưu vào `17-ten-day-du-nhom1-va-nhom2.md`, `18-ten-day-du-nhom4-4tinh.md`, `19-ten-day-du-nhom5-5tinh.md` (tổng 17/34 tỉnh/thành đã có tên đầy đủ, phần còn lại KHÔNG tra thêm nữa theo đúng quyết định thu hẹp phạm vi).

---

#### Ghi chú

- **Phạm vi dự án (bản chốt 2026-09-18)**: đào sâu cấp thượng tầng (5 cơ quan TW + 14 Bộ + 3 cơ quan ngang Bộ) và 34 tỉnh/thành trực thuộc TW; cấp xã chỉ liệt kê; cấp huyện chỉ lưu lịch sử. Mọi prompt/phase sau đều bám phạm vi này.
- Bài học, lỗi gặp phải, cách sửa → ghi trong `Build-logs-sodobmhc.md`, không ghi ở đây.
- Danh sách prompt đã giao cho 5 acc Free (Brave, Opera GX, Edge, Cốc Cốc, Arc) → xem `Promts-sodobmhc.md`.
