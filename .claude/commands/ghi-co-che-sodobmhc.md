---
description: Ghi cơ chế vận hành sodobmhc (hook đồng bộ, làm mới dữ liệu chống lỗi thời, ngoại lệ manifest.json) vào README.md, AGENTS, Build-logs rồi commit + push
---

Bạn đang ở thư mục repo NGUỒN dự án sodobmhc trên máy Windows của tôi. NHIỆM VỤ: viết tài liệu vận hành, KHÔNG sửa code/data. Làm IDEMPOTENT: nếu mục đã có thì cập nhật tại chỗ, không nhân đôi. Nên chạy SAU `/push-sodobmhc` (để lần push này không đụng tới file build).

ĐỌC TRƯỚC (để không viết sai, mọi thông tin phải khớp các file này): AGENTS-sodobmhc.md (luật 19–20), Build-logs-sodobmhc.md (các mục 26/9/2026), Ban-giao-sua-UI-sodobmhc.md (mục 8–10), Co-che-chong-loi-thoi-sodobmhc.md (các mục về ngưỡng kiểm tra theo tầng, mốc thay đổi sắp tới, quy trình xử lý khi phát hiện thay đổi thật), `.git/hooks/pre-push` (chỉ đọc). Không in URL remote (chứa token).

VIỆC 1 — `README.md` ở gốc repo nguồn (hiện CHƯA có → tạo mới). Tiếng Việt, heading chỉ dùng ### trở xuống, dưới ~130 dòng. Có mục "### Cơ chế vận hành" kèm marker `<!-- co-che-van-hanh -->` ngay dưới heading. Nội dung:
 a. Dự án là gì; cấu trúc thư mục (data/, js/, css/, schemas/, tools/, publish/); cách chạy (mo-app.bat, hoặc mở publish/bo-may-hanh-chinh-viet-nam.html); NGUỒN SỰ THẬT = repo này, `publish/*.html` chỉ là bản build sinh ra từ nguồn.
 b. Luồng đăng bản: sửa nguồn → `node tools/validate-data.js` → `python3 tools/build-single-file.py` → commit cả file build → `git push` từ Windows → hook `pre-push` copy sang repo publish + commit cục bộ `sync:` → push repo publish → Vercel → notes.haphan.digital. Lệnh tắt: `/push-sodobmhc`. Giới hạn của hook: chỉ chạy khi push từ Windows (Cowork/Linux thì bị bỏ qua), không tự push repo publish, nằm trong `.git/hooks` nên không lên GitHub, chỉ đồng bộ file trong `WHITELIST`.
 c. Cơ chế làm mới dữ liệu chống lỗi thời — ghi đúng các sự thật sau:
    - Có 1 TÁC VỤ ĐỊNH KỲ trong Claude Cowork tên "Cập nhật dữ liệu sodobmhc hằng tháng": 08:47 sáng ngày 1 hằng tháng (giờ Việt Nam), lần đầu 01/10/2026. Chỉ chạy khi máy của tôi bật và app Claude đang mở.
    - Nó làm: rà các bản ghi còn cờ ⚠️ / "chưa đối chiếu chéo" hoặc `last_verified` cũ hơn 90 ngày (ưu tiên lãnh đạo cấp cao); tìm tin 45 ngày gần nhất về bổ nhiệm/miễn nhiệm/bầu cử, sáp nhập/đổi tên/giải thể cơ quan; CHỈ sửa khi có ≥ 2 nguồn độc lập (nguồn chính thống .gov.vn, báo chính thống); KHÔNG xóa dữ liệu cũ (đặt `positions[].to` / `effective_to`, thêm bản ghi mới, thêm nguồn mới vào `data/sources.json`, cập nhật `last_verified`); chạy `validate-data.js` + build lại; ghi 1 mục vào Build-logs. Nó KHÔNG commit, KHÔNG push, KHÔNG deploy.
    - Sau mỗi lần chạy: tôi xem kết quả, rồi chạy `/push-sodobmhc` để đăng.
    - Ngưỡng kiểm tra theo tầng dữ liệu: tóm tắt ĐÚNG theo `Co-che-chong-loi-thoi-sodobmhc.md` (không tự bịa ngưỡng) và nói rõ tác vụ hằng tháng dày hơn ngưỡng đó.
    - Trên giao diện: mỗi cơ quan/người có "Kiểm chứng lần cuối" (ngăn Chi tiết, tab Nguồn); Time Machine giữ lịch sử thay vì ghi đè.
    - Việc còn tồn nên ưu tiên khi tác vụ chạy: `org-chinhphu-vn.leadership` đang rỗng (thiếu Thủ tướng và 6 Phó Thủ tướng nhiệm kỳ 2026–2031); SĐT Quốc hội và TAND tối cao còn "chưa xác minh".
 d. NGOẠI LỆ `manifest.json` của file hành chính này — ghi đúng:
    - Trang chủ notes.haphan.digital (repo publish) đọc `manifest.json` (mảng JSON, mỗi bài là 1 object `{file, title, desc, tag, date}`, ngày dạng "D tháng M, YYYY") để liệt kê bài. Với các bài thường: tôi upload HTML rồi thêm 1 mục vào manifest.
    - Với `bo-may-hanh-chinh-viet-nam.html` thì KHÁC: file HTML do build sinh ra và được hook đồng bộ tự động, nhưng `manifest.json` chỉ tồn tại ở repo publish và KHÔNG nằm trong `WHITELIST` của hook → mục manifest vẫn làm TAY, một lần duy nhất khi file mới xuất hiện (từng bị sót ở lần commit đầu 19/9, bổ sung ngày 25/9, commit `41d324e`).
    - Các lần đẩy bản sau chỉ đổi nội dung HTML, không đụng manifest. Trường `date` trong manifest KHÔNG tự cập nhật; muốn đổi ngày/mô tả/tag thì sửa tay ở repo publish. Nếu manifest thiếu mục này, trang vẫn mở được bằng link trực tiếp nhưng không hiện ở danh sách trang chủ.
 e. Bảng "Ai làm gì ở đâu": Cowork (sửa dữ liệu/UI, build, commit — không push); Claude Code (push, kiểm tra hook, kiểm tra deploy); tác vụ định kỳ (làm mới dữ liệu — không commit/push).

VIỆC 2 — `AGENTS-sodobmhc.md`: thêm luật 21 (làm mới dữ liệu định kỳ: AI không tự sửa lãnh đạo/cơ cấu khi chưa đủ 2 nguồn độc lập; giữ lịch sử; tác vụ định kỳ không được commit/push) và luật 22 (ngoại lệ manifest.json như mục d). Mỗi luật 2–4 câu, trỏ về README mục "Cơ chế vận hành". Cập nhật dòng `updated:` ở đầu file.

VIỆC 3 — `Build-logs-sodobmhc.md`: thêm 1 mục mới ở cuối theo mẫu (Việc làm / Vấn đề gặp / Cách xử lý / Bài học), ghi NGÀY CHẠY THẬT (chạy `date`).

VIỆC 4 — repo publish (`E:\DownloadsDocuments\publish`): kiểm tra `README.md` có sẵn không. Nếu CÓ → thêm/cập nhật mục "Ngoại lệ: bo-may-hanh-chinh-viet-nam.html" (3–5 dòng theo mục d; KHÔNG có đường dẫn ổ đĩa, KHÔNG token). Nếu KHÔNG có → KHÔNG tạo (Vercel phục vụ mọi file ở gốc repo công khai, ví dụ notes.haphan.digital/README.md) và báo tôi. Đồng thời xác nhận `manifest.json` có mục cho file này — chỉ báo cáo, không sửa.

VIỆC 5 — commit + push:
 - Repo nguồn: `git add README.md AGENTS-sodobmhc.md Build-logs-sodobmhc.md` (liệt kê file cụ thể) → commit (thông điệp tiếng Việt không dấu hoặc có dấu đều được) → `git fetch origin` → nếu remote đi trước thì `git pull --rebase origin main` → `git push origin main`. Vì không đổi file build nên hook sẽ im lặng hoặc báo "không có file cần đồng bộ" — bình thường.
 - Repo publish: chỉ khi ở VIỆC 4 có sửa README: `git add README.md` (đúng file đó) → commit → pull --rebase nếu cần → push.
 - Báo cáo ngắn bằng tiếng Việt, heading chỉ dùng ###: các file đã tạo/sửa, hash commit, các điểm tôi cần quyết định.

RÀNG BUỘC: không sửa code/data; không `git add -A` / `git add .`; không force push; không in token; không đụng manifest.json; không tự bịa ngưỡng hay số liệu — thiếu thì ghi "chưa có" và trỏ tới file gốc.

Yêu cầu bổ sung của tôi lần này (có thể trống): $ARGUMENTS
