---
tags: [sodobmhc]
type: quy-tac
nhom: agents-code-editor
created: 2026-09-18
updated: 2026-09-26
---

### AGENTS-sodobmhc — Quy tắc cho AI code editor

> Đổi tên từ `AGENTS-sodobmhc.md` → `AGENTS-sodobmhc.md` (2026-09-19) để không lẫn với file `AGENTS-sodobmhc.md` của các dự án khác trong vault.

File này dành cho AI **viết/sửa code** trong dự án "Sơ đồ bộ máy hành chính Việt Nam" (khác với `Claude-sodobmhc.md`, dùng cho AI **tra cứu dữ liệu**).

1. Không hard-code dữ liệu hành chính (tên cơ quan, SĐT, tên người...) trực tiếp vào HTML/JS — mọi dữ liệu thật nằm trong `data/*.json`.
2. Không tự bịa thông tin chính phủ — thiếu dữ liệu thì để trống/null, không đoán.
3. Mọi entity phải có ít nhất 1 source_id trong `source_ids`.
4. Ưu tiên nguồn chính thức (.gov.vn) hơn báo chí/thứ cấp khi có xung đột.
5. Không sửa cấu trúc `schemas/*.schema.json` khi chưa được xác nhận rõ.
6. Không trộn logic frontend (`js/`) với dữ liệu (`data/`) — `index.html` chỉ là khung, không chứa dữ liệu hành chính.
7. Mọi entity phải có id duy nhất, ổn định, không đổi sau khi đã dùng ở nơi khác.
8. Mọi relationship phải trỏ tới id đã tồn tại thật trong `data/*.json`.
9. Sau khi sửa file trong `data/`, phải chạy `tools/validate-data.js` trước khi coi là xong.
10. Không refactor file không liên quan khi đang làm 1 feature cụ thể.
11. Không thêm dependency/thư viện mới nếu không thật cần thiết.
12. Làm đúng thứ tự Phase 0 → Phase 10 theo `Roadmap-sodobmhc.md`, không nhảy cóc.
13. Không ghi đè dữ liệu ĐÃ XÁC MINH bằng dữ liệu suy đoán/chưa chắc.
14. Khi 1 cơ quan sáp nhập/tách/đổi tên/nâng cấp, giữ lại lịch sử (`effective_from`/`effective_to`, quan hệ `merged_into`/`split_into`/`upgraded_from`) — không xóa dữ liệu cũ.
15. Khi thông tin không chắc chắn, đánh dấu rõ "chưa xác minh" — không tự chọn 1 phương án khi 2 nguồn xung đột, để nguyên và ghi chú.
16. **Không nhúng token (PAT) vào URL remote của git** — git ghi nguyên văn token vào `.git/config` và giữ vĩnh viễn, biến nó thành plaintext trong thư mục làm việc. Dùng `git credential approve` (qua stdin) hoặc `gh auth login --with-token`, remote để dạng sạch `https://github.com/<owner>/<repo>.git`. Không echo token, không đặt token trên dòng lệnh, không ghi vào file trong repo, không đưa vào message commit.
17. Khi vá file bằng script, **không dùng chuỗi neo ngắn** có thể nằm lọt trong một chuỗi dài hơn (ví dụ `"function init(){"` lọt trong `"async function init(){"`). Neo phải kèm ký tự đầu dòng hoặc đủ dài để duy nhất, và phải kiểm tra lại file sau khi vá.
18. Sau mỗi thay đổi lớn ở `js/`, chạy `python3 tools/build-single-file.py` rồi chạy thử bundle bằng Node với DOM giả — `node --check` KHÔNG bắt được lỗi ES module, còn kiểm thử "gọi hàm render" thì mù với lỗi khởi động app.
19. **Đăng bản đi qua git hook `pre-push` — KHÔNG copy tay file build sang repo `publish`.** Repo nguồn có hook `.git/hooks/pre-push` (cài 19/9/2026): khi `git push` repo nguồn mà file `publish/bo-may-hanh-chinh-viet-nam.html` nằm trong các commit đang đẩy, hook tự copy file đó sang `E:\DownloadsDocuments\publish\bo-may-hanh-chinh-viet-nam.html` và tạo commit cục bộ `sync: cập nhật … từ repo sodobmhc` ở repo `haphanhp/publish`. Quy trình chuẩn: sửa nguồn → `node tools/validate-data.js` → `python3 tools/build-single-file.py` → test bundle → **commit cả file build** → `git push` repo nguồn (từ Windows / Claude Code terminal) → sang repo `publish` kiểm tra commit `sync:` → `git push` repo `publish` → Vercel tự deploy (2–3 phút) → hard-refresh kiểm tra `notes.haphan.digital`. Không sửa tay file trong repo `publish`; chỉ copy tay khi hook báo bỏ qua VÀ người dùng đồng ý.
20. **Hook chỉ chạy khi push từ Windows (Git Bash / Claude Code terminal); từ Cowork/`device_bash` thì bị bỏ qua.** Máy ảo Linux của Cowork không có đường dẫn `/e/DownloadsDocuments/publish` nên hook chỉ in cảnh báo rồi thoát (không lỗi). Hook luôn `exit 0`, chỉ commit cục bộ ở repo đích và KHÔNG tự push repo `publish` — bước đó làm tay, có chủ đích. Hook nằm trong `.git/hooks` nên **không được version trên GitHub**; muốn đồng bộ thêm file (vd. `manifest.json`) thì sửa mảng `WHITELIST` trong hook rồi ghi lại vào `Build-logs-sodobmhc.md`. Trước khi đề xuất bất kỳ quy trình xuất bản nào, AI phải đọc `.git/hooks` và `.github/workflows` thay vì tin vào tài liệu cũ.

Tham khảo `Roadmap-sodobmhc.md` để biết đang ở Phase nào, `Claude-sodobmhc.md` để biết quy trình tra cứu dữ liệu, các file `01→05-*.md` là dữ liệu thô đã tra cứu sẵn sàng ráp vào `data/*.json` ở Phase 10.
