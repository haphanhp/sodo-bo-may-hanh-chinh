---
tags: [sodobmhc]
type: du-lieu
so-thu-tu: 1
nhom: co-quan-cap-trung-uong
nguon-tu-promt: Promts-sodobmhc.md#prompt-1
model: Claude Sonnet 5 (medium)
acc-trinh-duyet: Free — Brave
ngay-tra-loi: 2026-09-18
cross-check-promt: Promts-sodobmhc.md#prompt-2, #prompt-4
cross-check-model: Claude Sonnet 5 (Prompt #2, web search) · Claude không rõ phiên bản chính xác, có thể Sonnet 4.6 (Prompt #4, web_search/web_fetch)
cross-check-acc: Free — Opera X (Prompt #2) · Free — Cốc Cốc (Prompt #4)
cross-check-ngay: 2026-09-18
trang-thai: 🔵 xung đột trụ sở VPCTN ĐÃ CHỐT (Prompt #4); còn 1 mục treo — email VKSND tối cao vẫn chưa xác minh được qua công cụ tự động
---

### 01 — Cơ quan cấp trung ương

Dữ liệu thô từ **Prompt #1** (`Promts-sodobmhc.md`), trả lời bởi **Claude Sonnet 5 (medium)** qua acc Free trên trình duyệt **Brave**, ngày 2026-09-18. Đây là dữ liệu thô ban đầu (chưa chuyển sang JSON theo schema `context-bmhc`) — dùng để Pro kiểm chứng và ráp vào `data/organizations.json` khi tới Phase 10.

Ghi chú chung của người tra cứu: số điện thoại / email đường dây nóng chính thức cấp **toàn cơ quan** không tìm thấy công khai cho cả 5 cơ quan dưới đây — các số/email ghi được (nếu có) chỉ thuộc 1 bộ phận cụ thể (ví dụ Thư viện Quốc hội, Văn phòng Chính phủ), không nên dùng làm dữ liệu liên hệ chính thức của toàn tổ chức.

> **Cập nhật từ cross-check (Prompt #2, acc Opera X, Claude Sonnet 5 — web search, 2026-09-18):** đã bổ sung SĐT/Fax/Email/Website mới xác minh cho Văn phòng Chủ tịch nước và VKSND tối cao; xác nhận lại (khớp) trụ sở TAND tối cao & VKSND tối cao; chốt quyết định schema "Chủ tịch nước = position, Văn phòng Chủ tịch nước = organization" theo Điều 86–87 Hiến pháp 2013.
>
> **Cập nhật từ Prompt #4 (acc Cốc Cốc, Claude — web_search/web_fetch, 2026-09-18):** ĐÃ CHỐT xung đột trụ sở Văn phòng Chủ tịch nước — trụ sở hiện tại, đang hoạt động là **12 Ngô Quyền, phường Hoàn Kiếm, Hà Nội** (khớp dữ liệu gốc Prompt #1), chuyển đến từ 23/3/2026 theo Thông báo 270/TB-VPCTN, sau khi công trình Bắc Bộ Phủ khánh thành 2/2/2026; trước đó (trước 23/3/2026) VPCTN đóng tại **1A/1B Hoàng Hoa Thám, phường Ba Đình** — KHÔNG phải "2 Hùng Vương" như Prompt #2 từng ghi. Địa chỉ "2 Hùng Vương" nhiều khả năng là dữ liệu cũ/lỗi chỉ mục tìm kiếm hoặc nhầm từ nguồn thứ cấp khác — trang vpctn.gov.vn hiện tại không còn hiển thị địa chỉ này. Mục email VKSND tối cao **vẫn còn treo** — 2 lần tra bằng công cụ web search/fetch tự động đều không xác minh được "tận mắt" (gặp cache cũ/lỗi gán URL), cần tra thủ công bằng trình duyệt thật.
>
> **Cảnh báo dữ liệu (áp dụng cho mọi cơ quan, không riêng 5 cơ quan này):** chuỗi số điện thoại `080.43162` và địa chỉ `16 Lê Hồng Phong, Ba Đình, Hà Nội` xuất hiện lặp lại trên nhiều trang chinhphu.vn/baochinhphu.vn gắn tag các cơ quan khác nhau (đã gặp khi tra cả Quốc hội và TAND tối cao) — đây thực chất là **thông tin bản quyền/footer của Báo Điện tử Chính phủ**, KHÔNG phải SĐT/địa chỉ của cơ quan đang tra. Đã thêm thành luật cảnh giác trong `Claude-sodobmhc.md` (luật 16).

---

#### 1. Quốc hội Việt Nam

- ID đề xuất: `org-quochoi-vn`
- Loại entity: organization
- Tên (vi): Quốc hội nước Cộng hòa xã hội chủ nghĩa Việt Nam
- Cấp trên: không có (cơ quan quyền lực nhà nước cao nhất)
- Trụ sở: Nhà Quốc hội, số 1 đường Độc Lập, phường Điện Biên (Ba Đình), Hà Nội
- SĐT: *chưa xác minh cấp toàn cơ quan* — cross-check (Prompt #2) tìm thêm được các số bộ phận: Vụ Thông tin 080.46528, đầu mối hỗ trợ Cổng TTĐT 080.44322–080.46050, Thư viện Quốc hội 080.41947, Vụ Dân tộc 080.41537 — KHÔNG dùng số nào trong đây làm SĐT đại diện toàn cơ quan
- Email: *chưa xác minh cấp toàn cơ quan* — email bộ phận tìm được: hotro@quochoi.vn (Cổng TTĐT), thuvienquochoi@quochoi.vn (Thư viện), vu_dantoc@qh.gov.vn (Vụ Dân tộc)
- Website: quochoi.vn
- Chức năng / nhiệm vụ / quyền hạn: cơ quan đại biểu cao nhất của nhân dân, cơ quan quyền lực nhà nước cao nhất; thực hiện quyền lập hiến, lập pháp; quyết định các vấn đề quan trọng của đất nước; giám sát tối cao hoạt động của Nhà nước.
- Trạng thái xác minh: đã xác minh (tên, trụ sở, website) / chưa xác minh (SĐT, email toàn cơ quan — đã cross-check 1 lần ở Prompt #2, vẫn không tìm được)
- Mức xác minh: toàn cơ quan (tên, trụ sở, website) — bộ phận cụ thể (SĐT, email)
- Ghi chú: Nhà Quốc hội khánh thành 2014, trung tâm chính trị Ba Đình. Chủ tịch Quốc hội đương nhiệm: Trần Thanh Mẫn *(chưa xác minh lại độc lập, theo tin tức tại thời điểm tra cứu)*. ⚠️ Cross-check phát hiện: SĐT "080.43162" / địa chỉ "16 Lê Hồng Phong" từng thấy gắn nhãn Văn phòng Quốc hội trên 1 số trang chinhphu.vn thực chất là footer bản quyền của Báo Điện tử Chính phủ — KHÔNG dùng.
- Nguồn: Cổng TTĐT Quốc hội[^1]; cross-check bộ phận: quochoi.vn/Vụ Thông tin[^6]

#### 2. Chủ tịch nước Việt Nam

- ID đề xuất: `org-chutichnuoc-vn`
- Loại entity: organization
- Tên (vi): Chủ tịch nước Cộng hòa xã hội chủ nghĩa Việt Nam (Văn phòng Chủ tịch nước)
- Cấp trên: không có (nguyên thủ quốc gia, do Quốc hội bầu, chịu trách nhiệm trước Quốc hội)
- Trụ sở: ✅ **ĐÃ CHỐT** (Prompt #4, 2026-09-18) — hiện tại: số 12 Ngô Quyền, phường Hoàn Kiếm, Hà Nội (trong khuôn viên Bắc Bộ Phủ, mặt còn lại là số 2 Lê Thạch), có hiệu lực từ 23/3/2026 theo Thông báo 270/TB-VPCTN[^11][^12], sau khi công trình Bắc Bộ Phủ khánh thành 2/2/2026 (cải tạo theo cơ chế cấp bách, Quốc hội cho phép 9/2025). Khớp với dữ liệu gốc Prompt #1[^2] và với chính trang vpctn.gov.vn khi Prompt #4 truy cập trực tiếp lại[^13].
- Trụ sở trước đó (effective_to 22/3/2026): 1A/1B Hoàng Hoa Thám, phường Ba Đình, Hà Nội[^11][^12] — KHÔNG phải "2 Hùng Vương, Ba Đình" như Prompt #2 từng ghi[^7]; địa chỉ "2 Hùng Vương" được Prompt #4 xác định là khả năng dữ liệu cũ/lỗi chỉ mục tìm kiếm hoặc nhầm nguồn thứ cấp — hiện KHÔNG còn xuất hiện trên vpctn.gov.vn, không dùng.
- SĐT: 080.43176 *(mới xác minh, cross-check Prompt #2, nguồn chính chủ vpctn.gov.vn)*[^7]
- Fax: 0437335256 *(mới xác minh)*[^7]
- Email: vanphongctnvn@gmail.com *(mới xác minh, nguồn chính chủ — lưu ý dùng domain @gmail.com, không phải .gov.vn, hơi bất thường nhưng được niêm yết công khai chính chủ)*[^7]
- Website: vpctn.gov.vn / president.gov.vn *(mới xác minh)*[^7]
- Chức năng / nhiệm vụ / quyền hạn: nguyên thủ quốc gia, thay mặt nước về đối nội, đối ngoại; thống lĩnh lực lượng vũ trang; công bố Hiến pháp, luật, pháp lệnh; bổ nhiệm/miễn nhiệm các chức danh do Hiến pháp quy định.
- Trạng thái xác minh: đã xác minh (SĐT, fax, email, website, trụ sở — đã giải quyết xung đột ở Prompt #4)
- Mức xác minh: toàn cơ quan (SĐT, fax, email, website, trụ sở)
- Quyết định schema (đã chốt qua Prompt #2): theo Điều 86–87 Hiến pháp 2013[^8], **"Chủ tịch nước" là một CHỨC VỤ (position)** do 1 cá nhân giữ, do Quốc hội bầu, chịu trách nhiệm và báo cáo công tác trước Quốc hội — KHÔNG phải organization tập thể. **"Văn phòng Chủ tịch nước" mới là ORGANIZATION** (cơ quan giúp việc/hành chính) — nên tách 2 entity riêng khi lên schema: `position-chu-tich-nuoc` (gắn Hiến pháp, nhiệm kỳ theo Quốc hội) + `org-vpctn-vn` (trụ sở, SĐT, email, website như trên).
- Ghi chú: Chủ tịch nước đương nhiệm: Lương Cường *(theo tin tức tại thời điểm tra cứu)*. ID đề xuất `org-chutichnuoc-vn` ở trên nên đổi thành `org-vpctn-vn` (Văn phòng Chủ tịch nước = organization) khi ráp JSON, tách riêng `position-chu-tich-nuoc` cho chức danh.
- Nguồn: Báo Lào Cai[^2]; vpctn.gov.vn/Liên hệ (chính chủ, lần tra Prompt #2 — dữ liệu lúc đó không khớp lần tra lại)[^7]; Điều 86–87 Hiến pháp 2013 qua thuvienphapluat.vn[^8]; Tuổi Trẻ[^11]; CafeF (dẫn Thông báo 270/TB-VPCTN)[^12]; vpctn.gov.vn (tra lại trực tiếp, Prompt #4)[^13]

#### 3. Chính phủ Việt Nam

- ID đề xuất: `org-chinhphu-vn`
- Loại entity: organization
- Tên (vi): Chính phủ nước Cộng hòa xã hội chủ nghĩa Việt Nam
- Cấp trên: chịu trách nhiệm trước Quốc hội
- Trụ sở: Văn phòng Chính phủ — số 01 Hoàng Hoa Thám, Ba Đình, Hà Nội
- SĐT: 080 43100 – 080 43569 (Văn phòng Chính phủ); Fax: 080 44130
- Email: vpcp@chinhphu.vn
- Website: chinhphu.vn (Cổng TTĐT Chính phủ); vpcp.chinhphu.vn (Văn phòng Chính phủ)
- Chức năng / nhiệm vụ / quyền hạn: cơ quan hành chính nhà nước cao nhất, thực hiện quyền hành pháp; thống nhất quản lý kinh tế, văn hóa, xã hội, quốc phòng, an ninh, đối ngoại; tổ chức thi hành Hiến pháp, luật, nghị quyết của Quốc hội.
- Trạng thái xác minh: đã xác minh
- Mức xác minh: toàn cơ quan
- Ghi chú: Thủ tướng đứng đầu Chính phủ; Bộ trưởng, Chủ nhiệm Văn phòng Chính phủ hiện nay: Đặng Xuân Phong *(theo tin tức tại thời điểm tra cứu)*.
- Nguồn: Cổng thông tin điện tử Chính phủ[^3]
- **⚠️ Lưu ý đối chiếu (quan trọng khi ráp JSON)**: "Chính phủ Việt Nam" (`org-chinhphu-vn`, thiết chế hợp hiến — Điều 94-96 Hiến pháp 2013) và "Văn phòng Chính phủ" (`org-vpcp-vn`, cơ quan ngang Bộ, xem chi tiết tại file `05-bo-nhom-3-4bo-3coquanngangbo.md`) là **2 entity/node KHÁC NHAU trong graph**, dù chia sẻ cùng địa chỉ/SĐT/email/website ở trên (vì Văn phòng Chính phủ là bộ máy giúp việc, đặt tại cùng trụ sở). Không gộp 2 node này thành 1 khi lên schema thật — đề xuất dùng quan hệ kiểu `shared_contact_info: true` giữa 2 node (xem "Việc cần làm" ở file 05) để thể hiện đúng vừa khác nhau vừa chung địa điểm liên hệ.

#### 4. Tòa án nhân dân tối cao

- ID đề xuất: `org-tandtc-vn`
- Loại entity: organization
- Tên (vi): Tòa án nhân dân tối cao
- Cấp trên: không có (đứng đầu hệ thống Tòa án nhân dân, chịu trách nhiệm trước Quốc hội)
- Trụ sở: số 01 Phạm Văn Bạch, phường Cầu Giấy, Hà Nội (chuyển đến từ 13/7/2026; trước đó tại 262 Đội Cấn, Ngọc Hà, Hà Nội) — ✅ **đã cross-check khớp** (Prompt #2): nhiều nguồn báo chí (Nhân Dân[^9], TTXVN/VietnamPlus, Tạp chí Tòa án[^4]) xác nhận cùng địa chỉ; 1 bài (11/5/2026, trước cả mốc 13/7) đã gọi thẳng đây là trụ sở chính, không chỉ nơi tiếp công dân
- SĐT: *chưa xác minh* — cross-check không tìm được thêm (trang toaan.gov.vn render bằng JavaScript, công cụ tra cứu không đọc được nội dung)
- Email: *chưa xác minh* — tương tự SĐT
- Website: toaan.gov.vn
- Chức năng / nhiệm vụ / quyền hạn: cơ quan xét xử cao nhất, thực hiện quyền tư pháp; giám đốc thẩm, tái thẩm bản án/quyết định của tòa án cấp dưới đã có hiệu lực; hướng dẫn áp dụng thống nhất pháp luật trong xét xử.
- Trạng thái xác minh: đã xác minh (tên, website, trụ sở — khớp 2 nguồn độc lập) / chưa xác minh (SĐT, email — đã cross-check 1 lần, vẫn không tìm được, khuyến nghị tra thủ công trực tiếp trên toaan.gov.vn bằng browser thật vì trang cần chạy JS)
- Mức xác minh: toàn cơ quan (tên, website, trụ sở) — không xác định (SĐT, email)
- Ghi chú: Chánh án đương nhiệm: Nguyễn Văn Quảng *(theo tin tức tại thời điểm tra cứu)*. Địa chỉ trụ sở có thay đổi trong năm 2026 (do sáp nhập/tái cơ cấu hành chính) — đã cross-check khớp, không cần theo dõi lại gấp. ⚠️ Cross-check lại gặp bẫy footer "080.43162 / 16 Lê Hồng Phong" gắn nhãn TAND tối cao — KHÔNG dùng (xem cảnh báo đầu file).
- Nguồn: Tạp chí Tòa án nhân dân[^4]; Nhân Dân[^9]

#### 5. Viện kiểm sát nhân dân tối cao

- ID đề xuất: `org-vksndtc-vn`
- Loại entity: organization
- Tên (vi): Viện kiểm sát nhân dân tối cao
- Cấp trên: không có (đứng đầu hệ thống Viện kiểm sát nhân dân, chịu trách nhiệm trước Quốc hội)
- Trụ sở: số 9 Phạm Văn Bạch, phường Cầu Giấy, Hà Nội — ✅ **đã cross-check khớp** (Prompt #2): trụ sở này đã tồn tại từ trước 2026 (ít nhất từ 2018 theo 1 nguồn); tên phường đổi từ "Yên Hòa, quận Cầu Giấy" sang "Cầu Giấy" theo đợt sáp nhập phường/xã 2025 — KHÔNG phải chuyển trụ sở mới, chỉ đổi tên đơn vị hành chính
- SĐT: 024.38255058 – 024.38255801110 *(mới xác minh, cross-check Prompt #2, nguồn chính chủ footer vksndtc.gov.vn)*[^10]
- Fax: 024.38255400 *(mới xác minh)*[^10]
- Email: *vẫn xung đột chưa giải quyết được* (đã tra 2 lần — Prompt #2 và Prompt #4 — cả 2 lần công cụ web search/fetch tự động đều không xác minh "tận mắt" được: lần 2 tìm thấy đoạn footer khớp định dạng chính thức cổng VKSNDTC ghi email `trangtinvkstc@vks.gov.vn`, nhưng URL công cụ tìm kiếm gán cho đoạn đó không hiển thị đúng nội dung khi fetch trực tiếp, và fetch trực tiếp vksndtc.gov.vn trả về bản có vẻ cũ/cache (~2020) — nhiều khả năng đúng nhưng chưa có xác nhận trực quan đáng tin 100%. Khuyến nghị: tra thủ công bằng trình duyệt thật (không dùng công cụ web search tích hợp) hoặc tìm văn bản chính thức (Quyết định về Quy chế quản lý/vận hành Cổng TTĐT VKSNDTC).
- Website: vksndtc.gov.vn
- Chức năng / nhiệm vụ / quyền hạn: thực hành quyền công tố, kiểm sát hoạt động tư pháp; bảo đảm pháp luật được chấp hành nghiêm chỉnh, thống nhất trong điều tra, truy tố, xét xử, thi hành án.
- Trạng thái xác minh: đã xác minh (tên, website, trụ sở, SĐT, fax) / chưa xác minh (email)
- Mức xác minh: toàn cơ quan (tên, website, trụ sở, SĐT, fax) — chưa xác định nguồn chính chủ (email)
- Ghi chú: Viện trưởng đương nhiệm: Nguyễn Huy Tiến, theo Chỉ thị 01/CT-VKSTC *(theo tin tức tại thời điểm tra cứu)*. Lưu ý chung: đổi tên phường/xã theo sáp nhập 2025 có thể ảnh hưởng địa chỉ nhiều cơ quan khác — khi thấy địa chỉ "mới" cần kiểm tra xem là chuyển trụ sở thật hay chỉ đổi tên đơn vị hành chính.
- Nguồn: thuvienphapluat.vn[^5]; vksndtc.gov.vn (footer, SĐT/Fax)[^10]; tra email lần 2 không xác minh được[^14]

---

#### Việc cần làm với file này

- [x] ✅ Cross-check (Prompt #2) các mục *chưa xác minh* của Quốc hội, Chủ tịch nước, TAND tối cao, VKSND tối cao — xong 1 vòng, còn Quốc hội + TAND vẫn chưa tìm được SĐT/email toàn cơ quan (giữ nguyên "chưa xác minh", không đoán).
- [x] ✅ Xác nhận "Chủ tịch nước" = position, "Văn phòng Chủ tịch nước" = organization (theo Điều 86–87 Hiến pháp 2013) — áp dụng khi lên schema thật.
- [x] ✅ Theo dõi lại địa chỉ trụ sở TAND tối cao & VKSND tối cao — cả 2 đã cross-check khớp dữ liệu cũ.
- [x] ✅ Giải quyết xung đột trụ sở Văn phòng Chủ tịch nước (Prompt #4) — chốt: hiện tại 12 Ngô Quyền, trước 23/3/2026 là 1A/1B Hoàng Hoa Thám (không phải 2 Hùng Vương).
- [ ] ❗ Xác minh lại email chính chủ VKSND tối cao — đã tra 2 lần (Prompt #2, #4) qua công cụ tự động, vẫn "vẫn xung đột chưa giải quyết được". Cần tra thủ công bằng trình duyệt thật hoặc văn bản chính thức. Không phải trường bắt buộc để tiếp tục Phase 10 — có thể để "chưa xác minh" và tiếp tục.
- [ ] Tra thủ công (browser thật, không dùng công cụ web search) SĐT/email toàn cơ quan của Quốc hội & TAND tối cao — trang cần chạy JS hoặc chỉ có số bộ phận.
- [ ] Khi ráp JSON: đổi ID `org-chutichnuoc-vn` → `org-vpctn-vn` (Văn phòng Chủ tịch nước), tách thêm `position-chu-tich-nuoc`; thêm `effective_from`/`effective_to` cho 2 trụ sở VPCTN (trước/sau 23/3/2026). Mỗi field cần map đúng `source_ids` tương ứng footnote dưới đây.

---

##### Nguồn tham khảo

[^1]: [Cổng thông tin điện tử Quốc hội](https://quochoi.vn/) — truy cập 2026-09-18
[^2]: [Văn phòng Chủ tịch nước thay đổi trụ sở làm việc — Báo Lào Cai](https://baolaocai.vn/van-phong-chu-tich-nuoc-thay-doi-tru-so-lam-viec-post896415.html) — truy cập 2026-09-18
[^3]: [Cổng thông tin điện tử Chính phủ](https://chinhphu.vn/thong-tin-bo-nganh?gmist=3660) — truy cập 2026-09-18
[^4]: [Tòa án nhân dân tối cao chuyển địa điểm tiếp công dân — Tạp chí Tòa án nhân dân](https://tapchitoaan.vn/index.php/tu-137-toa-an-nhan-dan-toi-cao-chuyen-dia-diem-tiep-cong-dan15942.html) — truy cập 2026-09-18
[^5]: [Địa chỉ trụ sở Viện kiểm sát nhân dân tối cao sau sáp nhập ở đâu — thuvienphapluat.vn](https://thuvienphapluat.vn/hoi-dap-phap-luat/dia-chi-tru-so-vien-kiem-sat-nhan-dan-toi-cao-sau-sap-nhap-o-dau-138070487.html) — truy cập 2026-09-18
[^6]: [Vụ Thông tin — quochoi.vn](https://quochoi.vn/vanphongquochoi/cocautochuc/khoiphucvuchung/Pages/vu-thong-tin.aspx); [Quy định — thuvienso.quochoi.vn](https://thuvienso.quochoi.vn/help/rules.jsp?locale=vi) — truy cập 2026-09-18 (cross-check Prompt #2, Opera X)
[^7]: [Liên hệ — Văn phòng Chủ tịch nước (chính chủ)](https://vpctn.gov.vn/lien-he) — truy cập 2026-09-18 (cross-check Prompt #2, Opera X)
[^8]: [Chủ tịch nước là người đứng đầu cơ quan nào? Chủ tịch nước có quyền sửa đổi Hiến pháp không? — thuvienphapluat.vn (Điều 86–87 Hiến pháp 2013)](https://thuvienphapluat.vn/phap-luat/chu-tich-nuoc-la-nguoi-dung-dau-co-quan-nao-chu-tich-nuoc-co-quyen-sua-doi-hien-phap-khong-275400-52867.html) — truy cập 2026-09-18 (cross-check Prompt #2, Opera X)
[^9]: [Tòa án nhân dân tối cao chuyển địa điểm tiếp công dân từ ngày 13/7 — Nhân Dân](https://nhandan.vn/toa-an-nhan-dan-toi-cao-chuyen-dia-diem-tiep-cong-dan-tu-ngay-137-post974797.html) — truy cập 2026-09-18 (cross-check Prompt #2, Opera X)
[^10]: [Tin tức hoạt động — vksndtc.gov.vn (footer SĐT/Fax chính chủ)](https://vksndtc.gov.vn/tintuc-HD) — truy cập 2026-09-18 (cross-check Prompt #2, Opera X)
[^11]: [Văn phòng Chủ tịch nước thay đổi trụ sở làm việc mới — Tuổi Trẻ](https://tuoitre.vn/van-phong-chu-tich-nuoc-thay-doi-tru-so-lam-viec-moi-20260320083914154.htm) — truy cập 2026-09-18 (Prompt #4, Cốc Cốc)
[^12]: [Chuyển trụ sở làm việc của Văn phòng Chủ tịch nước — CafeF, dẫn Thông báo 270/TB-VPCTN](https://cafef.vn/chuyen-tru-so-lam-viec-cua-van-phong-chu-tich-nuoc-18826032014205498.chn) — truy cập 2026-09-18 (Prompt #4, Cốc Cốc)
[^13]: [Trang chủ & trang Liên hệ — vpctn.gov.vn (tra lại trực tiếp lần 2)](https://vpctn.gov.vn/lien-he) — truy cập 2026-09-18 (Prompt #4, Cốc Cốc)
[^14]: Email VKSNDTC — kết quả tra lần 2 không xác minh được trực tiếp; nguồn nghi vấn (moha.gov.vn/eng/contact.html, có dấu hiệu lỗi gán URL của công cụ tìm kiếm) và vksndtc.gov.vn (bản fetch có vẻ cũ/cache) — truy cập 2026-09-18 (Prompt #4, Cốc Cốc) — CHƯA dùng làm nguồn chính thức
