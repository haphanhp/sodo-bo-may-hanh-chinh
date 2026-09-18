---
tags: [sodobmhc]
type: du-lieu
so-thu-tu: 6
nhom: danh-sach-tinh-thanh-sau-sap-nhap-2025
nguon-tu-promt: Promts-sodobmhc.md#prompt-9
model: Claude Sonnet 5 (Anthropic)
acc-trinh-duyet: Free — Brave (xác nhận bởi user sau khi Pro hỏi lại). Lưu ý: bản trả lời TỰ nó khai "không có trình duyệt" — có thể do acc chạy ở chế độ chat/tool call không tự nhận diện được môi trường, không phải do user khai sai.
ngay-tra-loi: 2026-09-18
trang-thai: ✅ đã ráp danh sách 34/34 đơn vị. Chi tiết trụ sở/SĐT/lãnh đạo: xem file 07/08/09. Trung tâm hành chính: TẤT CẢ đơn vị từng ❌ đã giải quyết xong. ⚠️ Đồng Nai đã đổi từ Tỉnh → Thành phố trực thuộc TW (30/4/2026), xem cập nhật đầu file.
---

### 06 — Danh sách 34 tỉnh, thành phố trực thuộc trung ương (sau sáp nhập 12/6/2025)

Dữ liệu thô từ **Prompt #9** (`Promts-sodobmhc.md`), trả lời bởi Claude Sonnet 5 (Anthropic), ngày 2026-09-18. Đây là bước LIỆT KÊ DANH SÁCH (giống Prompt #3 cho danh sách Bộ) — chưa có trụ sở/SĐT/lãnh đạo cụ thể từng tỉnh/thành, để dành cho các Prompt sau (theo nhóm, tương tự cách đã làm với 17 Bộ/cơ quan ngang Bộ).

**Nguồn gốc pháp lý**: Nghị quyết số **202/2025/QH15** ngày 12/6/2025 của Quốc hội (Kỳ họp thứ 9, khóa XV, 461/465 đại biểu tán thành) — sắp xếp 63 xuống còn **34 đơn vị hành chính cấp tỉnh = 28 tỉnh + 6 thành phố trực thuộc trung ương**, hiệu lực từ 12/6/2025, chính quyền địa phương mới vận hành từ 1/7/2025.[^1]

> 🚨 **CẬP NHẬT (từ file 09, Prompt #12)**: Từ **30/4/2026**, Quốc hội khóa XVI đã nâng **tỉnh Đồng Nai lên thành "Thành phố Đồng Nai" trực thuộc Trung ương** — thành phố thứ 7 (sau Hà Nội, TP.HCM, Hải Phòng, Đà Nẵng, Cần Thơ, Huế). Cơ cấu 34 đơn vị hiện nay là **27 tỉnh + 7 thành phố trực thuộc TW** (không còn 28+6 như tại thời điểm 1/7/2025). Đây KHÔNG phải sáp nhập/tách — vẫn là 1 entity Đồng Nai, chỉ đổi `type`/`jurisdiction`; khi ráp JSON dùng `effective_from: 2026-04-30`, không dùng relationship `merged_into`/`upgraded_from`. Xem `09-tinh-thanh-nhom3-chi-tiet.md`.

---

#### A. 11 tỉnh/thành KHÔNG sáp nhập (giữ nguyên)

| # | Tên chính thức | Loại |
|---|---|---|
| 1 | Thành phố Hà Nội | Thành phố TW |
| 2 | Thành phố Huế | Thành phố TW |
| 3 | Tỉnh Cao Bằng | Tỉnh |
| 4 | Tỉnh Điện Biên | Tỉnh |
| 5 | Tỉnh Hà Tĩnh | Tỉnh |
| 6 | Tỉnh Lai Châu | Tỉnh |
| 7 | Tỉnh Lạng Sơn | Tỉnh |
| 8 | Tỉnh Nghệ An | Tỉnh |
| 9 | Tỉnh Quảng Ninh | Tỉnh |
| 10 | Tỉnh Thanh Hóa | Tỉnh |
| 11 | Tỉnh Sơn La | Tỉnh |

Trạng thái: đã xác minh.[^2]

---

#### B. 23 tỉnh/thành hình thành sau sáp nhập (19 tỉnh + 4 thành phố)

| # | Tên mới | Loại | Tỉnh/thành cũ hợp thành | Trung tâm hành chính | Mức xác minh trung tâm |
|---|---|---|---|---|---|
| 1 | Tuyên Quang | Tỉnh | Hà Giang + Tuyên Quang | TP Tuyên Quang (tỉnh Tuyên Quang cũ) | ⚠️ theo NQ 60-NQ/TW (văn kiện Đảng, không phải luật) |
| 2 | Lào Cai | Tỉnh | Lào Cai + Yên Bái | TP Yên Bái (tỉnh Yên Bái cũ) | ⚠️ theo NQ 60-NQ/TW |
| 3 | Thái Nguyên | Tỉnh | Bắc Kạn + Thái Nguyên | TP Thái Nguyên (tỉnh Thái Nguyên cũ) | ⚠️ theo NQ 60-NQ/TW |
| 4 | Phú Thọ | Tỉnh | Vĩnh Phúc + Hòa Bình + Phú Thọ | TP Việt Trì (tỉnh Phú Thọ cũ) | ⚠️ theo NQ 60-NQ/TW |
| 5 | Bắc Ninh | Tỉnh | Bắc Giang + Bắc Ninh | **phường Bắc Giang** (TP Bắc Giang cũ) | ✅ đã xác minh, xem file 08 |
| 6 | Hưng Yên | Tỉnh | Thái Bình + Hưng Yên | **phường Phố Hiến** (TP Hưng Yên cũ) | ✅ đã xác minh, xem file 08 |
| 7 | Hải Phòng | Thành phố TW | Hải Phòng + Hải Dương | **Khu đô thị Bắc Sông Cấm, phường Thủy Nguyên** (ĐỊA ĐIỂM MỚI, không phải giữ nguyên như suy đoán trước) | ✅ đã xác minh, xem file 08 |
| 8 | Ninh Bình | Tỉnh | Hà Nam + Nam Định + Ninh Bình | TP Hoa Lư (tỉnh Ninh Bình cũ) | ✅ đối chiếu khớp diện tích NQ 202 |
| 9 | Quảng Trị | Tỉnh | Quảng Bình + Quảng Trị | TP Đồng Hới (tỉnh Quảng Bình cũ) | ✅ đối chiếu khớp diện tích NQ 202 |
| 10 | Đà Nẵng | Thành phố TW | Đà Nẵng + Quảng Nam | Quận Hải Châu, TP Đà Nẵng | ✅ đối chiếu khớp diện tích NQ 202 |
| 11 | Quảng Ngãi | Tỉnh | Kon Tum + Quảng Ngãi | TP Quảng Ngãi | ✅ đối chiếu khớp diện tích NQ 202 |
| 12 | Gia Lai | Tỉnh | Bình Định + Gia Lai | **phường Quy Nhơn** (TP Quy Nhơn cũ) | ✅ đã xác minh, xem file 08 |
| 13 | Khánh Hòa | Tỉnh | Ninh Thuận + Khánh Hòa | **TP Nha Trang** (giữ nguyên) | ✅ đã xác minh, xem file 09 |
| 14 | Lâm Đồng | Tỉnh | Đắk Nông + Bình Thuận + Lâm Đồng | **TP Đà Lạt** (giữ nguyên) | ✅ đã xác minh, xem file 09 |
| 15 | Đắk Lắk | Tỉnh | Phú Yên + Đắk Lắk | **TP Buôn Ma Thuột** (giữ nguyên) | ✅ đã xác minh, xem file 09 |
| 16 | Thành phố Hồ Chí Minh | Thành phố TW | TP.HCM + Bà Rịa-Vũng Tàu + Bình Dương | TP.HCM hiện nay (giữ nguyên) | ⚠️ theo NQ 60-NQ/TW |
| 17 | **Thành phố Đồng Nai** ⚠️ đổi từ Tỉnh, hiệu lực 30/4/2026 | **Thành phố TW** (trước 30/4/2026 là Tỉnh) | Bình Phước + Đồng Nai | **phường Trần Biên** (TP Biên Hòa cũ) | ✅ đã xác minh, xem file 09 |
| 18 | Tây Ninh | Tỉnh | Long An + Tây Ninh | **phường Long An** (TP Tân An cũ) | ✅ đã xác minh, xem file 09 |
| 19 | Cần Thơ | Thành phố TW | Cần Thơ + Sóc Trăng + Hậu Giang | TP Cần Thơ hiện nay (giữ nguyên) | ⚠️ theo NQ 60-NQ/TW |
| 20 | Vĩnh Long | Tỉnh | Bến Tre + Trà Vinh + Vĩnh Long | **TP Vĩnh Long** (giữ nguyên) | ✅ đã xác minh, xem file 09 |
| 21 | Đồng Tháp | Tỉnh | Tiền Giang + Đồng Tháp | **phường Mỹ Tho** (TP Mỹ Tho cũ) | ✅ đã xác minh, xem file 09 |
| 22 | Cà Mau | Tỉnh | Bạc Liêu + Cà Mau | **TP Cà Mau** (giữ nguyên) | ✅ đã xác minh, xem file 09 |
| 23 | An Giang | Tỉnh | Kiên Giang + An Giang | **phường Rạch Giá** (TP Rạch Giá cũ) | ✅ đã xác minh, xem file 09 |

Merger + diện tích/dân số: đã xác minh trực tiếp từ chính văn Nghị quyết 202/2025/QH15.[^1][^3] Trung tâm hành chính "⚠️": dẫn theo Nghị quyết 60-NQ/TW (12/4/2025, văn kiện Đảng — không phải văn bản pháp luật nhà nước, mức tin cậy thấp hơn).[^4] Trung tâm hành chính "❌": chưa tra ra tên thành phố/phường trung tâm cụ thể trong lần tra này — **không đoán, cần Prompt riêng sau**.

---

#### Việc cần làm với file này

- [x] ✅ 12 đơn vị từng ❌ ở cột trung tâm hành chính đã tra xong (Prompt #10/11/12, xem file 07/08/09).
- [ ] Đối chiếu lại 7 đơn vị "⚠️" (chỉ có nguồn văn kiện Đảng NQ 60-NQ/TW) với văn bản pháp luật nhà nước chính thức nếu có (Nghị quyết/Quyết định của UBTVQH hoặc Chính phủ công bố trung tâm hành chính) — không coi văn kiện Đảng là nguồn chốt cuối cùng khi ráp JSON.
- [ ] Khi ráp JSON: mỗi tỉnh/thành mới là 1 `org` (`type: provincial`), quan hệ với (các) tỉnh cũ dùng `merged_into`; 11 tỉnh/thành không sáp nhập giữ `status: active` không đổi.
- [x] ✅ **Attribution đã xác nhận**: user xác nhận Prompt #9 chạy trên **Brave** (Free). Tính đúng 1 lượt cho Brave trong quy tắc xoay vòng — đây là lần thứ 3 Brave được giao việc (#1, #8, #9), nên các Prompt #10-12 tiếp theo ưu tiên giao cho Opera GX/Edge/Cốc Cốc/Arc để cân bằng lại.
- [ ] Prompt tiếp theo (Prompt #10): tra chi tiết trụ sở UBND/SĐT/lãnh đạo theo nhóm vài tỉnh/thành 1 lần, giống cách đã làm với các Bộ.

---

##### Nguồn tham khảo

[^1]: [Nghị quyết 202/2025/QH15 — toàn văn (thuvienphapluat.vn)](https://thuvienphapluat.vn/van-ban/Bo-may-hanh-chinh/Nghi-quyet-202-2025-QH15-660927.aspx) — truy cập 2026-09-18
[^2]: [Nghị quyết 202/2025/QH15 (pbgdpl.cantho.gov.vn)](https://pbgdpl.cantho.gov.vn/nghi-quyet-so-2022025qh15-cua-quoc-hoi-ve-viec-sap-xep-don-vi-hanh-chinh-cap-tinh) — truy cập 2026-09-18
[^3]: [Chi tiết 34 đơn vị hành chính cấp tỉnh từ 12/6/2025 — Cổng TTĐT Chính phủ](https://xaydungchinhsach.chinhphu.vn/chi-tiet-34-don-vi-hanh-chinh-cap-tinh-tu-12-6-2025-119250612141845533.htm); [bản .doc gốc NQ 202/2025/QH15 (vbpl.vn)](https://vbpl.vn/TW/Lists/vbpq/Attachments/179501/202_2025_QH15_648951.doc) — truy cập 2026-09-18
[^4]: [Nghị quyết 60-NQ/TW ngày 12/4/2025, Hội nghị TW 11 khóa XIII (thuvienphapluat.vn)](https://thuvienphapluat.vn/van-ban/Bo-may-hanh-chinh/Nghi-quyet-60-NQ-TW-2025-Hoi-nghi-lan-thu-11-Ban-chap-hanh-Trung-uong-Dang-khoa-XIII-651377.aspx); [Danh sách trung tâm hành chính dự kiến (thuvienphapluat.vn)](https://thuvienphapluat.vn/ma-so-thue/phap-luat-thue/sap-nhap-tinh-thanh-2025-ten-goi-moi-cua-34-tinh-thanh-la-gi-261153-202786.html) — truy cập 2026-09-18
