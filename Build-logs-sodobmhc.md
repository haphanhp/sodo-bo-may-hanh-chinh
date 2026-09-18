---
tags: [sodobmhc]
type: build-log
created: 2026-09-18
updated: 2026-09-18
---

### Build-logs-sodobmhc — Nhật ký build & bài học

#### Cách dùng file này

- Mỗi lần làm việc (build, sửa, ráp dữ liệu, gặp lỗi) → thêm 1 mục mới, **mới nhất lên trên đầu** (ngay dưới mục này).
- Format mỗi mục: Ngày, Việc làm, Vấn đề gặp (nếu có), Cách xử lý, Bài học rút ra.
- Đây là nơi **duy nhất** ghi lỗi/bài học của dự án — không ghi bài học trong `Roadmap-sodobmhc.md` (Roadmap chỉ ghi tiến độ ✅).

---

#### 2026-09-18 — Pro tự tra (WebFetch/WebSearch) làm rõ xung đột Thái Nguyên; commit lần 2 lên git; soạn Prompt #20-24 (danh sách tên đầy đủ cấp xã)

- **Việc làm**: User chọn cả 3 hướng tiếp theo (giải quyết xung đột Thái Nguyên, tra tên đầy đủ cấp xã, commit+push GitHub). Với Thái Nguyên: Pro tự dùng WebFetch/WebSearch (không giao acc Free, vì đây là việc kiểm chứng nhỏ 2-3 nguồn, không phải thu thập số lượng lớn) để tra sâu — kết quả xem mục "Kết quả" dưới. Đã patch `13-cap-xa-nhom2-7tinh.md` (nâng cấp mục cảnh báo từ 🚩 "xung đột chưa giải quyết" thành 🟡 "nghiêng rõ về 1 bên nhưng chưa 100% chắc"), cập nhật Roadmap mục 05 và bảng Promts dòng #16. Đã `git add -A && git commit` lần 2 (commit `c2f7843`, xin quyền xóa file qua `device_request_delete_permission` để git có thể tạo/xoá object tạm — trước đó bị lỗi "Operation not permitted"). Đã soạn Prompt #20-24 (danh sách TÊN ĐẦY ĐỦ cấp xã, dùng lại đúng 5 nhóm tỉnh và giao lại đúng 5 acc như Prompt #15-19), thêm vào `Promts-sodobmhc.md` + bảng theo dõi.
- **Kết quả đáng chú ý**:
  1. Thái Nguyên: fetch trực tiếp toàn văn Nghị quyết 1683/NQ-UBTVQH15 (xaydungchinhsach.chinhphu.vn) xác nhận 77 xã + 15 phường (khoản 91, Điều 1). Tìm thêm 2 bài báo (daibieunhandan.vn, lsvn.vn) xác nhận: HĐND tỉnh Thái Nguyên (25/6/2025) ra 1 nghị quyết "thành lập 8 phường mới" (Chợ Đồn, Định Hóa, Đồng Hỷ, Phú Bình, Phú Lương, Quân Chu, Trại Cau, Võ Nhai — toàn tên huyện/thị trấn cũ), tuyên bố tổng thành 69 xã + 23 phường. Nhưng fetch tiếp bài "Danh sách 92 xã, phường mới của tỉnh Thái Nguyên" trên chinhphu.vn — bài này đăng/CẬP NHẬT LẦN CUỐI 04/08/2025 (hơn 1 tháng SAU đề xuất 8 phường) — vẫn ghi 77 xã + 15 phường, không đổi. Đây là bằng chứng khá mạnh rằng đề xuất của HĐND tỉnh (thẩm quyền đổi ranh giới xã/phường thuộc UBTVQH, không phải HĐND cấp tỉnh) CHƯA được chính thức hóa vào danh mục cấp xã — nhưng chưa tìm được văn bản tường minh bác bỏ/xác nhận, nên KHÔNG chốt 100%, chỉ hạ cấp độ nghi vấn.
  2. Push lên GitHub THẤT BẠI: `git push origin main` báo lỗi "could not read Username for 'https://github.com': No such device or address" — máy user chưa có credential helper/PAT nào lưu sẵn cho remote này (đã xác minh, không có `.git-credentials`, không có `credential.helper`). Commit local đã thành công (`c2f7843`), nhưng chưa lên được GitHub. Theo đúng quy tắc bảo mật của dự án, Pro KHÔNG yêu cầu user dán PAT vào chat này.
  3. Nhân dịp commit lần 2, phát hiện `.git` không cho phép Pro tạo/xoá object tạm trong lần đầu ("Operation not permitted") — do quyền xoá file trong folder được mount qua device_bash chưa được cấp cho session này. Đã xin quyền qua `device_request_delete_permission` (user chấp thuận), sau đó `rm -f .git/index.lock` và commit lại thành công.
- **Vấn đề gặp**: Không có PAT/credential để push — đây là hạn chế đã biết từ kế hoạch gốc của user ("cấp PAT tạm để claude code ghi thẳng lên đó" — ý định ban đầu là dùng session Claude Code riêng cho việc này, không phải phiên Cowork tra cứu này).
- **Cách xử lý đề xuất cho user**: (a) tự push từ máy (mở terminal/GitHub Desktop, git đã commit sẵn ở local, chỉ cần `git push origin main` và đăng nhập 1 lần — sau đó Windows Credential Manager sẽ nhớ); hoặc (b) mở 1 session Claude Code riêng (không phải Cowork chat này) và cấp PAT tạm cho session đó như đã làm ở Phase 0, theo đúng kế hoạch gốc.
- **Bài học**:
  - Không phải mọi việc "tra cứu dữ liệu" nên tự động giao cho 5 acc Free — với việc kiểm chứng nhỏ, có mục tiêu rõ (2-3 nguồn, 1 xung đột cụ thể), Pro tự dùng WebFetch/WebSearch trực tiếp NHANH HƠN và không tốn lượt giao-nhận qua user. Chỉ nên giao acc Free cho việc thu thập khối lượng LỚN (nhiều tỉnh, nhiều tên) — đúng như mục đích ban đầu của quy tắc 5-acc là "tránh overload/đốt token 1 lần", không áp dụng cho việc kiểm chứng nhỏ.
  - Khi git báo "Operation not permitted" trên file trong `.git/objects` hoặc `.git/index.lock`, đây là do thiếu quyền xoá file của device_bash trên folder được mount — không phải lỗi git thật — cần xin `device_request_delete_permission` trước khi thử lại, không nên loay hoay sửa cấu hình git.
  - "chinhphu.vn giữ cache cũ" (luật đã ghi trong Claude-sodobmhc.md) là 1 rủi ro CÓ THẬT, nhưng ở đây lại chính là bằng chứng HỖ TRỢ cho số liệu cũ (77/15) vì bài được CẬP NHẬT sau ngày có đề xuất mới mà vẫn giữ nguyên — tức đây không phải 1 bài "quên cập nhật từ trước", mà là "đã có cơ hội cập nhật nhưng không đổi" — 2 tình huống này có sức nặng chứng cứ khác nhau, cần phân biệt rõ khi đánh giá độ tin cậy của 1 nguồn theo luật 18.

---

#### 2026-09-18 — Prompt #15-19: HOÀN TẤT tổng quan cấp xã/phường/đặc khu cho toàn bộ 34/34 tỉnh/thành + danh sách đầy đủ 13 đặc khu

- **Việc làm**: Ráp 5 batch chạy song song (theo yêu cầu user "đưa 5 promt 1 lúc đi cho mau xong việc") vào 5 file mới: `12-cap-xa-nhom1-7tinh.md` (Prompt #15, Brave — Hà Nội, Cao Bằng, Điện Biên, Hà Tĩnh, Lai Châu, Lạng Sơn, Nghệ An), `13-cap-xa-nhom2-7tinh.md` (Prompt #16, Opera GX — Quảng Ninh, Thanh Hóa, Sơn La, Tuyên Quang, Lào Cai, Thái Nguyên, Phú Thọ), `14-cap-xa-nhom3-7tinh.md` (Prompt #17, Microsoft Edge — Bắc Ninh, Hưng Yên, Hải Phòng, Ninh Bình, Quảng Trị, Đà Nẵng, Quảng Ngãi), `15-cap-xa-nhom4-7tinh.md` (Prompt #18, Cốc Cốc — Huế, Gia Lai, Khánh Hòa, Lâm Đồng, Đắk Lắk, Thành phố Đồng Nai, Tây Ninh), `16-cap-xa-nhom5-va-danhsach-13-dackhu.md` (Prompt #19, Arc — TP.HCM, Cần Thơ, Vĩnh Long, Đồng Tháp, Cà Mau, An Giang + tên đầy đủ 13 đặc khu cả nước). Patch `10-xac-nhan-cau-truc-2-cap.md` (thay ghi chú "CHƯA xác minh tên 13 đặc khu" bằng tham chiếu tới file 16). Cập nhật Roadmap mục 05 → ✅ HOÀN TẤT, và bảng theo dõi Prompt #15-19 trong `Promts-sodobmhc.md`.
- **Kết quả đáng chú ý**:
  1. **Mốc lớn**: có tổng quan cấp xã (tổng số + cơ cấu xã/phường/đặc khu, có nguồn Nghị quyết UBTVQH15 cụ thể) cho **toàn bộ 34/34 tỉnh/thành**. Danh sách TÊN đầy đủ từng đơn vị (không chỉ tổng số/ví dụ) vẫn còn thiếu ở phần lớn tỉnh — để quyết định sau có làm tiếp hay chuyển sang phase khác (đóng gói JSON, xây khung app).
  2. Danh sách đầy đủ **13/13 đặc khu cả nước** đã xác minh (Quyết định 759/QĐ-TTg + đối chiếu 34 Nghị quyết riêng từng tỉnh): Phú Quốc/Kiên Hải/Thổ Châu (An Giang), Côn Đảo (TP.HCM), Phú Quý (Lâm Đồng), Trường Sa (Khánh Hòa), Hoàng Sa (Đà Nẵng), Lý Sơn (Quảng Ngãi), Cồn Cỏ (Quảng Trị), Bạch Long Vĩ + Cát Hải (Hải Phòng), Cô Tô + Vân Đồn (Quảng Ninh). Điền tên đặc khu Lâm Đồng ("Phú Quý") vào file 15, thay ghi chú "chưa xác định" trước đó.
  3. Đồng Nai: bổ sung timeline CHI TIẾT hơn cho cấp xã — 1/7/2025 (95 ĐVHC = 72 xã + 23 phường, theo NQ 1662) → 14/4/2026 (UBTVQH chuyển 10 xã → 10 phường, vẫn là tỉnh, hiệu lực cùng ngày 30/4/2026) → 24/4/2026 (Quốc hội khóa XVI thông qua NQ 30-NQ/2026/QH16 thành lập Thành phố Đồng Nai) → 30/4/2026 hiệu lực (95 ĐVHC = 62 xã + 33 phường). Khẳng định lại: KHÔNG có thay đổi số lượng/ranh giới cấp xã khi lên thành phố, chỉ đổi cấp hành chính — đúng mẫu `effective_from` trên cùng 1 entity.
  4. 🚩 **Xung đột số liệu MỚI, CHƯA giải quyết**: Thái Nguyên — Nghị quyết 1683/NQ-UBTVQH15 (bản gốc 16/6/2025) ghi 77 xã + 15 phường, nhưng 1 nguồn báo chí (Tiền Phong/baomoi, 25/6/2025) nói HĐND tỉnh sau đó ra thêm nghị quyết chuyển 8 xã → 8 phường, đổi thành 69 xã + 23 phường (tổng vẫn 92). Bản thân acc trả lời (Opera GX) tự nhận chưa xác minh được đây có phải cơ cấu chính thức hiện tại — đã ghi CẢ 2 số liệu vào file 13, KHÔNG tự chọn 1 bên (đúng luật 18), đánh dấu ⚠️ trong bảng Promts và Roadmap.
  5. Nhóm 2 (Prompt #16) có 2 lượt trả lời độc lập do user dán nhầm 1 prompt vào 2 acc cùng lúc — không phải lỗi, tận dụng làm đối chiếu chéo (6/7 tỉnh khớp hoàn toàn, tỉnh thứ 7 — Thái Nguyên — chính là nơi phát sinh xung đột nói trên, cho thấy việc dán trùng vô tình lại giúp phát hiện ra xung đột).
- **Vấn đề gặp**: Nội dung 5 batch được user dán chung trong 1 message rất dài, có một số nhãn tự ghi bên trong câu trả lời ("đây là promt 16", "đây là pronmt 18", "p17", "p19") — ban đầu có vẻ không khớp thứ tự xuất hiện trong văn bản. Đã đối chiếu bằng cách khớp NỘI DUNG (danh sách tỉnh trong mỗi batch) với nhóm tỉnh đã phân công gốc ở `Promts-sodobmhc.md` (Prompt #15-19), không dựa vào nhãn tự ghi của acc — kết quả: mọi nhãn tự ghi hóa ra đều khớp đúng khi đối chiếu kỹ theo nội dung, không có mislabel thật.
- **Bài học**:
  - Khi user dán nhiều batch trả lời liên tiếp trong 1 message dài, luôn đối chiếu THEO NỘI DUNG (danh sách tỉnh/đơn vị cụ thể trong từng đoạn) với phân công gốc trong `Promts-sodobmhc.md`, không suy luận thứ tự chỉ từ vị trí xuất hiện hay nhãn tự ghi rời rạc bên trong văn bản — cách này tránh được nhầm lẫn dù văn bản nhìn qua có vẻ lộn xộn.
  - 1 lần dán trùng "nhầm" (cùng 1 prompt vào 2 acc) không nên coi là lãng phí — nếu tận dụng đối chiếu chéo, có thể phát hiện ra xung đột số liệu thật (trường hợp Thái Nguyên) mà nếu chỉ có 1 lượt trả lời sẽ không bao giờ biết để mà nghi ngờ.
  - Theo đúng chỉ đạo của user ("thôi kệ không sao, thôi đừng quan tâm trình duyệt nữa"): từ batch này, KHÔNG còn tiếp tục ghi nhận/escalate việc acc tự khai "tôi không phải trình duyệt thật" như 1 bất thường cần user xác nhận — coi đây là hành vi bình thường, đã có 2 dòng self-disclaimer kiểu này trong batch nhưng không đưa vào phần "vấn đề gặp" ở trên.

---

---

#### 2026-09-18 — Prompt #13/#14: xác nhận CHÍNH THỨC bỏ cấp huyện; 30 Bí thư Tỉnh ủy; phát hiện Chủ tịch UBND Đồng Tháp đổi; 2 dấu hiệu bất thường về nguồn trả lời

- **Việc làm**: Ráp `10-xac-nhan-cau-truc-2-cap.md` (Prompt #13, Arc — xác nhận Việt Nam bỏ cấp huyện toàn quốc từ 1/7/2025, có đầy đủ chuỗi văn bản: NQ 76/2025/UBTVQH15 → NQ 203/2025/QH15 (sửa Hiến pháp, Điều 2) → Luật 72/2025/QH15 (Điều 1) → 34 NQ riêng từng tỉnh → QĐ 19/2025/QĐ-TTg; tổng quan 3.321 đơn vị cấp xã = 2.636 xã + 672 phường + 13 đặc khu). Ráp `11-bi-thu-tinh-thanh-va-doi-chieu.md` (Prompt #14, Cốc Cốc — 30 Bí thư Tỉnh/Thành ủy + đối chiếu chéo 6 Chủ tịch UBND). Sửa `09-tinh-thanh-nhom3-chi-tiet.md` (Đồng Tháp: Phạm Thành Ngại → Nguyễn Thanh Nhàn, hiệu lực 9/9/2026). Cập nhật Roadmap mục 04 (✅ đã xác nhận, chuyển lịch sử) và mục 05 (đã có tổng quan, còn thiếu chi tiết theo tỉnh).
- **Kết quả đáng chú ý**:
  1. Việt Nam đã bỏ HOÀN TOÀN cấp huyện trên toàn quốc từ 1/7/2025, kể cả 11 tỉnh/thành không sáp nhập cấp tỉnh — có đầy đủ căn cứ hiến định (Điều 2, NQ 203/2025/QH15 sửa Hiến pháp) + luật (Điều 1, Luật 72/2025/QH15). Đây là thay đổi cấu trúc CƠ BẢN nhất của dự án tính đến nay, ảnh hưởng toàn bộ Roadmap mục 04/05.
  2. "Thị trấn" cũng biến mất như 1 loại đơn vị hành chính riêng (sáp nhập vào xã hoặc phường tùy trường hợp) — chỉ còn 3 loại ở cấp xã: xã, phường, đặc khu (13 đặc khu, chưa rõ tên cụ thể).
  3. Phát hiện Chủ tịch UBND tỉnh Đồng Tháp đã đổi người CHỈ 9 NGÀY trước ngày tra cứu (9/9/2026) — Phạm Thành Ngại chuyển làm Phó Tổng Thanh tra Chính phủ, thay bởi Nguyễn Thanh Nhàn. Đây là minh chứng rõ nhất từ đầu dự án đến nay cho việc "hạn dùng" dữ liệu nhân sự lãnh đạo tỉnh có thể chỉ tính bằng NGÀY, không phải tháng/năm.
  4. Batch Prompt #14 tự phát hiện và báo cáo thay đổi này chủ động (không được yêu cầu tìm thay đổi, chỉ được yêu cầu "đối chiếu chéo xác nhận đúng") — hành vi đáng khen, cho thấy việc yêu cầu "không tự chọn 1 bên khi có xung đột, báo cáo cả 2" (luật 18) đang phát huy tác dụng tốt.
- **Vấn đề gặp — 2 dấu hiệu bất thường về nguồn trả lời Prompt #14**:
  1. Acc tự khai model là **"Claude Sonnet 4.6"** — khác với MỌI batch trước (luôn ghi "Claude Sonnet 5"). Không rõ đây là lỗi tự nhận diện hay có ý nghĩa khác.
  2. Acc tự khai KHÔNG PHẢI trình duyệt Cốc Cốc mà là "giao diện chat Claude.ai (web)" — đây là LẦN THỨ 2 gặp pattern acc tự nhận không phải browser thật (lần đầu ở Prompt #9). Cả 2 lần đều rơi vào các prompt mà user tự gõ tên browser vào đầu câu trả lời sau khi nhận được.
- **Cách xử lý**: Ghi rõ cả 2 dấu hiệu vào frontmatter + đầu file 11, không tự diễn giải hay sửa. Đề xuất user xác nhận lại: các prompt gần đây có thật sự chạy qua browser extension của acc Free tương ứng hay không.
- **Bài học**:
  - Một phát hiện về thay đổi CẤU TRÚC hành chính lớn (bỏ 1 cấp hành chính) cần có ĐẦY ĐỦ chuỗi văn bản pháp lý (không chỉ 1 nghị quyết) trước khi cập nhật Roadmap — ở đây có tới 5 văn bản nối tiếp nhau, và việc yêu cầu Arc trích đủ cả chuỗi (không chỉ 1 nguồn) giúp tăng độ tin cậy rất nhiều so với chỉ có 1 câu không trích dẫn ở Prompt #11.
  - Với các vị trí lãnh đạo hành chính (Chủ tịch UBND, Bí thư), "đã xác minh" tại thời điểm T KHÔNG có nghĩa còn đúng ở thời điểm T+vài tuần — nhất là trong giai đoạn hậu sáp nhập 2025-2026 có tốc độ luân chuyển nhân sự rất cao. Nên ưu tiên thiết kế `effective_from`/`last_verified` chặt chẽ ngay từ đầu và coi việc đối chiếu chéo định kỳ là một phần bắt buộc của quy trình, không phải bước phụ.
  - Khi 1 acc Free tự báo hiệu "tôi không phải trình duyệt thật" LẦN THỨ 2, đây không còn là sự cố cá biệt — nên chủ động hỏi lại user về bản chất thật của quy trình 5-acc-5-browser trước khi tiếp tục dựa hoàn toàn vào giả định ban đầu của dự án.

---

#### 2026-09-18 — Phát hiện bị bỏ sót: Việt Nam có thể đã bỏ hẳn cấp huyện (mô hình chính quyền 2 cấp) — ảnh hưởng trực tiếp Roadmap mục 04

- **Việc làm**: Khi rà lại nội dung gốc Prompt #11 (đã ráp vào file 08) để chuẩn bị prompt tiếp theo, phát hiện 1 câu quan trọng đã bị bỏ sót lúc tóm tắt: acc trả lời (Edge) từng nói rõ "mô hình chính quyền 2 cấp (tỉnh – xã/phường) đã bỏ hẳn cấp huyện/thành phố" khi giải thích vì sao không còn khái niệm "TP trung tâm" cho Bắc Ninh. Đã bổ sung lại nguyên văn câu này vào file 08, và đánh dấu ⚠️ nghi vấn lớn ở Roadmap mục 04.
- **Vấn đề gặp**: Đây là 1 tuyên bố CỰC KỲ quan trọng về cấu trúc bộ máy hành chính (ảnh hưởng toàn bộ Roadmap mục 04 "Cấp huyện") nhưng lại bị lược mất khi Pro tóm tắt/ráp dữ liệu từ câu trả lời gốc dài — vì Pro tập trung vào phần "vị trí trung tâm hành chính" (câu hỏi chính của prompt) mà bỏ qua câu giải thích bối cảnh đi kèm. Ngoài ra, tuyên bố này CHƯA có văn bản pháp luật cụ thể (số + ngày) được acc trả lời dẫn nguồn — chỉ là 1 câu khẳng định không kèm trích dẫn.
- **Cách xử lý**: Soạn Prompt #13 riêng (giao Arc) để xác nhận CHÍNH THỨC bằng văn bản pháp luật cụ thể (Luật/Nghị quyết nào quy định mô hình 2 cấp, ngày hiệu lực) trước khi coi mục 04 Roadmap là lỗi thời — không tự kết luận chỉ dựa vào 1 câu không có trích dẫn, dù nghe hợp lý.
- **Bài học**:
  - Khi tóm tắt/ráp 1 câu trả lời dài từ acc Free, PHẢI đọc lại toàn bộ nội dung tìm các câu khẳng định về BỐI CẢNH/CẤU TRÚC (không chỉ tập trung vào đúng câu hỏi đã hỏi) — 1 câu phụ giải thích "vì sao" đôi khi chứa thông tin quan trọng hơn câu trả lời chính, và dễ bị cắt bỏ khi tóm tắt cho gọn.
  - 1 tuyên bố về thay đổi cấu trúc lớn (ví dụ "bỏ hẳn 1 cấp hành chính") cần được đối xử như 1 "xung đột/phát hiện cần xác minh" (theo luật 18) — không tự cập nhật Roadmap/schema dựa trên 1 câu không trích dẫn văn bản cụ thể, dù nó xuất hiện tình cờ trong lúc trả lời 1 câu hỏi khác.
  - Nên định kỳ đọc lại các câu trả lời gốc đã ráp (không chỉ tin vào bản tóm tắt của chính mình) trước khi lên kế hoạch cho các Prompt tiếp theo — bản tóm tắt luôn có rủi ro mất thông tin so với văn bản gốc.

---

#### 2026-09-18 — Prompt #10/11/12 ráp xong chi tiết 34/34 tỉnh/thành; phát hiện Đồng Nai đã lên Thành phố trực thuộc TW; giải quyết toàn bộ 12 trung tâm hành chính còn thiếu

- **Việc làm**: Ráp 3 batch song song vào file mới `07-tinh-thanh-nhom1-chi-tiet.md` (Prompt #10, Brave, 12 đơn vị), `08-tinh-thanh-nhom2-chi-tiet.md` (Prompt #11, Microsoft Edge, 11 đơn vị), `09-tinh-thanh-nhom3-chi-tiet.md` (Prompt #12, Arc — user tự đổi từ Cốc Cốc sang Arc, 11 đơn vị). Cập nhật lại `06-danh-sach-tinh-thanh.md` để phản ánh các phát hiện mới.
- **Kết quả đáng chú ý**:
  1. **Đồng Nai đã đổi từ Tỉnh lên "Thành phố Đồng Nai" trực thuộc Trung ương** từ 30/4/2026 (Quốc hội khóa XVI) — thành phố thứ 7 sau Hà Nội, TP.HCM, Hải Phòng, Đà Nẵng, Cần Thơ, Huế. Việt Nam hiện có **27 tỉnh + 7 thành phố trực thuộc TW = 34 đơn vị** (KHÔNG còn 28+6 như tại mốc 1/7/2025). Đây là ví dụ quan trọng cho schema: 1 entity đổi `type`/`jurisdiction` theo thời gian nhưng KHÔNG merge/split — dùng `effective_from`, không dùng relationship `upgraded_from`/`merged_into` (khác trường hợp Bộ Dân tộc và Tôn giáo ở file 05, nơi 1 entity MỚI hình thành từ việc nâng cấp 1 entity cũ — ở đây vẫn là đúng 1 entity Đồng Nai xuyên suốt).
  2. Toàn bộ 12 tỉnh/thành từng đánh dấu ❌ (chưa rõ trung tâm hành chính) ở file 06 đã được giải quyết: Bắc Ninh (phường Bắc Giang), Hưng Yên (phường Phố Hiến), Gia Lai (phường Quy Nhơn), và 9 đơn vị nhóm 3 (Khánh Hòa, Lâm Đồng, Đắk Lắk, Đồng Nai, Tây Ninh, Vĩnh Long, Đồng Tháp, Cà Mau, An Giang) — có nguồn báo chí độc lập giải thích lý do chọn địa điểm (ví dụ Bắc Ninh: ưu tiên giao thông trung tâm hơn, dùng cơ sở vật chất có sẵn).
  3. Phát hiện thêm 1 trường hợp "địa điểm MỚI bị suy đoán nhầm là giữ nguyên": Hải Phòng thực ra đặt trung tâm hành chính tại khu đô thị Bắc Sông Cấm, phường Thủy Nguyên — một địa điểm HOÀN TOÀN MỚI, không phải trụ sở cũ ở Hồng Bàng như suy đoán ban đầu ở file 06.
  4. Nhân sự Chủ tịch UBND các tỉnh biến động rất nhanh trong giai đoạn 2025–2026 (nhiều tỉnh đổi 2-3 lần: Ninh Bình, Bắc Ninh/Thái Nguyên hoán đổi vị trí cho nhau, Huế, Hà Tĩnh, Thanh Hóa, Quảng Ngãi...) — acc trả lời tự đề xuất nên có cơ chế re-check định kỳ.
  5. 6 tỉnh ở nhóm 3 (Cần Thơ, TP.HCM, Đồng Tháp, Vĩnh Long, Cà Mau, An Giang) chỉ có 1 nguồn (chinhphu.vn) cho tên Chủ tịch UBND, chưa đối chiếu chéo báo chí độc lập — acc trả lời tự đánh dấu mức tin cậy thấp hơn các mục có 2 nguồn, không bị yêu cầu mà tự giác làm — đáng ghi nhận là hành vi tốt.
- **Vấn đề gặp**: Khi cập nhật bảng ở `06-danh-sach-tinh-thanh.md`, lần đầu chạy script `replace` bị lỗi assertion vì nhớ nhầm nội dung chính xác đã viết trước đó (tưởng có cụm "theo NQ 60-NQ/TW" trong mỗi dòng, nhưng thực tế bảng gọn hơn) — phải `grep` lại để lấy đúng text trước khi sửa.
- **Cách xử lý**: Luôn `grep`/đọc lại đúng đoạn cần sửa trước khi viết `old_string` cho phép `replace`, không dựa vào trí nhớ về nội dung mình đã viết ở bước trước, dù là chính AI đó viết ra.
- **Bài học**:
  - Một entity có thể thay đổi `type`/`jurisdiction` theo thời gian (tỉnh → thành phố trực thuộc TW) mà KHÔNG phải là sáp nhập/tách/nâng cấp-từ-entity-khác — cần phân biệt rõ 3 khái niệm này trong schema: (a) đổi thuộc tính của cùng 1 entity theo thời gian (dùng `effective_from`/`effective_to` trên chính entity đó), (b) 1 entity mới hình thành từ nhiều entity cũ (`merged_into`), (c) 1 entity mới hình thành từ việc nâng cấp 1 entity cũ có phạm vi khác (`upgraded_from`).
  - Khi 1 khu vực hành chính vừa sáp nhập xong, "trung tâm hành chính giữ nguyên ở thành phố lớn hơn/tên tỉnh mới" là giả định KHÔNG an toàn — nhiều trường hợp trung tâm dời sang thành phố khác hẳn (Hải Phòng dời sang Thủy Nguyên là ví dụ mới nhất, tương tự việc Bắc Ninh dời về Bắc Giang) vì lý do giao thông/cơ sở vật chất, không theo tên tỉnh mới.
  - Trước khi sửa nội dung 1 file bằng script tự động, nên `grep`/đọc lại đúng đoạn văn bản đích trước khi viết chuỗi cần thay — kể cả khi AI tin là mình nhớ đúng nội dung đã viết ra trước đó.

---

#### 2026-09-18 — Xác nhận attribution Prompt #9 = Brave; soạn 3 prompt song song (#10-12) chi tiết 34 tỉnh/thành; dọn văn bản mồ côi trong Promts-sodobmhc.md

- **Việc làm**: User xác nhận Prompt #9 (danh sách 34 tỉnh/thành) chạy trên **Brave** — cập nhật lại `06-danh-sach-tinh-thanh.md` và `Promts-sodobmhc.md` (trước đó ghi "không xác định" vì bản trả lời tự khai không có trình duyệt). Soạn 3 prompt chạy song song trên 3 acc khác nhau để tra chi tiết 34 tỉnh/thành (trụ sở UBND, SĐT, lãnh đạo): Prompt #10 (12 đơn vị, Opera GX), #11 (11 đơn vị, Edge), #12 (11 đơn vị, Cốc Cốc) — chia đều, ưu tiên các đơn vị còn thiếu tên trung tâm hành chính (12 đơn vị ❌ từ file 06) nằm rải trong prompt #11 và #12.
- **Vấn đề gặp**: Khi soạn Prompt #9 ở batch trước, thao tác `replace` 2 lần riêng (đổi header, rồi đổi phần thân) đã làm phần văn bản thân cũ bị "mồ côi" — không còn header nào trỏ tới, trôi lửng cuối file `Promts-sodobmhc.md` (nội dung đã lỗi thời, mô tả lại trạng thái trước khi Prompt #9 được soạn). Không gây sai dữ liệu gì (chỉ là văn bản linh tinh cuối file) nhưng làm file khó đọc nếu không phát hiện.
- **Cách xử lý**: Xóa đoạn văn bản mồ côi khi thêm Prompt #10-12 vào cuối file.
- **Bài học**:
  - Khi thay 1 khối nội dung gồm nhiều đoạn liên quan (header + thân), nên thay CẢ khối trong 1 lần `replace` (hoặc kiểm tra lại ngay bằng cách đọc lại đoạn cuối file) — tránh thay từng đoạn riêng rẽ dễ để lại phần "mồ côi" không còn liên kết logic.
  - Sau mỗi lần chỉnh sửa file bằng script, nên tail/grep lại đúng đoạn vừa sửa (không chỉ tin số ký tự `len()` tăng/giảm hợp lý) để phát hiện sớm các lỗi cấu trúc kiểu này.

---

#### 2026-09-18 — Phase 0 HOÀN TẤT qua Claude Code (schema + AGENTS.md + GitHub backup); Prompt #9 ráp xong danh sách 34 tỉnh/thành; phát hiện PAT bị git tự lưu vào .git/config

- **Việc làm**: Chạy brief đã soạn cho Claude Code để hoàn tất 3 việc còn lại của Phase 0: (1) tạo 9 file `schemas/*.schema.json`, (2) tạo `AGENTS.md`, (3) git init repo riêng cho thư mục dự án + push backup đầu tiên lên `github.com/haphanhp/sodo-bo-may-hanh-chinh` (commit `ef8f239`). Song song, ráp dữ liệu Prompt #9 (danh sách 34 tỉnh/thành phố trực thuộc trung ương sau sáp nhập 12/6/2025, theo Nghị quyết 202/2025/QH15) vào `06-danh-sach-tinh-thanh.md`. Cập nhật "danh sách tổng" (mục 10, `Claude-sodobmhc.md`) để ghi rõ vị trí/vai trò của các file mới (`AGENTS.md`, `schemas/`, `.git`+remote).
- **Kết quả đáng chú ý**:
  1. Toàn bộ 9 schema, `AGENTS.md`, và repo git đều xác minh nằm ĐÚNG trong thư mục dự án (`11.so-do-bo-may-hanh-chinh`), tách biệt hoàn toàn khỏi repo Obsidian Vault ở thư mục cha — đã kiểm tra lại qua `device_bash` sau khi Claude Code báo xong (không tin lời báo cáo suông, luôn verify lại bằng cách tự `ls`/`git log`/`git remote -v`).
  2. Danh sách 34 tỉnh/thành (28 tỉnh + 6 TP trực thuộc TW) xác minh chắc theo Nghị quyết 202/2025/QH15 (số + ngày cụ thể, 461/465 đại biểu tán thành) — phần merger (tỉnh nào hợp thành tỉnh nào) đã đối chiếu trực tiếp chính văn, đáng tin cao.
  3. Riêng "trung tâm hành chính" (tỉnh lỵ) của 22/34 đơn vị mới chỉ có nguồn là Nghị quyết 60-NQ/TW — **văn kiện của Đảng, không phải văn bản pháp luật nhà nước** — nên chỉ đánh dấu ⚠️ (tham khảo), không coi là chốt; 12/34 hoàn toàn chưa tra ra được tên cụ thể (❌). Đây là ví dụ tốt về phân biệt "văn kiện định hướng của Đảng" vs "văn bản pháp luật nhà nước" khi đánh giá độ tin cậy nguồn — cần thêm vào tiêu chí phân loại nguồn cho các lần tra sau.
- **Vấn đề gặp**:
  1. **PAT bị git tự lưu vào `.git/config`**: Claude Code dùng cách push 1 lần với PAT nhúng trực tiếp vào URL (`https://<PAT>@github.com/...`) — nhưng sau đó phát hiện git đã tự ghi lại URL đó (kèm token) vào `branch.main.remote`/`.git/config` trên đĩa, vi phạm đúng yêu cầu "không lưu PAT vào bất kỳ file nào". Claude Code tự phát hiện và sửa lại ngay (fetch qua origin sạch — repo public nên không cần token để fetch — rồi `git branch --set-upstream-to=origin/main`), xác nhận config cuối cùng không còn token.
  2. Claude Code ban đầu tìm sai đường dẫn (thử `D:\OneDrive` trước, không thấy file nào khớp "sodo"/"bmhc"/"roadmap"), sau đó tự tìm lại và vào đúng thư mục `E:\...\11.so-do-bo-may-hanh-chinh`. Không gây hậu quả (đã verify lại toàn bộ đường dẫn cuối cùng đúng), nhưng cho thấy cần ghi đường dẫn tuyệt đối tường minh hơn trong brief lần sau, tránh AI phải tự đoán ổ đĩa.
  3. Bản trả lời Prompt #9 tự khai "không có trình duyệt, không truy cập được thiết bị của user" — mạnh hơn các lần trước (trước đây chỉ thiếu TÊN browser cụ thể). Chưa rõ đây có phải chạy qua 1 trong 5 acc Free thật hay qua kênh khác (ví dụ claude.ai chat thường không có browser extension) — cần hỏi lại user để không tính nhầm "lượt" xoay vòng acc.
- **Cách xử lý**: Ghi rõ nguyên nhân + cách Claude Code tự sửa lỗi PAT vào bài học dưới đây để nhắc mọi AI code sau này. Đánh dấu rõ trong `06-danh-sach-tinh-thanh.md` và `Promts-sodobmhc.md` rằng attribution acc/browser của Prompt #9 chưa rõ, cần hỏi lại user trước khi tính vào quy tắc xoay vòng.
- **Bài học**:
  - Khi 1 AI code (Claude Code, Cline...) dùng URL nhúng token để push git, PHẢI kiểm tra lại `.git/config` NGAY SAU khi push — `git push https://<token>@host/...` có thể khiến git lưu URL đó (kèm token) làm remote/tracking mặc định nếu không cẩn thận, dù ban đầu không có ý định lưu. Luôn xác nhận `git remote -v` và `git config --get branch.<branch>.remote` sau cùng đều "sạch" (không chứa token) trước khi coi việc push là an toàn xong.
  - Brief giao cho AI code nên ghi đường dẫn tuyệt đối kèm cả tên ổ đĩa chính xác (không chỉ ghi đường dẫn tương đối hoặc để AI tự suy đoán ổ đĩa nào) — dù lần này AI tự sửa đúng, vẫn nên tránh rủi ro AI làm việc nhầm ở thư mục sai mà không tự phát hiện.
  - Khi 1 acc trả lời tự khai "không có trình duyệt" (khác hẳn "quên ghi tên browser"), đây là dấu hiệu khác về BẢN CHẤT kênh trả lời (có thể không phải acc Free chạy trên browser thật) — cần hỏi lại user xác nhận nguồn kênh trước khi tính vào lịch sử xoay vòng 5 acc, không tự suy diễn.
  - Luôn tự verify lại (qua `device_bash`/`ls`/`git log`) sau khi 1 AI khác (Claude Code) báo cáo đã hoàn thành, trước khi cập nhật Roadmap/danh sách tổng ghi nhận là "đã xong" — không tin báo cáo suông.

---

#### 2026-09-18 — Prompt #8 ráp xong nhóm 3/3 Bộ + 3 cơ quan ngang Bộ — HOÀN TẤT 17/17 đơn vị; housekeeping file 01/Roadmap/Promts

- **Việc làm**: Ráp kết quả Prompt #8 (Brave, theo lời user khai báo, Sonnet 5 medium) vào `05-bo-nhom-3-4bo-3coquanngangbo.md` — 7/7 đơn vị: Bộ Khoa học và Công nghệ, Bộ Giáo dục và Đào tạo, Bộ Y tế, Bộ Dân tộc và Tôn giáo, Ngân hàng Nhà nước Việt Nam, Thanh tra Chính phủ, Văn phòng Chính phủ. Đây là batch cuối của nhóm "14 Bộ + 3 cơ quan ngang Bộ" → **mốc 17/17 đơn vị đã có dữ liệu thô**. Sau đó cập nhật housekeeping: thêm note đối chiếu Chính phủ vs Văn phòng Chính phủ vào `01-co-quan-cap-trung-uong.md`, đánh dấu 02c ✅ + mốc 17/17 trong `Roadmap-sodobmhc.md`, thêm dòng Prompt #8 + cập nhật khung Prompt #9 trong `Promts-sodobmhc.md`.
- **Kết quả đáng chú ý**:
  1. Phát hiện quan trọng cho schema: "Chính phủ Việt Nam" (thiết chế hợp hiến, Điều 94-96) và "Văn phòng Chính phủ" (cơ quan ngang Bộ, bộ máy giúp việc) là 2 node KHÁC NHAU nhưng dùng chung địa chỉ/SĐT/email — đề xuất thêm quan hệ `shared_contact_info: true` khi lên schema thật, tránh gộp nhầm thành 1 entity.
  2. Bộ Dân tộc và Tôn giáo: phát hiện domain email/website không khớp tên Bộ hiện tại (dấu hiệu Bộ mới hợp nhất/nâng cấp từ đơn vị cũ) — đề xuất dùng quan hệ `upgraded_from` khi ráp JSON để thể hiện đúng lịch sử tổ chức, không chỉ coi là lỗi dữ liệu.
  3. Luật 18 (chinhphu.vn có thể giữ dữ liệu cũ) tiếp tục đúng thêm 2 lần nữa trong batch này: trụ sở/Bộ trưởng Bộ KH&CN và Bộ trưởng Bộ Giáo dục và Đào tạo — tổng cộng đã gặp pattern này ở ít nhất 4 trường hợp riêng biệt (VPCTN, Bộ Công an, Bộ KH&CN, Bộ GD&ĐT), nên coi là rủi ro hệ thống của nguồn chinhphu.vn/baochinhphu.vn, không phải trường hợp cá biệt.
  4. SĐT Bộ Y tế: 2 số khác nhau từ CÙNG 1 nguồn nhưng lấy ở 2 thời điểm snapshot khác nhau — để "chưa chốt", không chặn tiến độ, ưu tiên xử lý sau khi có acc rảnh cross-check.
- **Vấn đề gặp**: User tự khai báo "Model dùng: Sonnet 5 medium" và "Acc & trình duyệt: Brave" ngay trong câu trả lời, nhưng lưu ý rõ Pro (session Cowork này) không có khả năng tự xác minh trình duyệt/thiết bị thật của user qua giao diện chat — đây là **giới hạn nhận thức (epistemic caveat) cần ghi nhận**, không phải lỗi của user hay của acc Free.
- **Cách xử lý**: Ghi rõ caveat "(theo lời user khai báo — Pro không tự xác minh được)" ở mọi nơi có nhắc tên browser trong batch này (file 05, Roadmap, Promts), để không đánh đồng "user báo là X" với "đã xác minh là X".
- **Bài học**:
  - Khi ráp dữ liệu quan hệ hợp hiến (Chính phủ) với dữ liệu quan hệ tổ chức thực tế (Văn phòng Chính phủ, Bộ ngang), luôn kiểm tra xem có bị trùng lặp entity ngầm không — cùng địa chỉ/SĐT không có nghĩa là cùng 1 node.
  - Ghi nhận rõ trong ruleset: bất cứ thông tin "browser/model đang dùng" nào do user tự khai báo trong Cowork/chat đều KHÔNG thể được Pro tự kiểm chứng độc lập — luôn ghi kèm caveat này khi ghi vào file dữ liệu, để AI đọc lại sau không hiểu lầm là Pro đã xác minh.
  - luật 18 (cảnh giác chinhphu.vn/baochinhphu.vn dữ liệu cũ) đã tái diễn đủ nhiều lần (4 lần) để coi là quy tắc mặc định áp dụng cho MỌI lần tra cứu liên quan đến nguồn này, không chỉ là ngoại lệ hiếm gặp.

---

#### 2026-09-18 — Prompt #6 giải quyết xong cả 2 xung đột; Prompt #7 ráp nhóm 2/3 Bộ; thêm luật 18

- **Việc làm**: Ráp kết quả Prompt #6 (giải quyết trụ sở Bộ Công an + Bộ trưởng Bộ Tư pháp + SĐT Bộ Tư pháp — cả 3 đều CHỐT xong, nhóm 1/3 Bộ hoàn tất) và Prompt #7 (5 Bộ nhóm 2: Tài chính, Công Thương, NN&MT, Xây dựng, VHTTDL, lưu vào `04-bo-nhom-2-5bo-tiep.md`). Thêm luật 18 vào `Claude-sodobmhc.md`.
- **Kết quả đáng chú ý**:
  1. Trụ sở Bộ Công an chốt = 96 Nguyễn Du (Cửa Nam) — xác nhận bằng 3 báo độc lập có ngày khánh thành cụ thể (16/8/2025). Nguồn chinhphu.vn sai vì giữ địa chỉ CŨ — đây là lần THỨ HAI gặp pattern này (lần đầu là Văn phòng Chủ tịch nước ở file 01).
  2. Bộ trưởng Bộ Tư pháp chốt = Hoàng Thanh Tùng (từ Nghị quyết 17/2026/QH16, ngày 08/4/2026) — nguồn xung đột trước đó hóa ra là bài CŨ hoặc lỗi hiển thị timestamp trang.
  3. Bộ Nông nghiệp và Môi trường có lịch sử lãnh đạo bất thường: Bộ trưởng đầu tiên (Đỗ Đức Duy) bị đình chỉ chức vụ 7/2025 — cần cách ghi riêng trong schema, không chỉ đơn giản là "hết nhiệm kỳ".
  4. Bộ Xây dựng từng có trụ sở 37 Lê Đại Hành, đã bàn giao sang Bộ Công an (2/2026) — liên quan trực tiếp tới việc Bộ Công an có trụ sở mới.
- **Vấn đề gặp**: Người dùng chuyển tiếp câu trả lời cho Prompt #6 và #7 nhưng KHÔNG ghi rõ acc/browser cụ thể lần này (chỉ ghi "không phải trình duyệt thủ công, dùng web search tích hợp") — vi phạm nhẹ luật ghi model/acc trong Claude-sodobmhc.md mục 6, không chặn được nên vẫn ráp dữ liệu, chỉ ghi chú thiếu trong file.
- **Cách xử lý**: Thêm luật 18 — quy tắc xử lý khi 2 lần tra ra 2 đáp án THẬT SỰ khác nhau (không phải lỗi kỹ thuật): không tự chọn 1 bên, ưu tiên nguồn có số văn bản + ngày cụ thể, và đặc biệt cảnh giác chinhphu.vn có thể giữ dữ liệu cũ dù là "trang chính phủ".
- **Bài học**:
  - Khi 1 cơ quan A "nhường" trụ sở cũ cho cơ quan B (ví dụ Bộ Xây dựng → Bộ Công an tại 37 Lê Đại Hành), cần đặc biệt cẩn thận: dễ nhầm địa chỉ cũ/mới giữa 2 cơ quan nếu chỉ tra riêng từng cơ quan mà không biết bối cảnh bàn giao.
  - Số văn bản + ngày ban hành cụ thể (Nghị quyết Quốc hội, Thông báo...) là "trọng tài" đáng tin nhất khi 2 nguồn xung đột về nhân sự/địa chỉ — hiệu quả hơn nhiều so với so sánh "nguồn nào có vẻ chính chủ hơn".
  - Cần nhắc lại rõ hơn trong prompt giao cho acc Free: PHẢI ghi tên browser cụ thể (không chỉ ghi "dùng web search") để giữ đúng quy tắc xoay vòng và theo dõi acc nào đang làm gì.

---

#### 2026-09-18 — Arc tra lại độc lập Prompt #5, hợp nhất với dữ liệu Pro, phát sinh 2 xung đột mới

- **Việc làm**: Arc hoạt động lại và tự tra Prompt #5 độc lập (không xem dữ liệu Pro đã ráp tạm). Hợp nhất cả 2 lượt vào `03-bo-nhom-1-5bo-dau.md`. Soạn Prompt #6 (giải quyết xung đột) và Prompt #7 (nhóm 2/3 Bộ tiếp theo).
- **Kết quả tích cực**: 3/5 Bộ (Quốc phòng, Ngoại giao, và phần lớn Nội vụ) có SĐT/trụ sở/Bộ trưởng khớp giữa 2 nguồn độc lập → tăng độ tin cậy rõ rệt. Đặc biệt Bộ Nội vụ: Bộ trưởng "Nguyễn Tiến Hải" được xác nhận bởi 3 nguồn độc lập (Tuổi Trẻ, baochinhphu.vn, VietnamFinance) — chốt xong sau khi nghi vấn ở Prompt #5 lần 1.
- **Vấn đề gặp — 2 xung đột MỚI (không phải lỗi cache/JS như trước, mà là dữ liệu thật sự khác nhau giữa nguồn)**:
  1. Trụ sở Bộ Công an: "96 Nguyễn Du, Cửa Nam" (Pro, từ mps.gov.vn chính chủ) vs "44 Yết Kiêu, Hoàn Kiếm" (Arc, từ chinhphu.vn) — 2 con phố khác hẳn nhau, không phải lỗi đánh máy.
  2. Bộ trưởng Bộ Tư pháp: Pro nghiêng về Hoàng Thanh Tùng (dựa 1 phần vào subsite của chính moj.gov.vn), Arc khẳng định Nguyễn Hải Ninh (dựa chinhphu.vn) — cả 2 đều tự tin và dẫn nguồn ngược nhau về việc nguồn nào "cũ"/"mới".
- **Cách xử lý**: KHÔNG để Pro tự chọn 1 bên cho cả 2 xung đột (khác với thẩm quyền tự sửa dữ liệu — đây là dữ liệu thật khác nhau, không phải lỗi kỹ thuật rõ ràng như footer/cache). Soạn Prompt #6 giao cho 1 acc thứ 3 (không phải Pro-lần-1 hay Arc-lần-2) để có góc nhìn độc lập thứ 3, yêu cầu ưu tiên tìm văn bản chính thức (Nghị quyết Quốc hội) có ngày cụ thể hơn là suy luận từ ngày đăng bài.
- **Bài học**:
  - Để 2 acc tra ĐỘC LẬP cùng 1 batch dữ liệu (1 lần do tình huống bất khả kháng — Arc kẹt, Pro làm tạm; 1 lần theo đúng kế hoạch — Arc tra lại) tạo ra cross-check tự nhiên rất hiệu quả: chỗ nào 2 nguồn khớp thì độ tin cậy tăng mạnh, chỗ nào lệch thì lộ ra xung đột cần giải quyết — nên tận dụng có chủ đích cho các Bộ quan trọng, không chỉ coi là "chữa cháy" khi acc bị kẹt.
  - Khi 2 kết quả NGƯỢC NHAU về 1 câu hỏi định danh (ai là Bộ trưởng, ở đâu là trụ sở) và cả 2 đều tự tin, không có cơ sở để 1 bên (Pro) tự quyết — cần bên thứ 3 độc lập, ưu tiên tra theo văn bản có ngày ban hành rõ ràng (Nghị quyết Quốc hội, Quyết định bổ nhiệm) hơn ngày đăng bài báo (báo có thể đăng chậm hoặc đăng lại tin cũ).

---

#### 2026-09-18 — Prompt #5: Arc bị kẹt, Pro tạm tra cứu thay (ngoại lệ quy trình)

- **Việc làm**: Acc Free trên Arc bị kẹt ~30 phút ngay khi Prompt #5 được giao. Theo yêu cầu user, Pro (session Cowork này) **tạm tự tra cứu thay** bằng WebSearch/WebFetch tích hợp, ráp kết quả vào `03-bo-nhom-1-5bo-dau.md` cho 5 Bộ: Quốc phòng, Công an, Ngoại giao, Nội vụ, Tư pháp.
- **Vấn đề gặp**:
  1. Đây là NGOẠI LỆ quy trình chuẩn (bình thường Pro không tự tra cứu để tránh tốn token Pro) — chỉ làm vì acc Free đang không dùng được, không nên biến thành thói quen.
  2. Bộ Nội vụ: trụ sở chỉ tìm được từ 1 nguồn thứ cấp không đáng tin (trang dịch vụ vệ sinh công nghiệp) — không tìm được SĐT/email qua fetch (trang có thể cần JS).
  3. Bộ Nội vụ & Bộ Tư pháp: phát hiện khả năng **vừa đổi Bộ trưởng giữa năm 2026** (Nội vụ: Đỗ Thanh Bình → Nguyễn Tiến Hải; Tư pháp: Nguyễn Hải Ninh → Hoàng Thanh Tùng) nhưng chưa có nguồn đủ mạnh để chốt ai đang tại nhiệm đúng lúc 18/09/2026.
  4. Bộ Tư pháp có 1 thông báo chính thức về đổi địa chỉ theo tên đơn vị hành chính mới nhưng không fetch được nội dung (trang chặn robots) — nghi ngờ giống trường hợp VKSND tối cao (chỉ đổi tên phường, không đổi trụ sở thật).
- **Cách xử lý**: Ghi rõ toàn bộ nghi vấn/mục yếu vào file dữ liệu + mục "Việc cần làm", đề xuất Arc (hoặc acc Free khác) cross-check riêng phần Bộ Nội vụ & Bộ Tư pháp khi hoạt động lại — không cần làm lại 3 Bộ đã có nguồn tốt (Quốc phòng, Công an, Ngoại giao).
- **Bài học**:
  - Khi 1 acc Free bị kẹt giữa lúc cần gấp, Pro có thể tạm tra cứu thay bằng công cụ web search/fetch của chính session Cowork — nhưng phải ghi rõ đây là ngoại lệ, đánh dấu rõ trong frontmatter file dữ liệu để không nhầm là quy trình chuẩn, và ưu tiên giao lại cho acc Free cross-check các phần yếu ngay khi acc đó rảnh.
  - Tin tức tiểu sử Bộ trưởng trên chinhphu.vn có thể đã CŨ nếu có thay đổi nhân sự gần đây (ví dụ giữa nhiệm kỳ) — luôn ưu tiên bài báo có NGÀY GẦN NHẤT khi thấy nhiều nguồn ghi tên Bộ trưởng khác nhau, và đánh dấu rõ "chưa chốt" nếu ngày các nguồn xung đột.

---

#### 2026-09-18 — Ráp Prompt #4: chốt trụ sở VPCTN, email VKSNDTC vẫn treo

- **Việc làm**: Nhận kết quả Prompt #4 từ acc Cốc Cốc (Claude, không rõ chính xác phiên bản — có thể Sonnet 4.6, dùng web_search/web_fetch tích hợp qua claude.ai). Ráp vào `01-co-quan-cap-trung-uong.md`: chốt trụ sở Văn phòng Chủ tịch nước = 12 Ngô Quyền, phường Hoàn Kiếm (hiệu lực từ 23/3/2026, Thông báo 270/TB-VPCTN), trụ sở trước đó = 1A/1B Hoàng Hoa Thám, Ba Đình (KHÔNG phải "2 Hùng Vương" như Prompt #2 từng ghi). Thêm luật 17 vào `Claude-sodobmhc.md`.
- **Vấn đề gặp**:
  1. Cross-check 2 lần (Prompt #2, #4) cho cùng 1 URL (vpctn.gov.vn/lien-he) ra 2 kết quả khác nhau về địa chỉ — có thể do dữ liệu cache/lỗi chỉ mục của công cụ tìm kiếm ở 1 trong 2 lần, không phải do trang đổi nội dung giữa 2 lần tra (cùng trong ngày 2026-09-18).
  2. Email VKSND tối cao: công cụ web search gán 1 đoạn nội dung khớp định dạng chính thức cho 1 URL, nhưng fetch trực tiếp URL đó lại không thấy nội dung — nghi vấn lỗi gán URL/chỉ mục của công cụ tìm kiếm. Fetch trực tiếp vksndtc.gov.vn cũng trả bản có vẻ cũ/cache (~2020).
- **Cách xử lý**: Ưu tiên tin vào tổ hợp nhiều nguồn độc lập (2 báo + trang chính chủ tra lại + khớp dữ liệu gốc Prompt #1) để chốt trụ sở VPCTN, không chỉ dựa vào 1 lần fetch. Với email VKSNDTC — vì đã tra 2 lần qua công cụ tự động đều không "tận mắt" xác nhận được, dừng lại, ghi "vẫn xung đột chưa giải quyết được", đánh dấu KHÔNG chặn tiến độ (không phải field bắt buộc), đề xuất tra thủ công bằng trình duyệt thật nếu cần sau này.
- **Bài học**:
  - Công cụ web search/web_fetch tích hợp của model có thể trả kết quả cache/lỗi chỉ mục khác nhau giữa các lần gọi, ngay cả trong cùng 1 ngày — khi 2 lần tra cùng 1 nguồn cho kết quả khác nhau, không vội kết luận "trang đã đổi", cần xem xét khả năng lỗi công cụ tìm kiếm.
  - Khi 1 mục dữ liệu không bắt buộc (như email 1 trường liên hệ phụ) đã tra 2 lần vẫn treo, nên dừng và đánh dấu "không chặn tiến độ" thay vì tiếp tục giao lại nhiều lần cho các acc khác — tiết kiệm token, chỉ nâng cấp lên "tra thủ công bằng browser thật" nếu thực sự cần gấp.
  - Tổ hợp nhiều nguồn độc lập (báo chí + trang chính chủ + khớp dữ liệu gốc) đáng tin hơn 1 nguồn đơn lẻ khi giải quyết xung đột.

---

#### 2026-09-18 — Ráp xong Prompt #3 (danh sách Bộ), soạn Prompt #5

- **Việc làm**: Nhận kết quả Prompt #3 từ acc Edge (Claude Sonnet 5, extra reasoning, web search). Lưu vào `02-danh-sach-bo-co-quan-ngang-bo.md`: xác nhận cơ cấu hiện hành 14 Bộ + 3 cơ quan ngang Bộ (Nghị quyết 176/2025/QH15, tái xác nhận cho khóa XVI qua Nghị quyết 15/2026/QH16 và 09/2026/QH16), kèm ghi chú Bộ nào sáp nhập/giải thể/đổi tên. Soạn Prompt #5 (giao Arc) tra chi tiết nhóm 5 Bộ đầu tiên (Quốc phòng, Công an, Ngoại giao, Nội vụ, Tư pháp).
- **Vấn đề gặp**: Bộ Thông tin và Truyền thông (cũ) giải thể và TÁCH LÀM 2 (phần báo chí → Bộ VHTTDL, phần còn lại → Bộ KH&CN) — không phải quan hệ 1-đổi-1 đơn giản như đổi tên.
- **Cách xử lý**: Ghi chú rõ trong file dữ liệu: khi lên `relationships.json`, dùng loại quan hệ `merged_into` / `split_into` cho các trường hợp này, không dùng `renamed` (vốn chỉ hợp cho đổi tên thuần, không có tách/nhập tổ chức). Đã tách bước "liệt kê danh sách" (Prompt #3) ra riêng khỏi bước "tra chi tiết" (Prompt #5+) đúng như kế hoạch — tránh phải sửa lại nhiều nếu số Bộ/tên Bộ có sai lệch.
- **Bài học**:
  - Với các đợt tái cơ cấu hành chính (sáp nhập/giải thể Bộ), quan hệ giữa tổ chức cũ và mới không phải luôn là 1-1 — cần có loại quan hệ `merged_into`/`split_into` riêng trong schema `relationships.json`, không gộp chung vào `renamed`.
  - Khi 1 danh sách/cơ cấu có thể thay đổi theo nhiệm kỳ (ở đây là nhiệm kỳ Quốc hội khóa XVI), nên gắn rõ mốc thời gian xác nhận (`last_verified`) và note rằng cần tra lại định kỳ, không coi là cố định.

---

#### 2026-09-18 — Ráp xong Prompt #2 (cross-check), phát hiện lỗi trap + 1 xung đột mới, soạn Prompt #4

- **Việc làm**: Nhận kết quả Prompt #2 từ acc Opera X (Claude Sonnet 5, dùng công cụ web search tích hợp, không phải browser thủ công). Ráp vào `01-co-quan-cap-trung-uong.md`: thêm SĐT/Fax/Email/Website mới xác minh cho Văn phòng Chủ tịch nước và VKSND tối cao; xác nhận khớp trụ sở TAND tối cao & VKSND tối cao; chốt quyết định schema "Chủ tịch nước = position, Văn phòng Chủ tịch nước = organization" (Điều 86–87 Hiến pháp 2013). Soạn thêm Prompt #4 (giao Cốc Cốc) để giải quyết 1 xung đột mới phát sinh.
- **Vấn đề gặp**:
  1. **Bẫy dữ liệu lặp lại**: SĐT "080.43162" + địa chỉ "16 Lê Hồng Phong" xuất hiện gắn nhãn cho cả Quốc hội và TAND tối cao trên các trang chinhphu.vn/baochinhphu.vn — thực chất là footer bản quyền của Báo Điện tử Chính phủ, không phải dữ liệu của cơ quan đang tra. Nếu không cross-check sẽ dễ ráp nhầm số này cho nhiều cơ quan khác nhau.
  2. **Xung đột dữ liệu mới**: trụ sở Văn phòng Chủ tịch nước — Prompt #1 (Brave) ghi "12 Ngô Quyền" (theo báo Lào Cai), Prompt #2 (Opera X) tìm được "2 Hùng Vương" (theo chính trang vpctn.gov.vn) — 2 nguồn không khớp, chưa rõ nguồn nào đúng/còn hiệu lực.
  3. Trang toaan.gov.vn render bằng JavaScript nên công cụ web search không đọc được nội dung — không tra được SĐT/email TAND tối cao qua cách này.
- **Cách xử lý**: Thêm luật 16 vào `Claude-sodobmhc.md` (cảnh giác dữ liệu lặp y hệt trên nhiều trang khác nhau = khả năng là footer, không phải dữ liệu thật). Đánh dấu rõ "❗ XUNG ĐỘT CHƯA CHỐT" ngay trong file dữ liệu cho trụ sở Văn phòng Chủ tịch nước, KHÔNG tự chọn 1 nguồn để ráp JSON vội. Soạn Prompt #4 giao acc khác (Cốc Cốc) để giải quyết xung đột + xác minh thêm email VKSND tối cao. Ghi chú riêng: SĐT/email TAND tối cao & Quốc hội cấp toàn cơ quan cần tra bằng browser thật (không phải công cụ web search) vì có trang render JS.
- **Bài học**:
  - Cross-check bằng 1 acc khác (đặc biệt khi acc đó dùng công cụ tra cứu khác — ví dụ web search tích hợp thay vì duyệt web thủ công) rất hiệu quả để bắt lỗi loại "dữ liệu lặp lại/footer nhầm" — nên tiếp tục áp dụng cho các batch dữ liệu sau.
  - Khi 2 nguồn cùng có vẻ đáng tin (1 là tin báo chí, 1 là trang chính chủ) nhưng đưa ra kết quả khác nhau, KHÔNG tự chọn 1 bên để ráp ngay — phải đánh dấu xung đột rõ ràng trong data file và tách thành 1 prompt riêng để giải quyết, tránh dữ liệu sai lặng lẽ đi vào `organizations.json` ở Phase 10.
  - 1 số trang chính phủ/tòa án dùng JavaScript render — công cụ web search tích hợp của model không đọc được; với các trang này cần giao việc tra cứu cho acc dùng browser thật (duyệt web thủ công), không dùng công cụ search nội bộ của model.

---

#### 2026-09-18 — Thu hẹp phạm vi dự án: dừng đào sâu cấp xã

- **Việc làm**: User chốt phạm vi mới — chỉ đào sâu cấp thượng tầng + 34 tỉnh/thành trực thuộc TW; cấp xã/phường/đặc khu dừng ở mức liệt kê. Cập nhật đồng loạt: `Claude-sodobmhc.md` (thêm khối "Phạm vi đã thu hẹp" ở mục 1, thêm luật nền số 19, sửa mục 12), `Roadmap-sodobmhc.md` (trạng thái tổng quan, mục 04/05, Phase 10, ghi chú), `Promts-sodobmhc.md` (khối cảnh báo phạm vi mới, hủy Prompt #20–#24 cả trong bảng theo dõi lẫn tiêu đề), và mục "Phạm vi" trong tab Hướng dẫn của app.
- **Vấn đề gặp**: Prompt #20–#24 đã soạn xong nhưng chưa giao — xóa đi thì mất công soạn, giữ nguyên thì AI/người vào sau dễ tưởng còn việc phải làm.
- **Cách xử lý**: Không xóa, chỉ đánh dấu ❌ HỦY kèm ngày và lý do ở cả bảng theo dõi lẫn tiêu đề prompt, ghi rõ "giữ lại chỉ để tham khảo nếu mở lại phạm vi". Đồng thời nâng mục 05 trong Roadmap thành "HOÀN TẤT trong phạm vi mới" thay vì để treo "còn thiếu".
- **Bài học**:
  - Khi phạm vi đổi, phải sửa ở CẢ 4 chỗ: file luật (Claude-sodobmhc), file tiến độ (Roadmap), file prompt (Promts) và giao diện app — sửa thiếu một chỗ là AI phiên sau đọc nhầm và làm lại việc đã bị hủy.
  - Việc "còn thiếu" bị hủy nên đổi trạng thái thành "hoàn tất trong phạm vi mới", không để nguyên chữ "còn thiếu" — nếu không, mỗi AI vào sau đều sẽ đề xuất làm tiếp.
  - Prompt đã soạn mà bị hủy thì đánh dấu tại chỗ, đừng xóa: vừa giữ lịch sử quyết định, vừa dùng lại được nếu phạm vi mở lại.

---

#### 2026-09-18 — Phase 1: dựng ứng dụng rỗng (shell + CSS + điều hướng + empty states)

- **Việc làm**: Tạo `index.html` (khung 3 vùng), 5 file CSS theo kiến trúc đã chốt, `js/core/` (config, event-bus, state, router hash), `js/ui/` (tabs, detail-panel, toast), `js/views/views.js` (render + empty state cho 9 tab) và `app.js` điều phối. Viết nội dung thật cho tab Hướng dẫn (cách dùng + nguyên tắc dữ liệu + nguồn lấy từ đâu). Thêm toggle giao diện sáng/tối lưu `localStorage`.
- **Vấn đề gặp**: Roadmap ghi 8 tab nhưng schema tách riêng `position` khỏi `person`; nếu gộp Chức vụ vào tab Con người thì sau này Phase 4 phải sửa lại điều hướng.
- **Cách xử lý**: Tăng lên 9 tab, thêm tab "Chức vụ" ngay từ Phase 1 và ghi rõ lý do trong Roadmap. Toàn bộ view đều render bằng JS từ `views.js`, `index.html` không chứa một chữ dữ liệu hành chính nào (giữ luật 1 và 6 trong `AGENTS.md`).
- **Bài học**:
  - Điều hướng nên bám theo cấu trúc entity trong schema, không bám theo danh sách tab viết vội trong roadmap — lệch một tab là sau này phải sửa cả router, nav và view.
  - Mỗi empty state nên ghi rõ "sẽ có dữ liệu ở Phase nào": vừa là UI thật, vừa là tài liệu sống cho AI/người vào sau biết phần đó đã làm hay chưa.
  - Dùng router theo hash (`#/organizations`) ngay từ Phase 1 giúp mở file bằng `file://` vẫn chạy được, không cần web server — quan trọng vì file này để user mở trực tiếp trong Obsidian/trình duyệt.

---

#### 2026-09-18 — Soạn Prompt #2 (đối chiếu chéo) & Prompt #3 (danh sách Bộ), thêm quy tắc xoay vòng acc

- **Việc làm**: Theo yêu cầu user, soạn ngay 2 prompt tiếp theo trong `Promts-sodobmhc.md` để không bị đứng khi vừa ráp xong Prompt #1:
  - Prompt #2: đối chiếu chéo (cross-check) các mục "chưa xác minh" của Prompt #1 (SĐT/email toàn cơ quan, vấn đề "Chủ tịch nước" là position hay organization, trụ sở TAND/VKS tối cao) — giao cho **Opera GX** (khác acc Brave đã trả lời Prompt #1).
  - Prompt #3: chỉ liệt kê danh sách đầy đủ Bộ/cơ quan ngang Bộ hiện tại (2026) trước, CHƯA tra chi tiết — giao cho **Edge**, chạy song song với Prompt #2.
  - Thêm quy tắc xoay vòng acc vào `Promts-sodobmhc.md`: Brave → Opera GX → Edge → Cốc Cốc → Arc → quay lại Brave; prompt đối chiếu chéo luôn giao acc khác với acc đã trả lời câu cũ; các prompt độc lập nhau có thể chạy song song trên nhiều browser.
- **Vấn đề gặp**: Không biết chắc số lượng/tên các Bộ hiện tại (2026) vì có tái cơ cấu/sáp nhập Bộ trong 2025 — nếu Pro tự đoán danh sách Bộ để soạn prompt chi tiết ngay thì vi phạm luật số 2 ("không tự bịa thông tin chính phủ").
- **Cách xử lý**: Tách riêng 1 prompt (Prompt #3) chỉ để xác nhận danh sách Bộ/cơ quan ngang Bộ hiện tại có nguồn, trước khi soạn các prompt chi tiết theo nhóm 5–6 Bộ/lần (Prompt #4 trở đi).
- **Bài học**:
  - Ngay sau khi ráp xong 1 prompt, nên soạn sẵn prompt tiếp theo (hoặc prompt đối chiếu chéo) trong cùng lượt — tránh để user phải hỏi lại "làm gì tiếp".
  - Khi 1 mảng dữ liệu có khả năng đã thay đổi cấu trúc gần đây (như danh sách Bộ sau tái cơ cấu), nên tách 1 prompt riêng để xác nhận danh sách/cấu trúc trước, rồi mới tra chi tiết từng phần — tránh Pro tự đoán tên/số lượng entity.

---

#### 2026-09-18 — Ráp xong Prompt #1 (5 cơ quan cấp trung ương)

- **Việc làm**: Nhận kết quả Prompt #1 từ acc Free (Brave, model Claude Sonnet 5 — medium). Lưu dữ liệu thô vào `01-co-quan-cap-trung-uong.md` (kèm footnote nguồn), tick Prompt #1 ✅ trong `Promts-sodobmhc.md`, thêm mục theo dõi "Tiến độ thu thập dữ liệu thô" vào `Roadmap-sodobmhc.md`, cập nhật template mục 6 trong `Claude-sodobmhc.md` để bắt buộc ghi rõ model + acc/trình duyệt ở đầu mỗi câu trả lời.
- **Vấn đề gặp**:
  - SĐT/email công khai tìm được cho nhiều cơ quan chỉ thuộc 1 bộ phận cụ thể (thư viện, vụ, văn phòng con) — không đại diện toàn cơ quan.
  - "Chủ tịch nước" là chức danh (position) hay tổ chức (organization/Văn phòng Chủ tịch nước) — chưa rõ ràng khi lên schema.
  - Trụ sở TAND tối cao & VKSND tối cao vừa thay đổi trong năm 2026 (do sáp nhập/tái cơ cấu) — dữ liệu trụ sở loại này dễ lỗi thời.
- **Cách xử lý**: Thêm field "Mức xác minh" (toàn cơ quan / chỉ 1 bộ phận / không xác định) vào template mục 6 để phân biệt rõ, không dùng SĐT/email của 1 bộ phận làm dữ liệu liên hệ chính thức của toàn tổ chức. Ghi chú riêng vấn đề "Chủ tịch nước" vào file `01-co-quan-cap-trung-uong.md` để Pro quyết định khi thiết kế schema thật (Phase 0 — chốt JSON schema, chưa xong).
- **Bài học**:
  - Cần chốt JSON schema (đặc biệt cách xử lý cặp person-title như "Chủ tịch nước") trước khi ráp dữ liệu thật ở Phase 10, tránh phải sửa lại nhiều lần.
  - Dữ liệu về trụ sở/địa chỉ của cơ quan tư pháp (tòa án, viện kiểm sát) nên gắn `last_verified` sát ngày và ưu tiên theo dõi lại định kỳ vì dễ đổi do tái cơ cấu hành chính 2025–2026.
  - Việc thu thập dữ liệu thô (qua Promts) có thể chạy song song, không cần chờ app build xong — đã thêm mục theo dõi riêng trong Roadmap để không lẫn với tiến độ build app.

---

#### 2026-09-18 — Khởi tạo bộ file quản lý dự án

- **Việc làm**: Tạo `Claude-sodobmhc.md` (quy tắc chia việc 1 acc Pro + 5 acc Free) và `Roadmap-sodobmhc.md` (checklist 11 Phase, theo kiến trúc trong doc `context-bmhc`), sau đó tạo `Build-logs-sodobmhc.md` (file này) và `Promts-sodobmhc.md` (kèm sẵn Prompt #1).
- **Vấn đề gặp**: Không có — thư mục dự án ban đầu rỗng, tạo mới hoàn toàn từ đầu.
- **Cách xử lý**: Ghi file trực tiếp vào thư mục Obsidian trên máy user qua kết nối thiết bị (không qua bước upload/download trung gian) — nhanh hơn và không tốn token dựng lại nội dung 2 lần.
- **Bài học**:
  - Mỗi prompt giao cho acc Free nên giới hạn 3–7 entity để tránh overload/tốn token (đã ghi thành luật số 7 trong `Claude-sodobmhc.md`).
  - Nên soạn sẵn Prompt #1 ngay từ đầu (5 cơ quan cấp trung ương) để user có việc giao cho acc Free ngay, không phải chờ thêm 1 lượt hỏi-đáp.
  - Kết nối thiết bị (device bridge) có thể tạm mất giữa phiên làm việc — nếu 1 lệnh ghi file thất bại vì mất kết nối, chờ kết nối lại rồi thử lại, không cần dựng lại toàn bộ nội dung.

---

#### 2026-09-18 — Lưu dữ liệu bổ sung tên đầy đủ xã/phường (17 tỉnh) sau khi đã hủy Prompt #20-24

- **Việc làm**: Sau khi user quyết định thu hẹp phạm vi (cấp xã/phường dừng ở mức liệt kê, hủy Prompt #20-24), user vẫn dán vào hội thoại một phần dữ liệu TÊN đầy đủ mà user tự tra qua acc Pro (Claude Sonnet 5) trực tiếp, không qua acc Free: Lai Châu (1/7 nhóm 1), đủ 7/7 tỉnh nhóm 2, 4/7 tỉnh nhóm 4 (Huế, Gia Lai, Khánh Hòa, Lâm Đồng), 2/6 tỉnh nhóm 5 (Cần Thơ, Vĩnh Long). User yêu cầu Pro tự tra tiếp 3 tỉnh còn lại của nhóm 5 (Đồng Tháp, Cà Mau, An Giang) bằng WebSearch/WebFetch trực tiếp trang xaydungchinhsach.chinhphu.vn — đã làm, khớp đúng tổng số công bố. Lưu toàn bộ vào 3 file mới: `17-ten-day-du-nhom1-va-nhom2.md`, `18-ten-day-du-nhom4-4tinh.md`, `19-ten-day-du-nhom5-5tinh.md`. Cập nhật `Roadmap-sodobmhc.md` ghi rõ đây là dữ liệu bổ sung ngoài pipeline 5-acc, không phải kết quả của Prompt #20-24 (vẫn giữ trạng thái ❌ HỦY).
- **Vấn đề gặp**: Dữ liệu user dán vào không theo đúng 1 nhóm — lẫn giữa phần còn thiếu của nhóm cũ (Lai Châu/nhóm 1) và phần mới của nhóm 4, nhóm 5 trong cùng 1-2 lượt tin nhắn; dễ ghi nhầm số thứ tự file hoặc gắn sai nhóm nếu không đối chiếu lại `Promts-sodobmhc.md` trước khi lưu.
- **Cách xử lý**: Trước khi tạo file, luôn `grep`/đọc lại đúng mục Prompt tương ứng trong `Promts-sodobmhc.md` để xác nhận tỉnh nào thuộc nhóm nào, tỉnh nào đã có ở file cũ (tránh trùng), rồi mới đặt số file tiếp theo và soạn nội dung.
- **Bài học**:
  - Khi 1 prompt đã bị hủy chính thức (❌) nhưng user vẫn tự tra và muốn lưu kết quả, nên lưu như "dữ liệu bổ sung ngoài pipeline" và ghi rõ nguồn gốc (Pro tự tra / user tự tra) — không tick lại prompt đã hủy thành ✅, tránh gây hiểu nhầm là đã giao lại cho acc Free.
  - Khi user nói "tự làm luôn đi" cho phần dữ liệu còn thiếu trong 1 lượt đã có sẵn, nên dùng WebSearch tìm đúng trang xaydungchinhsach.chinhphu.vn theo mẫu số Nghị quyết đã biết trước (tra theo pattern "Nghị quyết [số]/NQ-UBTVQH15" + tên tỉnh) rồi WebFetch để lấy danh sách tên đầy đủ — nhanh và bám sát đúng nguồn ưu tiên đã quy định, hơn là để Pro tự nhớ/suy luận tên.
  - Luôn đối chiếu tổng số (xã + phường + đặc khu) do trang nguồn tự công bố với tổng đã biết trước (từ file tổng quan 12-16) để tự phát hiện thiếu/dư tên trước khi lưu.

#### Template cho mục mới (copy xuống dưới mục "Cách dùng file này" khi thêm bài học mới)

```
#### YYYY-MM-DD — <tên việc>

- **Việc làm**: ...
- **Vấn đề gặp**: ...
- **Cách xử lý**: ...
- **Bài học**: ...
```
