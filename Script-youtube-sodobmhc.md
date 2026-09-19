---
tags: [sodobmhc]
type: script-youtube
created: 2026-09-19
updated: 2026-09-19
---

### Script Youtube — "Tôi vibe code sơ đồ bộ máy hành chính Việt Nam, và 35 lần thất bại đã dạy tôi điều gì"

*Ghi chú trước khi quay: script viết ở ngôi thứ nhất (bạn = người kể). Thời lượng gốc mục tiêu 8–12 phút; sau khi thêm Đoạn 8–9 (đánh giá điểm mạnh/yếu + bảng công sức còn lại), video sẽ dài khoảng 14–15 phút — nếu muốn giữ đúng 8–12 phút, có thể cắt Đoạn 8–9 thành video riêng dạng "Behind the scenes / Hậu trường". Mỗi đoạn có phần lời thoại và phần `[QUAY MÀN HÌNH / MINH CHỨNG]` — đây là chỗ chỉ rõ file/dòng nào trong dự án chứng minh cho điều vừa nói, để bạn quay screen-record đúng chỗ đó khi dựng video. Phần "35 phiên đầu thất bại" là trải nghiệm cá nhân của bạn trước khi có hệ thống file quản lý — không nằm trong Build-logs (vì lúc đó chưa có file này), nên khi kể đoạn đó, nói rõ đây là hồi tưởng, không đọc như thể có "bằng chứng file" cho riêng con số 35.*

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

### Đoạn 8 — Nhìn thẳng vào sản phẩm: cái nào được, cái nào chưa (10:45–12:30)

**Lời thoại:**
"Tới đây tôi muốn dừng lại, bỏ cái tông ‘khoe thành quả' xuống một chút, để nhìn thẳng vào sản phẩm như một người dùng bình thường sẽ nhìn — không phải như người đã bỏ công làm ra nó.

Cái được, thì rõ ràng nhất là: mọi thông tin trong này đều có nguồn, và có một bộ luật buộc AI phải ghi ‘chưa xác minh' thay vì đoán bừa khi không chắc — đây không phải lời hứa suông, mà là quy trình bắt buộc, tôi kiểm tra được từng dòng. Kế đến là cách chia việc: một AI giữ bức tranh lớn, năm AI khác chỉ tra từng mẩu nhỏ, không AI nào phải ôm hết mọi thứ trong đầu cùng lúc — và mỗi lần có AI làm sai hay hai AI làm trùng việc, tôi không chỉ sửa cho xong mà biến nó thành một luật viết sẵn, để lần sau không ai — kể cả tôi — vấp lại chỗ cũ.

Còn cái chưa được, thì cũng phải nói thẳng. Ba mảng lẽ ra phải có ngay từ đầu — giấy phép, biểu mẫu, và trụ sở/địa chỉ liên hệ cụ thể của từng cơ quan — hiện vẫn đang trống trơn. Số thủ tục hành chính thật sự đưa được vào sản phẩm mới chỉ có 3, trong khi tôi đã tra thô được dữ liệu cho khoảng 15 lĩnh vực Bộ ngành — nghĩa là phần ‘nguyên liệu' đã có nhiều hơn phần đã ‘nấu chín' rất nhiều. Chức vụ Bí thư Tỉnh uỷ, Thành uỷ hiện tôi vẫn đang gắn tạm vào entity của tỉnh, chưa tách cơ quan Đảng ra thành một nhánh riêng như đáng ra phải làm. Và có ít nhất hai lần, tôi chạy nhiều phiên AI cùng lúc mà không để ý, dẫn tới việc bị làm trùng nguyên một mảng công việc — vì tôi chưa có cách nào để một phiên biết phiên kia đang làm gì."

**[MINH CHỨNG / QUAY MÀN HÌNH]:** Đoạn này diễn giải lại đúng nội dung mục 3 và mục 4 trong `Danh-gia-tong-ket-sodobmhc.md` (điểm mạnh thật sự / rủi ro và khoảng trống) — có thể quay màn hình cuộn qua 2 mục đó, hoặc quay `data/licenses.json`, `data/forms.json`, `data/facilities.json` để người xem thấy tận mắt 3 file đang trống (`[]`).

---

### Đoạn 9 — Nếu làm tiếp thì cần bao nhiêu công sức (12:30–14:00)

**Lời thoại:**
"Tôi hay bị hỏi: vậy chừng nào xong? Tôi không trả lời bằng ngày, tôi trả lời bằng số prompt và số phiên — vì đó là đơn vị đo công sức thật của dự án này. Cứ nhớ lại quy tắc tôi đặt ra: mỗi prompt giao cho 1 tài khoản free chỉ nên gồm 3 đến 7 cơ quan hoặc mục việc, không hơn — để tránh AI quá tải rồi tự bịa. Từ đó tôi ước lượng được phần việc còn lại sẽ tốn khoảng bao nhiêu."

**[QUAY MÀN HÌNH]:** Hiện bảng dưới đây dạng đồ hoạ/overlay trong lúc lồng tiếng (không cần đọc hết số liệu bằng lời, chỉ cần nói ý chính, để khán giả tự đọc bảng).

| Việc cần làm tiếp | Vì sao cần | Số prompt cần soạn | Số phiên acc Free cần chạy (5 acc song song) | Việc riêng của acc Pro / Claude Code |
|---|---|---|---|---|
| Giấy phép (licenses.json) | Đúng mục tiêu ban đầu của dự án, hiện đang trống hoàn toàn | ~10–14 prompt (mỗi prompt 3–7 giấy phép, ưu tiên nhóm giấy phép hay dùng: CCCD, hộ chiếu, GPLX, đăng ký kinh doanh, LLTP...) | ~10–14 phiên (chia đều 5 acc, mỗi acc chạy 2–3 phiên) | 1 phiên Pro ráp dữ liệu + chuẩn hoá schema |
| Biểu mẫu (forms.json) | Đi kèm giấy phép/thủ tục, hiện trống hoàn toàn | ~8–10 prompt | ~8–10 phiên | 1 phiên Pro ráp dữ liệu |
| Trụ sở/liên hệ cụ thể (facilities.json) | 63 cơ quan hiện có nhưng thiếu địa chỉ/SĐT/website tách riêng khỏi organization | ~10–13 prompt (63 cơ quan ÷ 5 mỗi prompt) | ~10–13 phiên | 1 phiên Pro ráp + chuẩn hoá `facility.schema.json` (đang PROPOSED, cần user duyệt trước) |
| Ráp 3 → đầy đủ thủ tục hành chính vào procedures.json | Dữ liệu thô đã có sẵn ở 15 lĩnh vực (file `19-*.md` → `40-*.md`), chỉ cần chuẩn hoá | 0 prompt mới (không cần tra thêm) | 0 phiên Free | ~6–8 phiên Pro/Claude Code để đọc từng file thô, chuẩn hoá theo `procedure.schema.json`, validate lại |
| Tách cơ quan Đảng (Tỉnh uỷ/Thành uỷ) thành entity riêng | Hiện đang gắn tạm vào entity tỉnh, là nợ kỹ thuật đã biết trước | ~6–8 prompt (34 tỉnh ÷ 5 mỗi prompt) | ~6–8 phiên | 1 phiên Pro thiết kế lại quan hệ + ráp |
| Cơ chế khoá file / tránh đụng độ nhiều phiên chạy song song | Đã xảy ra 2 lần làm trùng việc, tốn token oan | 0 prompt tra cứu | 0 phiên Free | 1–2 phiên Claude Code (viết file lock đơn giản hoặc quy ước ‘khai báo đang làm gì' trong Promts-sodobmhc.md) |
| Hiện cảnh báo "chưa xác minh" ngay trên giao diện (không chỉ trong dữ liệu ngầm) | Người xem cuối cần thấy cảnh báo ngay, không phải đọc JSON | 0 prompt tra cứu | 0 phiên Free | 1 phiên Claude Code (chỉnh UI panel chi tiết + panel nguồn) |
| Tự động hoá backup GitHub | Từng thất bại 1 lần vì thiếu credential, hiện vẫn làm thủ công | 0 prompt tra cứu | 0 phiên Free | 1 phiên Claude Code (script backup + lịch chạy) |
| Mở rộng so sánh hệ thống Mỹ, Trung Quốc | Đúng mục tiêu Project ghi ban đầu, chưa bắt đầu | Quy mô tương đương làm lại từ Phase 0 cho 1 quốc gia | Ước tính bằng khoảng công sức đã bỏ ra cho phần Việt Nam (~17 commit trong 1 ngày làm việc liên tục) nhân theo số quốc gia | Cần 1 phiên Pro thiết kế lại kiến trúc dữ liệu cho phù hợp hệ thống liên bang (Mỹ) / hệ thống Đảng-Nhà nước (Trung Quốc) trước khi bắt đầu tra cứu |

**Lời thoại (chốt đoạn):**
"Nhìn bảng này thì thấy phần khó nhất — thiết kế kiến trúc, đặt luật chơi, dựng khung ứng dụng — mình đã đi qua rồi. Phần còn lại chủ yếu là tra cứu thêm, đúng bài, đúng quy trình đã có sẵn. Không còn phải mò kiểu 35 lần như hồi đầu nữa."

---

### Cảnh kết — Khiêm tốn + lời mời (14:00–15:00)

**Lời thoại:**
"Tôi không phải lập trình viên. Tôi không tự viết một dòng code JavaScript nào theo nghĩa gõ tay từng dòng — toàn bộ là ‘vibe code', tức là mô tả điều mình muốn cho AI, rồi kiểm tra, rồi sửa lại yêu cầu. Nhưng chính vì không biết code, tôi buộc phải học cách đặt câu hỏi cho đúng, chia việc cho đúng, và kiểm tra kết quả thay vì tin mù. Dự án này chưa xong — phần giấy phép, biểu mẫu, trụ sở cụ thể từng cơ quan vẫn còn đang làm, và tôi có ý định làm thêm bản so sánh với hệ thống hành chính Mỹ, Trung Quốc sau này. Nếu bạn cũng đang mù mờ về bộ máy hành chính như tôi từng vậy, tôi để link bên dưới. Và nếu bạn cũng đang vibe code một dự án lớn mà cứ thất bại lặp đi lặp lại — bài học của tôi là: đừng cố nhét cả bài toán vào một prompt. Bẻ nó ra."

**[QUAY MÀN HÌNH / MINH CHỨNG]:** Quay cảnh mở repo GitHub `https://github.com/haphanhp/sodo-bo-may-hanh-chinh` (đây là link backup thật của dự án, ghi trong `Claude-sodobmhc.md` mục 10) — dùng làm link mô tả video. Kết thúc bằng cảnh quay lại sơ đồ graph toàn màn hình, zoom out dần.

---

### Ghi chú kỹ thuật khi dựng video

- Toàn bộ số liệu (63 cơ quan, 89 người, 90 chức vụ, 85 quan hệ, 139 nguồn, 0 lỗi validate) lấy từ kết quả chạy `node tools/validate-data.js` ngày 2026-09-19 — chạy lại trước khi quay để số liệu khớp đúng thời điểm phát hành video, vì Phase 10 vẫn đang mở và số liệu sẽ tăng.
- Đoạn "35 phiên thất bại" là trải nghiệm kể lại, không có file bằng chứng trong dự án (vì xảy ra trước khi có hệ thống file quản lý) — khi lên kịch bản dựng hình, nên dùng giọng kể + có thể minh hoạ bằng ảnh chụp màn hình cũ nếu còn giữ, không gắn nhãn "theo Build-logs" cho đoạn này để tránh gây hiểu nhầm là có log ghi lại đúng con số 35.
- Các đoạn có nhãn `[MINH CHỨNG]` đều trỏ tới file thật trong thư mục dự án hoặc doc `context-bmhc` trong Project claude.ai — có thể quay trực tiếp màn hình các file này, không cần dựng lại bằng hình minh hoạ.
- Bảng công sức ở Đoạn 9 là ước tính dựa trên quy tắc "3–7 entity/prompt" đã ghi trong `Claude-sodobmhc.md` mục 7 — không phải cam kết chính xác, chỉ để hình dung độ lớn công việc còn lại.

---

### Phần 10 — Mindset rút ra sau khi tạm dừng dự án

*Ghi chú: dự án hiện tạm dừng ở Phase 9, còn Phase 10 (mở rộng dữ liệu thật) để đó. Phần này gồm 2 mục — mục 10.1 (lỗ hổng AI chưa thay thế được con người) viết sẵn dưới đây, dựa đúng vào các sự cố có ghi trong `Build-logs-sodobmhc.md` và luật trong `Claude-sodobmhc.md`, không suy đoán thêm. Mục 10.2 (mindset hệ thống, phân bổ nguồn lực, cơ chế kiểm tra chéo) để trống — bạn tự viết theo trải nghiệm của bạn.*

---

#### 10.1 — Những lỗ hổng của AI mà con người chưa thể giao hẳn (14:00–16:30)

**Lời thoại:**
"Làm dự án này xong, tôi tin AI mạnh hơn tôi tưởng, nhưng cũng thấy rõ mấy chỗ nó chưa thay được con người — không phải vì nó lười, mà vì bản chất nó không có cách nào tự biết.

Thứ nhất: AI không tự biết lúc nào mình đang quá tải. Tôi từng đưa một prompt quá lớn, và nó không dừng lại nói ‘tôi không chắc nữa' — nó cứ trả lời tiếp, rất tự tin, kể cả khi đang bắt đầu bịa. Tôi phải tự đặt giới hạn cứng — mỗi prompt chỉ 3 đến 7 cơ quan — vì AI không tự làm việc đó giúp tôi được.

Thứ hai: AI không phân biệt được đâu là dữ liệu thật của một cơ quan, đâu là thông tin lặp lại kiểu chân trang của một trang báo. Có lần nó gán cùng một số điện thoại, cùng một địa chỉ, cho nhiều cơ quan hoàn toàn khác nhau — vì trang nào cũng có đoạn chân trang giống hệt nhau, và nó không tự nhận ra đó không phải dữ liệu của bài viết. Tôi phải viết hẳn một luật, kiểu: thấy số liệu lặp y hệt trên nhiều trang, dừng lại, coi là đáng ngờ.

Thứ ba: khi hai nguồn thật sự mâu thuẫn nhau — không phải do lỗi kỹ thuật, mà là hai dữ kiện khác nhau, cả hai đều có nguồn — AI không có tư cách tự chọn một bên. Nó không biết văn bản nào có giá trị pháp lý cao hơn văn bản nào nếu tôi không dạy nó ưu tiên thứ có số hiệu, có ngày ban hành cụ thể. Việc phân xử cuối cùng vẫn phải là người.

Thứ tư: nhiều AI làm việc song song mà hoàn toàn không biết tới sự tồn tại của nhau. Có một ngày, hai phiên Claude khác nhau tự làm nguyên một mảng công việc giống hệt nhau, độc lập, không ai biết ai đang làm gì — không phải vì AI tệ, mà vì nó không có kênh nào để hỏi ‘có ai đang làm phần này chưa'. Cái đó tôi phải tự bù bằng quy trình — bắt buộc kiểm tra lại thư mục ngay trước khi ghi file, chứ không trông chờ AI tự phối hợp được với nhau.

Thứ năm: một trang chính thức của nhà nước không đồng nghĩa là thông tin mới nhất. Tôi từng thấy một trang chinhphu.vn cập nhật lần cuối sau cả tháng đề xuất thay đổi vẫn giữ nguyên số liệu cũ. AI có xu hướng tin ngay vì đó là ‘nguồn chính thức', nhưng chính thức không có nghĩa là cập nhật — phải tự kiểm tra ngày, chứ không phải tin vào tên miền.

Không có cái nào trong 5 chỗ này là AI ‘dở'. Nó chỉ đơn giản là những việc cần một người đứng ngoài, tỉnh táo hơn, để đặt luật chơi từ trước — chứ đợi AI tự phát hiện ra thì đã muộn."

**[MINH CHỨNG / QUAY MÀN HÌNH]:**
- Giới hạn 3–7 entity/prompt để tránh quá tải: `Claude-sodobmhc.md`, mục 7 "Quy tắc chống overload / đốt token".
- Nhầm lẫn số điện thoại/địa chỉ do trùng chân trang nhiều trang khác nhau: `Claude-sodobmhc.md`, mục 9, luật số 16.
- Không tự chọn bên khi 2 nguồn xung đột thật, phải ưu tiên văn bản có số hiệu + ngày cụ thể: `Claude-sodobmhc.md`, mục 9, luật số 18 — minh hoạ bằng vụ xung đột trụ sở Bộ Công an và Bộ trưởng Bộ Tư pháp ghi trong `Build-logs-sodobmhc.md`.
- Nhiều phiên AI làm trùng việc vì không biết về nhau: `Build-logs-sodobmhc.md`, mục "2026-09-18 — Phát hiện 2 phiên Cowork chạy song song hoàn thành TOÀN BỘ Phase 6 độc lập với nhau" — quay cảnh cuộn qua đoạn liệt kê 11 file bị trùng.
- Trang chính thức nhưng giữ thông tin cũ: `Build-logs-sodobmhc.md`, mục về xung đột số liệu xã/phường Thái Nguyên (chinhphu.vn cập nhật 04/08/2025 vẫn giữ số liệu cũ hơn 1 tháng sau đề xuất thay đổi).

---

#### 10.2 — Mindset về hệ thống, phân bổ nguồn lực và cơ chế kiểm tra chéo (user tự bổ sung)

*Để trống — bạn tự viết phần này: những mindset rút ra về cách tổ chức hệ thống, cách phân bổ nguồn lực giữa nhiều AI, và cơ chế kiểm tra chéo chống bịa dữ liệu mà bạn đã áp dụng qua dự án.*
