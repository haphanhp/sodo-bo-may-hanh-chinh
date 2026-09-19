---
tags: [sodobmhc]
type: script-youtube
created: 2026-09-19
updated: 2026-09-19
---

### Script Youtube — "Tôi vibe code sơ đồ bộ máy hành chính Việt Nam, và 35 lần thất bại đã dạy tôi điều gì"

*Ghi chú trước khi quay: script viết ở ngôi thứ nhất (bạn = người kể). Thời lượng mục tiêu 8–12 phút. Mỗi đoạn có phần lời thoại và phần `[QUAY MÀN HÌNH / MINH CHỨNG]` — đây là chỗ chỉ rõ file/dòng nào trong dự án chứng minh cho điều vừa nói, để bạn quay screen-record đúng chỗ đó khi dựng video. Phần "35 phiên đầu thất bại" là trải nghiệm cá nhân của bạn trước khi có hệ thống file quản lý — không nằm trong Build-logs (vì lúc đó chưa có file này), nên khi kể đoạn đó, nói rõ đây là hồi tưởng, không đọc như thể có "bằng chứng file" cho riêng con số 35.*

---

### Cảnh mở đầu — Hook (0:00–0:45)

**Lời thoại:**
"Hồi đi học, không ai dạy tôi Quốc hội với Chính phủ khác nhau cái gì. Không ai dạy tôi vì sao đi làm hộ chiếu phải qua công an chứ không phải qua uỷ ban. Đến lúc đi làm, đi làm giấy tờ, tôi mới thấy mình mù mờ y như lúc còn đi học. Và tôi ghét cảm giác đó. Nên tôi làm cái này."

**[MỞ ĐẦU HÌNH ẢNH]:** Mở file `index.html` của dự án trên trình duyệt, cho thấy sơ đồ đồ hoạ (graph) các cơ quan hiện ra — đây là hình ảnh "trả lời" cho câu hook, nên đặt ngay đầu video.

---

### Đoạn 1 — Sản phẩm là gì, trong 20 giây (0:45–1:30)

**Lời thoại:**
"Đây là một trang web tự tôi build, chạy được ngay trên máy, không cần internet, minh hoạ toàn bộ bộ máy hành chính Việt Nam: từ Quốc hội, Chính phủ, xuống 14 Bộ, xuống tới 34 tỉnh thành. Ai đứng đầu, cơ quan nào quản cơ quan nào, thủ tục gì thuộc thẩm quyền ai, và — quan trọng nhất — mỗi thông tin đều dẫn nguồn, không có chỗ nào tôi tự bịa."

**[QUAY MÀN HÌNH]:** Click vào 1 entity (ví dụ Bộ Tài chính) trong graph, cho xem panel chi tiết bên phải: chức năng/nhiệm vụ, trụ sở, và phần "Nguồn thông tin" ở cuối panel — đúng cấu trúc Phase 8 (panel nguồn: độ tin cậy + ngày kiểm chứng) đã build.

---

### Đoạn 2 — Lần thử đầu tiên: 1 prompt, 35 phiên, không ra gì (1:30–3:30)

**Lời thoại:**
"Lúc mới bắt đầu, tôi làm đúng kiểu ai mới ‘vibe code' cũng làm: gõ một prompt thật dài, kiểu ‘vẽ giúp tôi toàn bộ bộ máy hành chính Việt Nam, có cơ quan, có người, có thủ tục, có giấy phép, đẹp, đầy đủ' — rồi bấm Enter, dùng tài khoản Claude miễn phí. Tôi lặp lại việc đó khoảng 35 lần. Mỗi lần là một phiên mới, vì phiên cũ hết hạn mức hoặc đơ giữa chừng. Có lần AI trả lời được một nửa rồi dừng. Có lần nó tự bịa luôn số điện thoại của một cơ quan mà tôi tra lại thì không có thật. Có lần nó chỉ tạo được cái khung rồi báo lỗi. 35 lần, và tôi vẫn chưa có nổi một bản chạy được."

**[MINH CHỨNG / QUAY MÀN HÌNH]:** Đoạn này không có file log vì xảy ra trước khi hệ thống quản lý dự án ra đời — nên quay lại **màn hình lịch sử chat** (nếu còn giữ được các phiên cũ trong claude.ai) làm bằng chứng trực quan, hoặc nói thẳng vào camera đoạn này như hồi tưởng cá nhân, không cần chèn file.

---

### Đoạn 3 — Bước ngoặt: nhận ra vấn đề không phải là prompt dở, mà là bài toán quá to (3:30–4:45)

**Lời thoại:**
"Sau khoảng lần thứ 20, tôi mới dừng lại tự hỏi: vấn đề không phải là tôi viết prompt chưa đủ hay, mà là tôi đang bắt một AI, trong một lượt trả lời, làm luôn cả việc của một kỹ sư phần mềm (thiết kế cấu trúc dữ liệu), một nhà nghiên cứu (tra cứu hàng trăm cơ quan có nguồn), và một lập trình viên frontend (viết giao diện) — cùng lúc. Không có công cụ nào làm nổi việc đó trong 1 prompt, kể cả AI. Nên tôi đổi cách: nhờ một AI khác thiết kế kiến trúc trước — kiểu database → graph → UI, tách hẳn dữ liệu ra khỏi giao diện — trước khi viết một dòng code nào."

**[MINH CHỨNG]:** Mở doc `context-bmhc` trong Project claude.ai — đây chính là bản thiết kế kiến trúc (folder structure, mô hình Entity, JSON schema, layout UI, danh sách Phase 0→10) được tạo trước khi bắt tay code thật. Ghi chú: doc này có timestamp tạo `2026-09-18T04:04` — quay lại đúng đoạn này để chứng minh "tôi có bản thiết kế trước khi code, không code mù".

---

### Đoạn 4 — Hệ thống 1 tài khoản Pro + 5 tài khoản Free (4:45–6:30)

**Lời thoại:**
"Vấn đề tiếp theo: dữ liệu hành chính Việt Nam quá nhiều để một AI tra hết trong một lần mà không bị ‘quá tải' — mất ngữ cảnh, rồi tự bịa cho xong. Nên tôi chia việc như một đội thật: một tài khoản Claude Pro giữ toàn bộ bức tranh lớn, còn 5 tài khoản Claude miễn phí, mỗi tài khoản chạy trên một trình duyệt riêng — Brave, Opera GX, Edge, Cốc Cốc, Arc — chỉ nhận một mẩu việc nhỏ, 3 đến 7 cơ quan một lần, tra xong là báo cáo lại, không cần biết bức tranh lớn. Tôi còn viết hẳn một bộ luật chơi cho việc này: không được bịa, mọi thông tin phải có nguồn, nếu không chắc phải ghi rõ ‘chưa xác minh' chứ không được đoán."

**[QUAY MÀN HÌNH]:** Mở file `Claude-sodobmhc.md`, cuộn tới mục 2 "Mô hình nhân sự AI" (bảng Pro vs 5 Free) và mục 5 "Quy tắc bắt buộc cho acc Free khi trả lời" — đây là bằng chứng trực tiếp cho lời kể ở đoạn này.

---

### Đoạn 5 — Những cú vấp thật trong lúc build (6:30–8:15)

**Lời thoại:**
"Có hệ thống rồi không có nghĩa là hết lỗi. Có lần tôi chạy 2 phiên Cowork song song mà không để ý, cả hai cùng làm y hệt một phần việc — 7 Bộ bị làm trùng hai lần độc lập, tốn không ít token vô ích. Có lần đẩy code lên GitHub thì bị chặn vì máy chưa lưu sẵn thông tin đăng nhập. Có lần hai nguồn tra cứu độc lập cho ra hai địa chỉ trụ sở khác nhau cho cùng một Bộ, và tôi phải tự đặt luật: không được để AI tự chọn đại một bên, phải ưu tiên nguồn nào có số văn bản và ngày cụ thể. Mỗi lần vấp, tôi không chỉ sửa cho xong — tôi viết luôn bài học đó thành một luật, để lần sau, dù là tôi hay AI, cũng không vấp lại chỗ cũ."

**[MINH CHỨNG / QUAY MÀN HÌNH]:** Mở `Build-logs-sodobmhc.md`, tìm đúng đoạn "Phát hiện 2 phiên Cowork chạy song song hoàn thành TOÀN BỘ Phase 6 độc lập với nhau" — quay cảnh cuộn qua đoạn mô tả việc trùng lặp và bài học rút ra. Sau đó mở `Claude-sodobmhc.md` mục 9, đọc luật số 18 (xung đột nguồn) — cho thấy bài học từ Build-logs thật sự biến thành luật, không chỉ nằm im trong nhật ký.

---

### Đoạn 6 — Kết quả bây giờ (8:15–9:45)

**Lời thoại:**
"Tính đến hôm nay, sau đúng một ngày làm việc liên tục theo hệ thống mới — chứ không phải 35 lần vô vọng như lúc đầu — trang này đã có 63 cơ quan, 89 người, 90 chức vụ, 85 quan hệ cấp trên–cấp dưới, và 139 nguồn trích dẫn, chạy kiểm tra dữ liệu tự động thì 0 lỗi, 0 cảnh báo. Có cả một tính năng tôi khá thích là ‘Time Machine' — xem được bộ máy hành chính từng thay đổi thế nào qua thời gian, vì Việt Nam vừa trải qua đợt sáp nhập tỉnh, sáp nhập Bộ rất lớn."

**[QUAY MÀN HÌNH]:** Chạy trực tiếp lệnh `node tools/validate-data.js` trong terminal, quay màn hình kết quả 0 ERRORS / 0 WARNINGS. Sau đó chuyển sang app, bấm vào tính năng Time Machine (Phase 9) để demo trực quan, và mở tab "Nguồn thông tin" cho thấy 139 nguồn có link thật.

---

### Đoạn 7 — Vì sao việc này quan trọng hơn một cái sơ đồ đẹp (9:45–10:45)

**Lời thoại:**
"Cái tôi mang về không chỉ là một trang web. Tôi hiểu ra vì sao lúc đi làm giấy tờ lại khó đến vậy — vì đúng lúc tôi làm, bộ máy hành chính đang thay đổi liên tục: sáp nhập Bộ, bỏ cấp huyện, chuyển thẩm quyền cấp phiếu lý lịch tư pháp — mà phần lớn hướng dẫn trên mạng chưa kịp cập nhật. Giờ nghe tin thời sự nhắc một chức danh, tôi biết người đó thuộc cơ quan nào, cấp trên là ai, có quyền gì. Và quan trọng không kém: tôi học được cách chia một bài toán quá lớn thành từng phần nhỏ để giao cho nhiều AI làm cùng lúc mà không rối — bài học này tôi mang qua được cả những việc khác, không chỉ dự án này."

**[MINH CHỨNG]:** Mở `Claude-sodobmhc.md`, mục 9 luật số 20 — đọc to danh sách 5 mốc thay đổi 2025–2026 (sáp nhập Bộ 01/3/2025, giấy phép lái xe sang Công an, bỏ cấp huyện 01/7/2025, Đồng Nai lên thành phố trực thuộc TW 30/4/2026, chuyển thẩm quyền lý lịch tư pháp 01/7/2026) — đây là bằng chứng cụ thể nhất cho câu "tôi hiểu vì sao làm giấy tờ khó".

---

### Cảnh kết — Khiêm tốn + lời mời (10:45–11:45)

**Lời thoại:**
"Tôi không phải lập trình viên. Tôi không tự viết một dòng code JavaScript nào theo nghĩa gõ tay từng dòng — toàn bộ là ‘vibe code', tức là mô tả điều mình muốn cho AI, rồi kiểm tra, rồi sửa lại yêu cầu. Nhưng chính vì không biết code, tôi buộc phải học cách đặt câu hỏi cho đúng, chia việc cho đúng, và kiểm tra kết quả thay vì tin mù. Dự án này chưa xong — phần giấy phép, biểu mẫu, trụ sở cụ thể từng cơ quan vẫn còn đang làm, và tôi có ý định làm thêm bản so sánh với hệ thống hành chính Mỹ, Trung Quốc sau này. Nếu bạn cũng đang mù mờ về bộ máy hành chính như tôi từng vậy, tôi để link bên dưới. Và nếu bạn cũng đang vibe code một dự án lớn mà cứ thất bại lặp đi lặp lại — bài học của tôi là: đừng cố nhét cả bài toán vào một prompt. Bẻ nó ra."

**[QUAY MÀN HÌNH / MINH CHỨNG]:** Quay cảnh mở repo GitHub `https://github.com/haphanhp/sodo-bo-may-hanh-chinh` (đây là link backup thật của dự án, ghi trong `Claude-sodobmhc.md` mục 10) — dùng làm link mô tả video. Kết thúc bằng cảnh quay lại sơ đồ graph toàn màn hình, zoom out dần.

---

### Ghi chú kỹ thuật khi dựng video

- Toàn bộ số liệu (63 cơ quan, 89 người, 90 chức vụ, 85 quan hệ, 139 nguồn, 0 lỗi validate) lấy từ kết quả chạy `node tools/validate-data.js` ngày 2026-09-19 — chạy lại trước khi quay để số liệu khớp đúng thời điểm phát hành video, vì Phase 10 vẫn đang mở và số liệu sẽ tăng.
- Đoạn "35 phiên thất bại" là trải nghiệm kể lại, không có file bằng chứng trong dự án (vì xảy ra trước khi có hệ thống file quản lý) — khi lên kịch bản dựng hình, nên dùng giọng kể + có thể minh hoạ bằng ảnh chụp màn hình cũ nếu còn giữ, không gắn nhãn "theo Build-logs" cho đoạn này để tránh gây hiểu nhầm là có log ghi lại đúng con số 35.
- Các đoạn có nhãn `[MINH CHỨNG]` đều trỏ tới file thật trong thư mục dự án hoặc doc `context-bmhc` trong Project claude.ai — có thể quay trực tiếp màn hình các file này, không cần dựng lại bằng hình minh hoạ.
