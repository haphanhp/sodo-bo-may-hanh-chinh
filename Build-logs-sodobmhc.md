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

#### Template cho mục mới (copy xuống dưới mục "Cách dùng file này" khi thêm bài học mới)

```
#### YYYY-MM-DD — <tên việc>

- **Việc làm**: ...
- **Vấn đề gặp**: ...
- **Cách xử lý**: ...
- **Bài học**: ...
```
