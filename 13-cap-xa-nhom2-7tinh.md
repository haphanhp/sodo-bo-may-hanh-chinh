---
tags: [sodobmhc]
type: du-lieu
so-thu-tu: 13
nhom: cap-xa-phuong-dackhu-nhom-2-5
nguon-tu-promt: Promts-sodobmhc.md#prompt-16
model: Claude Sonnet 5 (Anthropic)
acc-trinh-duyet: Free — Opera GX (theo lời user khai báo). Đã có 2 lượt trả lời độc lập (dán nhầm vào 2 acc cùng lúc, dùng để đối chiếu chéo).
ngay-tra-loi: 2026-09-18
trang-thai: 🟡 đã ráp 7/7 tỉnh — Thái Nguyên: Pro đã tự tra thêm (WebFetch), nghiêng rõ về 77x/15p (nguồn chính thức 04/08/2025 vẫn giữ số này), nhưng chưa 100% loại trừ đề xuất 69x/23p của HĐND tỉnh (25/6/2025)
---

### 13 — Cấp xã/phường/đặc khu nhóm 2/5: Quảng Ninh, Thanh Hóa, Sơn La, Tuyên Quang, Lào Cai, Thái Nguyên, Phú Thọ

Dữ liệu thô từ **Prompt #16** (`Promts-sodobmhc.md`). Có **2 lượt trả lời độc lập** cho nhóm này (user dán nhầm cùng 1 prompt vào 2 acc cùng lúc — không sao, tận dụng để đối chiếu chéo theo luật 18): lượt 1 tự khai Brave, lượt 2 tự khai "không phải trình duyệt, là AI chạy trong giao diện chat" (theo luật đã thống nhất với user: bỏ qua tự khai của model, chỉ dùng nhãn browser do user tự gán = Opera GX). Cả 2 lượt khớp nhau về số liệu cho 6/7 tỉnh; riêng Thái Nguyên lượt 2 có thêm 1 cảnh báo xung đột (xem dưới).

| Tỉnh | Nghị quyết UBTVQH15 | Tổng | Xã | Phường | Đặc khu |
|---|---|---|---|---|---|
| Quảng Ninh | 1679/NQ-UBTVQH15 | 54 | 22 | 30 | 2 (Vân Đồn, Cô Tô) |
| Thanh Hóa | 1686/NQ-UBTVQH15 | 166 | 147 | 19 | 0 |
| Sơn La | 1681/NQ-UBTVQH15 | 75 | 67 | 8 | 0 |
| Tuyên Quang | 1684/NQ-UBTVQH15 | 124 | 117 | 7 | 0 |
| Lào Cai | 1673/NQ-UBTVQH15 | 99 | 89 | 10 | 0 |
| Thái Nguyên | 1683/NQ-UBTVQH15 | 92 | 77 (nhiều khả năng đúng, xem 🟡 dưới) | 15 (nhiều khả năng đúng) | 0 |
| Phú Thọ | 1676/NQ-UBTVQH15 | 148 | 133 | 15 | 0 |

---

#### Chi tiết từng tỉnh

**1. Tỉnh Quảng Ninh** — 54 đơn vị = 22 xã + 30 phường + **2 đặc khu (Vân Đồn, Cô Tô)**. Ví dụ tên: phường Hạ Long, phường Bãi Cháy, phường Hà Lầm, phường Hoàng Quế, phường Vàng Danh, phường Móng Cái 1, phường Móng Cái 2, xã Cái Chiên (không sắp xếp). Ghi chú: phương án ban đầu từng dự kiến 3 đặc khu (thêm Móng Cái) nhưng phương án cuối cùng chỉ giữ 2.[^1][^2][^3]

**2. Tỉnh Thanh Hóa** — 166 đơn vị = 147 xã + 19 phường, không đặc khu. Có 21 xã không thực hiện sắp xếp (các xã biên giới/đặc thù: Mường Lý, Trung Lý, Pù Nhi, Tam Chung, Quang Chiểu...).[^4]

**3. Tỉnh Sơn La** — 75 đơn vị = 67 xã + 8 phường, không đặc khu. 7 xã không sắp xếp: Mường Lạn, Phiêng Khoài, Suối Tọ, Ngọc Chiến, Tân Yên, Mường Bám, Mường Lèo.[^4]

**4. Tỉnh Tuyên Quang** (hợp nhất Hà Giang + Tuyên Quang) — 124 đơn vị = 117 xã + 7 phường, không đặc khu. 13 xã không sắp xếp: Trung Hà, Kiến Thiết, Hùng Đức, Minh Sơn, Minh Tân, Thuận Hòa, Tùng Bá, Thượng Sơn, Cao Bồ, Ngọc Long, Giáp Trung, Tiên Nguyên, Quảng Nguyên.[^4]

**5. Tỉnh Lào Cai** (hợp nhất Lào Cai + Yên Bái) — 99 đơn vị = 89 xã + 10 phường, không đặc khu. 8 xã không sắp xếp: Nậm Xé, Ngũ Chỉ Sơn, Chế Tạo, Lao Chải, Nậm Có, Tà Xi Láng, Cát Thịnh, Phong Dụ Thượng.[^5][^6]

**6. Tỉnh Thái Nguyên** (hợp nhất Bắc Kạn + Thái Nguyên) — 92 đơn vị (tổng số này không có xung đột), nhưng cơ cấu xã/phường **CÓ XUNG ĐỘT GIỮA 2 NGUỒN**:

> 🟡 **XUNG ĐỘT SỐ LIỆU — ĐÃ TRA THÊM (Pro tự tra bằng WebFetch/WebSearch, 2026-09-18), NGHIÊNG RÕ VỀ NGUỒN A NHƯNG CHƯA TUYỆT ĐỐI CHẮC CHẮN**
> - **Nguồn A** — Nghị quyết 1683/NQ-UBTVQH15 (ban hành 16/6/2025, bản gốc đã biểu quyết, Điều 1 khoản 91): **77 xã + 15 phường** (75 xã mới hình thành + 2 xã giữ nguyên: Sảng Mộc, Thượng Quan). Đã tự tra lại toàn văn nghị quyết trên xaydungchinhsach.chinhphu.vn — khớp đúng 77/15.[^4][^7][^9]
> - **Nguồn B** — báo Tiền Phong/lsvn.vn/Đại biểu Nhân dân đưa tin ngày **25/6/2025**: HĐND tỉnh Thái Nguyên khóa XV (Kỳ họp thứ 4) thông qua nghị quyết **thành lập 8 phường mới**: Chợ Đồn, Định Hóa, Đồng Hỷ, Phú Bình, Phú Lương, Quân Chu, Trại Cau, Võ Nhai (toàn là tên huyện/thị trấn cũ) — báo nói rõ "sau khi hoàn thành việc thành lập các đơn vị hành chính đô thị cấp xã, tỉnh Thái Nguyên có **69 xã và 23 phường**". Không bài báo nào nêu số hiệu nghị quyết cụ thể.[^8][^10][^11]
> - **Bằng chứng nghiêng về Nguồn A**: bài viết chính thức của Cổng TTĐT Chính phủ "Danh sách 92 xã, phường mới của tỉnh Thái Nguyên" — đăng/cập nhật **04/08/2025**, tức SAU ngày HĐND thông qua đề xuất 8 phường (25/6/2025) hơn 1 tháng — vẫn ghi rõ **77 xã + 15 phường**, không đổi.[^9] Điều này gợi ý mạnh rằng đề xuất "8 phường mới" của HĐND tỉnh (nếu đúng là chuyển đổi ranh giới xã→phường, thuộc thẩm quyền UBTVQH theo Hiến pháp/Luật, không phải HĐND cấp tỉnh) **CHƯA được UBTVQH phê chuẩn thành văn bản chính thức**, hoặc đã bị điều chỉnh/không thực hiện.
> - **Vẫn CHƯA tuyệt đối chắc chắn vì**: (1) chưa tìm được văn bản nào tường minh BÁC BỎ hoặc XÁC NHẬN đề xuất 8 phường; (2) chưa loại trừ khả năng đây là 1 loại thủ tục hành chính khác (ví dụ phân loại "đơn vị hành chính đô thị" nội bộ, không làm đổi danh mục xã/phường chính thức) mà 2 bài báo diễn đạt chưa chuẩn xác. Theo luật 18, KHÔNG tự chốt 100% — ghi rõ: **77 xã + 15 phường là số liệu HIỆN HÀNH có nhiều khả năng đúng nhất** (2 nguồn chính thức, 1 nguồn sau ngày đề xuất), còn 69 xã + 23 phường là 1 đề xuất địa phương chưa xác minh được đã thành luật hay chưa.
> - **Việc cần làm nếu muốn chốt 100%**: tra thainguyen.gov.vn hoặc tìm số hiệu nghị quyết HĐND tỉnh ngày 25/6/2025 + tìm nghị quyết UBTVQH15 (nếu có) phê chuẩn/bác bỏ đề xuất này.

2 xã không sắp xếp (theo cả 2 nguồn): Sảng Mộc, Thượng Quan.

**7. Tỉnh Phú Thọ** (hợp nhất Vĩnh Phúc + Hòa Bình + Phú Thọ) — 148 đơn vị = 133 xã + 15 phường, không đặc khu. 2 xã không sắp xếp: Thu Cúc, Trung Sơn.[^4]

---

#### Việc cần làm với file này

- [x] ✅ Tổng số + cơ cấu 6/7 tỉnh — đã xác minh, khớp giữa 2 lượt trả lời độc lập.
- [x] 🟡 **Thái Nguyên**: đã tự tra thêm (Pro, WebFetch 2026-09-18) — nghiêng rõ về 77 xã/15 phường (nguồn chính thức chinhphu.vn cập nhật 04/08/2025 vẫn giữ số này, sau đề xuất 8 phường của HĐND). Chưa 100% loại trừ đề xuất 69 xã/23 phường — nếu cần chốt tuyệt đối, tra thainguyen.gov.vn tìm số hiệu nghị quyết HĐND 25/6/2025 + kiểm tra có nghị quyết UBTVQH15 nào phê chuẩn/bác bỏ không.
- [ ] Danh sách TÊN đầy đủ cho Lào Cai, Thái Nguyên, Phú Thọ (mỗi tỉnh 90–150 tên, acc trả lời báo cần fetch trực tiếp từng nghị quyết dài — chưa làm trong lượt này).
- [ ] Thanh Hóa, Sơn La, Tuyên Quang, Thái Nguyên, Phú Thọ: hiện chỉ có 1 nguồn tổng hợp (lsvn.vn/thuvienphapluat.vn) được đối chiếu — nếu cần độ tin cậy cao hơn, tra thêm nguồn thứ hai trích trực tiếp điều khoản riêng từng tỉnh.

---

##### Nguồn tham khảo

Tất cả truy cập 2026-09-18.

[^1]: [thuvienphapluat.vn – Nghị quyết 1679/NQ-UBTVQH15, trích điều khoản (Quảng Ninh thuộc vùng kinh tế nào)](https://thuvienphapluat.vn/hoi-dap-phap-luat/tinh-quang-ninh-thuoc-vung-kinh-te-nao-138073659.html)
[^2]: [sggp.org.vn – Lễ công bố 30/6/2025: Quảng Ninh có 54 đơn vị (22 xã, 30 phường) và 2 đặc khu Vân Đồn/Cô Tô](https://www.sggp.org.vn/quang-ninh-cong-bo-52-don-vi-hanh-chinh-xa-phuong-va-2-dac-khu-post801778.html)
[^3]: [xaydungchinhsach.chinhphu.vn – danh sách đầy đủ 54 đơn vị xã/phường/đặc khu tỉnh Quảng Ninh (Nghị quyết 1679/NQ-UBTVQH15)](https://xaydungchinhsach.chinhphu.vn/sap-xep-dvhc-danh-sach-54-xa-phuong-dac-khu-cua-tinh-quang-ninh-119250623075745303.htm)
[^4]: [lsvn.vn – Số lượng xã, phường của 34 tỉnh thành sau sáp nhập (tổng hợp toàn quốc)](https://lsvn.vn/so-luong-xa-phuong-cua-34-tinh-thanh-sau-sap-nhap-a159153.html) / [thuvienphapluat.vn – Số xã phường sau sáp nhập từ 1/7/2025 của 34 tỉnh thành ra sao, tổng số xã sau sáp nhập](https://thuvienphapluat.vn/phap-luat-nha-dat/so-xa-phuong-sau-sap-nhap-tu-0172025-cua-34-tinh-thanh-ra-sao-tong-so-xa-sau-sap-nhap-13043.html)
[^5]: [moj.gov.vn – toàn văn Nghị quyết 1673/NQ-UBTVQH15 (Lào Cai)](https://www.moj.gov.vn/qt/tintuc/Lists/VanBanChinhSachMoi/Attachments/5096/LAO%20CAI.docx)
[^6]: [fptshop.com.vn – tổng hợp xã/phường mới của Lào Cai (81 xã/10 phường hình thành sau sắp xếp + 8 xã giữ nguyên)](https://fptshop.com.vn/tin-tuc/thu-thuat/xa-phuong-moi-cua-lao-cai-181262)
[^7]: [xaydungchinhsach.chinhphu.vn – toàn văn Nghị quyết 1683/NQ-UBTVQH15, sắp xếp ĐVHC cấp xã tỉnh Thái Nguyên (77 xã, 15 phường)](https://xaydungchinhsach.chinhphu.vn/toan-van-nghi-quyet-so-1683-nq-ubtvqh15-sap-xep-cac-dvhc-cap-xa-cua-tinh-thai-nguyen-nam-2025-119250616205855207.htm)
[^8]: [baomoi.com (dẫn báo Tiền Phong) – Thái Nguyên chính thức có thêm 8 phường mới (69 xã, 23 phường)](https://baomoi.com/thai-nguyen-chinh-thuc-co-them-8-phuong-moi-c55479821.epi)
[^9]: [xaydungchinhsach.chinhphu.vn – Danh sách 92 xã, phường mới của tỉnh Thái Nguyên (đăng/cập nhật 04/08/2025, sau đề xuất 8 phường — vẫn ghi 77 xã + 15 phường)](https://xaydungchinhsach.chinhphu.vn/sap-xep-dvhc-danh-sach-92-xa-phuong-moi-cua-tinh-thai-nguyen-119250623083006535.htm)
[^10]: [daibieunhandan.vn – HĐND tỉnh Thái Nguyên thông qua nghị quyết thành lập 8 phường mới (25/6/2025): Chợ Đồn, Định Hóa, Đồng Hỷ, Phú Bình, Phú Lương, Quân Chu, Trại Cau, Võ Nhai — "tỉnh Thái Nguyên có 69 xã và 23 phường"](https://daibieunhandan.vn/hdnd-tinh-thai-nguyen-thong-qua-nghi-quyet-thanh-lap-8-phuong-moi-10421549.html)
[^11]: [lsvn.vn – Thái Nguyên thông qua Nghị quyết thành lập 8 phường mới (đối chiếu, cùng nội dung)](https://lsvn.vn/thai-nguyen-thong-qua-nghi-quyet-thanh-lap-8-phuong-moi-a174891.html)
