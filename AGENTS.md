# AGENTS.md — Quy tắc cho AI code editor

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

Tham khảo `Roadmap-sodobmhc.md` để biết đang ở Phase nào, `Claude-sodobmhc.md` để biết quy trình tra cứu dữ liệu, các file `01→05-*.md` là dữ liệu thô đã tra cứu sẵn sàng ráp vào `data/*.json` ở Phase 10.
