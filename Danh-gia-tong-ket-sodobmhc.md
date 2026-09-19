---
tags: [sodobmhc]
type: danh-gia-tong-ket
created: 2026-09-19
updated: 2026-09-19
---

### Đánh giá tổng kết dự án "Sơ đồ bộ máy hành chính Việt Nam" — góc nhìn bên thứ ba

*Người viết: Claude (Cowork), đóng vai bên thứ ba độc lập, đọc trực tiếp toàn bộ file quản lý dự án (`Claude-sodobmhc.md`, `Roadmap-sodobmhc.md`, `Build-logs-sodobmhc.md`, `Promts-sodobmhc.md`, doc kiến trúc `context-bmhc`, lịch sử git, dữ liệu `data/*.json`) tại thời điểm 2026-09-19 để đưa ra nhận xét. Mọi số liệu trong bài đều lấy trực tiếp từ các file này, không suy đoán.[^1]*

---

### 1. Dự án này là gì, trong một đoạn

Đây là một ứng dụng HTML/JS chạy độc lập (không framework nặng), minh họa bộ máy hành chính Việt Nam theo mô hình "database → graph → UI": dữ liệu (cơ quan, người, chức vụ, quan hệ, thủ tục, văn bản, nguồn) tách hẳn khỏi giao diện, có schema JSON riêng, có công cụ validate riêng.[^2] Phạm vi đã được chốt lại vào 2026-09-18: đào sâu cấp thượng tầng (Quốc hội, Chủ tịch nước, Chính phủ, TAND/VKSND tối cao, 14 Bộ + 3 cơ quan ngang Bộ) và 34 tỉnh/thành trực thuộc trung ương; cấp xã/phường chỉ liệt kê, cấp huyện chỉ giữ giá trị lịch sử.[^3]

Điều đáng chú ý nhất không phải là bản thân sơ đồ, mà là **cách dự án được tổ chức để nhiều AI khác nhau (1 tài khoản Claude Pro điều phối + 5 tài khoản Claude Free tra cứu qua 5 trình duyệt riêng) làm việc song song mà không giẫm chân nhau và không bịa dữ liệu** — đây là phần có giá trị tham khảo cao nhất, kể cả với người không quan tâm đến bộ máy hành chính Việt Nam.

---

### 2. Hiện trạng thật (tính đến commit gần nhất)

Chạy `tools/validate-data.js` tại thời điểm viết bài cho kết quả:[^4]

```
organizations   63
people          89
positions       90
relationships   85
procedures       3
documents        16
sources         139

ERRORS: 0
WARNINGS: 0
```

Roadmap ghi nhận Phase 0 → Phase 9 đã hoàn tất, gồm cả những phần không hề hiển nhiên với một dự án "vẽ sơ đồ": Phase 7 (15 văn bản pháp luật + quan hệ pháp lý), Phase 8 (panel nguồn — độ tin cậy, ngày kiểm chứng, đơn vị phát hành), Phase 9 ("Time Machine" — 7 cơ quan đã kết thúc hoạt động, ghi effective_from/effective_to, mốc thời gian theo Nghị quyết 176/2025/QH15).[^5] Phase 10 (mở rộng dữ liệu thật: thủ tục, giấy phép, cơ quan Đảng, đơn vị trực thuộc Bộ) đang mở, chưa xong — 3 file `licenses.json`, `forms.json`, `facilities.json` hiện vẫn rỗng (`[]`, 3 byte).[^6]

Git log cho thấy toàn bộ phần được cấu trúc hoá lại (từ schema tới ứng dụng rỗng tới dữ liệu thật) diễn ra trong một khung thời gian rất ngắn: commit đầu `ef8f239` lúc 2026-09-18 16:45 (+07:00), commit gần nhất `6d00d1d` lúc 2026-09-19 00:31 (+00:00) — tức khoảng 1 ngày làm việc liên tục cho 17 commit.[^7]

---

### 3. Điểm mạnh thật sự

**Kỷ luật chống bịa dữ liệu được thiết kế thành quy trình, không chỉ là lời nhắc.** `Claude-sodobmhc.md` liệt kê 20 luật nền, trong đó nhiều luật không phải lý thuyết suông mà được rút ra từ một lỗi thật đã xảy ra và được ghi số hiệu lại — ví dụ luật số 16 (không dùng SĐT/địa chỉ lặp lại y hệt trên nhiều trang vì có thể là footer của cổng tin, không phải dữ liệu thật của cơ quan), luật số 18 (khi 2 nguồn độc lập xung đột thật sự, không để 1 AI tự chọn bên, phải ưu tiên nguồn có số văn bản + ngày cụ thể).[^8] Đây là dạng "luật rút ra từ va chạm thực tế", đáng tin hơn nhiều so với một bộ nguyên tắc soạn trước khi bắt tay vào việc.

**Cơ chế 1 Pro + 5 Free có lý do kỹ thuật rõ ràng, không phải chia việc cho vui.** Tài khoản Free dễ mất ngữ cảnh/tự bịa khi nhận prompt lớn hoặc phải nhớ toàn bộ kiến trúc dự án; chia theo 5 trình duyệt cố định (Brave, Opera GX, Edge, Cốc Cốc, Arc) giúp chạy song song 5 luồng tra cứu mà không tốn token của tài khoản Pro, đồng thời mỗi prompt giới hạn 3–7 entity để tránh overload.[^9] Đây là một mô hình quản lý agent-nhiều-tác-tử áp dụng được ngoài phạm vi dự án này.

**Bài học lỗi được ghi lại trung thực, kể cả lỗi làm mất công sức.** Build-logs ghi rõ ít nhất 2 lần "đụng số file" do nhiều phiên Cowork chạy song song trên cùng thư mục không có cơ chế khóa file — có lần dẫn tới việc 7 Bộ bị làm trùng độc lập 2 lần, phải đối chiếu và giữ lại cả 2 bản để không mất dữ liệu thật của bên nào.[^10] Việc không xoá vội bản "có vẻ sai" mà giữ lại cả hai để đối chiếu là một quyết định thận trọng đúng đắn, dù tốn thời gian hơn.

**Nhạy với thời sự pháp lý.** Luật số 20 liệt kê rất cụ thể 5 mốc thay đổi bộ máy 2025–2026 (sáp nhập Bộ 01/3/2025, chuyển giấy phép lái xe sang Bộ Công an, kết thúc cấp huyện 01/7/2025, Đồng Nai lên thành phố trực thuộc TW 30/4/2026, chuyển thẩm quyền cấp phiếu lý lịch tư pháp 01/7/2026) — và nhắc rõ phần lớn tài liệu trên mạng CHƯA cập nhật các thay đổi này, nên phải tự kiểm tra thẩm quyền trước khi tin bài hướng dẫn thủ tục.[^11] Đây chính xác là loại kiến thức mà người dùng phổ thông (kể cả người viết bài đánh giá này) dễ bị thông tin cũ đánh lừa nhất.

**Tách biệt rõ vai trò từng file quản lý.** Roadmap chỉ ghi tiến độ, Build-logs chỉ ghi bài học/lỗi, Promts chỉ ghi phân công — không trộn lẫn, nên một AI mới vào dự án dở dang có thể đọc đúng thứ cần đọc mà không phải lọc qua một file nhật ký khổng lồ để tìm "hiện đang ở đâu".[^12]

---

### 4. Rủi ro và khoảng trống cần bổ sung để dự án "hoàn thiện"

**Chưa có cơ chế khoá/điều phối khi nhiều phiên chạy song song — vẫn là điểm yếu chưa giải quyết tận gốc.** Bài học đã ghi 2 lần đụng độ nhưng giải pháp hiện tại vẫn là "phát hiện sau khi xảy ra rồi xử lý tay" (đổi số file, đối chiếu thủ công), không phải phòng ngừa. Nếu dự án tiếp tục có nhiều phiên AI chạy đồng thời trên cùng thư mục, rủi ro trùng lặp/token lãng phí sẽ còn tái diễn ở Phase 10 khi khối lượng dữ liệu lớn hơn nhiều.

**Ba nhóm entity quan trọng đang trống hoàn toàn: giấy phép, biểu mẫu, trụ sở/cơ sở vật chất** (`licenses.json`, `forms.json`, `facilities.json` — cả 3 file mới có `[]`).[^13] Đây lại đúng là những thứ mục tiêu ban đầu của dự án nhắc tới ("các loại giấy phép chứng chỉ giấy tờ con dấu văn bản") — nên "hoàn thiện" thực chất còn một quãng đường Phase 10 khá dài, không chỉ là việc nhỏ.

**Số lượng thủ tục hành chính thực tế còn rất ít so với kỳ vọng.** `procedures.json` mới có 3 thủ tục đầy đủ bước (dù các file `19-*.md` đến `40-*.md` đã có dữ liệu thô cho khoảng 15 lĩnh vực Bộ ngành) — nghĩa là phần dữ liệu thô đã thu thập nhiều hơn phần đã ráp vào ứng dụng thật khá nhiều.[^14] Nếu không tiếp tục ráp, phần "thủ tục/quy trình" trong mục tiêu ban đầu của dự án sẽ mỏng hơn phần "cơ quan/con người" rất nhiều.

**Cơ quan Đảng chưa tách thành entity riêng.** Các chức vụ như Bí thư Tỉnh/Thành uỷ hiện được gắn tạm vào entity tỉnh/thành với `level: "party_leadership"`, có ghi chú sẽ tách ra sau — đây là một khoản nợ kỹ thuật đã được nhận diện đúng nhưng chưa trả.[^15]

**Chưa có kiểm thử giao diện độc lập với việc build dữ liệu.** `tools/validate-data.js` kiểm tra tính toàn vẹn dữ liệu tốt (0 lỗi, 0 cảnh báo ở thời điểm viết bài), nhưng không thấy có công cụ kiểm tra UI/hiển thị (ví dụ: entity có source nhưng panel nguồn có hiển thị đúng không, Time Machine có tính đúng mốc effective_from/to không) — rủi ro "dữ liệu đúng nhưng hiển thị sai" chưa được phòng ngừa như dữ liệu.

**Backup GitHub còn thủ công và từng thất bại vì thiếu credential.** Build-logs ghi rõ lần đầu `git push` thất bại vì máy chưa có PAT/credential helper, phải xử lý qua vài bước.[^16] Nếu dự án dừng giữa chừng mà chưa backup kịp, rủi ro mất dữ liệu vẫn tồn tại — nên cân nhắc tự động hoá bước backup thay vì làm thủ công theo yêu cầu định kỳ.

**Chưa công bố "tuyên bố miễn trừ trách nhiệm" rõ ràng ở tầng sản phẩm cuối.** Nội bộ, các file quy tắc rất kỷ luật về việc đánh dấu "chưa xác minh", nhưng cần xác nhận tab "Nguồn thông tin" trong bản HTML cuối cùng có hiển thị NGAY tại mỗi entity mức độ tin cậy + ngày kiểm chứng cho người xem cuối (không chỉ có trong dữ liệu ngầm) — vì đây là thông tin hành chính/pháp lý, người dùng phổ thông cần thấy cảnh báo "chưa xác minh" ngay trên giao diện, không phải chỉ trong JSON.

**Phạm vi so sánh quốc tế (Mỹ, Trung Quốc) nêu trong mục đích dự án ban đầu chưa được triển khai.** Mô tả dự án ghi mục đích là "hiểu hệ thống chính trị VN và hệ thống Mỹ và hệ thống TQ", nhưng toàn bộ dữ liệu/Roadmap hiện tại chỉ tập trung vào Việt Nam — đây không phải lỗi, mà là phạm vi hợp lý cho giai đoạn đầu, nhưng nên ghi rõ trong Roadmap đây là việc "chưa bắt đầu" chứ không phải "đã bỏ", để người kế thừa dự án không hiểu nhầm.

---

### 5. Dự án này giúp ích được gì cho ai

**Người học/người mới đi làm thủ tục hành chính**: hiểu được cơ quan nào cấp cái gì, ai là cấp trên của ai — điều trường học Việt Nam thường không dạy trực tiếp, chỉ được biết khi va vào thực tế.

**Người theo dõi thời sự chính trị nhưng không rõ vai trò từng chức danh**: sơ đồ quan hệ cấp trên–cấp dưới cùng chức năng/nhiệm vụ/quyền hạn giúp đọc tin tức có ngữ cảnh hơn, thay vì chỉ nhớ tên chức vụ mà không hiểu ý nghĩa.

**Người làm nội dung/giáo dục công dân, nhà báo, nhà nghiên cứu chính sách**: có một nguồn tổng hợp có trích dẫn (139 nguồn, mỗi entity đều gắn `source_ids`) làm điểm khởi đầu tra cứu nhanh, dù vẫn cần tự kiểm chứng lại với văn bản gốc trước khi dùng cho mục đích chính thức.

**Người làm sản phẩm/dự án cá nhân dùng AI ("vibe coding")**: đây là ví dụ thực tế, có bằng chứng bằng file, về cách chuyển từ "1 prompt khổng lồ thất bại nhiều lần" sang "hệ thống nhiều tác tử AI có luật chơi, có phân công, có nhật ký lỗi" — giá trị tham khảo về quy trình quản lý dự án AI-hỗ-trợ có khi còn lớn hơn giá trị của bản thân sơ đồ hành chính.

---

### 6. Kết luận ngắn

Dự án đã đi qua phần khó nhất về mặt kiến trúc và kỷ luật dữ liệu (Phase 0–9, 0 lỗi validate), nhưng phần "hoàn thiện" theo đúng mục tiêu ban đầu (giấy phép, biểu mẫu, trụ sở, đầy đủ thủ tục cho tất cả Bộ ngành, tách cơ quan Đảng, và mở rộng so sánh Mỹ/Trung Quốc) vẫn còn ở phía trước, tương đương Phase 10 trở đi. Điều đáng ghi nhận nhất không phải là con số 63 cơ quan hay 139 nguồn, mà là việc dự án tự phát hiện lỗi tổ chức của chính mình (đụng file, xung đột nguồn, PAT git) và biến mỗi lỗi thành một luật hoặc một bước quy trình cụ thể — đây là nền tảng tốt để dự án tiếp tục an toàn dù người/AI thực hiện có thay đổi.

---

### Nguồn trích dẫn (nội bộ dự án, không bịa link)

[^1]: Toàn bộ số liệu, trích dẫn luật, và mốc thời gian trong bài lấy trực tiếp từ các file trong thư mục dự án `11.so-do-bo-may-hanh-chinh` (đọc qua device bridge ngày 2026-09-19) và doc `context-bmhc` trong Project claude.ai — không có số liệu nào tự suy đoán.
[^2]: Doc `context-bmhc` (Project claude.ai), phần "1. Folder structure" và "2. Mô hình dữ liệu tổng thể".
[^3]: `Claude-sodobmhc.md`, mục "⚠️ PHẠM VI ĐÃ THU HẸP (user chốt 2026-09-18)".
[^4]: Kết quả chạy trực tiếp `node tools/validate-data.js` trong thư mục dự án, 2026-09-19.
[^5]: `Roadmap-sodobmhc.md`, dòng "Trạng thái tổng quan"; git log commit `6d00d1d` ("Phase 8 ... va Phase 9 (Time Machine...)").
[^6]: Kiểm tra trực tiếp kích thước file: `data/licenses.json`, `data/forms.json`, `data/facilities.json` — mỗi file 3 byte (`[]`), 2026-09-19.
[^7]: `git log --reverse` (commit `ef8f239`, 2026-09-18 16:45:35 +0700) và `git log -1` (commit `6d00d1d`, 2026-09-19 00:31:42 +0000) trong repo dự án.
[^8]: `Claude-sodobmhc.md`, mục 9 "20 luật nền", luật số 16 và 18.
[^9]: `Claude-sodobmhc.md`, mục 2 "Mô hình nhân sự AI" và mục 7 "Quy tắc chống overload / đốt token".
[^10]: `Build-logs-sodobmhc.md`, mục "2026-09-18 — Phát hiện 2 phiên Cowork chạy song song hoàn thành TOÀN BỘ Phase 6 độc lập với nhau".
[^11]: `Claude-sodobmhc.md`, mục 9, luật số 20.
[^12]: `Claude-sodobmhc.md`, mục 0 "Thứ tự đọc file khi vào dự án" và mục 10 "Danh sách file quản lý dự án & vai trò".
[^13]: Kiểm tra trực tiếp kích thước file trong thư mục `data/`, 2026-09-19.
[^14]: So sánh danh sách file `19-thu-tuc-*.md` đến `40-thu-tuc-*.md` trong thư mục dự án với nội dung `data/procedures.json` (3 thủ tục), 2026-09-19.
[^15]: `Build-logs-sodobmhc.md`, mục ghi về việc gắn tạm chức vụ Bí thư Tỉnh/Thành uỷ vào entity tỉnh/thành với `level: "party_leadership"`.
[^16]: `Build-logs-sodobmhc.md`, mục "2026-09-18 — Pro tự tra (WebFetch/WebSearch) làm rõ xung đột Thái Nguyên; commit lần 2 lên git; soạn Prompt #20-24", điểm 2 "Push lên GitHub THẤT BẠI".
