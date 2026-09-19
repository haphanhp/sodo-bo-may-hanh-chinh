---
tags: [sodobmhc]
type: co-che-chong-loi-thoi
created: 2026-09-19
updated: 2026-09-19
---

### Co-che-chong-loi-thoi-sodobmhc — Vì sao dữ liệu sẽ cũ đi, và cơ chế để phát hiện + cập nhật kịp thời

File này trả lời 1 câu hỏi mà không file nào khác trong dự án trả lời trực tiếp: **dữ liệu trong dự án này, đúng ở thời điểm thu thập, sẽ "hết hạn" theo cách nào, nhanh cỡ nào, và làm sao biết để cập nhật** — thay vì chỉ tin tưởng ngầm rằng "đã có nguồn nên chắc vẫn đúng". Không đọc file này thì hệ thống `last_verified` + cảnh báo màu đã build ở Phase 8 chỉ là 1 con số ngày tháng vô nghĩa, không gắn với hành động cụ thể nào tiếp theo.

Đối tượng đọc: người vận hành dự án (user) và bất kỳ AI nào được giao duy trì dữ liệu sau này.

---

#### 1. Vì sao thông tin hành chính Việt Nam đặc biệt dễ lỗi thời (so với dữ liệu tĩnh khác)

Ba nguyên nhân gốc, không cái nào kiểm soát được từ phía dự án:

- **Cải cách bộ máy không có lịch cố định.** 2025 đã chứng kiến 2 đợt cải cách cực lớn (sáp nhập Bộ ngày 01/3, bỏ cấp huyện + sáp nhập tỉnh ngày 01/7) — cả 2 đều là quyết định chính trị, không có "lịch công bố trước 5 năm" như 1 kỳ bầu cử. Dự án chỉ biết được các mốc TRONG QUÁ KHỨ hoặc các mốc ĐÃ ĐƯỢC BAN HÀNH VĂN BẢN nhưng CHƯA hiệu lực (ví dụ Đồng Nai lên thành phố 30/4/2026 — đã có nghị quyết từ trước) — không thể biết trước những đợt cải cách CHƯA có văn bản nào.
- **Nhân sự lãnh đạo đổi nhanh hơn cơ cấu tổ chức.** Ví dụ thực tế đã gặp trong chính dự án này: Chủ tịch UBND tỉnh Đồng Tháp đổi người chỉ **9 ngày** trước ngày Pro tra cứu (xem `Build-logs-sodobmhc.md`, mục Prompt #13/#14) — không phải do hết nhiệm kỳ, mà do điều động sang vị trí khác (Phó Tổng Thanh tra Chính phủ). Loại thay đổi này xảy ra quanh năm, không theo chu kỳ.
- **Văn bản dưới luật (nghị định, thông tư) sửa đổi liên tục và không có "lịch thông báo" rộng rãi như luật.** Một thông tư về mức phí/lệ phí, mẫu đơn, hoặc phân công thẩm quyền cấp Sở/Bộ có thể được sửa vài lần một năm mà không lên báo lớn — trong khi đây chính xác là loại dữ liệu người dùng cuối cần ĐÚNG NHẤT khi đi làm thủ tục thật (xem luật số 20 trong `Claude-sodobmhc.md`: 5 mốc thay đổi 2025–2026 chỉ riêng cho thủ tục hành chính).

---

#### 2. Phân tầng theo tốc độ lỗi thời — không phải mọi dữ liệu đều cũ đi với tốc độ như nhau

| Tầng | Ví dụ trong dự án | Tốc độ lỗi thời | Vì sao |
|---|---|---|---|
| 1. Hiến pháp / Luật gốc | Luật 72/2025/QH15 (chính quyền 2 cấp), Hiến pháp sửa đổi 2025 | **Rất chậm** (nhiều năm) | Phải qua Quốc hội biểu quyết, có quy trình dài, nhưng khi đổi thì ảnh hưởng lan toả cực lớn xuống mọi tầng dưới |
| 2. Cơ cấu tổ chức (Bộ, tỉnh, sáp nhập/giải thể) | 14 Bộ + 3 cơ quan ngang Bộ, 34 tỉnh/thành | **Trung bình**, nhưng đang trong giai đoạn dư chấn | 2 đợt cải cách lớn vừa xảy ra trong 2025; còn ít nhất 1 mốc đã biết trước (Đồng Nai 30/4/2026) — rủi ro cao hơn bình thường trong 1–2 năm tới |
| 3. Nhân sự lãnh đạo | Bộ trưởng, Chủ tịch UBND, Bí thư Tỉnh/Thành uỷ | **Nhanh nhất**, không theo lịch cố định | Điều động/kỷ luật/bầu bổ sung có thể xảy ra bất kỳ lúc nào, không chỉ khi hết nhiệm kỳ 5 năm |
| 4. Thủ tục / biểu mẫu / phí, lệ phí | `procedures.json`, tương lai `forms.json`, `licenses.json` | **Nhanh** | Nghị định/thông tư hướng dẫn sửa đổi thường xuyên hơn luật, ít được truyền thông đưa tin rộng |
| 5. Thông tin liên hệ (SĐT, email, trụ sở) | `contact` trong `organizations.json` | **Trung bình–nhanh** | Có thể đổi khi sáp nhập trụ sở dù không có thay đổi pháp lý gì (ví dụ Hải Phòng dùng trụ sở MỚI ở Thuỷ Nguyên dù không đổi luật) |

Ý nghĩa thực tế: **không nên áp 1 ngưỡng "quá X ngày là cũ" chung cho toàn bộ dữ liệu** — 1 nghị quyết sửa Hiến pháp mà 400 ngày chưa kiểm tra lại thì rủi ro thấp hơn nhiều so với 1 tên Chủ tịch UBND mà 90 ngày chưa kiểm tra lại.

---

#### 3. Nhiệm kỳ và mốc chính trị cần theo dõi (nguồn gốc của phần lớn thay đổi tầng 2–3)

- **Quốc hội khoá XV → khoá XVI.** Dự án đã ghi nhận bằng chứng khoá XVI đã bắt đầu hoạt động: Nghị quyết số 30-NQ/2026/QH16 (24/4/2026, kỳ họp thứ Nhất, thành lập Thành phố Đồng Nai) — tức nhiệm kỳ khoá XVI khai mạc khoảng đầu năm 2026. Đầu nhiệm kỳ Quốc hội mới thường kéo theo kiện toàn nhân sự cấp cao (Chủ tịch nước, Thủ tướng, Chủ tịch Quốc hội, các Bộ trưởng) — đây là giai đoạn RỦI RO CAO cho tầng 3 (nhân sự).[^1]
- **Đại hội Đại biểu toàn quốc của Đảng (chu kỳ 5 năm).** Đây là nguồn gốc thực sự đứng sau phần lớn các đợt "tinh gọn bộ máy" — đợt sáp nhập Bộ (01/3/2025) và sáp nhập tỉnh, bỏ cấp huyện (01/7/2025) đều diễn ra TRƯỚC một kỳ Đại hội Đảng, đúng mô hình lịch sử (kiện toàn bộ máy trước Đại hội). Nếu mô hình này lặp lại, đợt cải cách bộ máy lớn TIẾP THEO nhiều khả năng sẽ gắn với kỳ Đại hội kế tiếp (5 năm sau) — nhưng đây là suy luận theo mô hình lịch sử, KHÔNG phải cam kết chắc chắn, không nên dùng để "yên tâm" rằng trước mốc đó sẽ không có thay đổi gì.
- **Nhiệm kỳ Bí thư Tỉnh/Thành uỷ và Chủ tịch UBND (danh nghĩa 5 năm theo Đại hội Đảng bộ tỉnh / bầu cử HĐND).** Nhưng như case Đồng Tháp đã cho thấy, điều động giữa nhiệm kỳ là chuyện bình thường, không phải ngoại lệ hiếm — **không nên coi "còn trong nhiệm kỳ 5 năm" là bằng chứng thông tin còn đúng.**
- **Các mốc ĐÃ BIẾT TRƯỚC vì đã có văn bản** (khác với suy luận theo mô hình lịch sử ở trên — đây là sự kiện CHẮC CHẮN xảy ra vì đã có văn bản pháp lý ấn định ngày hiệu lực):
  - 30/4/2026 — Đồng Nai chính thức là Thành phố trực thuộc Trung ương.
  - 01/7/2026 — thẩm quyền cấp Phiếu lý lịch tư pháp chuyển từ Sở Tư pháp sang cơ quan Công an (Luật 107/2025/QH15).

---

#### 4. Điều KHÔNG thể giải quyết — nói thẳng thay vì hứa suông

Cơ chế ở mục 5–7 giúp **phát hiện SỚM HƠN** và **giảm thời gian dữ liệu sai còn tồn tại**, nhưng KHÔNG thể:

- Dự đoán trước 1 đợt cải cách bộ máy chưa có văn bản nào — luôn sẽ có độ trễ giữa "sự kiện xảy ra" và "dự án phát hiện + cập nhật".
- Đảm bảo 100% không có sai sót nhất thời (ví dụ nhân sự đổi đúng lúc giữa 2 lần kiểm tra định kỳ).
- Thay thế việc người dùng tự đối chiếu văn bản gốc khi dùng thông tin cho việc quan trọng (nộp hồ sơ thật, khiếu nại, tranh chấp pháp lý...).

Vì vậy mục 9 đề xuất disclaimer hiển thị công khai trên UI, không giấu trong dữ liệu ngầm.

---

#### 5. Ngưỡng cảnh báo theo tầng (áp cho `last_verified` đã có sẵn trong schema)

Đề xuất thay ngưỡng cảnh báo DUY NHẤT hiện tại (nếu có) bằng ngưỡng RIÊNG theo tầng dữ liệu của mục 2:

| Tầng | Cảnh báo vàng (nên kiểm tra lại) | Cảnh báo đỏ (rủi ro cao, ưu tiên kiểm tra) | Tần suất khuyến nghị chủ động kiểm tra |
|---|---|---|---|
| 1. Luật gốc | > 365 ngày | > 730 ngày | 1 năm/lần, hoặc ngay khi có tin sửa Hiến pháp/Luật liên quan |
| 2. Cơ cấu tổ chức | > 180 ngày | > 365 ngày | 6 tháng/lần trong giai đoạn hiện tại (còn dư chấn cải cách 2025); có thể giãn ra 1 năm/lần sau khi ổn định |
| 3. Nhân sự lãnh đạo | > 60 ngày | > 120 ngày | 1 quý/lần (mỗi 3 tháng), riêng các tỉnh/Bộ có tin đồn điều động thì kiểm tra ngay |
| 4. Thủ tục / biểu mẫu / phí | > 90 ngày | > 180 ngày | 1 quý/lần, ưu tiên các thủ tục nhiều người dùng nhất trước (hộ tịch, doanh nghiệp, đất đai, giao thông) |
| 5. Liên hệ (SĐT/email/trụ sở) | > 180 ngày | > 365 ngày | Gộp chung đợt kiểm tra với tầng 2 |

Kỹ thuật áp dụng: `js/data/validator.js` (đã có ở Phase 2) nên đọc thêm 1 trường `tier` (1–5) gắn theo entity/field, so `last_verified` với ngưỡng tương ứng thay vì 1 ngưỡng chung 365 ngày như hiện tại — đây là 1 thay đổi schema nhỏ, không phải làm lại từ đầu.

---

#### 6. Lịch kiểm tra định kỳ — dùng chính công cụ scheduled task đang có sẵn

Thay vì chờ user nhớ để nhắc, đề xuất dùng **scheduled task** (công cụ `create_trigger`/`send_later` đã có sẵn trong Cowork) để tự động nhắc theo đúng tần suất ở mục 5:

- **1 tháng/lần**: 1 scheduled task quét nhanh tin tức bằng từ khoá cố định ("sáp nhập Bộ", "sáp nhập tỉnh", "Nghị quyết UBTVQH", "cải cách hành chính 2026"...) — không cần đọc hết, chỉ cần báo về nếu thấy dấu hiệu bất thường để user quyết định có mở phiên kiểm tra sâu hay không. Đây là việc RẺ nhất trong toàn bộ cơ chế (không tốn prompt acc Free, chỉ 1 lượt WebSearch ngắn).
- **1 quý/lần (3 tháng)**: 1 scheduled task nhắc user mở 1 phiên kiểm tra tầng 3 (nhân sự) + tầng 4 (thủ tục ưu tiên cao) — đúng lúc là khoảng thời gian nhiều khả năng có vài thay đổi tích luỹ đủ để đáng 1 phiên, không quá dày để lãng phí.
- **6 tháng/lần**: kiểm tra tầng 2 (cơ cấu tổ chức) — đối chiếu lại toàn bộ 17 Bộ + 34 tỉnh còn đúng tên/cơ cấu không.
- **Theo mốc đã biết trước** (mục 7): đặt 1 scheduled task one-shot cho ĐÚNG ngày hiệu lực của từng mốc đã biết (ví dụ 1 nhắc việc vào 30/4/2026, 1 nhắc việc vào 01/7/2026) để cập nhật `effective_from`/`effective_to` đúng ngày, không bị trễ.

---

#### 7. Lịch các mốc đã biết trước (early warning calendar) — cập nhật liên tục khi phát hiện thêm

Đây là danh sách sống, cập nhật MỖI KHI phát hiện thêm 1 văn bản đã ấn định ngày hiệu lực trong tương lai. Tại thời điểm viết file này (2026-09-19):

| Ngày hiệu lực | Sự kiện | Việc cần làm trong dữ liệu | Nguồn |
|---|---|---|---|
| 30/4/2026 | Thành phố Đồng Nai chính thức trực thuộc Trung ương | Đã cập nhật — xem `09-tinh-thanh-nhom3-chi-tiet.md`, `15-cap-xa-nhom4-7tinh.md` | Nghị quyết 30-NQ/2026/QH16 |
| 01/7/2026 | Thẩm quyền cấp Phiếu lý lịch tư pháp chuyển từ Sở Tư pháp sang cơ quan Công an | **CHƯA cập nhật vào `procedures.json`** — cần kiểm tra lại đúng ngày này | Luật 107/2025/QH15, xem `Claude-sodobmhc.md` luật số 20 |

Khi mở phiên làm việc mới, luôn đối chiếu ngày hiện tại với bảng này trước — nếu ngày hiện tại đã qua 1 mốc mà dữ liệu chưa cập nhật, đây là việc ƯU TIÊN CAO nhất trong phiên đó, không phải việc thu thập dữ liệu mới khác.

---

#### 8. Quy trình xử lý khi phát hiện 1 thay đổi thật (không phải nghi ngờ, mà đã xác minh)

1. KHÔNG xoá dữ liệu cũ. Gắn `effective_to` cho dữ liệu/relationship cũ, tạo entity/relationship mới với `effective_from` đúng ngày — đúng cơ chế Time Machine đã build ở Phase 9.
2. Cập nhật `last_verified` = ngày phát hiện, không phải ngày dữ liệu gốc được viết.
3. Ghi 1 dòng vào `Build-logs-sodobmhc.md` — không chỉ vì kỷ luật nội bộ, mà vì đây chính là "lịch sử vì sao dữ liệu đổi" mà mục 7 và các phiên sau cần đọc lại.
4. Nếu thay đổi thuộc tầng 1–2 (luật gốc, cơ cấu tổ chức), rà lại TẤT CẢ entity/relationship phụ thuộc trước khi coi là xong — 1 thay đổi tầng 1–2 thường kéo theo nhiều thay đổi tầng dưới (ví dụ: bỏ cấp huyện kéo theo toàn bộ thủ tục từng ghi "nộp tại UBND huyện" phải sửa).
5. Chạy lại `node tools/validate-data.js` trước khi coi là xong.

---

#### 9. Làm sao để người dùng cuối truy cập nhanh thông tin cần thiết — và biết được độ mới của nó

- **Badge màu ngay tại từng entity** (không chỉ trong dữ liệu ngầm): "Kiểm chứng lần cuối: DD/MM/YYYY" + màu theo ngưỡng ở mục 5 (xanh / vàng / đỏ) — hiển thị ngay trong panel chi tiết, đúng như tab Nguồn đã làm ở Phase 8, nhưng cần đối chiếu ngưỡng THEO TẦNG thay vì 1 ngưỡng chung.
- **1 mục công khai "Các mốc thay đổi sắp tới đã biết"** trong tab Hướng dẫn hoặc tab Nguồn — lấy trực tiếp từ bảng ở mục 7 file này, để người dùng cuối (không chỉ AI vận hành nội bộ) cũng biết trước "sắp có thay đổi, đừng ngạc nhiên nếu thấy khác sau ngày X".
- **Nút "Báo thông tin cũ/sai"** cho người xem — vì hệ thống 1 Pro + 5 Free không thể theo dõi hết mọi ngóc ngách của bộ máy hành chính; người dùng thực tế đi làm thủ tục thường là người PHÁT HIỆN thay đổi sớm nhất (case Đồng Tháp trong dự án này chính là 1 acc Free tự phát hiện, không phải do quy trình chủ động tìm ra). Nút này nên gửi thẳng thành 1 dòng ghi chú vào `Build-logs-sodobmhc.md` (hoặc 1 file riêng `Phan-hoi-nguoi-dung-sodobmhc.md`) để phiên làm việc tiếp theo xử lý, không rơi vào hư không.
- **Search nhanh + link trực tiếp dịch vụ công** đã có sẵn (Phase 5 + Phase 6) — giữ nguyên, đây là phần đã làm đúng.
- **Disclaimer cố định, không thể tắt**, ở cuối mỗi panel chi tiết: "Thông tin tổng hợp có trích dẫn nguồn, không phải văn bản pháp lý chính thức — luôn đối chiếu nguồn gốc trước khi dùng cho việc quan trọng." Đây không phải lời khách sáo — mục 4 đã nói rõ cơ chế này không thể loại bỏ hoàn toàn độ trễ phát hiện thay đổi.

---

#### 10. Tóm tắt 1 câu

Dữ liệu không "hết hạn" đều nhau — nhân sự lãnh đạo và thủ tục/phí lỗi thời nhanh nhất và cần kiểm tra mỗi quý, cơ cấu tổ chức cần kiểm tra mỗi 6 tháng trong giai đoạn còn dư chấn cải cách 2025, luật gốc chậm lỗi thời nhưng khi đổi thì kéo theo toàn bộ tầng dưới; cơ chế tốt nhất không phải là "cố đoán trước" mà là rút ngắn khoảng cách giữa lúc thay đổi xảy ra và lúc dự án phát hiện ra nó, bằng lịch kiểm tra định kỳ theo tầng + theo dõi các mốc đã biết trước + để chính người dùng cuối tham gia báo lỗi.

---

##### Nguồn trích dẫn

[^1]: Nghị quyết số 30-NQ/2026/QH16 (24/4/2026, kỳ họp thứ Nhất, thành lập Thành phố Đồng Nai) — xem `15-cap-xa-nhom4-7tinh.md`, mục Thành phố Đồng Nai, và `09-tinh-thanh-nhom3-chi-tiet.md`.
