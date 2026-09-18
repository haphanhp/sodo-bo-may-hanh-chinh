---
tags: [sodobmhc]
type: quy-tac-lam-viec
created: 2026-09-18
updated: 2026-09-18
---

### Claude-sodobmhc — Quy tắc chia việc & bàn giao dự án

File này là **luật chơi** cho mọi AI (Claude Pro, Claude Free, Cline, Claude Code...) tham gia dự án "Sơ đồ bộ máy hành chính VN". Bất kỳ AI nào được giao tiếp tục dự án — dù dự án đang dang dở tới đâu — đều phải đọc file này trước, rồi mới đọc `Roadmap-sodobmhc.md`, `Build-logs-sodobmhc.md`, `Promts-sodobmhc.md`.

---

#### 0. Thứ tự đọc file khi vào dự án

1. `Claude-sodobmhc.md` (file này) — hiểu luật chơi, vai trò.
2. `Roadmap-sodobmhc.md` — biết đang ở Phase nào, việc gì đã ✅.
3. `Build-logs-sodobmhc.md` — đọc bài học / lỗi đã gặp, tránh lặp lại.
4. `Promts-sodobmhc.md` — xem prompt số mấy đang được giao cho acc free, tránh giao trùng.
5. `context-bmhc` (doc trong Project) — kiến trúc kỹ thuật tổng thể (database → graph → UI).

---

#### 1. Mục tiêu dự án (tóm tắt)

Xây một file HTML (chạy độc lập, không hard-code dữ liệu vào HTML) minh họa bộ máy hành chính Việt Nam: cơ quan, cá nhân, chức vụ, cấu trúc nhiệm vụ/quyền hạn/trách nhiệm, trụ sở/SĐT/web/email, quan hệ cấp trên–cấp dưới, thủ tục/quy trình, giấy phép/chứng chỉ/văn bản/con dấu. Có 1 tab hướng dẫn sử dụng và 1 tab nguồn thông tin (dẫn link, không bịa). Kiến trúc kỹ thuật chi tiết nằm ở doc `context-bmhc` trong Project — mô hình Entity (Organization, Person, Position, Relationship, Procedure, Document, License, Facility, Form, Source) tách riêng khỏi UI.

Làm **từ từ, theo Phase**, không làm tất cả cùng lúc (xem `Roadmap-sodobmhc.md`).

---

#### 2. Mô hình nhân sự AI

| Vai trò | Công cụ | Nhiệm vụ chính |
|---|---|---|
| **Claude Pro** (1 acc) | Claude Cowork / Claude Code | Điều phối tổng, giữ context đầy đủ của dự án, viết/sửa code, thiết kế schema, ráp dữ liệu acc free gửi về, kiểm chứng nguồn, cập nhật Roadmap + Build-logs, backup GitHub |
| **Claude Free × 5** | 5 trình duyệt riêng: **Brave, Opera GX (Opera X), Edge, Cốc Cốc, Arc** | Chỉ tra cứu dữ liệu theo từng prompt nhỏ, độc lập, không cần biết toàn bộ kiến trúc dự án |

Lý do tách: acc Free có hạn mức tin nhắn/token thấp và dễ bị "overload" (mất ngữ cảnh, tự bịa) nếu nhận nguyên prompt lớn hoặc phải nhớ toàn bộ dự án. Chia nhỏ theo browser giúp chạy song song 5 luồng tra cứu mà không tốn token của acc Pro.

---

#### 3. Vai trò của Claude Pro (điều phối)

- Là nơi duy nhất giữ **toàn bộ ngữ cảnh dự án** (schema, kiến trúc, roadmap).
- Soạn prompt nhỏ, khép kín cho acc Free, đánh số, ghi vào `Promts-sodobmhc.md`.
- Không tự bịa dữ liệu hành chính — nếu cần dữ liệu thật, phải giao cho acc Free tra cứu hoặc tự tra cứu có dẫn nguồn.
- Nhận kết quả acc Free trả về (do user copy-paste vào), kiểm tra: có nguồn chưa, nguồn có đáng tin không (ưu tiên nguồn chính thức nhà nước), field có đúng schema không.
- Ráp dữ liệu đã kiểm chứng vào file dữ liệu tương ứng (đánh số thứ tự, gắn tag `sodobmhc`).
- Cập nhật `Roadmap-sodobmhc.md` (tick ✅) và `Build-logs-sodobmhc.md` (bài học/lỗi) sau mỗi việc hoàn thành.
- Định kỳ backup lên GitHub `haphanhp/sodo-bo-may-hanh-chinh`.

#### 4. Vai trò của 5 acc Claude Free (tra cứu)

- Mỗi acc chạy trên **1 browser cố định** (không đổi lẫn giữa các browser để dễ theo dõi acc nào đang làm gì):
  - Brave
  - Opera GX (gọi tắt: Opera X)
  - Edge
  - Cốc Cốc
  - Arc
- Chỉ nhận **1-3 prompt tại 1 thời điểm** từ `Promts-sodobmhc.md` (do user copy sang).
- Không cần biết kiến trúc code, schema JSON đầy đủ — chỉ cần template trả lời (xem mục 6).
- Không tự suy diễn/bịa thông tin hành chính (tên người, số điện thoại, ngày hiệu lực...). Nếu không tìm được nguồn đáng tin, phải ghi rõ "chưa xác minh được" thay vì đoán.
- Trả lời ngắn gọn, đúng phạm vi được giao, không lan sang các cơ quan/thủ tục khác ngoài prompt.

---

#### 5. Quy tắc bắt buộc cho acc Free khi trả lời

1. Không bịa thông tin hành chính (số điện thoại, địa chỉ, tên người, ngày ban hành...).
2. Mọi field dữ liệu phải kèm ít nhất 1 nguồn (tên nguồn + link, hoặc số văn bản).
3. Ưu tiên nguồn chính thức: cổng thông tin chính phủ, văn bản pháp luật (thuvienphapluat, chinhphu.vn, website chính thức cơ quan...).
4. Nếu không chắc / không tìm thấy nguồn: ghi rõ `"chưa xác minh"`, không được để trống mà đoán đại.
5. Không tự thêm nhận định cá nhân, không tự "làm đẹp" số liệu.
6. Trả lời đúng theo template ở mục 6 để acc Pro ráp nhanh, không phải viết lại.
7. Chỉ làm đúng phạm vi prompt được giao — không tự mở rộng sang cơ quan/thủ tục khác dù thấy liên quan.

#### 6. Template trả lời chuẩn (để Pro dễ ráp)

Đầu **mỗi câu trả lời** (không phải mỗi entity), acc Free ghi rõ 1 dòng:

```
Model dùng: ... (ví dụ: Claude Sonnet 5 — medium)
Acc & trình duyệt: ... (ví dụ: Free — Brave)
```

Sau đó, với mỗi entity, trả lời theo khối lặp lại:

```
ID đề xuất: org-ten-viet-khong-dau
Loại entity: organization / person / position / procedure / document / license / facility / source
Tên (vi): ...
Cấp trên (nếu có): ...
Trụ sở: ...
SĐT: ...
Email: ...
Website: ...
Chức năng / nhiệm vụ / quyền hạn: ...
Nguồn: [Tên nguồn](URL) — ngày truy cập: YYYY-MM-DD
Trạng thái xác minh: đã xác minh / chưa xác minh
Mức xác minh: toàn cơ quan / chỉ 1 bộ phận-vụ cụ thể / không xác định
Ghi chú: ...
```

Lưu ý (rút từ Prompt #1 — 2026-09-18): nhiều SĐT/email tìm được chỉ thuộc 1 bộ phận (thư viện, vụ, văn phòng con) chứ không đại diện toàn cơ quan — phải ghi rõ ở "Mức xác minh", KHÔNG dùng làm dữ liệu liên hệ chính thức của toàn tổ chức nếu chưa rõ.

Không cần acc Free tự viết JSON đúng schema — acc Pro sẽ chuyển sang JSON theo schema trong `context-bmhc` sau khi kiểm chứng.

---

#### 7. Quy tắc chống overload / đốt token

- Mỗi prompt giao cho acc Free chỉ nên gồm **3–7 entity** (ví dụ 5 Bộ, hoặc 1 cơ quan + các đơn vị trực thuộc cấp 1), không giao nguyên "toàn bộ Chính phủ" trong 1 prompt.
- Không copy nguyên `context-bmhc` (kiến trúc kỹ thuật) cho acc Free — acc Free không cần và sẽ tốn token đọc thứ không liên quan.
- Prompt phải tự khép kín: nêu rõ entity cần tra, field cần điền, template trả lời — acc Free không cần hỏi lại để hiểu bối cảnh.
- Nếu 1 acc Free báo hết hạn mức / bị giới hạn giữa việc, dừng lại, ghi vào `Build-logs-sodobmhc.md`, chuyển phần còn lại sang prompt mới (đánh số tiếp) cho acc khác hoặc lượt sau.
- Acc Pro không dán nguyên toàn bộ dữ liệu thô acc Free trả về vào ngữ cảnh nếu không cần — chỉ trích phần cần ráp, phần thô lưu file dữ liệu.

---

#### 8. Luồng làm việc từng bước (workflow)

1. Acc Pro xác định việc cần tra cứu (dựa theo Roadmap, Phase hiện tại).
2. Acc Pro viết prompt mới, đánh số tiếp theo, thêm vào `Promts-sodobmhc.md`.
3. User báo "prompt số N" — Pro nhắc lại nội dung để user copy.
4. User dán prompt N vào 1 trong 5 acc Free (theo browser tương ứng).
5. User dán kết quả acc Free trả lời ngược lại cho acc Pro.
6. Acc Pro kiểm chứng nguồn, chuẩn hoá theo schema, ráp vào file dữ liệu đánh số tương ứng (gắn tag `sodobmhc`).
7. Acc Pro tick ✅ mục tương ứng trong `Roadmap-sodobmhc.md`.
8. Nếu có lỗi/bài học trong quá trình (nguồn sai, format sai, acc Free bịa...), ghi vào `Build-logs-sodobmhc.md`.
9. Định kỳ (theo yêu cầu user), backup toàn bộ thư mục lên GitHub `haphanhp/sodo-bo-may-hanh-chinh`.

---

#### 9. 18 luật nền áp dụng cho MỌI AI trong dự án

(Trích từ kiến trúc đã chốt trong doc `context-bmhc`, áp dụng cho cả acc Pro và acc Free)

1. Không hard-code dữ liệu hành chính vào HTML.
2. Không tự bịa thông tin chính phủ.
3. Mọi entity có tính chất dữ kiện (factual) phải có ít nhất 1 nguồn.
4. Ưu tiên nguồn chính thức nhà nước.
5. Không tự sửa schema dữ liệu nếu chưa được acc Pro / user đồng ý rõ ràng.
6. Không trộn logic frontend với dữ liệu.
7. Mọi entity phải có ID duy nhất, ổn định.
8. Relationship phải trỏ tới entity ID đã tồn tại.
9. Chạy validate dữ liệu sau khi sửa/thêm dữ liệu.
10. Không refactor file không liên quan khi đang làm 1 feature/1 phase.
11. Không thêm dependency/thư viện mới nếu không cần thiết.
12. Hoàn thành xong 1 Phase mới sang Phase kế tiếp (xem Roadmap).
13. Không thay dữ liệu đã xác minh bằng dữ liệu đoán/bịa.
14. Giữ lại lịch sử khi 1 cơ quan/chức vụ có thay đổi cơ cấu (effective_from/effective_to).
15. Khi thông tin chưa chắc chắn, ghi rõ "chưa xác minh" thay vì đoán.
16. Cảnh giác với dữ liệu lặp lại y hệt trên nhiều trang khác nhau (ví dụ cùng 1 SĐT/địa chỉ gắn nhãn nhiều cơ quan khác nhau trên chinhphu.vn/baochinhphu.vn) — nhiều khả năng đó là footer/bản quyền của trang báo/cổng tin, KHÔNG phải dữ liệu thật của cơ quan đang tra. Phải mở trang gốc kiểm tra ngữ cảnh trước khi dùng. (Rút ra từ Prompt #2 — 2026-09-18, xem `Build-logs-sodobmhc.md`.)
17. Khi công cụ web search/web_fetch tích hợp của model gặp lỗi (trang cần chạy JS không đọc được, nội dung trả về là bản cache/cũ, hoặc công cụ tìm kiếm gán nhầm URL cho 1 đoạn nội dung) — KHÔNG lặp lại y nguyên cùng công cụ đó lần 3, cũng KHÔNG tự suy diễn/đoán kết quả. Ghi rõ "vẫn xung đột/chưa xác minh được qua công cụ tự động", đề xuất tra thủ công bằng trình duyệt thật, và coi đây là mục KHÔNG chặn tiến độ (non-blocking) nếu không phải field bắt buộc. (Rút ra từ Prompt #4 — 2026-09-18, xem `Build-logs-sodobmhc.md`.)
18. Khi 2 (hoặc nhiều) lần tra độc lập cho ra kết quả THẬT SỰ khác nhau về 1 field định danh quan trọng (địa chỉ trụ sở, tên người giữ chức vụ...) — không phải do lỗi kỹ thuật rõ ràng (footer/cache/JS) mà là 2 dữ kiện khác nhau, cả 2 đều có nguồn — KHÔNG để 1 AI tự chọn 1 bên. Phải: (a) đánh dấu ❗ xung đột trong file dữ liệu, (b) giao 1 acc/lượt tra RIÊNG để giải quyết, ưu tiên tìm nguồn có SỐ VĂN BẢN + NGÀY CỤ THỂ (Nghị quyết Quốc hội, Quyết định, Thông báo chính thức) hơn là suy luận từ ngày đăng bài hoặc so sánh độ "có vẻ chính chủ". chinhphu.vn/baochinhphu.vn đặc biệt dễ giữ thông tin CŨ (địa chỉ, nhân sự) sau khi 1 cơ quan thay đổi — không tự động coi chinhphu.vn là nguồn "mới nhất" chỉ vì đó là trang chính phủ. (Rút ra từ Prompt #6 — 2026-09-18, giải quyết xung đột trụ sở Bộ Công an và Bộ trưởng Bộ Tư pháp, xem `Build-logs-sodobmhc.md`.)

---

#### 10. Danh sách file quản lý dự án & vai trò

| File | Vai trò | Ai cập nhật |
|---|---|---|
| `Claude-sodobmhc.md` | Luật chơi / bàn giao (file này) | Acc Pro |
| `Roadmap-sodobmhc.md` | Checklist tiến trình theo Phase | Acc Pro |
| `Build-logs-sodobmhc.md` | Nhật ký build, bài học, lỗi | Acc Pro |
| `Promts-sodobmhc.md` | Prompt đánh số giao cho 5 acc Free | Acc Pro |
| Các file dữ liệu đánh số (`01-...md` → `16-...md`, tăng dần khi có dữ liệu mới) | Dữ liệu thô đã kiểm chứng, chờ ráp vào `data/*.json` ở Phase 10 | Acc Pro (sau khi ráp từ acc Free) |
| doc `context-bmhc` (trong Project claude.ai, KHÔNG phải file trong thư mục này) | Kiến trúc kỹ thuật tổng thể (folder structure, entity model, phase list) | Acc Pro (khi có thay đổi kiến trúc) |
| `AGENTS.md` (gốc thư mục dự án) | Quy tắc rút gọn cho AI **code editor** (Claude Code/Cline) — khác đối tượng với file này (file này dành cho AI **tra cứu dữ liệu**) | Claude Code, do Pro soạn brief (2026-09-18) |
| `schemas/*.schema.json` (9 file: organization, person, position, relationship, procedure, document, license, facility, source) | JSON Schema draft-07 chốt cấu trúc dữ liệu cho từng loại entity — tạo bởi Claude Code theo brief của Pro (2026-09-18). `facility.schema.json` còn đánh dấu PROPOSED, chưa được user duyệt chi tiết | Claude Code |
| `.git` + remote GitHub | Backup lịch sử toàn bộ thư mục này — repo riêng, TÁCH BIỆT khỏi repo Obsidian Vault ở thư mục cha. Remote: `https://github.com/haphanhp/sodo-bo-may-hanh-chinh` (nhánh `main`). Lần backup đầu: commit `ef8f239` (2026-09-18) — gồm 9 schema, `AGENTS.md`, toàn bộ file `.md` housekeeping + dữ liệu thô | Claude Code (push), Pro/user (theo dõi) |

Tất cả file `.md` trong thư mục dự án đều gắn tag `sodobmhc` (frontmatter YAML) để lọc trong Obsidian. `schemas/*.json` và `AGENTS.md` không có frontmatter (không phải file Obsidian note, là file cấu hình/kiến trúc app).

---

#### 11. Quy trình bàn giao khi dự án dang dở

Khi 1 AI mới (Claude khác, Cline, Claude Code...) được giao tiếp tục dự án đang dang dở:

1. Đọc theo đúng thứ tự ở mục 0.
2. Không tự đổi cấu trúc file/schema đã chốt trong `context-bmhc` nếu không được yêu cầu rõ.
3. Không làm nhảy cóc Phase — kiểm tra Roadmap xem Phase nào đang mở, chỉ làm trong Phase đó.
4. Nếu phát hiện dữ liệu cũ có vẻ sai/thiếu nguồn, không tự xoá — ghi chú nghi vấn vào `Build-logs-sodobmhc.md` và hỏi user trước khi sửa.
5. Sau khi hoàn thành phần việc được giao, cập nhật Roadmap + Build-logs trước khi kết thúc phiên làm việc.

#### 12. Việc cần làm ngay tiếp theo

Xem chi tiết trong `Roadmap-sodobmhc.md`, mục Phase 0.
