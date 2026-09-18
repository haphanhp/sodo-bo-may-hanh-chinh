---
tags: [sodobmhc]
type: du-lieu
so-thu-tu: 2
nhom: bo-co-quan-ngang-bo
nguon-tu-promt: Promts-sodobmhc.md#prompt-3
model: Claude Sonnet 5 (extra reasoning, web search)
acc-trinh-duyet: Free — Edge
ngay-tra-loi: 2026-09-18
trang-thai: ✅ đã ráp danh sách — CHỈ liệt kê, CHƯA tra chi tiết (trụ sở/SĐT/email/chức năng); tra chi tiết ở Prompt #5 trở đi
---

### 02 — Danh sách Bộ & cơ quan ngang Bộ (hiện hành, 2026)

Dữ liệu thô từ **Prompt #3** (`Promts-sodobmhc.md`), trả lời bởi **Claude Sonnet 5 (extra, web search)** qua acc Free trên trình duyệt **Edge**, ngày 2026-09-18. Đây là bước **dọn đường**: chỉ xác nhận danh sách và số lượng Bộ/cơ quan ngang Bộ hiện tại — CHƯA có trụ sở, SĐT, email, chức năng chi tiết. Việc tra chi tiết từng Bộ sẽ tách thành các prompt riêng theo nhóm 5–6 Bộ/lần (Prompt #5 trở đi), xem `Roadmap-sodobmhc.md`.

#### Bối cảnh số liệu

Cơ cấu Chính phủ hiện hành (tính đến 18/09/2026): **14 Bộ + 3 cơ quan ngang Bộ = 17 đơn vị**, được Quốc hội khóa XVI biểu quyết thông qua sáng 7/4/2026. Trước đó, từ 1/3/2025, đã giảm từ 18 Bộ + 4 cơ quan ngang Bộ (nhiệm kỳ cũ) xuống 14 Bộ + 3 cơ quan ngang Bộ theo Nghị quyết 176/2025/QH15[^1][^2]; cơ cấu này được tái xác nhận không đổi cho khóa XVI qua Nghị quyết 15/2026/QH16 và Nghị quyết 09/2026/QH16. Người tra cứu ghi rõ: mọi nguồn kiểm tra đều thống nhất con số 14+3 cho giai đoạn hiện tại (1/3/2025 → 9/2026) — không có mâu thuẫn số liệu ở thời điểm hiện tại; sự khác biệt duy nhất là so với cơ cấu **trước** mốc sáp nhập (18+4).

---

#### 14 Bộ

| # | Tên Bộ | Ghi chú sáp nhập (hiệu lực 1/3/2025 trừ khi ghi khác) |
|---|---|---|
| 1 | Bộ Quốc phòng | Không sáp nhập |
| 2 | Bộ Công an | Không sáp nhập |
| 3 | Bộ Ngoại giao | Không sáp nhập |
| 4 | Bộ Nội vụ | Hợp nhất Bộ Nội vụ (cũ) + Bộ Lao động – Thương binh và Xã hội (giải thể); giữ tên "Bộ Nội vụ" |
| 5 | Bộ Tư pháp | Không sáp nhập (chỉ tái cơ cấu nội bộ) |
| 6 | Bộ Tài chính | Hợp nhất Bộ Tài chính (cũ) + Bộ Kế hoạch và Đầu tư (giải thể); giữ tên "Bộ Tài chính" |
| 7 | Bộ Công Thương | Không sáp nhập |
| 8 | Bộ Nông nghiệp và Môi trường | Hợp nhất Bộ NN&PTNT + Bộ Tài nguyên và Môi trường (cả 2 giải thể), lập tên mới |
| 9 | Bộ Xây dựng | Hợp nhất Bộ Xây dựng (cũ) + Bộ Giao thông vận tải (giải thể); giữ tên "Bộ Xây dựng" |
| 10 | Bộ Văn hóa, Thể thao và Du lịch | Giữ nguyên tên; nhận thêm chức năng quản lý báo chí từ Bộ Thông tin và Truyền thông (giải thể) |
| 11 | Bộ Khoa học và Công nghệ | Hợp nhất Bộ KH&CN (cũ) + phần lớn Bộ Thông tin và Truyền thông (giải thể); giữ tên "Bộ Khoa học và Công nghệ" |
| 12 | Bộ Giáo dục và Đào tạo | Không sáp nhập |
| 13 | Bộ Y tế | Không sáp nhập |
| 14 | Bộ Dân tộc và Tôn giáo | Thành lập mới trên cơ sở nâng cấp Ủy ban Dân tộc (trước là cơ quan ngang Bộ) + nhận thêm chức năng quản lý tôn giáo từ Bộ Nội vụ |

**Ghi chú chung**: Bộ Thông tin và Truyền thông (cũ) bị giải thể và tách làm 2: phần chức năng báo chí → sang Bộ Văn hóa, Thể thao và Du lịch (10); phần còn lại (phần lớn) → sang Bộ Khoa học và Công nghệ (11). Không phải 1-đổi-1 giữa Bộ cũ và Bộ mới ở nhiều trường hợp — khi lên schema `relationships.json`, nên dùng quan hệ kiểu `merged_into` / `split_into` chứ không chỉ `renamed`.

#### 3 cơ quan ngang Bộ

| # | Tên | Ghi chú sáp nhập |
|---|---|---|
| 15 | Ngân hàng Nhà nước Việt Nam | Không sáp nhập |
| 16 | Thanh tra Chính phủ | Không sáp nhập |
| 17 | Văn phòng Chính phủ | Không sáp nhập |

---

#### Trạng thái xác minh

- Trạng thái: đã xác minh (số lượng, tên, việc sáp nhập/không sáp nhập của cả 17 đơn vị) — nhiều nguồn độc lập khớp nhau.
- Mức xác minh: toàn danh sách (chưa xác minh trụ sở/SĐT/email/chức năng — sẽ làm ở các prompt tra chi tiết tiếp theo).
- Lưu ý theo dõi: cơ cấu này thuộc nhiệm kỳ Quốc hội khóa XVI, có thể còn thay đổi trong nhiệm kỳ — cần chạy lại tra cứu định kỳ nếu dự án kéo dài, không coi đây là cố định vĩnh viễn.

---

#### Việc cần làm với file này

- [ ] Tách 14 Bộ + 3 cơ quan ngang Bộ thành các prompt tra chi tiết theo nhóm 5–6 đơn vị/lần (bắt đầu từ Prompt #5), theo template mục 6 trong `Claude-sodobmhc.md`.
- [ ] Khi lên `relationships.json` cho các Bộ vừa hợp nhất/giải thể, dùng quan hệ `merged_into` / `split_into` (không chỉ `renamed`) — đặc biệt trường hợp Bộ Thông tin và Truyền thông (cũ) tách làm 2.
- [ ] Gắn `last_verified` cho toàn bộ danh sách này = 2026-09-18, và ghi rõ cơ cấu có thể đổi trong nhiệm kỳ khóa XVI.
- [ ] Khi ráp JSON, mỗi Bộ/cơ quan ngang Bộ cần `source_ids` trỏ tới footnote tương ứng dưới đây (chủ yếu [^1][^2], các Bộ có sáp nhập thêm [^4]/[^5]/[^7]).

---

##### Nguồn tham khảo

[^1]: [Chính phủ nhiệm kỳ mới có 14 bộ và 3 cơ quan ngang bộ — Báo Điện tử Chính phủ](https://baochinhphu.vn/chinh-phu-nhiem-ky-moi-co-14-bo-va-3-co-quan-ngang-bo-102260407115528555.htm) — truy cập 2026-09-18
[^2]: [Chính thức: Chính phủ có 14 Bộ và 3 cơ quan ngang Bộ (Nghị quyết 176/2025/QH15) — thuvienphapluat.vn](https://thuvienphapluat.vn/phap-luat-nha-dat/chinh-thuc-chinh-phu-co-14-bo-va-3-co-quan-ngang-bo-nghi-quyet-1762025qh15-710.html) — truy cập 2026-09-18
[^3]: [Thành viên Chính phủ nhiệm kỳ 2021–2026, từ 18/2/2025 — Cổng TTĐT Chính phủ](https://xaydungchinhsach.chinhphu.vn/thanh-vien-chinh-phu-nhiem-ky-2021-2026-119250218185513204.htm) — truy cập 2026-09-18 (nguồn dự phòng)
[^4]: [Báo cáo 219/BC-BNV 2025 về phương án sắp xếp, tinh gọn bộ máy Chính phủ — LuatVietnam](https://luatvietnam.vn/co-cau-to-chuc/bao-cao-219-bc-bnv-2025-hoan-thien-phuong-an-sap-xep-tinh-gon-to-chuc-bo-may-chinh-phu-385424-d6.html) — truy cập 2026-09-18
[^5]: [Toàn bộ danh sách Bộ, cơ quan ngang Bộ và Nghị định cơ cấu tổ chức mới nhất 2025–2026 — LuatQuangHuy](https://luatquanghuy.vn/van-ban-phap-luat-moi/toan-bo-danh-sach-bo-co-quan-ngang-bo-va-nghi-dinh-co-cau-to-chuc-moi-nhat-2025-2026/) — truy cập 2026-09-18
[^6]: [Danh sách các Bộ, cơ quan ngang Bộ qua các nhiệm kỳ — thuvienphapluat.vn](https://thuvienphapluat.vn/chinh-sach-phap-luat-moi/vn/ho-tro-phap-luat/tu-van-phap-luat/29609/danh-sach-cac-bo-co-quan-ngang-bo-co-quan-thuoc-chinh-phu-cua-nuoc-ta-hien-nay) — truy cập 2026-09-18 (nguồn dự phòng)
[^7]: [Hợp nhất Bộ Tài chính, Kế hoạch & Đầu tư dự kiến giảm 22 đầu mối — VnExpress, đăng lại tại Cổng TTĐT huyện Hà Tĩnh](https://hatinh.gov.vn/vi/bai-viet/hop-nhat-bo-tai-chinh-ke-hoach-dau-tu-du-kien-giam-22-dau-moi) — truy cập 2026-09-18
