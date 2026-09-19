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

**Số thứ tự file là một tài nguyên tranh chấp — và đây là lần đụng độ thứ ba được ghi nhận, ngay trong lúc viết bài đánh giá này.** Ngày 2026-09-19, phát hiện `19-thu-tuc-hanh-chinh-va-xac-minh-bi-thu.md` (do một phiên tra cứu thủ tục hành chính tạo) trùng số thứ tự với `19-ten-day-du-nhom5-5tinh.md` (do một phiên Claude Code khác tạo trước đó, khi đang gấp rút hoàn tất danh sách tên xã/phường cả nước). Cách xử lý: đổi file bị trùng sau thành `41-...` — lấy số lớn hơn số lớn nhất đang tồn tại tại thời điểm phát hiện, không lấp vào một số nhỏ hơn đang trống (ví dụ 26–29, 36 hiện vẫn còn trống do các lần đổi số trước) — và ghi rõ lý do đổi tên ngay trong frontmatter của file mới (`ghi-chu-doi-ten`) để ai đọc sau cũng biết vì sao có việc đổi số. Kiểm tra lại toàn bộ danh sách file đánh số sau khi đổi: không còn số nào trùng.[^17] Bài học rút ra, đúng với cả 3 lần đụng độ đã xảy ra: khi nhiều phiên AI làm việc song song trên cùng thư mục, việc "lấy số thứ tự tiếp theo" tưởng vô hại lại là một hành động ghi (write) vào một tài nguyên dùng chung — phiên nào tạo file mới bắt buộc phải liệt kê lại thư mục ngay trước khi đặt số, và luôn lấy số lớn hơn số lớn nhất đang có, tuyệt đối không lấp vào chỗ trống của số đã bị đổi trước đó (chỗ trống đó có thể đang được một phiên khác dùng lại).

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

### 5. Lộ trình hoàn thiện: đầu việc cụ thể + ước lượng nguồn lực

*Bổ sung 2026-09-19, theo yêu cầu người đọc bài đánh giá này.* Với mỗi khoảng trống nêu ở mục 4, dưới đây là đầu việc cụ thể để đóng lại, cùng ước lượng nguồn lực theo đúng đơn vị đo mà dự án đang dùng: **số prompt** cần soạn thêm cho 5 acc Free (nếu có), **số phiên làm việc** (Cowork/Claude Code) để ráp/kiểm chứng, và **mức token mỗi phiên** — ước lượng THÔ dựa theo nhịp độ đã quan sát được của chính dự án này (ví dụ: 5 prompt tra cứu tổng quan cấp xã + ráp xong trong 1 phiên; 17 prompt thủ tục Mức 3 tốn khoảng 2–3 phiên), **không phải số đo token thực tế** — không có công cụ nào trong dự án tự động đo token đã dùng cho từng phiên trước đây, nên các con số dưới đây chỉ nên dùng để ước lượng NGÂN SÁCH THỜI GIAN/CÔNG SỨC, không phải cam kết chính xác.[^18]

**Việc 1 — Giấy phép / chứng chỉ (`licenses.json`, đang rỗng).** Phần lớn có thể SUY RA từ dữ liệu thủ tục thô đã có (file `22-...md` đến `41-...md`, 17 lĩnh vực Bộ ngành) — mỗi thủ tục thường "ra" đúng 1 loại giấy phép/chứng chỉ, nên bước đầu là RÁP chứ không phải tra cứu mới. Phần còn thiếu: giấy phép/chứng chỉ do cấp TỈNH cấp trực tiếp (giấy phép xây dựng, giấy chứng nhận quyền sử dụng đất...) chưa có trong dữ liệu thô hiện tại. Ước lượng: **0 prompt mới** cho phần suy ra từ dữ liệu Bộ ngành đã có + **~5 prompt mới** (theo đúng khuôn nhóm 6–7 tỉnh như Prompt #15–19) nếu muốn phủ phần cấp tỉnh; **2–3 phiên** (1 phiên trích xuất + ráp từ dữ liệu có sẵn, 1–2 phiên xử lý phần cấp tỉnh mới); mức token mỗi phiên **trung bình** (phải đọc lại toàn bộ 17 file thô dài để trích đúng trường).

**Việc 2 — Biểu mẫu (`forms.json`, đang rỗng).** KHÔNG suy ra được từ dữ liệu Mức 3 hiện có (dữ liệu hiện tại chỉ có tên thủ tục + link chung tới dichvucong.gov.vn, CHƯA có số hiệu mẫu đơn cụ thể như "Mẫu số 01/ĐKKD"). Đây là lớp dữ liệu SÂU hơn thủ tục, cần tra mới theo từng lĩnh vực. Ước lượng: **~10–17 prompt mới** (tùy làm đủ 17 Bộ ngành hay chỉ ưu tiên các lĩnh vực người dân dùng nhiều nhất: hộ tịch, doanh nghiệp, đất đai, giao thông, tư pháp — nếu chỉ làm nhóm ưu tiên thì khoảng 5–7 prompt); **3–4 phiên**; mức token mỗi phiên **cao** (mỗi thủ tục cần tra + ráp riêng một trường mẫu đơn, khối lượng đọc/viết nhiều hơn Việc 1).

**Việc 3 — Trụ sở / cơ sở vật chất tiếp nhận hồ sơ (`facilities.json`, đang rỗng).** Khác với trụ sở UBND/Bộ đã có sẵn trong `organizations.json` — đây là các điểm tiếp nhận hồ sơ riêng (Trung tâm Phục vụ hành chính công cấp tỉnh, Bộ phận một cửa), thường có địa chỉ/SĐT khác trụ sở hành chính chính. Ước lượng: **~5 prompt mới** (theo khuôn nhóm 6–7 tỉnh quen thuộc); **1–2 phiên**; mức token mỗi phiên **trung bình**.

**Việc 4 — Ráp phần thủ tục còn lại vào `procedures.json` (hiện mới 3/rất-nhiều) + gộp 6 cặp file trùng còn treo ở Phase 6.** Dữ liệu thô ĐÃ CÓ ĐỦ (17 lĩnh vực, file `22-...` đến `41-...`) — đây thuần túy là công đoạn RÁP + GỘP, không cần tra cứu mới. Ước lượng: **0 prompt mới**; **2 phiên** (1 gộp 6 cặp file trùng theo đúng ghi chú đã có trong Roadmap Phase 6, 1 ráp toàn bộ vào schema `procedures.json` + chạy lại `validate-data.js`); mức token mỗi phiên **trung bình–cao** (đọc nhiều file dài để đối chiếu 2 bản trùng trước khi gộp, giữ đúng luật 18 nếu 2 bản có xung đột).

**Việc 5 — Cơ chế khoá/điều phối khi nhiều phiên chạy song song.** Đây là việc KỸ THUẬT thuần túy (ví dụ: quy ước 1 file `.working-on` ghi tên phiên + timestamp trước khi bắt đầu sửa, hoặc script kiểm tra số file trùng trước khi commit), không cần dữ liệu hành chính thật. Ước lượng: **0 prompt**; **1 phiên** (Claude Code); mức token **thấp**.

**Việc 6 — Tự động hoá backup GitHub.** Việc kỹ thuật (git hook hoặc 1 scheduled task định kỳ chạy `git add/commit/push`), không cần dữ liệu hành chính. Ước lượng: **0 prompt**; **1 phiên** (Claude Code, cần xử lý PAT đúng luật số 21 — không nhúng vào URL remote); mức token **thấp**.

**Việc 7 — Tách cơ quan Đảng (Đảng uỷ tỉnh/thành) thành entity riêng.** Tên 34 Bí thư Tỉnh/Thành uỷ ĐÃ CÓ sẵn (file `11-...md`) — việc còn lại là thiết kế quan hệ (entity "Đảng uỷ tỉnh X" + relationship với UBND/HĐND cùng tỉnh) và ráp lại, không nhất thiết cần tra cứu mới trừ khi muốn thêm Phó Bí thư/Ban Thường vụ. Ước lượng: **0 prompt** (dùng lại dữ liệu có sẵn) hoặc **~3 prompt** nếu muốn mở rộng thêm Ban Thường vụ; **1–2 phiên**; mức token **thấp–trung bình**.

**Việc 8 — Kiểm thử UI độc lập với dữ liệu + xác nhận cảnh báo "chưa xác minh" hiện đúng trên giao diện cuối.** Việc kỹ thuật, không cần dữ liệu mới. Lưu ý: theo Roadmap, Phase 8 đã ghi "cảnh báo đỏ tự động cho mục có nguồn `unverified`" — rất có thể khoảng trống nêu ở mục 4 phần này ĐÃ được giải quyết một phần, chỉ cần XÁC NHẬN lại bằng cách mở app kiểm tra trực tiếp, không phải làm lại từ đầu.[^19] Ước lượng: **0 prompt**; **≤1 phiên** (gộp chung với Việc 5/6 trong cùng 1 phiên kỹ thuật nếu muốn tiết kiệm); mức token **thấp**.

**Việc 9 — Mở rộng so sánh hệ thống Mỹ và Trung Quốc** (đúng mục đích gốc ghi trong mô tả dự án — "hiểu hệ thống chính trị VN và hệ thống Mỹ và hệ thống TQ" — nhưng chưa được Roadmap nào của dự án hiện tại đề cập tới). Đây là đầu việc LỚN NHẤT, về bản chất là làm lại quy trình đã làm cho Việt Nam thêm 2 lần nữa, với độ phức tạp thêm (hệ thống liên bang Mỹ có 50 bang; hệ thống Trung Quốc có Đảng Cộng sản TQ nắm thực quyền cần mô hình hoá riêng, song song với bộ máy nhà nước hình thức). Có 2 mức làm:
  - *Mức tối thiểu — chỉ cấp thượng tầng* (Mỹ: Quốc hội + Tổng thống/Nội các + Tối cao Pháp viện; Trung Quốc: Đại hội Đại biểu Nhân dân toàn quốc + Quốc vụ viện/các Bộ + hệ thống toà án-kiểm sát + Đảng CSTQ): ước lượng **~15–20 prompt mỗi nước** (khoảng 30–40 prompt tổng), **~6–8 phiên**, mức token mỗi phiên **trung bình–cao**.
  - *Mức đầy đủ — thêm cấp bang (Mỹ) / cấp tỉnh (TQ)*, tương xứng độ sâu đã làm cho VN: quy mô gần gấp đôi–gấp ba tổng số prompt đã dùng cho toàn bộ phần Việt Nam tính đến nay (~40+ prompt), ước lượng **~80–120 prompt**, **~15–20 phiên**.
  Sai số của ước lượng này LỚN hơn các việc 1–8 rất nhiều, vì chưa có bất kỳ khung phân loại/schema nào cho 2 hệ thống này (khác hệ thống chính trị, khác cấu trúc — không chắc dùng chung được `organization.schema.json` hiện tại mà không sửa).

Bảng tóm tắt (để dễ ước lượng tổng ngân sách nếu muốn làm hết cùng lúc):

| # | Đầu việc | Prompt mới | Phiên làm việc | Token/phiên |
|---|---|---|---|---|
| 1 | Giấy phép/chứng chỉ (`licenses.json`) | 0 + ~5 (cấp tỉnh) | 2–3 | Trung bình |
| 2 | Biểu mẫu (`forms.json`) | ~10–17 (hoặc 5–7 nếu ưu tiên) | 3–4 | Cao |
| 3 | Trụ sở tiếp nhận hồ sơ (`facilities.json`) | ~5 | 1–2 | Trung bình |
| 4 | Ráp thủ tục + gộp file trùng | 0 | 2 | Trung bình–Cao |
| 5 | Cơ chế khoá/điều phối đa phiên | 0 | 1 | Thấp |
| 6 | Tự động hoá backup GitHub | 0 | 1 | Thấp |
| 7 | Tách entity Đảng uỷ tỉnh | 0–3 | 1–2 | Thấp–Trung bình |
| 8 | Kiểm thử UI + xác nhận cảnh báo | 0 | ≤1 | Thấp |
| 9a | So sánh Mỹ/TQ — mức thượng tầng | ~30–40 | 6–8 | Trung bình–Cao |
| 9b | So sánh Mỹ/TQ — mức đầy đủ (thêm bang/tỉnh) | ~80–120 | 15–20 | Trung bình–Cao |

Nếu bỏ Việc 9 (so sánh quốc tế — phạm vi mở rộng, không phải khoản nợ của phạm vi hiện tại) thì phần "hoàn thiện Việt Nam" (Việc 1–8) tổng cộng khoảng **~20–32 prompt mới** và **~12–17 phiên làm việc** — tương đương hoặc nhỉnh hơn một chút so với toàn bộ khối lượng công việc dự án đã làm để đi từ Phase 0 tới Phase 9 hiện tại.

---

### 6. Dự án này giúp ích được gì cho ai

**Người học/người mới đi làm thủ tục hành chính**: hiểu được cơ quan nào cấp cái gì, ai là cấp trên của ai — điều trường học Việt Nam thường không dạy trực tiếp, chỉ được biết khi va vào thực tế.

**Người theo dõi thời sự chính trị nhưng không rõ vai trò từng chức danh**: sơ đồ quan hệ cấp trên–cấp dưới cùng chức năng/nhiệm vụ/quyền hạn giúp đọc tin tức có ngữ cảnh hơn, thay vì chỉ nhớ tên chức vụ mà không hiểu ý nghĩa.

**Người làm nội dung/giáo dục công dân, nhà báo, nhà nghiên cứu chính sách**: có một nguồn tổng hợp có trích dẫn (139 nguồn, mỗi entity đều gắn `source_ids`) làm điểm khởi đầu tra cứu nhanh, dù vẫn cần tự kiểm chứng lại với văn bản gốc trước khi dùng cho mục đích chính thức.

**Người làm sản phẩm/dự án cá nhân dùng AI ("vibe coding")**: đây là ví dụ thực tế, có bằng chứng bằng file, về cách chuyển từ "1 prompt khổng lồ thất bại nhiều lần" sang "hệ thống nhiều tác tử AI có luật chơi, có phân công, có nhật ký lỗi" — giá trị tham khảo về quy trình quản lý dự án AI-hỗ-trợ có khi còn lớn hơn giá trị của bản thân sơ đồ hành chính.

---

### 7. Kết luận ngắn

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
[^17]: Kiểm tra trực tiếp thư mục dự án ngày 2026-09-19: file `41-thu-tuc-hanh-chinh-va-xac-minh-bi-thu.md` (frontmatter có trường `ghi-chu-doi-ten: Đổi số từ 19 → 41 vào 2026-09-19 vì trùng số với 19-ten-day-du-nhom5-5tinh.md do một phiên làm việc khác tạo`) và rà lại toàn bộ danh sách file đánh số `01-...` đến `41-...` — không còn số nào bị trùng tại thời điểm kiểm tra.
[^18]: Ước lượng dựa theo nhịp độ quan sát trực tiếp từ lịch sử của chính dự án này (ví dụ: 5 prompt Prompt #15–19 + 1 phiên ráp cho xong tổng quan cấp xã 34/34 tỉnh; 17 prompt Prompt #25–41 tốn khoảng 2–3 phiên cho thủ tục Mức 3 của 17 Bộ ngành) — xem `Roadmap-sodobmhc.md` mục "Tiến độ thu thập dữ liệu thô" và mục Phase 6. Không có công cụ đo token theo phiên trong dự án, nên đây là ước lượng công sức, không phải số đo.
[^19]: `Roadmap-sodobmhc.md`, Phase 8: "Cảnh báo đỏ tự động cho mục có nguồn `unverified`; link gốc, không bịa link. 🎉 Phase 8 HOÀN TẤT." — cần xác nhận trực tiếp trên giao diện trước khi coi khoảng trống ở mục 4 là đã đóng hoàn toàn.
