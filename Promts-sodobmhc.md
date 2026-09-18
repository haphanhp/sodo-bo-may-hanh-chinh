---
tags: [sodobmhc]
type: promts
created: 2026-09-18
updated: 2026-09-18
---

### Promts-sodobmhc — Prompt đánh số giao cho 5 acc Claude Free

#### Cách dùng file này

- Mỗi lần cần tra cứu dữ liệu, acc Pro soạn 1 prompt mới, **đánh số tiếp theo** (không đánh lại số cũ), thêm vào cuối file.
- User chỉ cần nói "prompt số N" — Pro nhắc lại nguyên khối để user copy sang 1 trong 5 acc Free.
- Sau khi acc Free trả lời, user dán kết quả ngược lại cho acc Pro để kiểm chứng + ráp vào dữ liệu.
- Trạng thái: 🕓 Chưa giao · 🔵 Đã giao, chờ kết quả · ✅ Đã ráp xong vào dữ liệu
- **Xoay vòng acc (rotation)**: đi theo thứ tự Brave → Opera GX → Edge → Cốc Cốc → Arc → quay lại Brave, để chia đều tải giữa 5 acc Free và tránh 1 acc bị lặp lỗi/thiên lệch của chính nó. Với các prompt **đối chiếu chéo** (cross-check) một câu trả lời cũ, luôn giao cho acc/browser **khác** với acc đã trả lời câu đó.
- Nhiều prompt có thể **chạy song song** trên các browser khác nhau nếu không phụ thuộc kết quả của nhau (ví dụ: 1 prompt tra dữ liệu mới, 1 prompt đối chiếu chéo dữ liệu cũ, giao đồng thời cho 2 acc khác nhau).

---

#### Bảng theo dõi

| # | Nội dung | Giao cho (browser) | Trạng thái |
|---|---|---|---|
| 1 | 5 cơ quan cấp trung ương (Quốc hội, Chủ tịch nước, Chính phủ, TAND tối cao, VKSND tối cao) | Brave (Sonnet 5, medium) | ✅ Đã ráp — xem `01-co-quan-cap-trung-uong.md` |
| 2 | Đối chiếu chéo mục "chưa xác minh" của Prompt #1 (SĐT/email toàn cơ quan, "Chủ tịch nước" là position hay org, trụ sở TAND/VKS tối cao) | Opera X (Sonnet 5, web search) | ✅ Đã ráp — xem `01-co-quan-cap-trung-uong.md` (phát sinh 1 xung đột, xem Prompt #4) |
| 4 | Giải quyết xung đột trụ sở Văn phòng Chủ tịch nước (12 Ngô Quyền vs 2 Hùng Vương) + xác minh lại email chính chủ VKSND tối cao | Cốc Cốc (Claude, web_search/web_fetch) | 🔵 Đã ráp một phần — trụ sở ✅ đã chốt (12 Ngô Quyền), email VKSNDTC vẫn treo |
| 3 | Liệt kê danh sách đầy đủ Bộ / cơ quan ngang Bộ hiện tại (2026) — bước dọn đường trước khi tra chi tiết từng Bộ | Edge (Sonnet 5 extra, web search) | ✅ Đã ráp — xem `02-danh-sach-bo-co-quan-ngang-bo.md` (14 Bộ + 3 cơ quan ngang Bộ) |
| 7 | Tra chi tiết nhóm 2/3 Bộ (Tài chính, Công Thương, Nông nghiệp và Môi trường, Xây dựng, Văn hóa-Thể thao-Du lịch) | (không rõ browser, web search) | ✅ Đã ráp — xem `04-bo-nhom-2-5bo-tiep.md` (3/5 vững, 2/5 thiếu SĐT/email toàn cơ quan) |
| 5 | Tra chi tiết nhóm 1/3 Bộ (Quốc phòng, Công an, Ngoại giao, Nội vụ, Tư pháp) | Arc bị kẹt → Pro tạm trả lời, sau đó Arc tự tra lại độc lập | ✅ Đã ráp + cross-check 2 lượt — xem `03-bo-nhom-1-5bo-dau.md`. 3 Bộ vững; 2 xung đột MỚI (trụ sở Bộ Công an, Bộ trưởng Bộ Tư pháp) → Prompt #6 |
| 6 | Giải quyết 2 xung đột nhóm 1: trụ sở Bộ Công an + ai là Bộ trưởng Bộ Tư pháp + SĐT chính xác Bộ Tư pháp | (không rõ browser, web search) | ✅ Đã ráp — cả 3 điểm đã CHỐT, xem `03-bo-nhom-1-5bo-dau.md` |
| 8 | Tra chi tiết nhóm 3/3 Bộ còn lại (KH&CN, Giáo dục và Đào tạo, Y tế, Dân tộc và Tôn giáo) + 3 cơ quan ngang Bộ (Ngân hàng Nhà nước, Thanh tra Chính phủ, Văn phòng Chính phủ) | Brave *(theo lời user khai báo — Pro không tự xác minh được trình duyệt/thiết bị)*, Sonnet 5 medium | ✅ Đã ráp đủ 7/7 đơn vị — xem `05-bo-nhom-3-4bo-3coquanngangbo.md`. **HOÀN TẤT 17/17 Bộ + cơ quan ngang Bộ.** 2 xung đột chinhphu.vn-cũ (KH&CN, GD&ĐT) đã tự giải quyết theo luật 18; SĐT Bộ Y tế còn 2 số khác nhau (non-blocking) |
| 9 | Liệt kê danh sách đầy đủ tỉnh/thành phố trực thuộc trung ương hiện tại của Việt Nam (sau sáp nhập 2025) — bước dọn đường trước khi tra chi tiết từng tỉnh/thành | Brave *(đã xác nhận bởi user)* | ✅ Đã ráp 34/34 đơn vị — xem `06-danh-sach-tinh-thanh.md`. 22/34 trung tâm hành chính còn ⚠️/❌ chưa xác minh đủ |
| 10 | Tra chi tiết nhóm 1/3 tỉnh/thành (12 đơn vị: 11 tỉnh/thành không sáp nhập + Tuyên Quang) — trụ sở UBND, SĐT, email, website, Chủ tịch UBND/Bí thư đương nhiệm | Brave | ✅ Đã ráp 12/12 — xem `07-tinh-thanh-nhom1-chi-tiet.md` |
| 11 | Tra chi tiết nhóm 2/3 tỉnh/thành (11 đơn vị: Lào Cai → Gia Lai) — cùng nội dung + xác minh lại trung tâm hành chính các đơn vị ⚠️/❌ trong nhóm | Microsoft Edge | ✅ Đã ráp 11/11 — xem `08-tinh-thanh-nhom2-chi-tiet.md`. Giải quyết xong trung tâm hành chính Bắc Ninh, Hưng Yên, Gia Lai; phát hiện Hải Phòng có trung tâm MỚI (Thủy Nguyên) |
| 12 | Tra chi tiết nhóm 3/3 tỉnh/thành (11 đơn vị: Khánh Hòa → An Giang) — cùng nội dung + xác minh lại trung tâm hành chính các đơn vị ⚠️/❌ trong nhóm | Arc *(user đổi từ Cốc Cốc sang Arc)* | ✅ Đã ráp 11/11 — xem `09-tinh-thanh-nhom3-chi-tiet.md`. Giải quyết xong 9/9 trung tâm hành chính còn thiếu; phát hiện Đồng Nai đã lên Thành phố trực thuộc TW (30/4/2026) |
| 13 | Xác nhận chính thức việc Việt Nam có bỏ hẳn cấp huyện (mô hình chính quyền 2 cấp tỉnh–xã) hay không, kèm văn bản pháp luật cụ thể; nếu đúng, liệt kê tổng quan cấp xã/phường/đặc khu | Arc | ✅ Đã ráp — xem `10-xac-nhan-cau-truc-2-cap.md`. XÁC NHẬN ĐÚNG, có đầy đủ chuỗi văn bản pháp lý (NQ 203/2025/QH15, Luật 72/2025/QH15...). 3.321 đơn vị cấp xã (2.636 xã + 672 phường + 13 đặc khu) |
| 14 | Hoàn thiện cấp tỉnh: tra Bí thư Tỉnh/Thành ủy còn thiếu (30+ đơn vị) + đối chiếu chéo tên Chủ tịch UBND của 6 đơn vị chỉ có 1 nguồn (Cần Thơ, TP.HCM, Đồng Tháp, Vĩnh Long, Cà Mau, An Giang) | Cốc Cốc *(⚠️ acc tự khai không phải browser thật, xem file 11)* | ✅ Đã ráp 30/30 Bí thư — xem `11-bi-thu-tinh-thanh-va-doi-chieu.md`. Phát hiện Chủ tịch UBND Đồng Tháp đã đổi (9/9/2026) — đã sửa file 09 |
| 15 | Danh sách cấp xã/phường/đặc khu nhóm 1/5 (7 tỉnh: Hà Nội, Cao Bằng, Điện Biên, Hà Tĩnh, Lai Châu, Lạng Sơn, Nghệ An) | Brave | ✅ Đã ráp 7/7 — xem `12-cap-xa-nhom1-7tinh.md` |
| 16 | Danh sách cấp xã/phường/đặc khu nhóm 2/5 (7 tỉnh: Quảng Ninh, Thanh Hóa, Sơn La, Tuyên Quang, Lào Cai, Thái Nguyên, Phú Thọ) | Opera GX | 🟡 Đã ráp 7/7 — xem `13-cap-xa-nhom2-7tinh.md`. Thái Nguyên: Pro tự tra thêm (WebFetch), nghiêng về 77xã/15phường, chưa 100% loại trừ 69xã/23phường |
| 17 | Danh sách cấp xã/phường/đặc khu nhóm 3/5 (7 tỉnh: Bắc Ninh, Hưng Yên, Hải Phòng, Ninh Bình, Quảng Trị, Đà Nẵng, Quảng Ngãi) | Microsoft Edge | ✅ Đã ráp 7/7 — xem `14-cap-xa-nhom3-7tinh.md` |
| 18 | Danh sách cấp xã/phường/đặc khu nhóm 4/5 (7 tỉnh: Huế, Gia Lai, Khánh Hòa, Lâm Đồng, Đắk Lắk, Thành phố Đồng Nai, Tây Ninh) | Cốc Cốc | ✅ Đã ráp 7/7 — xem `15-cap-xa-nhom4-7tinh.md`. Có timeline chi tiết cấp xã Đồng Nai (1/7/2025→14/4/2026→30/4/2026); tên đặc khu Lâm Đồng = Phú Quý |
| 19 | Danh sách cấp xã/phường/đặc khu nhóm 5/5 (6 tỉnh: TP Hồ Chí Minh, Cần Thơ, Vĩnh Long, Đồng Tháp, Cà Mau, An Giang) + tìm tên 13 đặc khu cả nước | Arc | ✅ Đã ráp 6/6 + 13/13 đặc khu — xem `16-cap-xa-nhom5-va-danhsach-13-dackhu.md`. **Mốc: HOÀN TẤT tổng quan cấp xã cho toàn bộ 34/34 tỉnh/thành** |
| 20 | Danh sách TÊN ĐẦY ĐỦ từng xã/phường nhóm 1/5 (7 tỉnh: Hà Nội, Cao Bằng, Điện Biên, Hà Tĩnh, Lai Châu, Lạng Sơn, Nghệ An) | Brave | 🔵 Đã soạn, chờ giao |
| 21 | Danh sách TÊN ĐẦY ĐỦ từng xã/phường nhóm 2/5 (7 tỉnh: Quảng Ninh, Thanh Hóa, Sơn La, Tuyên Quang, Lào Cai, Thái Nguyên, Phú Thọ) | Opera GX | 🔵 Đã soạn, chờ giao |
| 22 | Danh sách TÊN ĐẦY ĐỦ từng xã/phường nhóm 3/5 (7 tỉnh: Bắc Ninh, Hưng Yên, Hải Phòng, Ninh Bình, Quảng Trị, Đà Nẵng, Quảng Ngãi) | Microsoft Edge | 🔵 Đã soạn, chờ giao |
| 23 | Danh sách TÊN ĐẦY ĐỦ từng xã/phường nhóm 4/5 (7 tỉnh: Huế, Gia Lai, Khánh Hòa, Lâm Đồng, Đắk Lắk, Thành phố Đồng Nai, Tây Ninh) | Cốc Cốc | 🔵 Đã soạn, chờ giao |
| 24 | Danh sách TÊN ĐẦY ĐỦ từng xã/phường nhóm 5/5 (6 tỉnh: TP Hồ Chí Minh, Cần Thơ, Vĩnh Long, Đồng Tháp, Cà Mau, An Giang) | Arc | 🔵 Đã soạn, chờ giao |

---

#### Prompt #1 — 5 cơ quan cấp trung ương

```
Bạn đang hỗ trợ tra cứu dữ liệu hành chính Việt Nam cho 1 dự án sơ đồ bộ máy nhà nước.
Chỉ tra cứu đúng 5 cơ quan dưới đây, KHÔNG mở rộng sang cơ quan khác:

1. Quốc hội Việt Nam
2. Chủ tịch nước Việt Nam
3. Chính phủ Việt Nam
4. Tòa án nhân dân tối cao
5. Viện kiểm sát nhân dân tối cao

Với MỖI cơ quan, trả lời đúng theo template sau (điền đầy đủ; nếu không chắc/không tìm được thì ghi "chưa xác minh", KHÔNG bịa):

ID đề xuất: org-...
Loại entity: organization
Tên (vi): ...
Cấp trên (nếu có): ...
Trụ sở: ...
SĐT: ...
Email: ...
Website: ...
Chức năng / nhiệm vụ / quyền hạn: (tóm tắt ngắn gọn, không copy nguyên văn luật)
Nguồn: [Tên nguồn](URL) — ngày truy cập: YYYY-MM-DD
Trạng thái xác minh: đã xác minh / chưa xác minh
Ghi chú: ...

Yêu cầu bắt buộc:
- Ưu tiên nguồn chính thức (chinhphu.vn, quochoi.vn, website chính thức tòa án/viện kiểm sát, thuvienphapluat.vn cho văn bản pháp luật).
- Không bịa số điện thoại / email / website nếu không tìm được — ghi rõ "chưa xác minh".
- Trả lời gọn, đúng 5 cơ quan trên, không thêm cơ quan/thủ tục khác ngoài phạm vi này.
```

---

#### Prompt #2 — Đối chiếu chéo dữ liệu chưa xác minh của Prompt #1

Giao cho: **Opera GX** (khác acc đã trả lời Prompt #1 — Brave — để đối chiếu chéo, không lặp lại thiên lệch của cùng 1 acc).

```
Bạn đang hỗ trợ ĐỐI CHIẾU LẠI (cross-check) dữ liệu đã tra cứu trước đó cho 1 dự án sơ đồ bộ máy hành chính Việt Nam.
Một acc AI khác đã trả lời trước — bạn tra cứu ĐỘC LẬP theo đúng các điểm dưới đây, không tự suy diễn từ câu trả lời cũ.

Chỉ tra cứu đúng các điểm sau, KHÔNG mở rộng phạm vi:

1. Số điện thoại & email liên hệ CHÍNH THỨC CẤP TOÀN CƠ QUAN (không phải của 1 vụ/thư viện/phòng ban con) của:
   a. Quốc hội Việt Nam (Văn phòng Quốc hội)
   b. Chủ tịch nước Việt Nam (Văn phòng Chủ tịch nước)
   c. Tòa án nhân dân tối cao
   d. Viện kiểm sát nhân dân tối cao
   (Chính phủ đã có số/email xác minh: 080 43100 – 080 43569, vpcp@chinhphu.vn — không cần tra lại, chỉ xác nhận nếu thấy khác.)

2. "Chủ tịch nước" nên được xem là:
   - một CHỨC VỤ (position) do 1 cá nhân giữ, hay
   - một TỔ CHỨC riêng (organization) là "Văn phòng Chủ tịch nước"?
   Tra theo cách Hiến pháp / văn bản pháp luật Việt Nam định nghĩa, dẫn rõ căn cứ pháp lý (điều, khoản).

3. Xác nhận lại địa chỉ trụ sở hiện tại (2026) của:
   a. Tòa án nhân dân tối cao (dữ liệu cũ: số 01 Phạm Văn Bạch, phường Cầu Giấy, Hà Nội — chuyển từ 13/7/2026)
   b. Viện kiểm sát nhân dân tối cao (dữ liệu cũ: số 9 Phạm Văn Bạch, phường Cầu Giấy, Hà Nội)
   Xác nhận đúng/sai; nếu sai thì địa chỉ đúng là gì, dẫn nguồn cập nhật nhất.

Đầu câu trả lời ghi:
Model dùng: ...
Acc & trình duyệt: ...

Với mỗi điểm (1a–1d, 2, 3a–3b), trả lời theo khối:

Điểm: ...
Kết quả tra cứu: ...
So với dữ liệu cũ: khớp / khác / không tìm được để so sánh
Nguồn: [Tên nguồn](URL) — ngày truy cập: YYYY-MM-DD
Trạng thái xác minh: đã xác minh / chưa xác minh
Ghi chú: ...

Yêu cầu bắt buộc:
- Không bịa nguồn, không suy diễn.
- Nếu không tìm được số/email cấp toàn cơ quan, ghi rõ "không tìm được, giữ nguyên chưa xác minh" — KHÔNG lấy số của 1 bộ phận khác rồi gán cho toàn cơ quan.
```

---

#### Prompt #3 — Liệt kê danh sách Bộ / cơ quan ngang Bộ hiện tại (2026)

Giao cho: **Edge** (chạy song song với Prompt #2, không phụ thuộc kết quả của nhau). Đây là bước **dọn đường** — chỉ liệt kê danh sách, CHƯA tra chi tiết từng Bộ (sẽ tách thành các Prompt #4, #5... theo nhóm 5–6 Bộ/lần sau khi có danh sách xác nhận, để không giao nguyên "toàn bộ Chính phủ" trong 1 prompt).

```
Bạn đang hỗ trợ dựng danh sách cho 1 dự án sơ đồ bộ máy hành chính Việt Nam.

Nhiệm vụ DUY NHẤT: liệt kê ĐẦY ĐỦ và ĐÚNG danh sách các Bộ và cơ quan ngang Bộ của Chính phủ Việt Nam TẠI THỜI ĐIỂM HIỆN TẠI (2026) — lưu ý bộ máy đã có tái cơ cấu/sáp nhập một số Bộ trong giai đoạn 2025, nên KHÔNG dùng danh sách cũ trước sáp nhập.

Với mỗi Bộ / cơ quan ngang Bộ, ghi:

Tên đầy đủ (vi): ...
Loại: Bộ / cơ quan ngang Bộ
Ghi chú sáp nhập (nếu có): tên cũ trước sáp nhập, thời điểm sáp nhập
Nguồn: [Tên nguồn](URL) — ngày truy cập: YYYY-MM-DD

Đầu câu trả lời ghi:
Model dùng: ...
Acc & trình duyệt: ...

Yêu cầu bắt buộc:
- KHÔNG tra chi tiết trụ sở/SĐT/email/chức năng của từng Bộ ở prompt này — chỉ cần tên + loại + nguồn xác nhận danh sách.
- Ưu tiên nguồn chính thức (chinhphu.vn — cơ cấu tổ chức Chính phủ, hoặc Nghị định quy định chức năng nhiệm vụ mới nhất).
- Nếu thấy nhiều nguồn ghi số lượng Bộ khác nhau, ghi rõ cả 2, không tự chọn 1 rồi bỏ qua khác biệt.
```

---

#### Prompt #4 — Giải quyết xung đột trụ sở Văn phòng Chủ tịch nước + email VKSND tối cao

Giao cho: **Cốc Cốc** (rotate từ Opera X). Có thể chạy song song với Prompt #3 (Edge).

```
Bạn đang hỗ trợ GIẢI QUYẾT 1 XUNG ĐỘT DỮ LIỆU cho 1 dự án sơ đồ bộ máy hành chính Việt Nam.

Điểm 1 — Trụ sở Văn phòng Chủ tịch nước:
Có 2 nguồn khác nhau:
- Nguồn A (báo Lào Cai, tin về việc "chuyển trụ sở làm việc mới"): số 12 Ngô Quyền, phường Hoàn Kiếm, Hà Nội.
- Nguồn B (trang "Liên hệ" trên vpctn.gov.vn — website chính chủ): số 2 Hùng Vương, Ba Đình, Hà Nội.
Hãy xác minh: hiện tại (2026) trụ sở CHÍNH THỨC, ĐANG HOẠT ĐỘNG của Văn phòng Chủ tịch nước ở đâu? Có phải "12 Ngô Quyền" là trụ sở mới sau khi dời đi, còn "2 Hùng Vương" là địa chỉ cũ trang web chưa cập nhật — hay ngược lại, hay cả 2 đều đúng nhưng là 2 địa điểm khác nhau (ví dụ 1 là nơi làm việc, 1 là địa chỉ hành chính đăng ký)? Tìm quyết định/thông báo chính thức nếu có (Quyết định, Thông báo của Văn phòng Chủ tịch nước hoặc Chính phủ).

Điểm 2 — Email Viện kiểm sát nhân dân tối cao:
Địa chỉ trangtinvkstc@vks.gov.vn được 1 nguồn thứ cấp (công ty luật) nêu là email liên hệ của VKSND tối cao, nhưng CHƯA thấy trực tiếp trên vksndtc.gov.vn. Hãy xác minh trực tiếp trên vksndtc.gov.vn (hoặc văn bản chính thức khác của VKSND tối cao) xem địa chỉ email này có đúng và có phải email liên hệ cấp toàn cơ quan không.

Đầu câu trả lời ghi:
Model dùng: ...
Acc & trình duyệt: ...

Trả lời theo khối cho mỗi điểm:

Điểm: 1 (trụ sở VPCTN) / 2 (email VKSNDTC)
Kết quả: ...
Nguồn: [Tên nguồn](URL) — ngày truy cập: YYYY-MM-DD
Trạng thái xác minh: đã xác minh / chưa xác minh / vẫn xung đột chưa giải quyết được
Ghi chú: ...

Yêu cầu bắt buộc:
- Không bịa, không tự chọn 1 nguồn rồi bỏ qua nguồn khác nếu không có căn cứ rõ ràng để loại trừ.
- Nếu vẫn không giải quyết được xung đột, ghi rõ "vẫn xung đột chưa giải quyết được" kèm lý do.
```

---

#### Prompt #5 — Tra chi tiết nhóm 1/3 Bộ: Quốc phòng, Công an, Ngoại giao, Nội vụ, Tư pháp

Giao cho: **Arc** (rotate; danh sách 17 đơn vị đã xác nhận ở `02-danh-sach-bo-co-quan-ngang-bo.md`, đây là nhóm 5 Bộ đầu tiên trong 14 Bộ + 3 cơ quan ngang Bộ).

```
Bạn đang hỗ trợ tra cứu dữ liệu hành chính Việt Nam cho 1 dự án sơ đồ bộ máy nhà nước.
Chỉ tra cứu đúng 5 Bộ dưới đây (thuộc cơ cấu Chính phủ hiện hành, khóa XVI), KHÔNG mở rộng sang Bộ khác:

1. Bộ Quốc phòng
2. Bộ Công an
3. Bộ Ngoại giao
4. Bộ Nội vụ (lưu ý: đã hợp nhất với Bộ Lao động – Thương binh và Xã hội cũ từ 1/3/2025, tra theo tên/chức năng hiện tại, không tra Bộ LĐ-TB&XH cũ riêng)
5. Bộ Tư pháp

Với MỖI Bộ, trả lời đúng theo template sau (điền đầy đủ; nếu không chắc/không tìm được thì ghi "chưa xác minh", KHÔNG bịa):

ID đề xuất: org-bo-...
Loại entity: organization
Tên (vi): ...
Cấp trên: Chính phủ Việt Nam
Trụ sở: ...
SĐT: ...
Email: ...
Website: ...
Chức năng / nhiệm vụ / quyền hạn: (tóm tắt ngắn gọn, không copy nguyên văn nghị định)
Bộ trưởng đương nhiệm (nếu xác minh được): ...
Nguồn: [Tên nguồn](URL) — ngày truy cập: YYYY-MM-DD
Trạng thái xác minh: đã xác minh / chưa xác minh
Mức xác minh: toàn cơ quan / chỉ 1 bộ phận-vụ cụ thể / không xác định
Ghi chú: ...

Đầu câu trả lời ghi:
Model dùng: ...
Acc & trình duyệt: ...

Yêu cầu bắt buộc:
- Ưu tiên nguồn chính thức (chinhphu.vn, website chính thức từng Bộ, thuvienphapluat.vn cho văn bản pháp luật/nghị định quy định chức năng-nhiệm vụ).
- CẢNH GIÁC: KHÔNG dùng số điện thoại "080.43162" / địa chỉ "16 Lê Hồng Phong, Ba Đình, Hà Nội" nếu thấy gắn nhãn cho Bộ nào — đây là footer bản quyền của Báo Điện tử Chính phủ, không phải SĐT/địa chỉ của cơ quan (đã gặp lỗi này ở lần tra trước, xem luật 16 trong Claude-sodobmhc.md).
- Không bịa số điện thoại / email / website nếu không tìm được — ghi rõ "chưa xác minh".
- Trả lời gọn, đúng 5 Bộ trên, không thêm Bộ/cơ quan khác ngoài phạm vi này.
```

---

#### Prompt #6 — Giải quyết 2 xung đột nhóm 1 (trụ sở Bộ Công an + Bộ trưởng Bộ Tư pháp + SĐT Bộ Tư pháp)

Giao cho: acc bất kỳ đang rảnh (khuyến nghị KHÔNG dùng acc đã trả lời 1 trong 2 lần trước cho cùng câu hỏi — tức tránh cả Pro-lần-1 và Arc-lần-2 nếu có thể, để có góc nhìn thứ 3).

```
Bạn đang hỗ trợ GIẢI QUYẾT các xung đột dữ liệu cho 1 dự án sơ đồ bộ máy hành chính Việt Nam.

Điểm 1 — Trụ sở Bộ Công an:
Có 2 nguồn khác nhau:
- Nguồn A (mps.gov.vn/lien-he, trang chính chủ): "96 Nguyễn Du, phường Cửa Nam, Hà Nội"
- Nguồn B (chinhphu.vn, trang thông tin bộ ngành): "Số 44 Yết Kiêu, Hoàn Kiếm, Hà Nội"
Đây là 2 con phố khác nhau hoàn toàn. Hãy xác minh: đâu là trụ sở CHÍNH của Bộ Công an hiện tại? Có thể 1 trong 2 là địa chỉ của 1 tổng cục/cục trực thuộc (không phải trụ sở Bộ), hoặc 1 nguồn đã lỗi thời. Tìm thêm nguồn thứ 3 độc lập (báo chí, văn bản chính thức) để đối chiếu.

Điểm 2 — Bộ trưởng Bộ Tư pháp hiện tại (tại ngày 18/09/2026):
Có 2 kết quả tra cứu độc lập NGƯỢC NHAU:
- Kết quả A: Hoàng Thanh Tùng (dựa trên thitruongtaichinhtiente.vn và thads.moj.gov.vn — 1 subsite của chính moj.gov.vn)
- Kết quả B: Nguyễn Hải Ninh (dựa trên chinhphu.vn và danchuphapluat.vn, tin tháng 2 và tháng 8/2026)
Hãy tìm CHÍNH XÁC: có Nghị quyết/Quyết định phê chuẩn hoặc miễn nhiệm nào của Quốc hội về vị trí Bộ trưởng Bộ Tư pháp trong năm 2025-2026 không? Ưu tiên văn bản chính thức (Nghị quyết Quốc hội, thông cáo TTXVN) có NGÀY CỤ THỂ, hơn là suy luận từ ngày đăng bài của 1 trang tin.

Điểm 3 — SĐT Bộ Tư pháp:
2 số được tìm thấy cùng lúc từ 1 nguồn: 024.62739321 và 024.62739718. Xác minh số nào là tổng đài chính thức hiện tại (có thể cả 2 đều đúng nhưng của 2 bộ phận khác nhau — nếu vậy ghi rõ bộ phận nào ứng với số nào).

Đầu câu trả lời ghi:
Model dùng: ...
Acc & trình duyệt: ...

Trả lời theo khối cho mỗi điểm:

Điểm: 1 (trụ sở BCA) / 2 (Bộ trưởng BTP) / 3 (SĐT BTP)
Kết quả: ...
Nguồn: [Tên nguồn](URL) — ngày truy cập: YYYY-MM-DD
Trạng thái xác minh: đã xác minh / chưa xác minh / vẫn xung đột chưa giải quyết được
Ghi chú: ...

Yêu cầu bắt buộc:
- Không bịa, không tự chọn 1 nguồn rồi bỏ qua nguồn khác nếu không có căn cứ rõ ràng để loại trừ.
- CẢNH GIÁC: KHÔNG dùng SĐT "080.43162" / địa chỉ "16 Lê Hồng Phong" nếu gặp lại — đó là footer Báo Điện tử Chính phủ (luật 16, Claude-sodobmhc.md).
- Nếu vẫn không giải quyết được, ghi rõ "vẫn xung đột chưa giải quyết được" kèm lý do — KHÔNG đoán đại.
```

---

#### Prompt #7 — Tra chi tiết nhóm 2/3 Bộ: Tài chính, Công Thương, Nông nghiệp và Môi trường, Xây dựng, Văn hóa-Thể thao-Du lịch

Giao cho: acc rảnh tiếp theo (rotate).

```
Bạn đang hỗ trợ tra cứu dữ liệu hành chính Việt Nam cho 1 dự án sơ đồ bộ máy nhà nước.
Chỉ tra cứu đúng 5 Bộ dưới đây (thuộc cơ cấu Chính phủ hiện hành, khóa XVI), KHÔNG mở rộng sang Bộ khác:

1. Bộ Tài chính (lưu ý: đã hợp nhất với Bộ Kế hoạch và Đầu tư cũ từ 1/3/2025)
2. Bộ Công Thương
3. Bộ Nông nghiệp và Môi trường (lưu ý: hợp nhất Bộ NN&PTNT + Bộ Tài nguyên và Môi trường cũ, tên hoàn toàn mới từ 1/3/2025)
4. Bộ Xây dựng (lưu ý: đã hợp nhất với Bộ Giao thông vận tải cũ từ 1/3/2025)
5. Bộ Văn hóa, Thể thao và Du lịch (lưu ý: từ 1/3/2025 nhận thêm chức năng báo chí từ Bộ Thông tin và Truyền thông cũ, giải thể)

Với MỖI Bộ, trả lời đúng theo template sau (điền đầy đủ; nếu không chắc/không tìm được thì ghi "chưa xác minh", KHÔNG bịa):

ID đề xuất: org-bo-...
Loại entity: organization
Tên (vi): ...
Cấp trên: Chính phủ Việt Nam
Trụ sở: ...
SĐT: ...
Email: ...
Website: ...
Chức năng / nhiệm vụ / quyền hạn: (tóm tắt ngắn gọn, không copy nguyên văn nghị định)
Bộ trưởng đương nhiệm (nếu xác minh được): ...
Nguồn: [Tên nguồn](URL) — ngày truy cập: YYYY-MM-DD
Trạng thái xác minh: đã xác minh / chưa xác minh
Mức xác minh: toàn cơ quan / chỉ 1 bộ phận-vụ cụ thể / không xác định
Ghi chú: ...

Đầu câu trả lời ghi:
Model dùng: ...
Acc & trình duyệt: ...

Yêu cầu bắt buộc:
- Ưu tiên nguồn chính thức (chinhphu.vn, website chính thức từng Bộ, thuvienphapluat.vn cho nghị định quy định chức năng-nhiệm vụ).
- CẢNH GIÁC: KHÔNG dùng SĐT "080.43162" / địa chỉ "16 Lê Hồng Phong, Ba Đình" nếu thấy gắn nhãn cho Bộ nào — đây là footer Báo Điện tử Chính phủ (luật 16, Claude-sodobmhc.md).
- Nếu 1 Bộ vừa hợp nhất, cố gắng ghi rõ tên Bộ trưởng hiện tại (không phải Bộ trưởng của 2 Bộ cũ trước sáp nhập).
- Không bịa số điện thoại / email / website nếu không tìm được — ghi rõ "chưa xác minh".
- Trả lời gọn, đúng 5 Bộ trên, không thêm Bộ/cơ quan khác ngoài phạm vi này.
```

---

#### Prompt #8 — Tra chi tiết nhóm 3/3: Khoa học và Công nghệ, Giáo dục và Đào tạo, Y tế, Dân tộc và Tôn giáo + 3 cơ quan ngang Bộ

Giao cho: acc rảnh tiếp theo (rotate) — **LƯU Ý ghi rõ tên browser cụ thể** khi trả lời (bài học từ Prompt #6/#7, xem Build-logs).

```
Bạn đang hỗ trợ tra cứu dữ liệu hành chính Việt Nam cho 1 dự án sơ đồ bộ máy nhà nước.
Chỉ tra cứu đúng 7 đơn vị dưới đây (nhóm cuối trong 14 Bộ + 3 cơ quan ngang Bộ), KHÔNG mở rộng sang cơ quan khác:

1. Bộ Khoa học và Công nghệ (lưu ý: đã hợp nhất với phần lớn Bộ Thông tin và Truyền thông cũ từ 1/3/2025)
2. Bộ Giáo dục và Đào tạo
3. Bộ Y tế
4. Bộ Dân tộc và Tôn giáo (lưu ý: thành lập mới trên cơ sở nâng cấp Ủy ban Dân tộc + nhận thêm chức năng tôn giáo từ Bộ Nội vụ cũ, từ 1/3/2025)
5. Ngân hàng Nhà nước Việt Nam (cơ quan ngang Bộ)
6. Thanh tra Chính phủ (cơ quan ngang Bộ)
7. Văn phòng Chính phủ (cơ quan ngang Bộ — lưu ý: Chính phủ Việt Nam với vai trò organization riêng đã có dữ liệu ở file 01, đây là tra Văn phòng Chính phủ với vai trò cơ quan ngang Bộ/bộ máy giúp việc, có thể trùng lặp thông tin liên hệ — ghi rõ nếu 2 thứ là 1 hay khác)

Với MỖI đơn vị, trả lời đúng theo template sau (điền đầy đủ; nếu không chắc/không tìm được thì ghi "chưa xác minh", KHÔNG bịa):

ID đề xuất: org-...
Loại entity: organization
Tên (vi): ...
Cấp trên: Chính phủ Việt Nam
Trụ sở: ...
SĐT: ...
Email: ...
Website: ...
Chức năng / nhiệm vụ / quyền hạn: (tóm tắt ngắn gọn, không copy nguyên văn nghị định)
Bộ trưởng / Thống đốc / Tổng Thanh tra / Chủ nhiệm đương nhiệm (nếu xác minh được): ...
Nguồn: [Tên nguồn](URL) — ngày truy cập: YYYY-MM-DD
Trạng thái xác minh: đã xác minh / chưa xác minh
Mức xác minh: toàn cơ quan / chỉ 1 bộ phận-vụ cụ thể / không xác định
Ghi chú: ...

Đầu câu trả lời ghi RÕ (bắt buộc, không bỏ trống):
Model dùng: ...
Acc & trình duyệt: ... (ghi rõ tên browser: Brave / Opera GX / Edge / Cốc Cốc / Arc — nếu không phải 1 trong 5 acc chuẩn của dự án, ghi rõ đang dùng công cụ/giao diện gì)

Yêu cầu bắt buộc:
- Ưu tiên nguồn chính thức (chinhphu.vn, website chính thức từng cơ quan, thuvienphapluat.vn cho văn bản pháp luật).
- CẢNH GIÁC: KHÔNG dùng SĐT "080.43162" / địa chỉ "16 Lê Hồng Phong, Ba Đình" nếu thấy gắn nhãn cho cơ quan nào — đây là footer Báo Điện tử Chính phủ (luật 16, `Claude-sodobmhc.md`).
- Nếu chinhphu.vn cho thông tin (đặc biệt địa chỉ/nhân sự) khác với website chính chủ của cơ quan đó, ưu tiên nguồn chính chủ + tin có ngày cụ thể, KHÔNG tự cho chinhphu.vn là "mới nhất" (luật 18).
- Không bịa số điện thoại / email / website nếu không tìm được — ghi rõ "chưa xác minh".
- Trả lời gọn, đúng 7 đơn vị trên, không thêm cơ quan khác ngoài phạm vi này.
```

---

#### Prompt #9 — Danh sách tỉnh/thành phố trực thuộc trung ương (sau sáp nhập 2025)

**Giao cho**: gợi ý Opera GX (Brave vừa làm #1 và #8) — có thể đổi acc khác nếu không rảnh.

```
Bạn đang hỗ trợ 1 dự án tổng hợp thông tin bộ máy hành chính Việt Nam (mục đích tham khảo/giáo dục cá nhân, phi lợi nhuận).

NHIỆM VỤ: Tra cứu và liệt kê ĐẦY ĐỦ, CHÍNH XÁC danh sách các tỉnh/thành phố trực thuộc trung ương của Việt Nam TÍNH ĐẾN THỜI ĐIỂM HIỆN TẠI.

⚠️ LƯU Ý QUAN TRỌNG: Việt Nam đã có đợt sắp xếp lại đơn vị hành chính cấp tỉnh vào năm 2025 (sáp nhập nhiều tỉnh/thành với nhau). Vì vậy con số/danh sách "63 tỉnh thành" theo kiến thức cũ CÓ THỂ KHÔNG CÒN ĐÚNG. Bạn PHẢI tra theo Nghị quyết mới nhất của Quốc hội/Ủy ban Thường vụ Quốc hội về sắp xếp đơn vị hành chính cấp tỉnh năm 2025, KHÔNG dựa vào trí nhớ/kiến thức huấn luyện đã cũ.

Với mỗi tỉnh/thành, ghi:
- Tên chính thức hiện tại
- Loại: tỉnh / thành phố trực thuộc trung ương
- Nếu là kết quả sáp nhập: ghi rõ tên (các) tỉnh/thành CŨ đã hợp thành, và số văn bản + ngày ban hành Nghị quyết sáp nhập tương ứng
- Trung tâm hành chính (tỉnh lỵ) hiện tại

YÊU CẦU ĐỊNH DẠNG CÂU TRẢ LỜI (bắt buộc, không bỏ trống):
- Model dùng: ...
- Acc & trình duyệt: ... (ghi rõ tên browser bạn ĐANG dùng thật, ví dụ "Opera GX" — không ghi kiểu "dùng web search tích hợp" mà bỏ trống tên browser)
- Sau đó là danh sách/bảng đầy đủ các tỉnh/thành, kèm nguồn (link + ngày truy cập)
- KHÔNG bịa link, KHÔNG suy luận/đoán số lượng tỉnh/thành — nếu không tìm được nguồn chính thức rõ ràng cho 1 mục nào, ghi rõ "chưa xác minh được, cần tra thêm", không đoán.
- Ưu tiên nguồn theo thứ tự: (1) Nghị quyết của Quốc hội/UBTVQH, (2) Cổng TTĐT Chính phủ / Báo Chính phủ, (3) Wikipedia tiếng Việt hoặc báo lớn (chỉ dùng để đối chiếu thêm, không dùng làm nguồn chính duy nhất).
- Cẩn thận với chinhphu.vn/baochinhphu.vn: đã phát hiện nhiều lần trang này giữ dữ liệu CŨ dù là trang chính phủ — nếu thấy số liệu/tên khác với Nghị quyết gốc, ưu tiên Nghị quyết có số + ngày cụ thể.
- Đây là bước LIỆT KÊ DANH SÁCH (giống Prompt #3 đã làm cho danh sách Bộ) — CHƯA cần tra chi tiết trụ sở/SĐT/lãnh đạo từng tỉnh/thành, việc đó để dành cho các Prompt sau (theo nhóm, mỗi lần vài tỉnh/thành, giống cách đã làm với các Bộ).
```

#### Prompt #10 — Chi tiết nhóm 1/3 tỉnh/thành (11 tỉnh/thành không sáp nhập + Tuyên Quang)

**Giao cho**: Opera GX.

```
Bạn đang hỗ trợ 1 dự án tổng hợp thông tin bộ máy hành chính Việt Nam (mục đích tham khảo/giáo dục cá nhân, phi lợi nhuận).

NHIỆM VỤ: Tra chi tiết 12 tỉnh/thành phố sau (đã có tên chính thức, chỉ cần tra thêm thông tin liên hệ + lãnh đạo):

1. Thành phố Hà Nội
2. Thành phố Huế
3. Tỉnh Cao Bằng
4. Tỉnh Điện Biên
5. Tỉnh Hà Tĩnh
6. Tỉnh Lai Châu
7. Tỉnh Lạng Sơn
8. Tỉnh Nghệ An
9. Tỉnh Quảng Ninh
10. Tỉnh Thanh Hóa
11. Tỉnh Sơn La
12. Tỉnh Tuyên Quang (tỉnh MỚI, hợp thành từ Hà Giang + Tuyên Quang cũ, hiệu lực từ 1/7/2025 — trung tâm hành chính hiện ghi là TP Tuyên Quang theo Nghị quyết 60-NQ/TW, một văn kiện của Đảng — hãy cố tìm thêm nguồn văn bản pháp luật nhà nước [Nghị quyết/Quyết định của UBTVQH hoặc Chính phủ] xác nhận lại nếu có, để tăng độ tin cậy)

YÊU CẦU ĐỊNH DẠNG CÂU TRẢ LỜI (bắt buộc, không bỏ trống):
- Model dùng: ...
- Acc & trình duyệt: ... (ghi RÕ tên browser thật bạn đang chạy, ví dụ "Opera GX" — nếu công cụ trả lời không tự nhận diện được, vẫn phải tự ghi tên browser bạn đang mở, không để trống hoặc ghi "không xác định")
- Với MỖI tỉnh/thành, ghi đủ: trụ sở UBND (địa chỉ), SĐT tổng đài, email công khai (nếu có), website chính thức, Chủ tịch UBND đương nhiệm (và Bí thư Tỉnh/Thành ủy nếu tìm được), nguồn (link + ngày truy cập) cho mỗi mục.
- KHÔNG bịa link, KHÔNG đoán khi thiếu nguồn — ghi rõ "chưa xác minh được" thay vì đoán.
- Ưu tiên nguồn chính chủ (.gov.vn của tỉnh/thành đó) hơn báo chí/thứ cấp.
- ⚠️ Cẩn thận: chinhphu.vn/baochinhphu.vn đã nhiều lần giữ dữ liệu CŨ (đặc biệt vì đây là các tỉnh/thành MỚI sáp nhập 12/6/2025 — trang có thể còn hiển thị thông tin tỉnh cũ trước sáp nhập). Nếu thấy tên tỉnh cũ hoặc lãnh đạo tỉnh cũ, đó là dấu hiệu cache cũ — ưu tiên nguồn có ngày SAU 1/7/2025 (ngày chính quyền mới vận hành).

Đây là 1 trong 3 prompt chạy song song (Prompt #10/11/12) trên 3 nhóm tỉnh/thành khác nhau — chỉ cần trả lời đúng 12 đơn vị ở trên.
```

#### Prompt #11 — Chi tiết nhóm 2/3 tỉnh/thành (Lào Cai → Gia Lai)

**Giao cho**: Edge.

```
Bạn đang hỗ trợ 1 dự án tổng hợp thông tin bộ máy hành chính Việt Nam (mục đích tham khảo/giáo dục cá nhân, phi lợi nhuận).

NHIỆM VỤ: Tra chi tiết 11 tỉnh/thành phố MỚI (sau sáp nhập 12/6/2025) sau:

1. Tỉnh Lào Cai (= Lào Cai + Yên Bái cũ)
2. Tỉnh Thái Nguyên (= Bắc Kạn + Thái Nguyên cũ)
3. Tỉnh Phú Thọ (= Vĩnh Phúc + Hòa Bình + Phú Thọ cũ)
4. Tỉnh Bắc Ninh (= Bắc Giang + Bắc Ninh cũ) — CHƯA xác định được tên thành phố trung tâm cụ thể ở lần tra trước, cần tìm rõ
5. Tỉnh Hưng Yên (= Thái Bình + Hưng Yên cũ) — CHƯA xác định được tên thành phố trung tâm cụ thể
6. Thành phố Hải Phòng (= Hải Phòng + Hải Dương cũ)
7. Tỉnh Ninh Bình (= Hà Nam + Nam Định + Ninh Bình cũ, trung tâm: TP Hoa Lư)
8. Tỉnh Quảng Trị (= Quảng Bình + Quảng Trị cũ, trung tâm: TP Đồng Hới)
9. Thành phố Đà Nẵng (= Đà Nẵng + Quảng Nam cũ, trung tâm: Quận Hải Châu)
10. Tỉnh Quảng Ngãi (= Kon Tum + Quảng Ngãi cũ, trung tâm: TP Quảng Ngãi)
11. Tỉnh Gia Lai (= Bình Định + Gia Lai cũ) — CHƯA xác định được tên thành phố trung tâm cụ thể

Với các đơn vị #4, #5, #11 (Bắc Ninh, Hưng Yên, Gia Lai): ưu tiên cao nhất là tìm ra CHÍNH XÁC tên thành phố/nơi đặt trung tâm hành chính, vì lần tra trước chưa tìm được.

YÊU CẦU ĐỊNH DẠNG CÂU TRẢ LỜI (bắt buộc, không bỏ trống):
- Model dùng: ...
- Acc & trình duyệt: ... (ghi RÕ tên browser thật bạn đang chạy, ví dụ "Opera GX" — nếu công cụ trả lời không tự nhận diện được, vẫn phải tự ghi tên browser bạn đang mở, không để trống hoặc ghi "không xác định")
- Với MỖI tỉnh/thành, ghi đủ: trụ sở UBND (địa chỉ), SĐT tổng đài, email công khai (nếu có), website chính thức, Chủ tịch UBND đương nhiệm (và Bí thư Tỉnh/Thành ủy nếu tìm được), nguồn (link + ngày truy cập) cho mỗi mục.
- KHÔNG bịa link, KHÔNG đoán khi thiếu nguồn — ghi rõ "chưa xác minh được" thay vì đoán.
- Ưu tiên nguồn chính chủ (.gov.vn của tỉnh/thành đó) hơn báo chí/thứ cấp.
- ⚠️ Cẩn thận: chinhphu.vn/baochinhphu.vn đã nhiều lần giữ dữ liệu CŨ (đặc biệt vì đây là các tỉnh/thành MỚI sáp nhập 12/6/2025 — trang có thể còn hiển thị thông tin tỉnh cũ trước sáp nhập). Nếu thấy tên tỉnh cũ hoặc lãnh đạo tỉnh cũ, đó là dấu hiệu cache cũ — ưu tiên nguồn có ngày SAU 1/7/2025 (ngày chính quyền mới vận hành).

Đây là 1 trong 3 prompt chạy song song (Prompt #10/11/12) trên 3 nhóm tỉnh/thành khác nhau — chỉ cần trả lời đúng 11 đơn vị ở trên.
```

#### Prompt #12 — Chi tiết nhóm 3/3 tỉnh/thành (Khánh Hòa → An Giang)

**Giao cho**: Cốc Cốc.

```
Bạn đang hỗ trợ 1 dự án tổng hợp thông tin bộ máy hành chính Việt Nam (mục đích tham khảo/giáo dục cá nhân, phi lợi nhuận).

NHIỆM VỤ: Tra chi tiết 11 tỉnh/thành phố MỚI (sau sáp nhập 12/6/2025) sau:

1. Tỉnh Khánh Hòa (= Ninh Thuận + Khánh Hòa cũ) — CHƯA xác định được tên thành phố trung tâm cụ thể
2. Tỉnh Lâm Đồng (= Đắk Nông + Bình Thuận + Lâm Đồng cũ) — CHƯA xác định được tên thành phố trung tâm cụ thể
3. Tỉnh Đắk Lắk (= Phú Yên + Đắk Lắk cũ) — CHƯA xác định được tên thành phố trung tâm cụ thể
4. Thành phố Hồ Chí Minh (= TP.HCM + Bà Rịa-Vũng Tàu + Bình Dương cũ)
5. Tỉnh Đồng Nai (= Bình Phước + Đồng Nai cũ) — CHƯA xác định được tên thành phố trung tâm cụ thể
6. Tỉnh Tây Ninh (= Long An + Tây Ninh cũ) — CHƯA xác định được tên thành phố trung tâm cụ thể
7. Thành phố Cần Thơ (= Cần Thơ + Sóc Trăng + Hậu Giang cũ)
8. Tỉnh Vĩnh Long (= Bến Tre + Trà Vinh + Vĩnh Long cũ) — CHƯA xác định được tên thành phố trung tâm cụ thể
9. Tỉnh Đồng Tháp (= Tiền Giang + Đồng Tháp cũ) — CHƯA xác định được tên thành phố trung tâm cụ thể
10. Tỉnh Cà Mau (= Bạc Liêu + Cà Mau cũ) — CHƯA xác định được tên thành phố trung tâm cụ thể
11. Tỉnh An Giang (= Kiên Giang + An Giang cũ) — CHƯA xác định được tên thành phố trung tâm cụ thể

Với các đơn vị #1, #2, #3, #5, #6, #8, #9, #10, #11 (9/11 đơn vị): ưu tiên cao nhất là tìm ra CHÍNH XÁC tên thành phố/nơi đặt trung tâm hành chính, vì lần tra trước chưa tìm được — đây là nhóm còn thiếu nhiều nhất.

YÊU CẦU ĐỊNH DẠNG CÂU TRẢ LỜI (bắt buộc, không bỏ trống):
- Model dùng: ...
- Acc & trình duyệt: ... (ghi RÕ tên browser thật bạn đang chạy, ví dụ "Opera GX" — nếu công cụ trả lời không tự nhận diện được, vẫn phải tự ghi tên browser bạn đang mở, không để trống hoặc ghi "không xác định")
- Với MỖI tỉnh/thành, ghi đủ: trụ sở UBND (địa chỉ), SĐT tổng đài, email công khai (nếu có), website chính thức, Chủ tịch UBND đương nhiệm (và Bí thư Tỉnh/Thành ủy nếu tìm được), nguồn (link + ngày truy cập) cho mỗi mục.
- KHÔNG bịa link, KHÔNG đoán khi thiếu nguồn — ghi rõ "chưa xác minh được" thay vì đoán.
- Ưu tiên nguồn chính chủ (.gov.vn của tỉnh/thành đó) hơn báo chí/thứ cấp.
- ⚠️ Cẩn thận: chinhphu.vn/baochinhphu.vn đã nhiều lần giữ dữ liệu CŨ (đặc biệt vì đây là các tỉnh/thành MỚI sáp nhập 12/6/2025 — trang có thể còn hiển thị thông tin tỉnh cũ trước sáp nhập). Nếu thấy tên tỉnh cũ hoặc lãnh đạo tỉnh cũ, đó là dấu hiệu cache cũ — ưu tiên nguồn có ngày SAU 1/7/2025 (ngày chính quyền mới vận hành).

Đây là 1 trong 3 prompt chạy song song (Prompt #10/11/12) trên 3 nhóm tỉnh/thành khác nhau — chỉ cần trả lời đúng 11 đơn vị ở trên.
```


#### Prompt #13 — Xác nhận mô hình chính quyền 2 cấp (có bỏ cấp huyện không?) + tổng quan cấp xã/phường

**Giao cho**: Arc.

```
Bạn đang hỗ trợ 1 dự án tổng hợp thông tin bộ máy hành chính Việt Nam (mục đích tham khảo/giáo dục cá nhân, phi lợi nhuận).

NHIỆM VỤ 1 — XÁC NHẬN CẤU TRÚC (làm trước, quan trọng nhất):
Khi tra cứu tỉnh Bắc Ninh trước đó, có thông tin nói rằng Việt Nam đã chuyển sang "mô hình chính quyền 2 CẤP (tỉnh – xã/phường)", BỎ HẲN cấp huyện/quận/thị xã/thành phố thuộc tỉnh. Hãy xác nhận CHÍNH XÁC:
- Điều này có ĐÚNG không? Áp dụng trên TOÀN QUỐC hay chỉ 1 số nơi?
- Văn bản pháp luật nào quy định (Luật Tổ chức chính quyền địa phương sửa đổi? Nghị quyết nào của Quốc hội/UBTVQH?) — ghi RÕ số văn bản + ngày ban hành + ngày hiệu lực.
- Nếu ĐÚNG là đã bỏ cấp huyện: cấp hành chính bên dưới tỉnh/thành phố hiện nay có đúng là xã/phường/đặc khu (không qua huyện nữa) không?
- Nếu KHÔNG hoàn toàn đúng (ví dụ chỉ đúng về mặt "không còn HĐND/UBND cấp huyện" nhưng vẫn còn đơn vị hành chính huyện trên bản đồ, hoặc có ngoại lệ nào): giải thích rõ sự khác biệt.

KHÔNG suy luận hay đoán — nếu không chắc, ghi rõ "chưa xác minh được" và giải thích đã tìm ở đâu nhưng không thấy.

NHIỆM VỤ 2 — NẾU Nhiệm vụ 1 xác nhận ĐÚNG là mô hình 2 cấp:
Liệt kê TỔNG QUAN (không cần chi tiết từng đơn vị, chỉ cần bức tranh chung):
- Hiện cả nước có khoảng bao nhiêu đơn vị cấp xã/phường/đặc khu (tổng số, có thể là số ước tính có nguồn, không cần chính xác tuyệt đối)?
- Tên gọi các loại đơn vị cấp này hiện nay là gì (xã, phường, đặc khu, thị trấn... loại nào còn tồn tại, loại nào đã bỏ)?
- Có nguồn nào liệt kê đầy đủ danh sách xã/phường theo từng tỉnh không (ví dụ 1 trang tổng hợp của Bộ Nội vụ/Tổng cục Thống kê)? Nếu có, cho link — đây sẽ là nguồn để dự án tra chi tiết dần theo từng tỉnh ở các Prompt sau.

YÊU CẦU ĐỊNH DẠNG (bắt buộc): Model dùng: ... / Acc & trình duyệt: ... (ghi rõ tên browser thật). Không bịa link, không đoán khi thiếu nguồn. Ưu tiên Luật/Nghị quyết gốc hơn báo chí.
```

#### Prompt #14 — Hoàn thiện cấp tỉnh: Bí thư Tỉnh/Thành ủy + đối chiếu 6 Chủ tịch UBND

**Giao cho**: Cốc Cốc.

```
Bạn đang hỗ trợ 1 dự án tổng hợp thông tin bộ máy hành chính Việt Nam (mục đích tham khảo/giáo dục cá nhân, phi lợi nhuận).

NHIỆM VỤ 1 — Tra Bí thư Tỉnh ủy/Thành ủy đương nhiệm cho các tỉnh/thành sau (hiện đang "chưa xác minh" trong dự án):
Cao Bằng, Điện Biên, Hà Tĩnh, Lai Châu, Lạng Sơn, Nghệ An, Quảng Ninh, Sơn La, Tuyên Quang, Lào Cai, Thái Nguyên, Phú Thọ, Bắc Ninh, Hưng Yên, Hải Phòng, Ninh Bình, Quảng Trị, Đà Nẵng, Quảng Ngãi, Gia Lai, Khánh Hòa, Lâm Đồng, Đắk Lắk, Đồng Nai, Tây Ninh, Cần Thơ, Vĩnh Long, Đồng Tháp, Cà Mau, An Giang.
(Hà Nội và Huế đã có Bí thư — không cần tra lại. Thanh Hóa đã có Phó Bí thư Thường trực, cần tìm tên Bí thư CHÍNH THỨC nếu có.)

Nếu 1 tỉnh nào không tìm được nguồn rõ ràng, ghi "chưa xác minh được" — không đoán, không bỏ trống mà không ghi chú.

NHIỆM VỤ 2 — Đối chiếu chéo (cross-check) tên Chủ tịch UBND đương nhiệm cho 6 đơn vị sau (dự án hiện chỉ có 1 nguồn duy nhất, cần nguồn thứ 2 độc lập để tăng độ tin cậy):
- TP Cần Thơ: hiện ghi là Trương Cảnh Tuyên
- TP Hồ Chí Minh: hiện ghi là Nguyễn Văn Được
- Đồng Tháp: hiện ghi là Phạm Thành Ngại
- Vĩnh Long: hiện ghi là Trần Trí Quang
- Cà Mau: hiện ghi là Lữ Quang Ngời
- An Giang: hiện ghi là Hồ Văn Mừng

Tìm 1 nguồn báo chí/văn bản ĐỘC LẬP (không phải chinhphu.vn — vì đó là nguồn ban đầu) xác nhận lại từng tên trên còn đúng không, có ngày bầu/phê chuẩn cụ thể không. Nếu phát hiện xung đột (tên khác), ghi rõ CẢ 2 nguồn, KHÔNG tự chọn — để dành báo lại cho dự án xử lý.

YÊU CẦU ĐỊNH DẠNG (bắt buộc): Model dùng: ... / Acc & trình duyệt: ... (ghi rõ tên browser thật). Không bịa link, không đoán khi thiếu nguồn. Ưu tiên nguồn .gov.vn hoặc báo chí có ngày cụ thể.
```


#### Prompt #15 — Danh sách cấp xã nhóm 1/5 (Hà Nội, Cao Bằng, Điện Biên, Hà Tĩnh, Lai Châu, Lạng Sơn, Nghệ An)

**Giao cho**: Brave.

```
Bạn đang hỗ trợ 1 dự án tổng hợp thông tin bộ máy hành chính Việt Nam (mục đích tham khảo/giáo dục cá nhân, phi lợi nhuận).

Bối cảnh: Việt Nam đã bỏ cấp huyện từ 1/7/2025, hiện chỉ còn 2 cấp: tỉnh/thành phố và xã/phường/đặc khu (Luật 72/2025/QH15). Cả nước có 3.321 đơn vị cấp xã.

NHIỆM VỤ: Với mỗi tỉnh/thành sau, tra tổng số và danh sách đơn vị cấp xã (xã/phường/đặc khu) MỚI sau sắp xếp 2025:
1. Thành phố Hà Nội
2. Tỉnh Cao Bằng
3. Tỉnh Điện Biên
4. Tỉnh Hà Tĩnh
5. Tỉnh Lai Châu
6. Tỉnh Lạng Sơn
7. Tỉnh Nghệ An

YÊU CẦU ĐỊNH DẠNG (bắt buộc): Model dùng: ... / Acc & trình duyệt: ... (ghi rõ tên browser, theo quy ước dự án — bạn tự gán). Với MỖI tỉnh trong nhóm, ghi: tổng số đơn vị cấp xã (xã + phường + đặc khu, ghi riêng từng loại), và danh sách TÊN các xã/phường/đặc khu đó nếu nguồn cho phép lấy trực tiếp (KHÔNG tự bịa tên, KHÔNG suy luận). Nếu danh sách quá dài để chép hết, cho phép: nêu tổng số + vài ví dụ + LINK trực tiếp tới nguồn có đầy đủ danh sách (ưu tiên Nghị quyết riêng của UBTVQH15 cho tỉnh đó, hoặc Phụ lục II của Quyết định 19/2025/QĐ-TTg, hoặc trang tổng hợp chinhphu.vn) — không cần cố chép hết nếu dễ sai/thiếu. Ghi rõ nguồn (link + ngày truy cập) cho mỗi tỉnh. Không dùng chinhphu.vn/baochinhphu.vn làm nguồn DUY NHẤT nếu có thể — ưu tiên văn bản Nghị quyết gốc.
```

#### Prompt #16 — Danh sách cấp xã nhóm 2/5 (Quảng Ninh, Thanh Hóa, Sơn La, Tuyên Quang, Lào Cai, Thái Nguyên, Phú Thọ)

**Giao cho**: Opera GX.

```
Bạn đang hỗ trợ 1 dự án tổng hợp thông tin bộ máy hành chính Việt Nam (mục đích tham khảo/giáo dục cá nhân, phi lợi nhuận).

Bối cảnh: Việt Nam đã bỏ cấp huyện từ 1/7/2025, hiện chỉ còn 2 cấp: tỉnh/thành phố và xã/phường/đặc khu (Luật 72/2025/QH15). Cả nước có 3.321 đơn vị cấp xã.

NHIỆM VỤ: Với mỗi tỉnh/thành sau, tra tổng số và danh sách đơn vị cấp xã (xã/phường/đặc khu) MỚI sau sắp xếp 2025:
1. Tỉnh Quảng Ninh
2. Tỉnh Thanh Hóa
3. Tỉnh Sơn La
4. Tỉnh Tuyên Quang
5. Tỉnh Lào Cai
6. Tỉnh Thái Nguyên
7. Tỉnh Phú Thọ

YÊU CẦU ĐỊNH DẠNG (bắt buộc): Model dùng: ... / Acc & trình duyệt: ... (ghi rõ tên browser, theo quy ước dự án — bạn tự gán). Với MỖI tỉnh trong nhóm, ghi: tổng số đơn vị cấp xã (xã + phường + đặc khu, ghi riêng từng loại), và danh sách TÊN các xã/phường/đặc khu đó nếu nguồn cho phép lấy trực tiếp (KHÔNG tự bịa tên, KHÔNG suy luận). Nếu danh sách quá dài để chép hết, cho phép: nêu tổng số + vài ví dụ + LINK trực tiếp tới nguồn có đầy đủ danh sách (ưu tiên Nghị quyết riêng của UBTVQH15 cho tỉnh đó, hoặc Phụ lục II của Quyết định 19/2025/QĐ-TTg, hoặc trang tổng hợp chinhphu.vn) — không cần cố chép hết nếu dễ sai/thiếu. Ghi rõ nguồn (link + ngày truy cập) cho mỗi tỉnh. Không dùng chinhphu.vn/baochinhphu.vn làm nguồn DUY NHẤT nếu có thể — ưu tiên văn bản Nghị quyết gốc.
```

#### Prompt #17 — Danh sách cấp xã nhóm 3/5 (Bắc Ninh, Hưng Yên, Hải Phòng, Ninh Bình, Quảng Trị, Đà Nẵng, Quảng Ngãi)

**Giao cho**: Microsoft Edge.

```
Bạn đang hỗ trợ 1 dự án tổng hợp thông tin bộ máy hành chính Việt Nam (mục đích tham khảo/giáo dục cá nhân, phi lợi nhuận).

Bối cảnh: Việt Nam đã bỏ cấp huyện từ 1/7/2025, hiện chỉ còn 2 cấp: tỉnh/thành phố và xã/phường/đặc khu (Luật 72/2025/QH15). Cả nước có 3.321 đơn vị cấp xã.

NHIỆM VỤ: Với mỗi tỉnh/thành sau, tra tổng số và danh sách đơn vị cấp xã (xã/phường/đặc khu) MỚI sau sắp xếp 2025:
1. Tỉnh Bắc Ninh
2. Tỉnh Hưng Yên
3. Thành phố Hải Phòng
4. Tỉnh Ninh Bình
5. Tỉnh Quảng Trị
6. Thành phố Đà Nẵng
7. Tỉnh Quảng Ngãi

YÊU CẦU ĐỊNH DẠNG (bắt buộc): Model dùng: ... / Acc & trình duyệt: ... (ghi rõ tên browser, theo quy ước dự án — bạn tự gán). Với MỖI tỉnh trong nhóm, ghi: tổng số đơn vị cấp xã (xã + phường + đặc khu, ghi riêng từng loại), và danh sách TÊN các xã/phường/đặc khu đó nếu nguồn cho phép lấy trực tiếp (KHÔNG tự bịa tên, KHÔNG suy luận). Nếu danh sách quá dài để chép hết, cho phép: nêu tổng số + vài ví dụ + LINK trực tiếp tới nguồn có đầy đủ danh sách (ưu tiên Nghị quyết riêng của UBTVQH15 cho tỉnh đó, hoặc Phụ lục II của Quyết định 19/2025/QĐ-TTg, hoặc trang tổng hợp chinhphu.vn) — không cần cố chép hết nếu dễ sai/thiếu. Ghi rõ nguồn (link + ngày truy cập) cho mỗi tỉnh. Không dùng chinhphu.vn/baochinhphu.vn làm nguồn DUY NHẤT nếu có thể — ưu tiên văn bản Nghị quyết gốc.
```

#### Prompt #18 — Danh sách cấp xã nhóm 4/5 (Huế, Gia Lai, Khánh Hòa, Lâm Đồng, Đắk Lắk, TP Đồng Nai, Tây Ninh)

**Giao cho**: Cốc Cốc.

```
Bạn đang hỗ trợ 1 dự án tổng hợp thông tin bộ máy hành chính Việt Nam (mục đích tham khảo/giáo dục cá nhân, phi lợi nhuận).

Bối cảnh: Việt Nam đã bỏ cấp huyện từ 1/7/2025, hiện chỉ còn 2 cấp: tỉnh/thành phố và xã/phường/đặc khu (Luật 72/2025/QH15). Cả nước có 3.321 đơn vị cấp xã.

NHIỆM VỤ: Với mỗi tỉnh/thành sau, tra tổng số và danh sách đơn vị cấp xã (xã/phường/đặc khu) MỚI sau sắp xếp 2025:
1. Thành phố Huế
2. Tỉnh Gia Lai
3. Tỉnh Khánh Hòa
4. Tỉnh Lâm Đồng
5. Tỉnh Đắk Lắk
6. Thành phố Đồng Nai (lưu ý: đã đổi từ Tỉnh lên Thành phố trực thuộc TW từ 30/4/2026, nhưng cấp xã bên trong có thể vẫn giữ nguyên từ đợt sắp xếp 2025 — tra rõ có thay đổi gì thêm sau 30/4/2026 không)
7. Tỉnh Tây Ninh

YÊU CẦU ĐỊNH DẠNG (bắt buộc): Model dùng: ... / Acc & trình duyệt: ... (ghi rõ tên browser, theo quy ước dự án — bạn tự gán). Với MỖI tỉnh trong nhóm, ghi: tổng số đơn vị cấp xã (xã + phường + đặc khu, ghi riêng từng loại), và danh sách TÊN các xã/phường/đặc khu đó nếu nguồn cho phép lấy trực tiếp (KHÔNG tự bịa tên, KHÔNG suy luận). Nếu danh sách quá dài để chép hết, cho phép: nêu tổng số + vài ví dụ + LINK trực tiếp tới nguồn có đầy đủ danh sách (ưu tiên Nghị quyết riêng của UBTVQH15 cho tỉnh đó, hoặc Phụ lục II của Quyết định 19/2025/QĐ-TTg, hoặc trang tổng hợp chinhphu.vn) — không cần cố chép hết nếu dễ sai/thiếu. Ghi rõ nguồn (link + ngày truy cập) cho mỗi tỉnh. Không dùng chinhphu.vn/baochinhphu.vn làm nguồn DUY NHẤT nếu có thể — ưu tiên văn bản Nghị quyết gốc.
```

#### Prompt #19 — Danh sách cấp xã nhóm 5/5 (TP.HCM, Cần Thơ, Vĩnh Long, Đồng Tháp, Cà Mau, An Giang) + tên 13 đặc khu

**Giao cho**: Arc.

```
Bạn đang hỗ trợ 1 dự án tổng hợp thông tin bộ máy hành chính Việt Nam (mục đích tham khảo/giáo dục cá nhân, phi lợi nhuận).

Bối cảnh: Việt Nam đã bỏ cấp huyện từ 1/7/2025, hiện chỉ còn 2 cấp: tỉnh/thành phố và xã/phường/đặc khu (Luật 72/2025/QH15). Cả nước có 3.321 đơn vị cấp xã, gồm 2.636 xã + 672 phường + 13 đặc khu.

NHIỆM VỤ 1: Với mỗi tỉnh/thành sau, tra tổng số và danh sách đơn vị cấp xã (xã/phường/đặc khu) MỚI sau sắp xếp 2025:
1. Thành phố Hồ Chí Minh
2. Thành phố Cần Thơ
3. Tỉnh Vĩnh Long
4. Tỉnh Đồng Tháp
5. Tỉnh Cà Mau
6. Tỉnh An Giang

NHIỆM VỤ 2 (riêng, ưu tiên cao): Tìm TÊN CỤ THỂ của 13 "đặc khu" trên cả nước (loại đơn vị cấp xã đặc biệt, thường ở đảo/vị trí quan trọng — ví dụ có thể gồm Phú Quốc, Côn Đảo, Cát Hải, Vân Đồn... nhưng CHƯA xác nhận, đừng dùng gợi ý này làm căn cứ, phải tự tra). Với mỗi đặc khu ghi: tên, thuộc tỉnh/thành nào, vị trí địa lý sơ lược.

YÊU CẦU ĐỊNH DẠNG (bắt buộc): Model dùng: ... / Acc & trình duyệt: ... (ghi rõ tên browser, theo quy ước dự án — bạn tự gán). Với MỖI tỉnh trong nhóm, ghi: tổng số đơn vị cấp xã (xã + phường + đặc khu, ghi riêng từng loại), và danh sách TÊN các xã/phường/đặc khu đó nếu nguồn cho phép lấy trực tiếp (KHÔNG tự bịa tên, KHÔNG suy luận). Nếu danh sách quá dài để chép hết, cho phép: nêu tổng số + vài ví dụ + LINK trực tiếp tới nguồn có đầy đủ danh sách (ưu tiên Nghị quyết riêng của UBTVQH15 cho tỉnh đó, hoặc Phụ lục II của Quyết định 19/2025/QĐ-TTg, hoặc trang tổng hợp chinhphu.vn) — không cần cố chép hết nếu dễ sai/thiếu. Ghi rõ nguồn (link + ngày truy cập) cho mỗi tỉnh. Không dùng chinhphu.vn/baochinhphu.vn làm nguồn DUY NHẤT nếu có thể — ưu tiên văn bản Nghị quyết gốc.
```


#### Prompt #20 — Danh sách TÊN ĐẦY ĐỦ nhóm 1/5 (Hà Nội, Cao Bằng, Điện Biên, Hà Tĩnh, Lai Châu, Lạng Sơn, Nghệ An)

**Giao cho**: Brave. **Tiếp nối Prompt #15** — lần này cần TÊN ĐẦY ĐỦ, không chỉ tổng số/ví dụ.

```
Bạn đang hỗ trợ 1 dự án tổng hợp thông tin bộ máy hành chính Việt Nam (mục đích tham khảo/giáo dục cá nhân, phi lợi nhuận).

Bối cảnh: đã có tổng số đơn vị cấp xã của 7 tỉnh này (không cần tra lại tổng số). Lần này cần DANH SÁCH TÊN ĐẦY ĐỦ từng xã/phường:
1. Thành phố Hà Nội — 126 đơn vị (75 xã + 51 phường)
2. Tỉnh Cao Bằng — 56 đơn vị (53 xã + 3 phường)
3. Tỉnh Điện Biên — 45 đơn vị (42 xã + 3 phường)
4. Tỉnh Hà Tĩnh — 69 đơn vị (60 xã + 9 phường)
5. Tỉnh Lai Châu — 38 đơn vị (36 xã + 2 phường)
6. Tỉnh Lạng Sơn — 65 đơn vị (61 xã + 4 phường)
7. Tỉnh Nghệ An — 130 đơn vị (119 xã + 11 phường)

NHIỆM VỤ: với MỖI tỉnh, tìm và chép lại ĐẦY ĐỦ danh sách tên các xã/phường (không chỉ vài ví dụ). Nguồn ưu tiên theo thứ tự: (a) bài "Danh sách [N] xã phường mới của tỉnh [tên tỉnh]" trên xaydungchinhsach.chinhphu.vn (thường có liệt kê đủ tên, kèm nói rõ hình thành từ (các) xã/phường/thị trấn cũ nào) — tìm bằng cách search "danh sách xã phường mới tỉnh [tên tỉnh] chinhphu.vn"; (b) toàn văn Nghị quyết UBTVQH15 riêng của tỉnh đó (moj.gov.vn hoặc thuvienphapluat.vn); (c) Phụ lục II của Quyết định 19/2025/QĐ-TTg.

YÊU CẦU ĐỊNH DẠNG (bắt buộc): Model dùng: ... / Acc & trình duyệt: ... (bạn tự gán theo quy ước dự án). Với MỖI tỉnh: liệt kê đủ tên (đánh số hoặc xuống dòng từng đơn vị, ghi rõ xã hay phường), + 1 dòng nguồn (link chính xác + ngày truy cập). KHÔNG bịa tên, KHÔNG suy luận/đoán tên. Nếu 1 tỉnh có danh sách QUÁ DÀI để chép hết trong 1 lượt trả lời, CHIA làm nhiều lượt (trả lời tỉnh đó riêng ở tin nhắn tiếp theo trong CÙNG hội thoại này, ghi rõ "tiếp tục tỉnh X") — không bỏ sót, không tóm tắt cho ngắn. Nếu 1 nguồn không liệt kê đủ, thử nguồn khác trước khi bỏ cuộc; nếu vẫn không tìm được đủ tên cho 1 tỉnh cụ thể, ghi rõ "KHÔNG tìm được danh sách đầy đủ, chỉ có: [những gì tìm được]" — không tự chế thêm tên.
```

#### Prompt #21 — Danh sách TÊN ĐẦY ĐỦ nhóm 2/5 (Quảng Ninh, Thanh Hóa, Sơn La, Tuyên Quang, Lào Cai, Thái Nguyên, Phú Thọ)

**Giao cho**: Opera GX. **Tiếp nối Prompt #16.**

```
Bạn đang hỗ trợ 1 dự án tổng hợp thông tin bộ máy hành chính Việt Nam (mục đích tham khảo/giáo dục cá nhân, phi lợi nhuận).

Bối cảnh: đã có tổng số đơn vị cấp xã của 7 tỉnh này (không cần tra lại tổng số). Lần này cần DANH SÁCH TÊN ĐẦY ĐỦ từng xã/phường/đặc khu:
1. Tỉnh Quảng Ninh — 54 đơn vị (22 xã + 30 phường + 2 đặc khu: Vân Đồn, Cô Tô)
2. Tỉnh Thanh Hóa — 166 đơn vị (147 xã + 19 phường)
3. Tỉnh Sơn La — 75 đơn vị (67 xã + 8 phường)
4. Tỉnh Tuyên Quang — 124 đơn vị (117 xã + 7 phường)
5. Tỉnh Lào Cai — 99 đơn vị (89 xã + 10 phường)
6. Tỉnh Thái Nguyên — 92 đơn vị (dự án đang dùng số 77 xã + 15 phường theo Nghị quyết 1683/NQ-UBTVQH15 gốc, ĐÃ tự xác minh qua chinhphu.vn cập nhật 04/08/2025 — dùng số này, không cần tra lại vụ "69 xã/23 phường")
7. Tỉnh Phú Thọ — 148 đơn vị (133 xã + 15 phường)

NHIỆM VỤ: với MỖI tỉnh, tìm và chép lại ĐẦY ĐỦ danh sách tên các xã/phường/đặc khu (không chỉ vài ví dụ). Nguồn ưu tiên theo thứ tự: (a) bài "Danh sách [N] xã phường mới của tỉnh [tên tỉnh]" trên xaydungchinhsach.chinhphu.vn; (b) toàn văn Nghị quyết UBTVQH15 riêng của tỉnh đó; (c) Phụ lục II của Quyết định 19/2025/QĐ-TTg.

YÊU CẦU ĐỊNH DẠNG (bắt buộc): Model dùng: ... / Acc & trình duyệt: ... (bạn tự gán theo quy ước dự án). Với MỖI tỉnh: liệt kê đủ tên (đánh số hoặc xuống dòng từng đơn vị, ghi rõ xã/phường/đặc khu), + 1 dòng nguồn (link chính xác + ngày truy cập). KHÔNG bịa tên, KHÔNG suy luận. Nếu 1 tỉnh có danh sách QUÁ DÀI để chép hết trong 1 lượt trả lời, CHIA làm nhiều lượt (trả lời tỉnh đó riêng ở tin nhắn tiếp theo, ghi rõ "tiếp tục tỉnh X") — không bỏ sót. Nếu không tìm được đủ tên, ghi rõ "KHÔNG tìm được danh sách đầy đủ, chỉ có: [những gì tìm được]".
```

#### Prompt #22 — Danh sách TÊN ĐẦY ĐỦ nhóm 3/5 (Bắc Ninh, Hưng Yên, Hải Phòng, Ninh Bình, Quảng Trị, Đà Nẵng, Quảng Ngãi)

**Giao cho**: Microsoft Edge. **Tiếp nối Prompt #17.**

```
Bạn đang hỗ trợ 1 dự án tổng hợp thông tin bộ máy hành chính Việt Nam (mục đích tham khảo/giáo dục cá nhân, phi lợi nhuận).

Bối cảnh: đã có tổng số đơn vị cấp xã của 7 tỉnh này (không cần tra lại tổng số). Lần này cần DANH SÁCH TÊN ĐẦY ĐỦ từng xã/phường/đặc khu:
1. Tỉnh Bắc Ninh — 99 đơn vị (66 xã + 33 phường)
2. Tỉnh Hưng Yên — 104 đơn vị (93 xã + 11 phường)
3. Thành phố Hải Phòng — 114 đơn vị (67 xã + 45 phường + 2 đặc khu: Bạch Long Vĩ, Cát Hải)
4. Tỉnh Ninh Bình — 129 đơn vị (97 xã + 32 phường)
5. Tỉnh Quảng Trị — 78 đơn vị (69 xã + 8 phường + 1 đặc khu: Cồn Cỏ)
6. Thành phố Đà Nẵng — 94 đơn vị (70 xã + 23 phường + 1 đặc khu: Hoàng Sa)
7. Tỉnh Quảng Ngãi — 96 đơn vị (86 xã + 9 phường + 1 đặc khu: Lý Sơn)

NHIỆM VỤ: với MỖI tỉnh, tìm và chép lại ĐẦY ĐỦ danh sách tên các xã/phường (đặc khu đã biết tên, không cần tra lại riêng đặc khu). Nguồn ưu tiên theo thứ tự: (a) bài "Danh sách [N] xã phường mới của tỉnh [tên tỉnh]" trên xaydungchinhsach.chinhphu.vn; (b) toàn văn Nghị quyết UBTVQH15 riêng của tỉnh đó; (c) Phụ lục II của Quyết định 19/2025/QĐ-TTg.

YÊU CẦU ĐỊNH DẠNG (bắt buộc): Model dùng: ... / Acc & trình duyệt: ... (bạn tự gán theo quy ước dự án). Với MỖI tỉnh: liệt kê đủ tên (đánh số hoặc xuống dòng từng đơn vị, ghi rõ xã/phường), + 1 dòng nguồn (link chính xác + ngày truy cập). KHÔNG bịa tên, KHÔNG suy luận. Nếu 1 tỉnh có danh sách QUÁ DÀI để chép hết trong 1 lượt trả lời, CHIA làm nhiều lượt (ghi rõ "tiếp tục tỉnh X") — không bỏ sót. Nếu không tìm được đủ tên, ghi rõ "KHÔNG tìm được danh sách đầy đủ, chỉ có: [những gì tìm được]".
```

#### Prompt #23 — Danh sách TÊN ĐẦY ĐỦ nhóm 4/5 (Huế, Gia Lai, Khánh Hòa, Lâm Đồng, Đắk Lắk, Thành phố Đồng Nai, Tây Ninh)

**Giao cho**: Cốc Cốc. **Tiếp nối Prompt #18.**

```
Bạn đang hỗ trợ 1 dự án tổng hợp thông tin bộ máy hành chính Việt Nam (mục đích tham khảo/giáo dục cá nhân, phi lợi nhuận).

Bối cảnh: đã có tổng số đơn vị cấp xã của 7 tỉnh này (không cần tra lại tổng số, không cần tra lại lịch sử Đồng Nai lên thành phố — đã xác nhận đủ). Lần này cần DANH SÁCH TÊN ĐẦY ĐỦ từng xã/phường/đặc khu:
1. Thành phố Huế — 40 đơn vị (19 xã + 21 phường)
2. Tỉnh Gia Lai — 135 đơn vị (110 xã + 25 phường)
3. Tỉnh Khánh Hòa — 65 đơn vị (48 xã + 16 phường + 1 đặc khu: Trường Sa)
4. Tỉnh Lâm Đồng — 124 đơn vị (103 xã + 20 phường + 1 đặc khu: Phú Quý)
5. Tỉnh Đắk Lắk — 102 đơn vị (88 xã + 14 phường)
6. Thành phố Đồng Nai — 95 đơn vị (62 xã + 33 phường, tính theo cơ cấu SAU 30/4/2026)
7. Tỉnh Tây Ninh — 96 đơn vị (82 xã + 14 phường)

NHIỆM VỤ: với MỖI tỉnh/thành, tìm và chép lại ĐẦY ĐỦ danh sách tên các xã/phường (đặc khu đã biết tên). Nguồn ưu tiên theo thứ tự: (a) bài "Danh sách [N] xã phường mới của tỉnh [tên tỉnh]" trên xaydungchinhsach.chinhphu.vn; (b) toàn văn Nghị quyết UBTVQH15 riêng của tỉnh đó; (c) Phụ lục II của Quyết định 19/2025/QĐ-TTg. Với Thành phố Đồng Nai: dùng nguồn phản ánh cơ cấu SAU đợt chuyển 10 xã→10 phường (14/4/2026), không dùng số liệu gốc 2025 (72 xã + 23 phường) vì đã lỗi thời.

YÊU CẦU ĐỊNH DẠNG (bắt buộc): Model dùng: ... / Acc & trình duyệt: ... (bạn tự gán theo quy ước dự án). Với MỖI tỉnh: liệt kê đủ tên (đánh số hoặc xuống dòng từng đơn vị, ghi rõ xã/phường), + 1 dòng nguồn (link chính xác + ngày truy cập). KHÔNG bịa tên, KHÔNG suy luận. Nếu 1 tỉnh có danh sách QUÁ DÀI để chép hết trong 1 lượt trả lời, CHIA làm nhiều lượt (ghi rõ "tiếp tục tỉnh X") — không bỏ sót. Nếu không tìm được đủ tên, ghi rõ "KHÔNG tìm được danh sách đầy đủ, chỉ có: [những gì tìm được]".
```

#### Prompt #24 — Danh sách TÊN ĐẦY ĐỦ nhóm 5/5 (TP.HCM, Cần Thơ, Vĩnh Long, Đồng Tháp, Cà Mau, An Giang)

**Giao cho**: Arc. **Tiếp nối Prompt #19** (phần tên 13 đặc khu đã xong, không cần lặp lại).

```
Bạn đang hỗ trợ 1 dự án tổng hợp thông tin bộ máy hành chính Việt Nam (mục đích tham khảo/giáo dục cá nhân, phi lợi nhuận).

Bối cảnh: đã có tổng số đơn vị cấp xã của 6 tỉnh này VÀ đã có đủ tên 13 đặc khu cả nước (không cần tra lại 2 việc đó). Lần này cần DANH SÁCH TÊN ĐẦY ĐỦ từng xã/phường:
1. Thành phố Hồ Chí Minh — 168 đơn vị (54 xã + 113 phường + 1 đặc khu: Côn Đảo)
2. Thành phố Cần Thơ — 103 đơn vị (72 xã + 31 phường)
3. Tỉnh Vĩnh Long — 124 đơn vị (105 xã + 19 phường)
4. Tỉnh Đồng Tháp — 102 đơn vị (82 xã + 20 phường)
5. Tỉnh Cà Mau — 64 đơn vị (55 xã + 9 phường)
6. Tỉnh An Giang — 102 đơn vị (85 xã + 14 phường + 3 đặc khu: Phú Quốc, Kiên Hải, Thổ Châu)

NHIỆM VỤ: với MỖI tỉnh/thành, tìm và chép lại ĐẦY ĐỦ danh sách tên các xã/phường (đặc khu đã biết tên). Nguồn ưu tiên theo thứ tự: (a) bài "Danh sách [N] xã phường mới của tỉnh/thành [tên]" trên xaydungchinhsach.chinhphu.vn; (b) toàn văn Nghị quyết UBTVQH15 riêng của tỉnh/thành đó; (c) Phụ lục II của Quyết định 19/2025/QĐ-TTg. TP Hồ Chí Minh có 168 đơn vị — RẤT DÀI, ưu tiên chia làm nhiều lượt trả lời ngay từ đầu cho tỉnh này, không dồn vào 1 tin nhắn.

YÊU CẦU ĐỊNH DẠNG (bắt buộc): Model dùng: ... / Acc & trình duyệt: ... (bạn tự gán theo quy ước dự án). Với MỖI tỉnh/thành: liệt kê đủ tên (đánh số hoặc xuống dòng từng đơn vị, ghi rõ xã/phường), + 1 dòng nguồn (link chính xác + ngày truy cập). KHÔNG bịa tên, KHÔNG suy luận. Nếu 1 tỉnh có danh sách QUÁ DÀI để chép hết trong 1 lượt trả lời, CHIA làm nhiều lượt (ghi rõ "tiếp tục tỉnh/thành X") — không bỏ sót. Nếu không tìm được đủ tên, ghi rõ "KHÔNG tìm được danh sách đầy đủ, chỉ có: [những gì tìm được]".
```
