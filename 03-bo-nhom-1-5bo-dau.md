---
tags: [sodobmhc]
type: du-lieu
so-thu-tu: 3
nhom: bo-chi-tiet-nhom-1
nguon-tu-promt: Promts-sodobmhc.md#prompt-5
model: Claude Sonnet 5 (Pro, WebSearch) — ráp lần 1; Claude Sonnet 5 (Anthropic, Arc) — cross-check lần 2
acc-trinh-duyet: Lần 1 — Pro (ngoại lệ, Arc bị kẹt) · Lần 2 — Free — Arc (đã hoạt động lại)
ngay-tra-loi: 2026-09-18
trang-thai: ✅ đã ráp đầy đủ, cả 2 xung đột (trụ sở Bộ Công an, Bộ trưởng Bộ Tư pháp) đã được Prompt #6 giải quyết — nhóm 1/3 Bộ HOÀN TẤT
---

### 03 — Bộ nhóm 1/3: Quốc phòng, Công an, Ngoại giao, Nội vụ, Tư pháp

**Lịch sử file**: Lần 1 (Pro tạm tra, do Arc bị kẹt ~30 phút) → Lần 2 (Arc hoạt động lại, tự tra độc lập theo đúng Prompt #5) → Lần 3 (Prompt #6, giải quyết 2 xung đột phát sinh từ lần 1+2: trụ sở Bộ Công an, Bộ trưởng Bộ Tư pháp, SĐT Bộ Tư pháp — cả 3 điểm đều đã CHỐT). **Trạng thái cuối: nhóm 1/3 Bộ đã hoàn tất, sẵn sàng ráp JSON ở Phase 10.**

---

#### 1. Bộ Quốc phòng — ✅ vững (2 nguồn độc lập khớp SĐT + email)

- ID đề xuất: `org-bo-quocphong`
- Loại entity: organization
- Cấp trên: Chính phủ Việt Nam
- Trụ sở: số 1 hoặc 1B Nguyễn Tri Phương, Ba Đình, Hà Nội — 2 nguồn ghi số nhà hơi khác (Pro: "1B"[^1]; Arc, qua chinhphu.vn: "1", ghi chú chinhphu.vn có 2 bản cache khác nhau[^16]) — sai khác nhỏ, không phải xung đột nghiêm trọng, có thể do lỗi đánh máy giữa các nguồn
- SĐT: 069.553215 — **khớp tuyệt đối giữa 2 nguồn độc lập** (Pro: mod.gov.vn[^1]; Arc: chinhphu.vn[^16]) → độ tin cậy cao
- Email: info@mod.gov.vn — **khớp tuyệt đối giữa 2 nguồn**[^1][^16]
- Website: mod.gov.vn / dichvucong.mod.gov.vn[^1]; Arc bổ sung thêm bqp.vn là alias cũng được dùng[^16]
- Chức năng / nhiệm vụ / quyền hạn: quản lý nhà nước về quốc phòng, xây dựng nền quốc phòng toàn dân, chỉ huy Quân đội nhân dân Việt Nam và dân quân tự vệ; bảo vệ độc lập, chủ quyền, toàn vẹn lãnh thổ.
- Bộ trưởng đương nhiệm: Đại tướng Phan Văn Giang — kiêm Phó Thủ tướng Chính phủ, nhiệm kỳ 2026–2031 — khớp cả 2 nguồn[^2][^16]
- Trạng thái xác minh: đã xác minh (SĐT, email, Bộ trưởng — 2 nguồn khớp) / gần đã xác minh (trụ sở — lệch nhẹ số nhà 1 vs 1B)
- Mức xác minh: toàn cơ quan
- Ghi chú: SĐT/địa chỉ này KHÁC hoàn toàn với bẫy "080.43162/16 Lê Hồng Phong" — an toàn để dùng.

#### 2. Bộ Công an — ✅ ĐÃ CHỐT (Prompt #6)

- ID đề xuất: `org-bo-conga`
- Loại entity: organization
- Cấp trên: Chính phủ Việt Nam
- Trụ sở: ✅ **ĐÃ CHỐT** (Prompt #6) — số 96 Nguyễn Du, phường Cửa Nam, Hà Nội[^3][^21]. Đây là trụ sở MỚI, khánh thành 16/8/2025 (có Tổng Bí thư Tô Lâm và Bộ trưởng Lương Tam Quang dự), thay thế trụ sở cũ. Địa chỉ "44 Yết Kiêu, Hoàn Kiếm" mà Arc từng tìm trên chinhphu.vn[^17] là **thông tin lỗi thời** (địa chỉ CŨ trước khi tòa nhà mới hoàn thành) — chinhphu.vn chưa cập nhật sau khi Bộ dời trụ sở. Xác nhận bởi 3 nguồn báo chí độc lập cùng khớp ngày/sự kiện[^21].
- SĐT: 069.233647 (Pro, mps.gov.vn, nguồn chính chủ — ưu tiên số này) – 069.2341165 (khớp cả 2 nguồn)
- Email: bandoc@mps.gov.vn[^3]
- Website: mps.gov.vn / bocongan.gov.vn[^3]
- Chức năng / nhiệm vụ / quyền hạn: quản lý nhà nước về an ninh quốc gia, trật tự an toàn xã hội; đấu tranh phòng chống tội phạm; quản lý xuất nhập cảnh, cư trú, phòng cháy chữa cháy.
- Bộ trưởng đương nhiệm: Đại tướng Lương Tam Quang — nhiệm kỳ 2026–2031 — khớp cả 2 nguồn[^4][^17]
- Trạng thái xác minh: đã xác minh (trụ sở, email, Bộ trưởng, website) / gần đã xác minh (SĐT — số đầu lệch nhẹ giữa 2 nguồn, ưu tiên nguồn chính chủ mps.gov.vn)
- Mức xác minh: toàn cơ quan
- Ghi chú: Đây là ví dụ thứ 2 (sau Văn phòng Chủ tịch nước ở file 01) cho thấy chinhphu.vn có thể giữ địa chỉ CŨ sau khi 1 cơ quan dời trụ sở — xem luật 18 mới trong `Claude-sodobmhc.md`.

#### 3. Bộ Ngoại giao — ✅ vững (2 nguồn khớp trụ sở + SĐT + Bộ trưởng)

- ID đề xuất: `org-bo-ngoaigiao`
- Loại entity: organization
- Cấp trên: Chính phủ Việt Nam
- Trụ sở: số 01 Tôn Thất Đàm, Ba Đình, Hà Nội — **khớp tuyệt đối** giữa Pro (mofa.gov.vn)[^5] và Arc (chinhphu.vn + thuvienphapluat.vn)[^18]
- SĐT: 024.3799.2000 (Pro) = 024.37992000 (Arc, chỉ khác cách viết) — khớp[^5][^18]
- Fax: 024.3799.2682[^5]
- Email: 3 địa chỉ bộ phận cụ thể tìm được, KHÔNG có email chung toàn cơ quan: bantinbaochi@mofa.gov.vn (báo chí)[^5], banbientap@mofa.gov.vn (biên tập web)[^5], ttll.mfa@mofa.gov.vn (có thể là Trung tâm Thông tin – Liên lạc, do Arc tìm thấy)[^18]
- Website: mofa.gov.vn[^5][^18]
- Chức năng / nhiệm vụ / quyền hạn: quản lý nhà nước về đối ngoại, ngoại giao, biên giới lãnh thổ, điều ước quốc tế, công tác lãnh sự và bảo hộ công dân, quản lý cơ quan đại diện VN ở nước ngoài.
- Bộ trưởng đương nhiệm: Ông Lê Hoài Trung — phê chuẩn ~24-25/10/2025, tiếp tục giữ chức sang khóa XVI — khớp cả 2 nguồn[^6][^18]
- Trạng thái xác minh: đã xác minh (trụ sở, SĐT, fax, website, Bộ trưởng — 2 nguồn khớp) / mức bộ phận (email, 3 địa chỉ khác nhau, không cái nào là "chung")
- Mức xác minh: toàn cơ quan (trụ sở, SĐT, website, Bộ trưởng) — bộ phận cụ thể (email)
- Ghi chú: —

#### 4. Bộ Nội vụ — ✅ đã giải quyết được phần lớn (Bộ trưởng chốt xong, trụ sở khá vững)

- ID đề xuất: `org-bo-noivu`
- Loại entity: organization
- Cấp trên: Chính phủ Việt Nam
- Trụ sở: **số 8 Tôn Thất Thuyết, Hà Nội** — Pro (nguồn yếu) ghi phường "Nam Từ Liêm"[^7], Arc (chinhphu.vn) ghi phường "Cầu Giấy"[^19] — SỐ NHÀ + TÊN PHỐ khớp giữa 2 nguồn độc lập (tăng độ tin cậy đáng kể so với lần 1), chỉ lệch TÊN PHƯỜNG — nhiều khả năng do đổi tên phường/xã theo đợt sáp nhập 2025 (giống case VKSND tối cao ở file 01), KHÔNG phải đổi trụ sở. Ưu tiên "phường Cầu Giấy" (nguồn mới hơn, chinhphu.vn) nhưng vẫn ghi *gần đã xác minh*, chưa 100% chắc.
- SĐT: (84-024) 62821016 *(mới, chỉ Arc tìm được, qua chinhphu.vn)*[^19]
- Email: websitemaster@moha.gov.vn *(mới, chỉ Arc tìm được — đây là email quản trị website, KHÔNG phải email liên hệ chung toàn cơ quan)*[^19]
- Website: moha.gov.vn[^8][^19]
- Chức năng / nhiệm vụ / quyền hạn: quản lý nhà nước về tổ chức hành chính, công vụ - công chức, chính quyền địa phương, thi đua khen thưởng; từ 1/3/2025 nhận thêm mảng lao động, việc làm, tiền lương, BHXH, người có công, bình đẳng giới (từ Bộ LĐ-TB&XH cũ, giải thể).
- Bộ trưởng đương nhiệm: ✅ **ĐÃ CHỐT** — Nguyễn Tiến Hải, được Quốc hội phê chuẩn 3/8/2026, thay ông Đỗ Thanh Bình chuyển công tác — xác nhận độc lập bởi Tuổi Trẻ + baochinhphu.vn (lần 1)[^10] VÀ VietnamFinance (lần 2, Arc)[^19]. Đỗ Thanh Bình là Bộ trưởng TRƯỚC đó (phê chuẩn 10/2025[^9]), đã thay đổi giữa năm 2026.
- Trạng thái xác minh: đã xác minh (Bộ trưởng — 3 nguồn độc lập cùng chỉ 1 người) / gần đã xác minh (trụ sở — khớp số nhà, lệch tên phường) / chưa xác minh trực tiếp cấp toàn cơ quan (SĐT, email — có nhưng chỉ 1 nguồn, email là email webmaster)
- Mức xác minh: toàn cơ quan (Bộ trưởng) — gần toàn cơ quan (trụ sở) — bộ phận cụ thể (email)
- Ghi chú: Đây là Bộ được cải thiện nhiều nhất sau cross-check lần 2 — từ "yếu nhất trong nhóm" thành gần đủ dữ liệu.

#### 5. Bộ Tư pháp — ✅ ĐÃ CHỐT (Prompt #6)

- ID đề xuất: `org-bo-tuphap`
- Loại entity: organization
- Cấp trên: Chính phủ Việt Nam
- Trụ sở: số 60 Trần Phú, Ba Đình, Hà Nội — **khớp** giữa Pro[^11] và Arc[^20]; vẫn còn 1 thông báo chính thức về đổi tên đơn vị hành chính chưa đọc được nội dung[^12] — nhiều khả năng chỉ đổi tên phường (như VKSND tối cao), không chặn tiến độ
- SĐT: ✅ **ĐÃ CHỐT** (Prompt #6) — 024.62739321 là tổng đài chính thức của "Cơ quan Bộ Tư pháp" (toàn cơ quan, gắn địa chỉ 60 Trần Phú, Fax 024.62739359)[^22]; 024.62739718 là SĐT riêng của Ban Biên tập Cổng TTĐT (1 bộ phận cụ thể, không phải tổng đài chung)[^22] — dùng **024.62739321** làm SĐT chính
- Email: banbientap@moj.gov.vn *(chỉ là email bộ phận biên tập, đi kèm SĐT 024.62739718 — không phải liên hệ chung)*[^20][^22]
- Website: moj.gov.vn[^13][^20]
- Chức năng / nhiệm vụ / quyền hạn: quản lý nhà nước về xây dựng và thi hành pháp luật, phổ biến giáo dục pháp luật, thi hành án dân sự, hộ tịch, quốc tịch, luật sư, công chứng, đăng ký giao dịch bảo đảm, bồi thường nhà nước.
- Bộ trưởng đương nhiệm: ✅ **ĐÃ CHỐT** (Prompt #6) — **Hoàng Thanh Tùng**, giữ chức từ 08/4/2026 theo Nghị quyết số 17/2026/QH16 (Quốc hội khóa XVI, kỳ họp thứ Nhất), thay ông Nguyễn Hải Ninh (Bộ trưởng nhiệm kỳ 2021–2026, bổ nhiệm 26/8/2024) — ông Ninh được điều động giữ chức Chánh Văn phòng Trung ương Đảng; có lễ bàn giao công tác 08/4/2026[^22]. Xác nhận độc lập bởi moj.gov.vn (chính chủ) + báo Đại biểu Nhân dân (báo của Quốc hội, dẫn đúng số Nghị quyết) + VnEconomy, cộng chứng cứ hoạt động liên tục của Hoàng Thanh Tùng tới tháng 8/2026[^22]. Xung đột ở lần tra trước (Prompt #5) hóa ra do các bài chinhphu.vn/danchuphapluat.vn nhắc Nguyễn Hải Ninh thực chất là bài CŨ (trước 8/4/2026) hoặc có lỗi hiển thị ngày cập nhật trang (ví dụ 1 bài về Tết ~2/2026 nhưng trang hiện ngày cập nhật 24/8/2026).
- Trạng thái xác minh: đã xác minh (trụ sở, website, SĐT, email, Bộ trưởng — có Nghị quyết Quốc hội cụ thể)
- Mức xác minh: toàn cơ quan
- Ghi chú: Đây là ví dụ cho luật 18 mới (xem `Claude-sodobmhc.md`): khi 2 lần tra ra 2 đáp án ngược nhau về nhân sự/địa chỉ, ưu tiên nguồn có SỐ VĂN BẢN + NGÀY CỤ THỂ (ở đây: Nghị quyết 17/2026/QH16, 08/4/2026) hơn là các trang tổng hợp có thể có bài cũ hoặc lỗi hiển thị timestamp.

---

#### Việc cần làm với file này

- [x] ✅ Chốt Bộ trưởng Bộ Nội vụ = Nguyễn Tiến Hải (3 nguồn độc lập khớp).
- [x] ✅ Trụ sở Bộ Nội vụ khá vững (số nhà + phố khớp 2 nguồn, chỉ lệch tên phường — nghi do đổi tên hành chính 2025).
- [x] ✅ Giải quyết xung đột trụ sở Bộ Công an — chốt: 96 Nguyễn Du, Cửa Nam (trụ sở mới, khánh thành 16/8/2025; chinhphu.vn giữ địa chỉ cũ chưa cập nhật).
- [x] ✅ Giải quyết xung đột Bộ trưởng Bộ Tư pháp — chốt: Hoàng Thanh Tùng (từ 08/4/2026, Nghị quyết 17/2026/QH16), thay Nguyễn Hải Ninh.
- [x] ✅ Xác nhận SĐT Bộ Tư pháp — 024.62739321 (toàn cơ quan) khác 024.62739718 (chỉ Ban Biên tập Cổng TTĐT).
- [ ] Xác nhận tên phường hiện tại của trụ sở Bộ Tư pháp (60 Trần Phú) và Bộ Nội vụ (8 Tôn Thất Thuyết) — không gấp, không chặn tiến độ.
- [ ] Khi ráp JSON, mỗi field cần map đúng `source_ids` tương ứng footnote dưới đây. **Nhóm 1/3 Bộ (file này) đã HOÀN TẤT, có thể ráp JSON.**

---

##### Nguồn tham khảo

[^1]: [Liên hệ — Cổng dịch vụ công Bộ Quốc phòng](https://dichvucong.mod.gov.vn/web/bo-quoc-phong/lien-he) — truy cập 2026-09-18 (Pro)
[^2]: [Tóm tắt tiểu sử đồng chí Phan Văn Giang, Phó Thủ tướng, Bộ trưởng Bộ Quốc phòng nhiệm kỳ 2026-2031 — Cổng TTĐT Chính phủ](https://xaydungchinhsach.chinhphu.vn/tom-tat-tieu-su-dong-chi-phan-van-giang-pho-thu-tuong-chinh-phu-nhiem-ky-2026-2031-11926040813342549.htm) — truy cập 2026-09-18 (Pro)
[^3]: [Liên hệ — Cổng TTĐT Bộ Công an](https://www.mps.gov.vn/lien-he) — truy cập 2026-09-18 (Pro)
[^4]: [Đại tướng Lương Tam Quang giữ chức Bộ trưởng Bộ Công an nhiệm kỳ 2026-2031 — VnExpress](https://vnexpress.net/dai-tuong-luong-tam-quang-lam-bo-truong-cong-an-nhiem-ky-2026-2031-5059732.html) — truy cập 2026-09-18 (Pro)
[^5]: [Liên hệ — Cổng thông tin Bộ Ngoại giao](https://mofa.gov.vn/lien-he) — truy cập 2026-09-18 (Pro)
[^6]: [Quốc hội phê chuẩn bổ nhiệm Bộ trưởng Bộ Ngoại giao, Bộ Nội vụ, Bộ Nông nghiệp và Môi trường — Báo Điện tử Chính phủ](https://baochinhphu.vn/quoc-hoi-phe-chuan-bo-nhiem-3-bo-truong-ngoai-giao-noi-vu-nong-nghiep-va-moi-truong-102251025003355438.htm) — truy cập 2026-09-18 (Pro)
[^7]: [Tòa nhà trụ sở Bộ Nội vụ Việt Nam — số 8 Tôn Thất Thuyết, Nam Từ Liêm — Vệ Sinh Ban Mai Xanh (nguồn thứ cấp, không chính chủ)](https://vesinhbanmaixanh.vn/toa-nha-tru-so-bo-noi-vu/) — truy cập 2026-09-18 (Pro)
[^8]: [Cổng TTĐT Bộ Nội vụ](https://moha.gov.vn/) — truy cập 2026-09-18 (Pro)
[^9]: [Tiểu sử đồng chí Đỗ Thanh Bình, Bộ trưởng Bộ Nội vụ — Cổng TTĐT Chính phủ](https://xaydungchinhsach.chinhphu.vn/tom-tat-tieu-su-dong-chi-do-thanh-binh-bo-truong-bo-noi-vu-119251025132155497.htm) — truy cập 2026-09-18 (Pro)
[^10]: [Ông Nguyễn Tiến Hải làm Bộ trưởng Bộ Nội vụ — Tuổi Trẻ](https://tuoitre.vn/ong-nguyen-tien-hai-lam-bo-truong-bo-noi-vu-100260803085511917.htm); [được giao Quyền Bộ trưởng — Báo Điện tử Chính phủ](https://baochinhphu.vn/ong-nguyen-tien-hai-duoc-giao-quyen-bo-truong-bo-noi-vu-102260720163924358.htm) — truy cập 2026-09-18 (Pro)
[^11]: [Đôi nét về trụ sở Bộ Tư pháp – 60 Trần Phú, Ba Đình — moj.gov.vn](https://moj.gov.vn/qt/cacchuyenmuc/70TuPhapVietNam/Pages/tu-lieu-nganh.aspx?ItemID=50) — truy cập 2026-09-18 (Pro)
[^12]: [Thông báo v/v thay đổi địa chỉ theo tên đơn vị hành chính mới — moj.gov.vn (không fetch được nội dung)](https://www.moj.gov.vn/qt/thongbao/Pages/thong-bao.aspx?ItemID=2927) — truy cập 2026-09-18 (Pro)
[^13]: [Cổng thông tin điện tử Bộ Tư pháp](https://moj.gov.vn/Pages/home.aspx) — truy cập 2026-09-18 (Pro)
[^14]: [Ông Hoàng Thanh Tùng giữ chức vụ Bộ trưởng Bộ Tư pháp — Thị trường Tài chính Tiền tệ](https://thitruongtaichinhtiente.vn/ong-hoang-thanh-tung-giu-chuc-vu-bo-truong-bo-tu-phap-80972.html) — truy cập 2026-09-18 (Pro)
[^15]: [Tiểu sử đồng chí Nguyễn Hải Ninh, Bộ trưởng Bộ Tư pháp — Cổng TTĐT Chính phủ (bài cũ, 08/2024)](https://xaydungchinhsach.chinhphu.vn/tieu-su-dong-chi-nguyen-hai-ninh-uy-vien-trung-uong-dang-bi-thu-tinh-uy-khanh-hoa-119240813145630146.htm) — truy cập 2026-09-18 (Pro)
[^16]: [Cổng TTĐT Chính phủ — Thông tin bộ ngành: Bộ Quốc phòng](https://chinhphu.vn/thong-tin-bo-nganh?gmist=3645) — truy cập 2026-09-18 (Arc)
[^17]: [Cổng TTĐT Chính phủ — Thông tin bộ ngành: Bộ Công an](https://chinhphu.vn/thong-tin-bo-nganh?gmist=3646) — truy cập 2026-09-18 (Arc)
[^18]: [Cổng TTĐT Chính phủ — Thông tin bộ ngành: Bộ Ngoại giao](https://chinhphu.vn/thong-tin-bo-nganh?gmist=3647) — truy cập 2026-09-18 (Arc)
[^19]: [Cổng TTĐT Chính phủ — Thông tin bộ ngành: Bộ Nội vụ](https://chinhphu.vn/thong-tin-bo-nganh?gmist=3648) — địa chỉ/liên hệ; [Quốc hội phê chuẩn ông Nguyễn Tiến Hải làm Bộ trưởng Bộ Nội vụ — VietnamFinance](https://vietnamfinance.vn/quoc-hoi-phe-chuan-ong-nguyen-tien-hai-lam-bo-truong-bo-noi-vu-d148542.html) — nhân sự — truy cập 2026-09-18 (Arc)
[^20]: [Cổng TTĐT Chính phủ — Thông tin bộ ngành: Bộ Tư pháp](https://chinhphu.vn/thong-tin-bo-nganh?gmist=3619); [danchuphapluat.vn — Bộ Tư pháp tổ chức gặp mặt đầu xuân](https://danchuphapluat.vn/bo-tu-phap-to-chuc-gap-mat-dau-xuan-nam-binh-ngo-8733.html) — truy cập 2026-09-18 (Arc, lần 2 — sau xác định là bài cũ/lỗi timestamp)
[^21]: [Tổng Bí thư Tô Lâm dự khánh thành trụ sở Bộ Công an tại Hà Nội — Tuổi Trẻ](https://tuoitre.vn/tong-bi-thu-to-lam-du-khanh-thanh-tru-so-bo-cong-an-tai-ha-noi-20250816113957594.htm); [Tạp chí Tòa án nhân dân](https://tapchitoaan.vn/tong-bi-thu-to-lam-du-cat-bang-khanh-thanh-tru-so-bo-cong-an13918.html); [Thương hiệu Công luận](https://thuonghieucongluan.com.vn/tong-bi-thu-to-lam-du-cat-bang-khanh-thanh-tru-so-bo-cong-an-a275398.html) — truy cập 2026-09-18 (Prompt #6)
[^22]: [Cổng TTĐT Bộ Tư pháp — Tiểu sử Bộ trưởng Hoàng Thanh Tùng](https://moj.gov.vn/portal/tin-tuc/chi-tiet/bo-truong-hoang-thanh-tung-td602lcc3b.html); [Báo Đại biểu Nhân dân — Tiểu sử Bộ trưởng Hoàng Thanh Tùng, dẫn Nghị quyết 17/2026/QH16](https://daibieunhandan.vn/tieu-su-bo-truong-bo-tu-phap-hoang-thanh-tung-10413189.html); [VnEconomy — Lễ bàn giao công tác 8/4/2026](https://vneconomy.vn/tan-bo-truong-bo-tu-phap-phap-luat-phai-tro-thanh-dong-luc-cho-phat-trien.htm); [moj.gov.vn — Danh bạ điện thoại Cơ quan Bộ Tư pháp](https://moj.gov.vn/portal/danh-ba/danh-ba-dien-thoai/co-quan-bo-tu-phap-b880.html); [hdpl.moj.gov.vn — footer trang Hỏi đáp pháp luật](https://hdpl.moj.gov.vn/Pages/chi-tiet-hoi-dap.aspx?lv=15) — truy cập 2026-09-18 (Prompt #6)
