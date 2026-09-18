// views.js — Phase 1: chỉ render khung + empty state. KHÔNG chứa dữ liệu hành chính thật.

import { graphMarkup, mountGraph } from "../graph/graph.js";
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
      (st.index ? graphMarkup() : empty({ ico: "🗺", title: "Chưa có dữ liệu để vẽ", desc: "Cần nạp được data/*.json trước.", phase: "Phase 2" })),
    mount: st => { if (st.index) mountGraph(); }
  },
  organizations: {
    label: "Cơ quan",
    render: st => {
      const items = list(st, "organizations");
      if (!items.length) return head("Cơ quan", "Quốc hội, Chủ tịch nước, Chính phủ, các Bộ, tỉnh/thành.") + banner(st) + empty({ ico: "🏢", title: "Chưa có danh sách cơ quan", desc: "Dữ liệu đọc từ data/organizations.json.", phase: "Phase 2 → 10" });
      return head("Cơ quan", `${items.length} cơ quan đã nạp từ data/organizations.json`) + banner(st) + dataStats(st) +
        table(["Tên", "Viết tắt", "Trụ sở", "Điện thoại", "Website", "Nguồn"],
          items.map(o => [
            `<strong data-entity="${esc(o.id)}">${nameOf(o)}</strong>`, esc(o.short_name) || "—",
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
  procedures:    { label: "Thủ tục", render: st => banner(st) + head("Thủ tục hành chính", "Quy trình từng bước: nộp hồ sơ → kiểm tra → thẩm định → phê duyệt → nhận kết quả.") + empty({ ico: "📋", title: "Chưa có thủ tục", desc: "Đọc từ data/procedures.json, kèm hồ sơ yêu cầu, lệ phí, thời hạn, cơ quan tiếp nhận và cơ quan chịu trách nhiệm.", phase: "Phase 6" }) },
  documents:     { label: "Văn bản", render: st => banner(st) + head("Văn bản pháp luật", "Hiến pháp, luật, nghị quyết, nghị định, quyết định, thông tư, chỉ thị, công văn.") + empty({ ico: "📜", title: "Chưa có văn bản", desc: "Đọc từ data/documents.json, kèm quan hệ pháp lý giữa các văn bản (căn cứ, sửa đổi, thay thế).", phase: "Phase 7" }) },
  licenses:      { label: "Giấy phép", render: st => banner(st) + head("Giấy phép / chứng chỉ / biểu mẫu", "Kết quả đầu ra của thủ tục: giấy phép, chứng chỉ, con dấu, biểu mẫu.") + empty({ ico: "📄", title: "Chưa có giấy phép", desc: "Đọc từ data/licenses.json và data/forms.json, liên kết ngược về thủ tục và cơ quan cấp.", phase: "Phase 6" }) },
  sources: {
    label: "Nguồn",
    render: st => {
      const items = list(st, "sources");
      if (!items.length) return head("Nguồn thông tin", "Mỗi dữ kiện phải có ít nhất một nguồn.") + banner(st) + empty({ ico: "🔗", title: "Chưa có danh mục nguồn", desc: "Đọc từ data/sources.json.", phase: "Phase 8" });
      return head("Nguồn thông tin", `${items.length} nguồn đã nạp — ưu tiên nguồn chính thức .gov.vn`) + banner(st) +
        table(["#", "Tên nguồn", "Cơ quan / đơn vị", "Loại", "Độ tin cậy", "Ngày truy cập"], items.map((x, i) => [
          `[${i + 1}]`, link(x.url, x.title), esc(x.publisher?.name) || "—",
          esc(x.type), esc(x.reliability), esc(x.accessed_date)
        ]));
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
          <li><strong>Thanh bên trái</strong>: chuyển giữa các mục. Địa chỉ trên trình duyệt đổi theo (ví dụ <code>#/organizations</code>) nên có thể lưu/chia sẻ đúng mục đang xem.</li>
          <li><strong>Ô tìm kiếm</strong> trên đầu trang: tìm đồng thời trong cơ quan, người, chức vụ, thủ tục, văn bản (bật ở Phase 5).</li>
          <li><strong>Bảng chi tiết bên phải</strong>: hiện thông tin của đối tượng đang chọn, kèm danh sách nguồn và ngày kiểm chứng cuối.</li>
          <li><strong>Nút ◐</strong> góc phải: đổi giao diện sáng/tối.</li>
        </ul>
        <h2>3. Trạng thái hiện tại</h2>
        <p>Đang ở <strong>Phase 3 — sơ đồ quan hệ</strong>: đã có data engine, dữ liệu thật cấp thượng tầng (5 cơ quan trung ương + 14 Bộ + 3 cơ quan ngang Bộ), sơ đồ phân cấp có zoom/kéo/mở-thu gọn và bảng chi tiết bên phải. Tìm kiếm (Phase 5), thủ tục (Phase 6), văn bản (Phase 7) chưa bật.</p><p class="muted-note">Ghi chú kỹ thuật: trình duyệt chặn đọc file JSON khi mở bằng <code>file://</code> — chạy <code>mo-app.bat</code> trong thư mục dự án (hoặc <code>python -m http.server 8080</code>) rồi mở <code>http://localhost:8080</code>.</p><p style="display:none">Phase 1: mới có khung giao diện, điều hướng và các trạng thái trống. Chưa nạp dữ liệu hành chính thật; dữ liệu thô đã tra cứu nằm trong các file <code>01–16-*.md</code> của dự án và chỉ được ráp vào <code>data/*.json</code> ở Phase 10.</p>
        <h2>4. Phạm vi</h2>
        <p>Đào sâu <strong>cấp thượng tầng</strong> (Quốc hội, Chủ tịch nước, Chính phủ, TAND tối cao, VKSND tối cao, 14 Bộ và 3 cơ quan ngang Bộ) và <strong>34 tỉnh/thành phố trực thuộc trung ương</strong>. Cấp xã/phường/đặc khu chỉ dừng ở mức liệt kê (tổng số và cơ cấu theo từng tỉnh). Cấp huyện đã kết thúc hoạt động từ 01/7/2025, chỉ giữ lại cho mục đích lịch sử.</p>
        <h2>5. Nguyên tắc dữ liệu</h2>
        <ul>
          <li>Không bịa thông tin: thiếu thì để trống, không đoán.</li>
          <li>Mỗi đối tượng phải có ít nhất một nguồn trích dẫn.</li>
          <li>Ưu tiên nguồn chính thức <code>.gov.vn</code> khi các nguồn xung đột; nếu chưa chốt được thì đánh dấu "chưa xác minh", không tự chọn một bên.</li>
          <li>Giữ lịch sử khi cơ quan sáp nhập/đổi tên (<code>effective_from</code> / <code>effective_to</code>) thay vì xóa dữ liệu cũ.</li>
        </ul>
        <h2>6. Nguồn thông tin lấy từ đâu</h2>
        <p>Danh mục nguồn đầy đủ (kèm link gốc và ngày truy cập) sẽ hiển thị ở mục <strong>Nguồn</strong> khi Phase 8 hoàn thành, lấy từ <code>data/sources.json</code>. Toàn bộ quy tắc và nhật ký build nằm trong <code>AGENTS.md</code>, <code>Claude-sodobmhc.md</code>, <code>Roadmap-sodobmhc.md</code>, <code>Build-logs-sodobmhc.md</code> của dự án.</p>
      </div></div>`
  }
};
