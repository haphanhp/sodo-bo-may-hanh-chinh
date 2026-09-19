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

- Phase hiện tại: **Phase 7 ĐÃ XONG. App hiện có: 56 cơ quan / 89 người / 90 chức vụ / 3 thủ tục / 15 văn bản / 69 quan hệ / 138 nguồn, validate 0 lỗi 0 cảnh báo. Tiếp theo: Phase 8 (panel nguồn) hoặc Phase 9 (time machine)**
- **⚠️ Phạm vi thu hẹp (user chốt 2026-09-18)**: chỉ đào sâu **cấp thượng tầng + cấp tỉnh/thành phố trực thuộc trung ương**. Cấp xã/phường/đặc khu **KHÔNG cần trụ sở/SĐT/lãnh đạo riêng từng xã** (việc đào sâu chi tiết đó dừng ở đây). Riêng phần **danh sách TÊN đầy đủ** cấp xã: user yêu cầu làm cho xong luôn ngay trong ngày — Pro tự tra 100% qua WebSearch/WebFetch (file 17-21), **đã hoàn tất cả nước 34/34 tỉnh/thành**. Prompt #20–#24 giữ nguyên trong `Promts-sodobmhc.md` nhưng KHÔNG giao acc Free (Pro đã tự làm xong). → Thu thập dữ liệu thô cấp xã xem như **ĐÃ ĐỦ HOÀN TOÀN** cho Phase 10. — song song, dữ liệu thô cấp tỉnh/thành (mục 03) vẫn tiếp tục thu thập độc lập
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
- [x] ✅ Backup Phase 1 lên GitHub — commit `7ed7d2c`, nhánh main, đẩy bởi Claude Code (2026-09-18). Cập nhật: `origin/main` đã đồng bộ tới `1805378` (gồm cả commit thu hẹp phạm vi + giữ Prompt #20–24). Push qua Git Credential Manager sẵn có trên máy, KHÔNG cần PAT — lần sau cứ `git push origin main` là được.

#### Phase 2 — Data engine

- [x] ✅ `js/data/loader.js` — đọc song song 10 file `data/*.json`, lỗi thì trả mảng rỗng + cảnh báo, không làm sập app
- [x] ✅ `js/data/validator.js` — bắt ID trùng, mọi tham chiếu chết (parent_id, source_ids, leadership, positions, relationship from/to), URL nguồn sai định dạng; cảnh báo entity không nguồn / thiếu `last_verified` / quá 365 ngày chưa kiểm chứng
- [x] ✅ `js/data/indexer.js` — Map theo id, chỉ mục quan hệ vào/ra, `childrenOf`, `sourcesOf`, `roots`
- [x] ✅ `js/core/state.js` — thêm data/index/report/loadError
- [x] ✅ `tools/validate-data.js` — chạy `node tools/validate-data.js` ở thư mục dự án, in báo cáo và exit code 1 nếu có lỗi (luật 9 trong `AGENTS.md`)
- [x] ✅ **Test bằng DỮ LIỆU THẬT thay vì entity giả** (user chọn): nạp xong cấp thượng tầng — **22 cơ quan** (Quốc hội, VP Chủ tịch nước, Chính phủ, TAND tối cao, VKSND tối cao + 14 Bộ + 3 cơ quan ngang Bộ), 21 người, 22 chức vụ, 22 quan hệ, 41 nguồn. `node tools/validate-data.js` → **0 lỗi, 0 cảnh báo**
- [x] ✅ 4 view đã hiển thị dữ liệu thật dạng bảng: Cơ quan, Con người, Chức vụ, Nguồn (có cột nguồn + đánh số)
- [x] ✅ `mo-app.bat` — mở app bằng web server tĩnh (trình duyệt chặn `fetch` file JSON khi mở trực tiếp bằng `file://`); app có banner báo lỗi rõ ràng nếu mở sai cách. **🎉 Phase 2 HOÀN TẤT.**

#### Phase 3 — Graph cơ quan (organization graph)

- [x] ✅ Nodes / edges — `js/graph/graph-layout.js` (bố cục cây, **phân trang 6 ô/cấp** kèm thanh `‹ 1–6 / 51 ›` hiển thị rõ tổng số và vị trí đang xem, nhóm cùng loại đi liền nhau: Bộ → cơ quan ngang Bộ → TP trực thuộc TW → tỉnh), `nodes.js` (node SVG, màu theo loại cơ quan), `edges.js` (cạnh bezier)
- [x] ✅ Zoom / pan — lăn chuột để phóng to/thu nhỏ, kéo để di chuyển, nút ＋ － ⤢ (vừa màn hình) ⇱ (mở hết cấp dưới)
- [x] ✅ Click / expand / collapse — bấm node để chọn (mở bảng chi tiết bên phải), dấu +/− trên node để mở/thu gọn cấp dưới
- [x] ✅ Chú giải màu theo loại: lập pháp / hành pháp / tòa án / kiểm sát / Bộ / cơ quan ngang Bộ. Hiện vẽ 5 gốc + 17 đơn vị trực thuộc Chính phủ. **🎉 Phase 3 HOÀN TẤT.**

#### Phase 4 — Detail panel

- [x] ✅ Organization view — lãnh đạo, chức năng/nhiệm vụ/quyền hạn, liên hệ (trụ sở, SĐT, fax, email, website), cấp trên/đơn vị trực thuộc, ghi chú, danh sách nguồn đánh số
- [x] ✅ Person view — chức danh, cơ quan, ghi chú mức độ xác minh, nguồn
- [ ] Position view (hiện dùng bản hiển thị chung, chưa có view riêng)
- [x] ✅ Mở chi tiết từ cả sơ đồ lẫn bảng (bấm tên cơ quan/người trong tab Cơ quan, Con người)

#### Phase 5 — Search

- [x] ✅ Global search — `js/search/search.js`, chỉ mục 258 mục; bỏ dấu tiếng Việt (gõ "bo tai chinh" ra "Bộ Tài chính"), tìm cả tên viết tắt, địa chỉ, SĐT, email, chức năng; xếp hạng theo mức khớp
- [x] ✅ Kết quả theo nhóm entity (Cơ quan / Con người / Chức vụ / Nguồn), bấm vào mở thẳng bảng chi tiết
- [x] ✅ Phím tắt `Ctrl + K`, `Esc` để đóng, bấm ra ngoài để đóng
- [ ] Filters nâng cao (theo cấp/loại cơ quan) — để sau, chưa cần thiết. **🎉 Phase 5 HOÀN TẤT (phần chính).**

#### Phase 6 — Thủ tục hành chính (Procedures)

- **⚠️ Thu hẹp phạm vi (user chốt 2026-09-18)**: KHÔNG cần workflow chi tiết từng bước (nộp hồ sơ → thẩm định → phê duyệt...), KHÔNG cần forms/biểu mẫu cụ thể. Chỉ cần: (1) LIỆT KÊ tên thủ tục, (2) cơ quan nào phụ trách/tiếp nhận, (3) LINK trực tiếp tới trang chính thức (ưu tiên dichvucong.gov.vn — Cổng dịch vụ công quốc gia, hoặc trang thủ tục của Bộ/cơ quan cấp tỉnh liên quan) để người dân tự bấm vào làm tiếp — vai trò của app là "chỉ đường", không phải làm hộ.
- **📌 Chốt Mức 3 (user quyết định 2026-09-18)**: liệt kê thủ tục + cơ quan phụ trách + LINK RIÊNG dẫn đúng tới trang dịch vụ công (dichvucong.gov.vn hoặc trang Bộ/Sở) cho từng thủ tục — không chỉ link chung. Số liệu nền: cả nước có **1.261 thủ tục cấp tỉnh** (danh sách thống nhất toàn quốc, không phải 34 bản khác nhau) + thủ tục cấp trung ương (số chưa xác định chính xác), KHÔNG tính 463 thủ tục cấp xã (ngoài phạm vi). Chia thành **17 prompt (Prompt #25–#41 trong `Promts-sodobmhc.md`)**, 1 prompt/1 Bộ-cơ quan (khớp 17 đơn vị đã có ở file 02-05), xoay vòng 5 acc Free + Pro tự nhận 1 phần để rút ngắn về khoảng 2-3 phiên.
- [x] ✅ Prompt #40 (Thanh tra Chính phủ) + #41 (Văn phòng Chính phủ) — Pro tự làm ngay (2 cơ quan ít thủ tục cho dân nhất), xem `22-thu-tuc-thanhtra-vpcp.md`.
⚠️ **Phát hiện 2 phiên Cowork chạy song song trong ngày 18/9/2026** — xem chi tiết đầy đủ (danh sách file trùng, cần gộp) tại mục "Danh sách 17 lượt gán" trong `Promts-sodobmhc.md`. Tóm tắt: **17/17 prompt (#25–#41) đã có dữ liệu**, nhưng 6 prompt (#25, #28, #29, #30, #31, #33) có 2 file trùng chưa gộp; 5 prompt (#35–#39) chỉ có 1 bản (phiên B, lượt 1, có thể còn thiếu vài lĩnh vực nhỏ).
- [x] ✅ Prompt #25–#27 (Quốc phòng, Công an, Ngoại giao) — xem `23-thu-tuc-quocphong-conganquoc-ngoaigiao.md` (lượt 1+2) + `35-thu-tuc-quocphong-v2.md` (bản v2 riêng cho #25, chưa gộp).
- [x] ✅ Prompt #28–#31 (Nội vụ, Tư pháp, Tài chính, Công Thương) — xem `37-40-thu-tuc-*-v2.md` (đầy đủ hơn) + `31-34-thu-tuc-*.md` (lượt 1, bản khác, chưa gộp).
- [x] ✅ Prompt #32–#33 (Nông nghiệp-Môi trường, Xây dựng) — xem `24-thu-tuc-nnmt-xaydung.md` (đủ cả 2, không trùng) + `36-thu-tuc-xaydung-lot2-gtvt.md` (bản khác riêng cho phần GTVT của #33, chưa gộp).
- [x] ✅ Prompt #34 (VHTTDL) — xem `25-thu-tuc-vhttdl.md`, không trùng.
- [x] ✅ Prompt #35–#39 (Khoa học-Công nghệ, Giáo dục-Đào tạo, Y tế, Dân tộc-Tôn giáo, Ngân hàng Nhà nước) — xem `26-thu-tuc-khcn.md`, `27-thu-tuc-giaoduc.md`, `28-thu-tuc-yte.md`, `29-thu-tuc-dantoctongiao.md`, `30-thu-tuc-nhnn.md` (đều lượt 1, mỗi Bộ còn ghi rõ vài lĩnh vực nhỏ chưa tra).
- [ ] Việc còn lại: gộp 6 cặp file trùng (#25, #28, #29, #30, #31, #33) thành 1 bản thống nhất mỗi Bộ; cân nhắc bổ sung lượt 2 cho #35–#39 nếu muốn đầy đủ hơn. **🎉 Phase 6 coi như đã có dữ liệu ở mức Mức 3 cho toàn bộ 17 Bộ/cơ quan — phần còn lại là dọn dẹp/gộp file, không phải tra cứu mới.**
- [ ] 💡 Ý tưởng (chưa triển khai, đánh giá sau nếu workload cho phép): 1 ô "hỏi nhanh" trong tab thủ tục, gọi API DeepSeek (hoặc LLM khác) để trả lời câu hỏi thủ tục của người dân nhanh hơn, kèm dẫn link đúng chỗ ở trên. Đây là tính năng build (cần API key, cần code gọi API từ `index.html`/JS), KHÔNG phải việc thu thập dữ liệu thô — để dành xem xét ở giai đoạn build UI Phase 6, không ưu tiên ngay bây giờ.

#### Phase 7 — Văn bản pháp luật (Documents)

- [x] ✅ 15 văn bản đã nạp vào `data/documents.json`: Hiến pháp 2013; các luật (Lý lịch tư pháp, 107/2025/QH15, Doanh nghiệp 2020, 72/2025/QH15, Trật tự ATGT đường bộ 2024); nghị quyết (202/2025/QH15, 203/2025/QH15, 17/2026/QH16); nghị định (168/2025, 41/2025); thông tư (12/2025/TT-BCA, 101/2026/TT-BCA, 68/2025/TT-BTC, 154/2025/TT-BTC)
- [x] ✅ Quan hệ pháp lý giữa văn bản: `amends` (sửa đổi, bổ sung), `guides` (hướng dẫn thi hành), `based_on` (ban hành trên cơ sở), `issues` (cơ quan ban hành) — 13 quan hệ mới, tổng 69 quan hệ
- [x] ✅ Bảng danh sách văn bản sắp theo **thứ bậc hiệu lực pháp lý** (hiến pháp → luật → nghị quyết → nghị định → thông tư), có loại, số hiệu, cơ quan ban hành, ngày hiệu lực
- [x] ✅ Bảng chi tiết văn bản: cơ quan ban hành (bấm được), ngày ban hành/hiệu lực, link toàn văn, quan hệ pháp lý 2 chiều, thủ tục áp dụng văn bản đó, ghi chú, nguồn
- [x] ✅ Thủ tục nay liên kết văn bản bằng `legal_basis_ids` (bấm từ thủ tục sang văn bản và ngược lại), validator kiểm tra tham chiếu
- [x] ✅ Tìm kiếm nhận **số hiệu văn bản** ("12/2025", "luật 107") và **từ đồng nghĩa dân gian** (bằng lái → giấy phép lái xe, lltp → lý lịch tư pháp, dkkd → đăng ký doanh nghiệp)
- [ ] Ngày ban hành chính xác của 5 văn bản còn để trống/ước lượng (107/2025/QH15, 101/2026/TT-BCA, 168/2025/NĐ-CP, 68/2025/TT-BTC, 154/2025/TT-BTC) — đã ghi ⚠️ trong `notes`. **🎉 Phase 7 HOÀN TẤT phần chính.**

#### Phase 8 — Nguồn thông tin (Sources)

- [ ] Panel nguồn trích dẫn (đánh số [1], [2]... dạng foot note)
- [ ] Ngày kiểm chứng lần cuối (`last_verified`)
- [ ] Link chính thức, không bịa link

#### Phase 9 — Dữ liệu lịch sử (Time machine)

- [ ] `effective_from` / `effective_to` cho từng entity
- [ ] Timeline UI (xem cơ cấu tại 1 thời điểm trong quá khứ)

#### Phase 10 — Nhập dữ liệu thật

- [x] ✅ Cấp trung ương: Quốc hội, Chủ tịch nước (tách `position-chu-tich-nuoc` + `org-vpctn-vn`), Chính phủ, TAND tối cao, VKSND tối cao — đã vào `data/*.json` ở Phase 2
- [x] ✅ Các Bộ / cơ quan ngang Bộ — đủ 17/17, đã vào `data/*.json` ở Phase 2
- [x] ✅ Cấp tỉnh / thành phố trực thuộc trung ương — đủ **34/34** (27 tỉnh + 7 TP), có trụ sở, SĐT, fax, email, website, Chủ tịch UBND, ghi chú sáp nhập/trung tâm hành chính và nguồn. **Đã nạp thêm 33 Bí thư Tỉnh/Thành ủy** (từ `11-bi-thu-tinh-thanh-va-doi-chieu.md` + file 07), kèm ngày nhậm chức. Đã đủ **34/34** Bí thư và cả 2 điểm hở đều ✅ ĐÃ XÁC MINH (Prompt #25, Pro tự tra): TP.HCM = Trần Lưu Quang (chỉ định 14/10/2025, nguồn Báo Điện tử Chính phủ); Tây Ninh = Nguyễn Văn Quyết (chỉ định 30/6/2025, tiếp tục nhiệm kỳ 2025–2030 công bố 10/10/2025, nguồn Cổng TTĐT tỉnh + Tuổi Trẻ)
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
  **Bổ sung 2026-09-18**: user tự tra 1 phần qua acc Pro trực tiếp, lưu vào `17-...md`/`18-...md`/`19-...md` (17/34 tỉnh/thành). Sau đó user yêu cầu **tra cho hết luôn toàn bộ phần còn thiếu** (không dừng ở mức liệt kê nữa với riêng phần TÊN đầy đủ này) — Pro tự tra tiếp 100% qua WebSearch+WebFetch (nguồn chinhphu.vn), lưu vào `20-ten-day-du-nhom1-con-thieu-va-nhom4-con-thieu.md` (Hà Nội, Cao Bằng, Điện Biên, Hà Tĩnh, Lạng Sơn, Nghệ An, Đắk Lắk, Đồng Nai, Tây Ninh) và `21-ten-day-du-tphcm-hoan-tat-34-34.md` (TP.HCM). **🎉 KẾT QUẢ: 34/34 tỉnh/thành đã có ĐẦY ĐỦ danh sách TÊN cấp xã/phường/đặc khu — mục 05 HOÀN TẤT TOÀN DIỆN, không chỉ ở phạm vi rút gọn.** Prompt #20-24 (giao 5 acc Free) vẫn giữ trạng thái ❌ đã hủy trong `Promts-sodobmhc.md` vì việc này Pro đã tự làm xong, không cần giao acc Free nữa.
- [x] ✅ 06 — Tên đầy đủ xã/phường (phần đã tra được trước khi thu hẹp phạm vi) — `17-ten-day-du-nhom1-va-nhom2.md` (Lai Châu + đủ 7/7 tỉnh nhóm 2), `18-ten-day-du-nhom4-4tinh.md` (Huế, Gia Lai, Khánh Hòa, Lâm Đồng). **DỪNG TẠI ĐÂY** theo phạm vi mới — không tra tiếp các tỉnh còn lại. Dữ liệu đã có vẫn giữ, dùng được nếu sau này mở lại phạm vi.

---

#### Ghi chú

- **Phạm vi dự án (bản chốt 2026-09-18)**: đào sâu cấp thượng tầng (5 cơ quan TW + 14 Bộ + 3 cơ quan ngang Bộ) và 34 tỉnh/thành trực thuộc TW; cấp xã chỉ liệt kê; cấp huyện chỉ lưu lịch sử. Mọi prompt/phase sau đều bám phạm vi này.
- Bài học, lỗi gặp phải, cách sửa → ghi trong `Build-logs-sodobmhc.md`, không ghi ở đây.
- Danh sách prompt đã giao cho 5 acc Free (Brave, Opera GX, Edge, Cốc Cốc, Arc) → xem `Promts-sodobmhc.md`.
