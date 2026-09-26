---
description: Đẩy bản sodobmhc mới lên GitHub, để hook pre-push đồng bộ sang repo publish, push repo publish rồi kiểm tra notes.haphan.digital
---

Bạn đang ở thư mục repo NGUỒN dự án sodobmhc trên máy Windows của tôi (nhánh main, remote origin = haphanhp/sodo-bo-may-hanh-chinh). Repo ĐÍCH: `E:\DownloadsDocuments\publish` (haphanhp/publish, Vercel tự deploy → https://notes.haphan.digital).

NHIỆM VỤ: đẩy bản mới lên GitHub và đăng lên notes.haphan.digital. KHÔNG sửa code/data — chỉ kiểm tra, push và xác nhận.

ĐỌC TRƯỚC (ngắn): AGENTS-sodobmhc.md (luật 19–20).

BỐI CẢNH: repo nguồn có git hook `.git/hooks/pre-push`. Khi `git push` repo nguồn, nếu file `publish/bo-may-hanh-chinh-viet-nam.html` nằm trong các commit đang đẩy, hook tự copy sang `E:\DownloadsDocuments\publish` và commit CỤC BỘ ở đó ("sync: cập nhật … từ repo sodobmhc"). Hook KHÔNG push repo publish — bước đó là của bạn. Vì vậy KHÔNG copy tay file build, trừ khi hook báo bỏ qua VÀ tôi đồng ý. `manifest.json` chỉ tồn tại ở repo publish và KHÔNG nằm trong hook (xem bước 5).

CÁC BƯỚC
1. `git --no-optional-locks status --short` và `git log --oneline -5`. Nếu có `.git/index.lock` hoặc `.git/HEAD.lock` mà không có tiến trình git nào đang chạy thì xóa. TUYỆT ĐỐI không in URL remote (chứa token): không chạy `git remote -v` / `git remote get-url`. Xác nhận `credential.helper` cấp repo đang rỗng ở cả 2 repo (`git config --local --get-all credential.helper` phải ra dòng rỗng) — repo nào thiếu thì đặt lại `git config --local credential.helper ""` (xem luật 23, `AGENTS-sodobmhc.md`), để PAT trong URL không bị lưu vào Windows Credential Manager.
2. Kiểm tra trước khi đẩy: `node tools/validate-data.js` phải 0 lỗi. Chạy `python tools/build-single-file.py` rồi `git status`: file `publish/bo-may-hanh-chinh-viet-nam.html` không được phát sinh thay đổi mới. Nếu có thay đổi → dừng, báo tôi, không tự commit.
3. `git fetch origin`; nếu origin/main đi trước → `git pull --rebase origin main`. Không force push.
4. `git push origin main` (dùng Bash/Git Bash trên Windows để hook chạy). Phải thấy dòng `[pre-push sync] Da commit local trong repo dich: bo-may-hanh-chinh-viet-nam.html`. Nếu thấy "khong tim thay repo dich" hoặc "khong doi noi dung" → dừng và báo, không tự xử lý.
5. Sang `E:\DownloadsDocuments\publish`: `git --no-optional-locks status --short` và `git log -3 --stat`. Xác nhận commit "sync: …" chỉ đổi đúng 1 file `bo-may-hanh-chinh-viet-nam.html`. Xác nhận `manifest.json` có 1 mục với `"file": "bo-may-hanh-chinh-viet-nam.html"` — CHỈ báo cáo, KHÔNG sửa (nếu thiếu: nói rõ trang vẫn truy cập được bằng link trực tiếp nhưng không hiện ở danh sách trang chủ, và hỏi tôi có thêm mục không). Nếu có file lạ đang thay đổi thì KHÔNG dùng `git add -A`/`git add .`; chỉ đẩy commit sync và báo tôi danh sách file lạ.
6. `git fetch origin`; nếu remote đi trước → `git pull --rebase origin main`. Rồi `git push origin main`.
7. Chờ ~3 phút cho Vercel. Kiểm tra: `curl -s "https://notes.haphan.digital/bo-may-hanh-chinh-viet-nam.html?v=$(date +%s)" | grep -c 'graph-info'` phải > 0 (bản có thẻ thông tin góc dưới phải). Nếu = 0, thử lại sau 2 phút (tối đa 3 lần) rồi báo.
8. Nếu `README.md` ở repo nguồn chưa có mục "Cơ chế vận hành" (marker `<!-- co-che-van-hanh -->`), chỉ NHẮC tôi chạy `/ghi-co-che-sodobmhc` — không tự làm.
9. Chạy `git-credential-manager github list`; nếu thấy `x-access-token` xuất hiện (nghĩa là PAT đã bị lưu lại vào kho credential hệ thống), chỉ **báo tôi cách xóa tay** (Windows Credential Manager, hoặc `printf 'protocol=https\nhost=github.com\nusername=x-access-token\n\n' | git credential reject`) — không tự xóa.
10. Báo cáo ngắn bằng tiếng Việt, heading chỉ dùng ### trở xuống (không dùng # và ##): hash commit của cả 2 repo, dòng log của hook, tình trạng manifest.json, kết quả curl, danh sách tài khoản GCM, mọi cảnh báo.

RÀNG BUỘC: không `git add -A` / `git add .` ở repo publish; không force push; không đụng data/, js/, css/; không sửa manifest.json; không in token; nếu push bị từ chối → `git pull --rebase` thử đúng 1 lần, vẫn lỗi thì dừng và báo.

Yêu cầu bổ sung của tôi lần này (có thể trống): $ARGUMENTS
