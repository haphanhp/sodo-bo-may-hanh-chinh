// views.js — Phase 1: chỉ render khung + empty state. KHÔNG chứa dữ liệu hành chính thật.

import { graphMarkup, mountGraph, timeBarMarkup } from "../graph/graph.js";
import { activeAt, isPast, dmy, TODAY } from "../core/time.js";
const esc = v => String(v ?? "").replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const banner = st => st.loadError
  ? `<div class="notice notice-warn"><strong>Chưa nạp được dữ liệu.</strong> ${esc(st.loadError)}</div>` : "";
const dataStats = st => {
  if (!st.report) return "";
  const c = st.report.counts, r = st.report;
  const chip = (k, n) => n ? `<span class="badge">${k}: ${n}</span>` : "";
  return `<div class="empty-meta" style="justify-content:flex-start;margin:0 0 16px">
    ${chip("Cơ quan", c.organizations)}${chip("Người", c.people)}${chip("Chức vụ", c.positions)}${chip("Quan hệ", c.relationships)}${chip("Nguồn", c.sources)}
    <span class="badge ${r.errors.length ? "badge-accent" : ""}">Lỗi: ${r.errors.length}</span>
    <span class="badge">Cảnh báo: ${r.warnings.length}</span></div>`;
};
const table = (cols, rows) => `<div class="card table-wrap"><table class="data-table">
  <thead><tr>${cols.map(c => `<th>${c}</th>`).join("")}</tr></thead>
  <tbody>${rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
const list = (st, key) => [...(st.index?.perType?.[key]?.values() ?? [])];
const nameOf = e => esc(e?.name?.vi ?? e?.title ?? e?.id ?? "");
const link = (url, text) => url ? `<a href="${esc(url)}" target="_blank" rel="noopener">${esc(text ?? url)}</a>` : "—";

const empty = ({ ico, title, desc, phase, extra = "" }) => `
  <div class="empty-state">
    <div class="empty-ico">${ico}</div>
    <div class="empty-title">${title}</div>
    <p class="empty-desc">${desc}</p>
    <div class="empty-meta"><span class="badge badge-accent">Sẽ có ở ${phase}</span><span class="badge">Chưa nạp dữ liệu</span></div>
    ${extra}
  </div>`;

const head = (title, sub) => `<div class="view-head"><h1>${title}</h1><p class="sub">${sub}</p></div>`;

export const VIEWS = {
  map: {
    label: "Bản đồ",
    render: st => banner(st) + head("Bản đồ bộ máy", st.index
      ? `Sơ đồ phân cấp — ${st.report.counts.organizations} cơ quan đã nạp. Bấm node để xem chi tiết bên phải.`
      : "Sơ đồ quan hệ giữa các cơ quan.") +
      (st.index ? timeBarMarkup(st.asOf ?? TODAY) + graphMarkup() : empty({ ico: "🗺", title: "Chưa có dữ liệu để vẽ", desc: "Cần nạp được data/*.json trước.", phase: "Phase 2" })),
    mount: st => { if (st.index) mountGraph(); }
  },
  organizations: {
    label: "Cơ quan",
    render: st => {
      const asOf = st.asOf ?? TODAY;
      const all = list(st, "organizations");
      const items = all.filter(o => activeAt(o, asOf));
      if (!items.length) return head("Cơ quan", "Quốc hội, Chủ tịch nước, Chính phủ, các Bộ, tỉnh/thành.") + banner(st) + empty({ ico: "🏢", title: "Chưa có danh sách cơ quan", desc: "Dữ liệu đọc từ data/organizations.json.", phase: "Phase 2 → 10" });
      const hidden = all.length - items.length;
      return head("Cơ quan", `${items.length} cơ quan tại thời điểm ${dmy(asOf)}${hidden ? ` · ${hidden} cơ quan không tồn tại ở mốc này (đã giải thể hoặc chưa thành lập)` : ""}`) +
        banner(st) + (isPast(asOf) ? `<div class="notice notice-warn">📅 Đang xem cơ cấu tại <strong>${dmy(asOf)}</strong>. Đổi mốc thời gian ở tab <strong>Bản đồ</strong>.</div>` : "") + dataStats(st) +
        table(["Tên", "Viết tắt", "Trụ sở", "Điện thoại", "Website", "Nguồn"],
          items.map(o => [
            `<strong data-entity="${esc(o.id)}">${nameOf(o)}</strong>` + (o.status === "dissolved" ? ` <span class="badge rel-bad">đã kết thúc ${dmy(o.effective_to)}</span>` : ""), esc(o.short_name) || "—",
            esc(o.contact?.address) || "—",
            (o.contact?.phone ?? []).map(esc).join(", ") || "<em>chưa xác minh</em>",
            (o.contact?.website ?? []).map(u => link(u, u.replace(/^https?:\/\//, ""))).join("<br>") || "—",
            `${(o.source_ids ?? []).length} nguồn`
          ]));
    }
  },
  people: {
    label: "Con người",
    render: st => {
      const items = list(st, "people");
      if (!items.length) return head("Con người", "Người đang giữ chức vụ.") + banner(st) + empty({ ico: "👤", title: "Chưa có danh sách người", desc: "Đọc từ data/people.json.", phase: "Phase 4" });
      return head("Con người", `${items.length} người đã nạp`) + banner(st) +
        table(["Họ tên", "Chức vụ", "Cơ quan", "Ghi chú"], items.map(p => {
          const pos = p.positions?.[0] ?? {};
          return [`<strong data-entity="${esc(p.id)}">${nameOf(p)}</strong>`, nameOf(st.index.get(pos.position_id)) || "—",
            nameOf(st.index.get(pos.organization_id)) || "—",
            `<span class="muted-note">${esc(p.notes)}</span>`];
        }));
    }
  },
  positions: {
    label: "Chức vụ",
    render: st => {
      const items = list(st, "positions");
      if (!items.length) return head("Chức vụ", "Chức danh cùng chức năng, quyền hạn, căn cứ pháp lý.") + banner(st) + empty({ ico: "⚖", title: "Chưa có danh sách chức vụ", desc: "Đọc từ data/positions.json.", phase: "Phase 4" });
      return head("Chức vụ", `${items.length} chức vụ đã nạp`) + banner(st) +
        table(["Chức danh", "Cấp", "Chức năng chính", "Căn cứ pháp lý"], items.map(p => [
          `<strong>${nameOf(p)}</strong>`, esc(p.level) || "—",
          (p.functions ?? []).map(esc).join("<br>") || "—",
          (p.legal_basis ?? []).map(esc).join("<br>") || "—"
        ]));
    }
  },
  procedures: {
    label: "Thủ tục",
    render: st => {
      const items = list(st, "procedures");
      if (!items.length) return head("Thủ tục hành chính", "Quy trình từng bước: nộp hồ sơ → kiểm tra → thẩm định → phê duyệt → nhận kết quả.") + banner(st) +
        empty({ ico: "📋", title: "Chưa nạp thủ tục nào", desc: "Giao diện đã sẵn sàng: mỗi thủ tục sẽ hiện các bước theo thứ tự, cơ quan tiếp nhận, cơ quan chịu trách nhiệm, hồ sơ yêu cầu, lệ phí, kết quả và căn cứ pháp lý. Dữ liệu thật đọc từ data/procedures.json — đang chờ thu thập (xem Prompt #25 trong Promts-sodobmhc.md).", phase: "Phase 6 (dữ liệu)" });
      return head("Thủ tục hành chính", `${items.length} thủ tục đã nạp`) + banner(st) +
        table(["Thủ tục", "Cơ quan tiếp nhận", "Số bước", "Đối tượng"], items.map(pr => [
          `<strong data-entity="${esc(pr.id)}">${nameOf(pr)}</strong>`,
          nameOf(st.index.get(pr.receiving_organization_id)) || "—",
          String((pr.steps ?? []).length || "—"),
          (pr.applicant?.types ?? []).map(t => ({ individual: "Cá nhân", organization: "Tổ chức" }[t] ?? t)).join(", ") || "—"
        ]));
    }
  },
  documents: {
    label: "Văn bản",
    render: st => {
      const items = list(st, "documents");
      const T = { constitution: "Hiến pháp", law: "Luật", resolution: "Nghị quyết", decree: "Nghị định",
        decision: "Quyết định", circular: "Thông tư", directive: "Chỉ thị", regulation: "Quy định", official_letter: "Công văn" };
      if (!items.length) return head("Văn bản pháp luật", "Hiến pháp, luật, nghị quyết, nghị định, quyết định, thông tư…") + banner(st) +
        empty({ ico: "📜", title: "Chưa có văn bản", desc: "Đọc từ data/documents.json.", phase: "Phase 7" });
      const order = ["constitution","law","resolution","decree","circular","decision","directive","regulation","official_letter"];
      const sorted = [...items].sort((a, b) => order.indexOf(a.type) - order.indexOf(b.type) ||
        String(b.effective_date).localeCompare(String(a.effective_date)));
      return head("Văn bản pháp luật", `${items.length} văn bản đã nạp — sắp theo thứ bậc hiệu lực pháp lý`) + banner(st) +
        table(["Loại", "Số hiệu", "Tên văn bản", "Cơ quan ban hành", "Hiệu lực"], sorted.map(d => [
          `<span class="badge">${esc(T[d.type] ?? d.type)}</span>`,
          esc(d.number) || "—",
          `<strong data-entity="${esc(d.id)}">${esc(d.title.vi)}</strong>`,
          nameOf(st.index.get(d.issuer_id)) || "—",
          d.effective_date ? esc(String(d.effective_date).split("-").reverse().join("/")) : "—"
        ]));
    }
  },
  licenses:      { label: "Giấy phép", render: st => banner(st) + head("Giấy phép / chứng chỉ / biểu mẫu", "Kết quả đầu ra của thủ tục: giấy phép, chứng chỉ, con dấu, biểu mẫu.") + empty({ ico: "📄", title: "Chưa có giấy phép", desc: "Đọc từ data/licenses.json và data/forms.json, liên kết ngược về thủ tục và cơ quan cấp.", phase: "Phase 6" }) },
  sources: {
    label: "Nguồn",
    render: st => {
      const items = list(st, "sources");
      if (!items.length) return head("Nguồn thông tin", "Mỗi dữ kiện phải có ít nhất một nguồn.") + banner(st) +
        empty({ ico: "🔗", title: "Chưa có danh mục nguồn", desc: "Đọc từ data/sources.json.", phase: "Phase 8" });
      const REL = { official: ["Chính thức", "rel-ok"], secondary_source: ["Thứ cấp", "rel-mid"],
        unverified: ["Chưa xác minh", "rel-bad"] };
      const TYPE = { official_document: "Văn bản chính thức", official_website: "Trang chính chủ",
        government_portal: "Cổng thông tin nhà nước", legal_database: "CSDL pháp luật",
        official_dataset: "Dữ liệu mở", secondary_source: "Nguồn thứ cấp", news: "Báo chí", other: "Khác" };
      const count = k => items.filter(x => x.reliability === k).length;
      const unused = items.filter(x => !(st.index.citedBy.get(x.id) ?? []).length).length;
      const stats = `<div class="empty-meta" style="justify-content:flex-start;margin:0 0 16px">
        <span class="badge rel-ok">Chính thức: ${count("official")}</span>
        <span class="badge rel-mid">Thứ cấp: ${count("secondary_source")}</span>
        ${count("unverified") ? `<span class="badge rel-bad">Chưa xác minh: ${count("unverified")}</span>` : ""}
        <span class="badge">Không có mục nào trích dẫn: ${unused}</span></div>`;
      const sorted = [...items].sort((a, b) =>
        (st.index.citedBy.get(b.id) ?? []).length - (st.index.citedBy.get(a.id) ?? []).length);
      return head("Nguồn thông tin", `${items.length} nguồn — ưu tiên nguồn chính thức .gov.vn, không bịa link`) + banner(st) + stats +
        table(["#", "Tên nguồn", "Cơ quan / đơn vị", "Loại", "Độ tin cậy", "Được trích dẫn", "Ngày truy cập"],
          sorted.map((x, i) => {
            const cited = st.index.citedBy.get(x.id) ?? [];
            const [lab, cls] = REL[x.reliability] ?? [x.reliability, ""];
            return [`[${i + 1}]`, link(x.url, x.title) + (x.notes ? `<div class="muted-note">${esc(x.notes)}</div>` : ""),
              esc(x.publisher?.name) || "—", esc(TYPE[x.type] ?? x.type),
              `<span class="badge ${cls}">${esc(lab)}</span>`,
              cited.length ? `${cited.length} mục` : `<span class="muted-note">chưa dùng</span>`,
              esc(x.accessed_date)];
          }));
    }
  },
  help: {
    label: "Hướng dẫn",
    render: () => head("Hướng dẫn sử dụng", "Cách dùng ứng dụng và nguyên tắc dữ liệu của dự án.") + `
      <div class="card" style="padding:24px"><div class="prose">
        <h2>1. Ứng dụng này là gì</h2>
        <p>Bản đồ tra cứu bộ máy hành chính Việt Nam: cơ quan, chức vụ, con người, thủ tục, văn bản, giấy phép và quan hệ giữa chúng — mỗi dữ kiện đều dẫn nguồn.</p>
        <h2>2. Cách dùng</h2>
        <ul>
          <li><strong>Sơ đồ</strong>: một cấp hiển thị tối đa 6 ô; nếu nhiều hơn, dưới ô cha có thanh <code>‹ 1–6 / 51 ›</code> để lật sang 6 đơn vị tiếp theo. Nút ⇱ mở hết cấp dưới, ⤢ đưa sơ đồ vừa màn hình.</li><li><strong>Thanh bên trái</strong>: chuyển giữa các mục. Địa chỉ trên trình duyệt đổi theo (ví dụ <code>#/organizations</code>) nên có thể lưu/chia sẻ đúng mục đang xem.</li>
          <li><strong>Ô tìm kiếm</strong> trên đầu trang (phím tắt <code>Ctrl + K</code>): tìm đồng thời trong cơ quan, người, chức vụ và nguồn. Gõ không dấu vẫn ra kết quả ("bo tai chinh"), tìm được cả tên viết tắt (BTC, VKSNDTC), địa chỉ, số điện thoại và email.</li>
          <li><strong>Bảng chi tiết bên phải</strong>: hiện thông tin của đối tượng đang chọn, kèm danh sách nguồn và ngày kiểm chứng cuối.</li>
          <li><strong>Time Machine</strong> (thanh 📅 ở tab Bản đồ): chọn một ngày bất kỳ hoặc bấm các mốc có sẵn để xem bộ máy <em>tại thời điểm đó</em> — ví dụ chọn 28/02/2025 sẽ thấy lại Bộ Kế hoạch và Đầu tư, Bộ Giao thông vận tải, Bộ Thông tin và Truyền thông… trước đợt sáp nhập. Danh sách ở tab Cơ quan cũng đổi theo.</li>
          <li><strong>Nút ◐</strong> góc phải: đổi giao diện sáng/tối.</li>
        </ul>
        <h2>3. Trạng thái hiện tại</h2>
        <p>Đang ở <strong>Phase 9</strong>: đã có data engine, sơ đồ quan hệ, bảng chi tiết, tìm kiếm toàn cục, thủ tục hành chính, văn bản pháp luật và <strong>Time Machine</strong> — xem bộ máy tại một thời điểm bất kỳ trong quá khứ. Dữ liệu thật gồm 5 cơ quan trung ương, 14 Bộ, 3 cơ quan ngang Bộ, 34 tỉnh/thành phố trực thuộc Trung ương (kèm Chủ tịch UBND và Bí thư Tỉnh/Thành ủy) 3 thủ tục hành chính mẫu, 16 văn bản pháp luật và 7 cơ quan đã kết thúc hoạt động (giữ cho mục đích lịch sử).</p><p class="muted-note">Ghi chú kỹ thuật: trình duyệt chặn đọc file JSON khi mở bằng <code>file://</code> — chạy <code>mo-app.bat</code> trong thư mục dự án (hoặc <code>python -m http.server 8080</code>) rồi mở <code>http://localhost:8080</code>.</p><p style="display:none">Phase 1: mới có khung giao diện, điều hướng và các trạng thái trống. Chưa nạp dữ liệu hành chính thật; dữ liệu thô đã tra cứu nằm trong các file <code>01–16-*.md</code> của dự án và chỉ được ráp vào <code>data/*.json</code> ở Phase 10.</p>
        <h2>4. Phạm vi</h2>
        <p>Đào sâu <strong>cấp thượng tầng</strong> (Quốc hội, Chủ tịch nước, Chính phủ, TAND tối cao, VKSND tối cao, 14 Bộ và 3 cơ quan ngang Bộ) và <strong>34 tỉnh/thành phố trực thuộc trung ương</strong>. Cấp xã/phường/đặc khu chỉ dừng ở mức liệt kê (tổng số và cơ cấu theo từng tỉnh). Cấp huyện đã kết thúc hoạt động từ 01/7/2025, chỉ giữ lại cho mục đích lịch sử.</p>
        <h2>5. Các mốc thay đổi bộ máy 2025–2026 cần nhớ</h2>
        <p>Rất nhiều tài liệu và bài hướng dẫn trên mạng — kể cả bài đề năm 2026 — vẫn ghi cơ quan cũ. Khi tra cứu bất kỳ thủ tục nào, hãy đối chiếu với các mốc sau:</p>
        <ul>
          <li><strong>01/3/2025</strong> — hợp nhất, giải thể nhiều Bộ: Bộ Kế hoạch và Đầu tư → nhập vào <strong>Bộ Tài chính</strong>; Bộ Giao thông vận tải → <strong>Bộ Xây dựng</strong>; Bộ Thông tin và Truyền thông → chia về <strong>Bộ Khoa học và Công nghệ</strong> và <strong>Bộ Văn hóa, Thể thao và Du lịch</strong>; Bộ Tài nguyên và Môi trường + Bộ Nông nghiệp và PTNT → <strong>Bộ Nông nghiệp và Môi trường</strong>; Bộ Lao động – Thương binh và Xã hội giải thể; lập <strong>Bộ Dân tộc và Tôn giáo</strong>.</li>
          <li><strong>01/3/2025</strong> — quản lý và cấp đổi <strong>giấy phép lái xe</strong> chuyển từ ngành Giao thông vận tải sang <strong>Bộ Công an</strong>: nộp tại Công an cấp xã hoặc Phòng Cảnh sát giao thông, không còn nộp ở Sở GTVT.</li>
          <li><strong>01/7/2025</strong> — <strong>kết thúc hoạt động của cấp huyện</strong> trên cả nước, chuyển sang chính quyền địa phương 2 cấp (tỉnh – xã); 63 tỉnh/thành sáp nhập còn 34. Thủ tục nào còn ghi “UBND cấp huyện” là đã lỗi thời.</li>
          <li><strong>30/4/2026</strong> — Đồng Nai lên <strong>thành phố trực thuộc Trung ương</strong> (thành phố thứ 7), cơ cấu hiện nay là 27 tỉnh + 7 thành phố.</li>
          <li><strong>01/7/2026</strong> — cấp <strong>Phiếu lý lịch tư pháp</strong> chuyển từ Sở Tư pháp (Bộ Tư pháp) sang <strong>cơ quan Công an</strong> (Công an cấp tỉnh / Cục Hồ sơ nghiệp vụ Bộ Công an); bản điện tử có giá trị như bản giấy.</li>
        </ul>
        <p class="muted-note">Quy tắc thực dụng: với mọi thủ tục, <strong>mặc định nghi ngờ trường “nơi nộp hồ sơ”</strong> trong các bài hướng dẫn và kiểm tra lại theo 5 mốc trên.</p>
        <h2>6. Nguyên tắc dữ liệu</h2>
        <ul>
          <li>Không bịa thông tin: thiếu thì để trống, không đoán.</li>
          <li>Mỗi đối tượng phải có ít nhất một nguồn trích dẫn.</li>
          <li>Ưu tiên nguồn chính thức <code>.gov.vn</code> khi các nguồn xung đột; nếu chưa chốt được thì đánh dấu "chưa xác minh", không tự chọn một bên.</li>
          <li>Giữ lịch sử khi cơ quan sáp nhập/đổi tên (<code>effective_from</code> / <code>effective_to</code>) thay vì xóa dữ liệu cũ.</li>
        </ul>
        <h2>7. Nguồn thông tin lấy từ đâu</h2>
        <p>Danh mục nguồn đầy đủ (kèm link gốc và ngày truy cập) sẽ hiển thị ở mục <strong>Nguồn</strong> khi Phase 8 hoàn thành, lấy từ <code>data/sources.json</code>. Toàn bộ quy tắc và nhật ký build nằm trong <code>AGENTS.md</code>, <code>Claude-sodobmhc.md</code>, <code>Roadmap-sodobmhc.md</code>, <code>Build-logs-sodobmhc.md</code> của dự án.</p>
      </div></div>`
  }
};
