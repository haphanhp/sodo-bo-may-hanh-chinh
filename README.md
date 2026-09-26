### Sơ đồ bộ máy hành chính Việt Nam

Dự án tra cứu cơ quan, chức vụ, thủ tục và văn bản pháp luật của bộ máy hành chính Việt Nam, có Time Machine xem cơ cấu tại 1 thời điểm trong quá khứ. Bản công khai: https://notes.haphan.digital/bo-may-hanh-chinh-viet-nam.html

**Nguồn sự thật = repo này.** `publish/bo-may-hanh-chinh-viet-nam.html` chỉ là **bản build** sinh ra từ `data/` + `js/` + `css/` + `index.html` — không sửa tay file đó, mọi sửa đổi thật phải vào `data/`/`js/`/`css/`.

#### Cấu trúc thư mục

- `data/*.json` — dữ liệu hành chính (organizations, people, positions, relationships, procedures, documents, licenses, facilities, forms, sources). Nguồn sự thật duy nhất cho dữ liệu.
- `schemas/*.schema.json` — schema JSON kiểm tra cấu trúc từng loại dữ liệu.
- `js/` — logic frontend (core, data, graph, search, ui, views, app.js). Không chứa dữ liệu hành chính hard-code.
- `css/` — style.
- `tools/validate-data.js` — kiểm tra dữ liệu (0 lỗi mới coi là xong). `tools/build-single-file.py` — gộp toàn bộ thành 1 file HTML độc lập.
- `publish/bo-may-hanh-chinh-viet-nam.html` — bản build, được git hook đồng bộ tự động sang repo `publish` (xem mục dưới).

#### Cách chạy

- Cách nhanh: chạy `mo-app.bat` (cần Python) — mở server cục bộ tại `http://localhost:8080/index.html`.
- Hoặc mở trực tiếp `publish/bo-may-hanh-chinh-viet-nam.html` bằng browser (không cần server, đã nhúng sẵn dữ liệu/CSS/JS).

<!-- co-che-van-hanh -->
### Cơ chế vận hành

#### 1. Luồng đăng bản (xuất bản lên notes.haphan.digital)

Sửa nguồn (`data/`, `js/`, `css/`) → `node tools/validate-data.js` (0 lỗi) → `python3 tools/build-single-file.py` → **commit cả file build** `publish/bo-may-hanh-chinh-viet-nam.html` → `git push` từ Windows (Git Bash/Claude Code terminal) → git hook `pre-push` tự copy file build sang repo `publish` + commit cục bộ `sync: …` → `git push` repo `publish` → Vercel tự deploy (2–3 phút) → hard-refresh kiểm tra `notes.haphan.digital`.

Lệnh tắt: `/push-sodobmhc` (chạy trong Claude Code, thư mục repo này).

**Giới hạn của hook:** chỉ chạy khi `git push` từ Windows (Cowork/máy ảo Linux thì bị bỏ qua, chỉ in cảnh báo); không tự push repo `publish` (chủ đích, để kiểm tra trước khi công khai); nằm trong `.git/hooks` nên không lên GitHub, clone máy khác sẽ mất; chỉ đồng bộ đúng file khai báo trong `WHITELIST` của hook (hiện chỉ có file build).

#### 2. Cơ chế làm mới dữ liệu chống lỗi thời

Có 1 **tác vụ định kỳ** trong Claude Cowork tên "Cập nhật dữ liệu sodobmhc hằng tháng": chạy 08:47 sáng ngày 1 hằng tháng (giờ Việt Nam), lần đầu 01/10/2026 — chỉ chạy khi máy user bật và app Claude đang mở.

Nó làm: rà các bản ghi còn cờ ⚠️/"chưa đối chiếu chéo" hoặc `last_verified` cũ hơn 90 ngày (ưu tiên lãnh đạo cấp cao); tìm tin 45 ngày gần nhất về bổ nhiệm/miễn nhiệm/bầu cử, sáp nhập/đổi tên/giải thể cơ quan; **chỉ sửa khi có ≥ 2 nguồn độc lập**; **không xóa dữ liệu cũ** (đặt `positions[].to`/`effective_to`, thêm bản ghi mới, thêm nguồn vào `data/sources.json`, cập nhật `last_verified`); chạy `validate-data.js` + build lại; ghi 1 mục vào `Build-logs-sodobmhc.md`. Nó **không commit, không push, không deploy** — sau khi chạy, user tự xem rồi chạy `/push-sodobmhc` để đăng.

Ngưỡng kiểm tra theo tầng dữ liệu (chi tiết đầy đủ: `Co-che-chong-loi-thoi-sodobmhc.md` mục 5) — tác vụ hằng tháng dày hơn mọi ngưỡng dưới đây:

| Tầng | Cảnh báo vàng | Cảnh báo đỏ |
|---|---|---|
| 1. Luật gốc | > 365 ngày | > 730 ngày |
| 2. Cơ cấu tổ chức | > 180 ngày | > 365 ngày |
| 3. Nhân sự lãnh đạo | > 60 ngày | > 120 ngày |
| 4. Thủ tục/biểu mẫu/phí | > 90 ngày | > 180 ngày |
| 5. Liên hệ (SĐT/email/trụ sở) | > 180 ngày | > 365 ngày |

Trên giao diện: mỗi cơ quan/người có "Kiểm chứng lần cuối" (ngăn Chi tiết, tab Nguồn); Time Machine giữ lịch sử thay vì ghi đè.

Việc còn tồn nên ưu tiên khi tác vụ chạy: `org-chinhphu-vn.leadership` đang rỗng (thiếu Thủ tướng và 6 Phó Thủ tướng nhiệm kỳ 2026–2031); SĐT Quốc hội và TAND tối cao còn "chưa xác minh".

#### 3. Ngoại lệ `manifest.json` của trang này

Trang chủ `notes.haphan.digital` (repo `publish`) đọc `manifest.json` (mảng JSON, mỗi bài `{file, title, desc, tag, date}`, `date` dạng "D tháng M, YYYY") để liệt kê bài viết. Với bài thường: upload HTML rồi thêm 1 mục vào manifest.

Với `bo-may-hanh-chinh-viet-nam.html` thì khác: file HTML do build sinh ra và được hook đồng bộ tự động, nhưng `manifest.json` chỉ tồn tại ở repo `publish` và **không** nằm trong `WHITELIST` của hook → mục manifest vẫn làm **tay, một lần duy nhất** khi file mới xuất hiện (đã làm — commit `41d324e`, 25/9/2026). Các lần đẩy bản sau chỉ đổi nội dung HTML, không đụng manifest. Trường `date` trong manifest không tự cập nhật; muốn đổi ngày/mô tả/tag thì sửa tay ở repo `publish`. Nếu thiếu mục này, trang vẫn mở được bằng link trực tiếp nhưng không hiện ở danh sách trang chủ.

#### 4. Ai làm gì ở đâu

| Vai trò | Việc |
|---|---|
| Cowork | Sửa dữ liệu/UI, build, commit — **không push** |
| Claude Code (terminal Windows) | Push, kiểm tra hook, kiểm tra deploy |
| Tác vụ định kỳ | Làm mới dữ liệu — **không commit/push** |

Tài liệu liên quan: `AGENTS-sodobmhc.md` (quy tắc AI viết code, luật 19–22), `Roadmap-sodobmhc.md` (tiến độ theo Phase), `Build-logs-sodobmhc.md` (nhật ký), `Co-che-chong-loi-thoi-sodobmhc.md` (chi tiết ngưỡng + mốc chính trị cần theo dõi).
