### Bàn giao: tiếp tục sửa UI + bổ sung dữ liệu — dự án Sơ đồ bộ máy hành chính Việt Nam (sodobmhc)

Viết ngày 25/9/2026, để mở phiên chat mới trong project "Publish - Blog notes.haphan.digital" (hoặc project riêng của sodobmhc nếu có) mà không cần đọc lại toàn bộ đoạn chat cũ.

**Cập nhật 26/9/2026:** (1) bổ sung **cơ chế đồng bộ tự động bằng git hook `pre-push`** — quy trình "copy tay sang thư mục publish" trong bản bàn giao gốc là SAI/lỗi thời, xem mục 8; (2) thêm prompt mẫu giao cho Claude Code terminal đẩy bản lên (mục 9); (3) ghi lại các việc đã làm ngày 26/9 (mục 10) — trong đó việc "click vào ô để mở cấp nhỏ hơn" ở mục 4 đã xong.

---

### 1. Dự án là gì, nằm ở đâu

- **Tên:** Sơ đồ bộ máy hành chính Việt Nam (viết tắt `sodobmhc`)
- **Mục đích:** giúp người xem hiểu cơ cấu, chức năng, lãnh đạo bộ máy hành chính VN + tra cứu thủ tục hành chính đi đâu, làm gì.
- **Thư mục nguồn (source, nơi sửa code/data):** `E:\Old D to E\obsidian-vault-colourful\300 🚰 Pipelines\330 🧗 Projects\11.so-do-bo-may-hanh-chinh` — có `.git` riêng, repo GitHub `haphanhp/sodo-bo-may-hanh-chinh`.
- **Nguồn sự thật duy nhất:** thư mục nguồn ở trên (`data/*.json` → `js/`, `css/` → build). File `publish/bo-may-hanh-chinh-viet-nam.html` NẰM TRONG thư mục nguồn chỉ là bản build sinh ra từ nguồn — không sửa tay.
- **Nơi xuất bản (bản sao, KHÔNG sửa code ở đây):** `E:\DownloadsDocuments\publish\bo-may-hanh-chinh-viet-nam.html` — thuộc repo `haphanhp/publish` (repo blog chính, đã **private**), hiển thị công khai tại **https://notes.haphan.digital/bo-may-hanh-chinh-viet-nam.html**. File này được **git hook `pre-push` của repo nguồn tự copy sang** (không copy tay) — xem mục 8.
- File này ĐÃ có trong `manifest.json` của repo `publish` (bị sót ở lần commit đầu 19/9, đã bổ sung + đồng bộ nội dung mới ngày 25/9 — commit `41d324e`).

---

### 2. Kiến trúc & luật bắt buộc phải biết trước khi sửa

Đọc 2 file này TRƯỚC khi đụng vào code, nằm ngay trong thư mục dự án:

- **`AGENTS-sodobmhc.md`** — luật cho AI sửa code (20 điều). Quan trọng nhất:
  - Không hard-code dữ liệu hành chính vào HTML/JS — mọi dữ liệu thật nằm ở `data/*.json`.
  - `index.html` chỉ là khung, không chứa dữ liệu.
  - Sau khi sửa file trong `data/`, phải chạy `tools/validate-data.js`.
  - Sau khi sửa `js/`, chạy `python3 tools/build-single-file.py` rồi test bundle bằng Node + DOM giả (không dùng `node --check`, không đủ để bắt lỗi ES module hay lỗi khởi động app).
  - Không nhúng PAT vào URL remote git — dùng Git Credential Manager sẵn có trên máy (đã cấu hình, không cần xin PAT nữa).
  - **Đăng bản đi qua hook `pre-push` (luật 19–20): không copy tay file build sang repo `publish`; phải commit cả file build; push repo nguồn từ Windows/Claude Code terminal thì hook mới chạy.**
- **`Claude-sodobmhc.md`** — luật cho AI tra cứu dữ liệu thô (khác với AGENTS, dành cho việc research, không phải sửa code).
- **`Roadmap-sodobmhc.md`** — nguồn sự thật duy nhất về tiến độ. ĐỌC FILE NÀY ĐẦU TIÊN mỗi khi vào phiên mới để biết đang ở Phase nào.
- **`Build-logs-sodobmhc.md`** — mọi bài học/lỗi đã gặp + cách xử lý, ghi theo từng ngày. Đọc phần cuối file (mới nhất) trước khi sửa để không lặp lại lỗi cũ.

---

### 3. Trạng thái hiện tại (theo Roadmap, cập nhật 19/9/2026)

**Phase 0 → 9: ĐÃ XONG hết.** Cụ thể đã có:
- Data: 63 cơ quan (56 đang hoạt động + 7 đã kết thúc lịch sử) / 89 người / 90 chức vụ / 3 thủ tục / 16 văn bản / 85 quan hệ / 139 nguồn — `node tools/validate-data.js` báo **0 lỗi, 0 cảnh báo**.
- UI đã có: sơ đồ cây SVG (zoom/pan/expand-collapse, phân trang 6 node/hàng), 9 tab điều hướng, bảng chi tiết, tìm kiếm bỏ dấu (Ctrl+K), Time Machine (xem cơ cấu tại 1 thời điểm quá khứ), toggle sáng/tối.
- Xuất bản: `tools/build-single-file.py` gộp toàn bộ thành 1 file HTML (~360KB) → ghi ra `publish/bo-may-hanh-chinh-viet-nam.html` (trong thư mục nguồn). Sau đó `git push` repo nguồn → **hook `pre-push` tự copy sang repo `publish`** (không copy tay) — xem mục 8.

**Phase 10 (đang làm, CHƯA xong):**
- ✅ Cấp trung ương (5 cơ quan), 17 Bộ/cơ quan ngang Bộ, 34/34 tỉnh/thành (đủ trụ sở, lãnh đạo, Bí thư) — đã vào `data/*.json`.
- ⚠️ Phase 6 (Thủ tục hành chính): đã có dữ liệu thô ở mức "Mức 3" cho toàn bộ 17 Bộ, NHƯNG **còn 6 cặp file dữ liệu thô bị trùng/chưa gộp** (do 2 phiên Cowork chạy song song không biết nhau — xem mục 5 bên dưới) — cần gộp trước khi ráp vào `data/procedures.json`.
- ❌ Cấp xã/phường/đặc khu: chỉ liệt kê tổng số + tên đầy đủ (đã xong 34/34 tỉnh ở mức tên), KHÔNG có trụ sở/SĐT/lãnh đạo riêng từng xã (đã chốt phạm vi, không đào sâu thêm).
- ❌ Chưa đối chiếu chéo nguồn lần cuối + chưa backup GitHub định kỳ gần đây nhất.

---

### 4. Việc cần làm tiếp — UI + bổ sung dữ liệu (mục tiêu của phiên chat mới)

Lấy từ `checklist-sodobmhc.md` (mục "2. sodobmhc", chưa ai làm):

1. **Tổng kết lỗi cần sửa** — làm 1 file con liệt kê toàn bộ lỗi đang tồn tại kèm checklist, ước lượng công sức, đánh giá có giao được cho acc Free/AI khác chạy qua từng lỗi 1 không. *(Chưa có file này — nếu phiên mới làm, nên tạo file mới, ví dụ `42-tong-ket-loi-can-sua.md`, không ghi đè file có số cũ.)*
2. **Lỗi hiển thị + lỗi thiếu data** — cần rà lại toàn bộ 9 tab xem có chỗ nào hiển thị sai, thiếu, hoặc `undefined`/`[object Object]` lọt ra ngoài.
3. ✅ **ĐÃ XONG 26/9/2026 — UI dạng cây: bấm vào 1 ô để mở/thu gọn cấp dưới.** User chốt: bấm thẻ = mở/thu gọn tại chỗ + hiện thẻ thông tin ở góc dưới bên phải (số đơn vị trực thuộc, chức năng, lãnh đạo, nút "Xem đầy đủ"). Sơ đồ mặc định thu gọn (chỉ 5 cơ quan thượng tầng). Hạn chế còn lại: dữ liệu mới có 2 cấp, chỉ Chính phủ có đơn vị bên trong (51 đơn vị tại 26/9/2026) — Quốc hội, VPCTN, TAND/VKSND tối cao và từng Bộ/tỉnh chưa có cấp dưới (ủy ban, vụ, cục, sở…), cần bổ sung dữ liệu ở Phase 10 mới mở sâu hơn được. Chi tiết: mục 10.
4. **Kiểm tra workflow đồng bộ (chạy thử end-to-end lần đầu)** — cơ chế là **hook `pre-push` tự động, KHÔNG copy tay** (mục 8): commit cả file build → `git push` repo nguồn `haphanhp/sodo-bo-may-hanh-chinh` từ Windows/Claude Code terminal → hook commit cục bộ `sync: …` ở `E:\DownloadsDocuments\publish` → `git push` repo `publish` → xác nhận `notes.haphan.digital` hiển thị đúng bản mới nhất (mở link + hard-refresh, tránh nhầm cache như từng gặp ở `livable_cities_dashboard.html`). Prompt mẫu giao cho Claude Code: mục 9.
5. **Ghi chú đánh giá vào Build-logs** — sau mỗi lần sửa xong 1 việc, ghi lại vào `Build-logs-sodobmhc.md` theo đúng template ở cuối file đó (Việc làm / Vấn đề gặp / Cách xử lý / Bài học).

Ngoài ra còn treo trong Roadmap (không phải UI nhưng liên quan):
- Gộp 6 cặp file dữ liệu thô trùng của Phase 6 (Nội vụ, Tư pháp, Tài chính, Công Thương, Khoa học-Công nghệ, Xây dựng — xem chi tiết đầy đủ tên file trong `Promts-sodobmhc.md`, mục "Danh sách 17 lượt gán").
- Position view riêng (Phase 4) — hiện dùng chung với view khác, chưa tách.
- Filters nâng cao theo cấp/loại cơ quan (Phase 5) — chưa cần thiết, để sau.

---

### 5. ⚠️ Rủi ro quan trọng nhất cần biết trước khi bắt tay vào sửa

**Nhiều phiên Cowork/Claude có thể chạy song song trên cùng thư mục dự án này** (đã xảy ra ít nhất 2 lần trong ngày 18/9/2026, gây trùng lặp toàn bộ Phase 6 — làm 2 lần độc lập cho 7 Bộ, tốn token vô ích). Quy tắc bắt buộc rút ra từ đó:

1. **`ls` lại thư mục dữ liệu NGAY TRƯỚC KHI ghi file đánh số mới** (không chỉ 1 lần đầu buổi) — để lấy đúng số thứ tự file tiếp theo, tránh đụng số.
2. **`ls` lại LẦN NỮA sau khi ghi xong**, trước khi cập nhật `Roadmap-sodobmhc.md`/`Promts-sodobmhc.md` — phát hiện sớm nếu phiên khác vừa ghi đè/thêm file cùng lúc.
3. Nếu phát hiện đụng số: **đổi số của lượt phát hiện ra (tức lượt của mình)**, giữ nguyên file đã có trước đó — không tự ý xóa/ghi đè bản của phiên khác vì không có gì đảm bảo bản của mình "đúng hơn".
4. Trước khi sửa file trong `js/` hoặc `data/`, nên hỏi user 1 câu ngắn: "có phiên chat/task Cowork nào khác đang cùng sửa thư mục này không?" — nếu nghi ngờ, thay vì tự xử lý đụng độ nhiều lần.

---

### 6. Vấn đề vận hành khác cần nhớ

- **Lock file git bị kẹt** (`'.git/index.lock'`, `.git/HEAD.lock`, `.git/objects/*/tmp_obj_*`): nếu gặp lỗi "Operation not permitted" khi xóa, gọi `device_request_delete_permission` cho đúng thư mục gốc trước khi retry — quyền này reset mỗi khi remote-devices MCP server bị ngắt kết nối lại (khá thường xuyên).
- **Kết nối bridge tới máy user hay bị gián đoạn tạm thời** ("Workspace unavailable" / "not connected to the bridge") — retry lại là được, không cần user mở lại app.
- **PAT/Git Credential Manager**: máy này đã cấu hình Git Credential Manager cho `git:https://github.com` — **không cần xin PAT** để push, cứ `git push origin main` bình thường. Từng có sự cố PAT tạm bị gán nhầm vào Credential Manager làm gãy sync của Obsidian Git plugin (repo vault khác, không phải sodobmhc) — nếu cần dùng PAT riêng cho 1 repo cụ thể, nhúng thẳng vào remote URL của repo đó, đừng đụng vào Credential Manager dùng chung.
- **Trước khi sửa `data/*.json`**: không tự bịa dữ liệu chính phủ, thiếu thì để trống/null; ưu tiên nguồn `.gov.vn`; mọi entity phải có `source_ids` trỏ tới nguồn thật đã tồn tại.

---

### 7. Câu hỏi cần hỏi lại user ngay đầu phiên mới (nếu chưa rõ)

1. ~~"UI dạng cây, click vào ô ra sơ đồ cấp nhỏ hơn" — mở rộng tại chỗ hay chuyển màn hình con?~~ **Đã trả lời 26/9/2026:** mở rộng tại chỗ, bấm thẻ để mở/thu gọn + thẻ thông tin góc dưới phải — đã làm xong.
2. Có phiên Cowork/Claude nào khác đang chạy song song trên thư mục `11.so-do-bo-may-hanh-chinh` không, để tránh trùng việc như đã từng xảy ra?
3. Ưu tiên sửa lỗi hiển thị/thiếu data trước, hay ưu tiên hoàn thiện Phase 10 (gộp file thủ tục trùng) trước?

---

### 8. Cơ chế đồng bộ tự động sang repo `publish` (git hook `pre-push`) — ĐỌC TRƯỚC KHI ĐĂNG BẢN

*(Thêm 26/9/2026. Bản bàn giao gốc 25/9 ghi "copy file build sang `E:\DownloadsDocuments\publish` rồi push" — quy trình đó lỗi thời, đừng làm theo.)*

**Nó là gì.** Không phải bot hay GitHub Action (repo nguồn không có `.github/workflows`). Đó là 1 file git hook `.git/hooks/pre-push` nằm trong repo nguồn, cài ngày 19/9/2026.

**Nó làm gì.** Mỗi lần chạy `git push` ở repo nguồn, hook đọc các commit đang được đẩy; nếu file `publish/bo-may-hanh-chinh-viet-nam.html` (khai báo trong mảng `WHITELIST` của hook) có thay đổi trong phạm vi đó thì:

1. copy file sang `E:\DownloadsDocuments\publish\bo-may-hanh-chinh-viet-nam.html` (biến `PUBLISH_REPO` trong hook);
2. `git add` + `git commit` **cục bộ** trong repo `publish` với thông điệp `sync: cập nhật bo-may-hanh-chinh-viet-nam.html từ repo sodobmhc` — chỉ khi nội dung thực sự đổi (không tạo commit rỗng);
3. in nhắc "nhớ tự kiểm tra rồi `git push` riêng bên đó".

Hook luôn `exit 0` (không bao giờ chặn push repo nguồn) và **KHÔNG tự push repo `publish`** — chủ đích để người dùng kiểm tra trước khi công khai.

**Quy trình chuẩn mỗi lần đăng bản** (thay cho quy trình "copy tay" cũ):

1. Sửa nguồn (`data/`, `js/`, `css/`) → `node tools/validate-data.js` (0 lỗi) → `python3 tools/build-single-file.py` → test bundle.
2. **Commit cả file `publish/bo-may-hanh-chinh-viet-nam.html`** — không commit file build thì hook không có gì để đồng bộ.
3. `git push origin main` ở repo nguồn, **chạy trên Windows** (Git Bash / Claude Code terminal). Thấy dòng `[pre-push sync] Da commit local trong repo dich` là hook đã chạy.
4. Sang `E:\DownloadsDocuments\publish`: `git log -3 --stat` (commit `sync:` chỉ đổi đúng 1 file), `manifest.json` vẫn có mục `bo-may-hanh-chinh-viet-nam.html`; nếu remote có thay đổi mới (user upload qua web) thì `git pull --rebase origin main`; rồi `git push origin main`.
5. Vercel tự deploy (2–3 phút) → mở `https://notes.haphan.digital/bo-may-hanh-chinh-viet-nam.html`, hard-refresh (Ctrl+F5) để kiểm tra.

**Giới hạn cần nhớ:**

- Hook chỉ chạy khi push từ Windows. Cowork/`device_bash` chạy trong máy ảo Linux không có đường dẫn `/e/DownloadsDocuments/publish` → hook in "CANH BAO: khong tim thay repo dich … bo qua dong bo" rồi thoát. Vì vậy **việc push nên giao cho Claude Code terminal** (mục 9); Cowork chỉ nên sửa nguồn + build + commit.
- Hook nằm trong `.git/hooks` nên không lên GitHub, clone máy khác sẽ mất. *(Đề xuất, chưa làm: lưu bản sao ở `tools/hooks/pre-push` trong repo.)*
- Chỉ đồng bộ file trong `WHITELIST` (hiện chỉ file build). `manifest.json` chỉ tồn tại ở repo `publish` (sửa tay ở đó). Muốn đồng bộ thêm file thì thêm 1 dòng `"đường-dẫn-repo-nguồn::tên-file-đích"` vào `WHITELIST`, rồi ghi lại vào `Build-logs-sodobmhc.md`.
- Nhật ký chưa ghi rõ hook từng chạy thành công (commit `41d324e` ngày 25/9 ở repo `publish` chưa rõ do hook hay copy tay). Lần đẩy bản 26/9 là lần chạy thử end-to-end đầu tiên được ghi lại.
- Không chạy `git remote -v` / `git remote get-url`: URL remote của repo nguồn đang chứa token tạm (user chấp nhận rủi ro: repo private, token hết hạn sau ~3 tháng) — in ra sẽ lộ token.

---

### 9. Prompt mẫu giao cho Claude Code (terminal) đẩy bản lên

Dùng khi Cowork đã sửa + build + commit xong. Mở Claude Code trong thư mục dự án (Windows), dán nguyên văn:

```
Bạn đang làm việc trên máy Windows của tôi, trong thư mục repo nguồn dự án sodobmhc:
E:\Old D to E\obsidian-vault-colourful\300 🚰 Pipelines\330 🧗 Projects\11.so-do-bo-may-hanh-chinh
(remote origin = haphanhp/sodo-bo-may-hanh-chinh, nhánh main).

NHIỆM VỤ: đẩy bản mới lên GitHub và đăng lên notes.haphan.digital. KHÔNG sửa code/data — chỉ kiểm tra, push và xác nhận.

ĐỌC TRƯỚC: AGENTS-sodobmhc.md (luật 19–20), Roadmap-sodobmhc.md (mục "Xuất bản"), Build-logs-sodobmhc.md (2 mục cuối ngày 26/9/2026), Ban-giao-sua-UI-sodobmhc.md (mục 8).

BỐI CẢNH: repo nguồn có git hook .git/hooks/pre-push. Khi `git push` repo nguồn, nếu file publish/bo-may-hanh-chinh-viet-nam.html nằm trong các commit đang đẩy, hook tự copy sang E:\DownloadsDocuments\publish và commit CỤC BỘ ở đó ("sync: cập nhật … từ repo sodobmhc"). Hook KHÔNG push repo publish — bước đó là của bạn. Vì vậy KHÔNG copy tay file build, trừ khi hook báo bỏ qua VÀ tôi đồng ý.

CÁC BƯỚC
1. `git --no-optional-locks status --short` và `git log --oneline -5`. Nếu có .git/index.lock hoặc .git/HEAD.lock mà không có tiến trình git nào đang chạy thì xóa. TUYỆT ĐỐI không in URL remote (chứa token): không chạy `git remote -v` / `git remote get-url`.
2. Kiểm tra trước khi đẩy: `node tools/validate-data.js` phải 0 lỗi. Chạy `python tools/build-single-file.py` rồi `git status`: file publish/bo-may-hanh-chinh-viet-nam.html không được phát sinh thay đổi mới. Nếu có thay đổi → dừng, báo tôi, không tự commit.
3. `git fetch origin`; nếu origin/main đi trước → `git pull --rebase origin main`. Không force push.
4. `git push origin main` (dùng Bash/Git Bash trên Windows để hook chạy). Phải thấy dòng "[pre-push sync] Da commit local trong repo dich: bo-may-hanh-chinh-viet-nam.html". Nếu thấy "khong tim thay repo dich" hoặc "khong doi noi dung" → dừng và báo, không tự xử lý.
5. Sang E:\DownloadsDocuments\publish: `git --no-optional-locks status --short` và `git log -3 --stat`. Xác nhận commit "sync: …" chỉ đổi đúng 1 file bo-may-hanh-chinh-viet-nam.html và manifest.json vẫn có mục bo-may-hanh-chinh-viet-nam.html. Nếu có file lạ đang thay đổi thì KHÔNG dùng `git add -A`/`git add .`; chỉ đẩy commit sync và báo tôi danh sách file lạ.
6. `git fetch origin`; nếu remote đi trước → `git pull --rebase origin main`. Rồi `git push origin main`.
7. Chờ ~3 phút cho Vercel. Kiểm tra: `curl -s "https://notes.haphan.digital/bo-may-hanh-chinh-viet-nam.html?v=$(date +%s)" | grep -c 'graph-info'` phải > 0 (bản mới có thẻ thông tin góc dưới phải). Nếu = 0, thử lại sau 2 phút (tối đa 3 lần) rồi báo.
8. Báo cáo ngắn bằng tiếng Việt, heading chỉ dùng ### trở xuống (không dùng # và ##): hash commit của cả 2 repo, dòng log của hook, kết quả curl, mọi cảnh báo.

RÀNG BUỘC: không `git add -A` / `git add .` ở repo publish; không force push; không đụng data/, js/, css/; không sửa manifest.json; không in token; nếu push bị từ chối → `git pull --rebase` thử đúng 1 lần, vẫn lỗi thì dừng và báo.
```

---

### 10. Đã làm ngày 26/9/2026 (sau bản bàn giao gốc)

- **Dữ liệu:** xác minh 3 lãnh đạo cấp cao (Trần Thanh Mẫn — Chủ tịch Quốc hội; Nguyễn Văn Quảng — Chánh án TAND tối cao; Nguyễn Huy Tiến — Viện trưởng VKSND tối cao), mỗi người ≥ 2 nguồn (`source-411…418`). **Phát hiện Chủ tịch nước đã đổi:** Tô Lâm (từ 07/4/2026), ông Lương Cường giữ `to: 2026-04-06` (giữ lịch sử, không xóa). `validate-data.js`: 0 lỗi, 0 cảnh báo.
- **UI sơ đồ:** thẻ tô nền theo đúng màu legend + dải phân cấp có nhãn; thẻ lớn cho 5 cơ quan thượng tầng; tên lãnh đạo hiện trên thẻ theo mốc Time Machine (module `js/core/leaders.js`); **bấm thẻ = mở/thu gọn cấp dưới + hiện thẻ thông tin góc dưới phải** (module `js/graph/info-card.js`, nút "Xem đầy đủ →" mở ngăn Chi tiết); sơ đồ mặc định thu gọn; thêm nút "Thu gọn hết"; ngăn Chi tiết ẩn mặc định, trượt từ phải, Esc để đóng (Esc lần 1 đóng ngăn, lần 2 đóng thẻ).
- **Tìm kiếm:** rê chuột hoặc bấm vào ô hiện các loại (Tất cả / Cơ quan / Con người / Chức vụ / Thủ tục / Văn bản / Nguồn) kèm số lượng.
- **Lỗi đã sửa:** bấm ô trên sơ đồ không chọn được (`setPointerCapture` nuốt sự kiện click — chỉ bắt con trỏ khi kéo > 5px); ô kết quả tìm kiếm không đóng được (`display:flex` đè thuộc tính `hidden` — thêm `[hidden]{display:none}`); nhãn "Phase 6/Phase 1" lỗi thời.
- **Tác vụ định kỳ:** "Cập nhật dữ liệu sodobmhc hằng tháng" — 08:47 ngày 1 hằng quý (các tháng 1, 4, 7, 10) (giờ VN), lần đầu 1/10/2026, chạy bù bằng tay khi có tin lớn. Chỉ sửa khi có đủ 2 nguồn, KHÔNG commit/push/deploy; cần máy bật + app Claude mở.
- **Việc còn tồn:** (1) `org-chinhphu-vn.leadership` đang rỗng — thiếu Thủ tướng Lê Minh Hưng và 6 Phó Thủ tướng nhiệm kỳ 2026–2031; (2) SĐT Quốc hội và TAND tối cao vẫn "chưa xác minh" (quochoi.vn trả trang rỗng, toaan.gov.vn chặn truy cập tự động); (3) dữ liệu cấp dưới (ủy ban của Quốc hội, vụ/cục của Bộ, sở của tỉnh) chưa có — muốn mở sơ đồ sâu hơn phải bổ sung; (4) bản build 26/9 đã commit nhưng **chưa push** — giao cho Claude Code theo mục 9.

---

*Cập nhật 26/9/2026: mục 8 viết từ việc đọc trực tiếp `.git/hooks/pre-push` của repo nguồn; mục 10 từ Build-logs ngày 26/9.*

*Nguồn: đối chiếu trực tiếp với `Roadmap-sodobmhc.md`, `AGENTS-sodobmhc.md`, `checklist-sodobmhc.md`, và phần cuối `Build-logs-sodobmhc.md` trong thư mục dự án ngày 25/9/2026. Chưa đọc được `Danh-gia-tong-ket-sodobmhc.md` và `Co-che-chong-loi-thoi-sodobmhc.md` do kết nối tới máy bị gián đoạn giữa chừng — nên đọc 2 file này ở đầu phiên mới nếu cần thêm chi tiết đánh giá/cơ chế chống lỗi thời.*
