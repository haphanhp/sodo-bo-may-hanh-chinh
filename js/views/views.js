// views.js — Phase 1: chỉ render khung + empty state. KHÔNG chứa dữ liệu hành chính thật.
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
    render: () => head("Bản đồ bộ máy", "Sơ đồ quan hệ giữa các cơ quan: cấp trên – cấp dưới, phối hợp, cấp phép, thanh tra…") + `
      <div class="graph-canvas">
        <div class="graph-toolbar"><button class="icon-btn" disabled>＋</button><button class="icon-btn" disabled>－</button><button class="icon-btn" disabled>⟲</button></div>
        ${empty({ ico: "🗺", title: "Chưa có graph", desc: "Khung đồ thị (nodes + edges, zoom, pan, expand/collapse) sẽ được dựng ở Phase 3, sau khi data engine ở Phase 2 chạy được.", phase: "Phase 3" })}
      </div>`
  },
  organizations: { label: "Cơ quan", render: () => head("Cơ quan", "Quốc hội, Chủ tịch nước, Chính phủ, các Bộ, tỉnh/thành, xã/phường/đặc khu.") + empty({ ico: "🏢", title: "Chưa có danh sách cơ quan", desc: "Dữ liệu sẽ đọc từ data/organizations.json. Dữ liệu thô đã tra cứu đang nằm ở các file 01–16-*.md, chỉ ráp vào JSON ở Phase 10.", phase: "Phase 2 → 10" }) },
  people:        { label: "Con người", render: () => head("Con người", "Người đang giữ chức vụ — tách riêng khỏi chức vụ để thay người không phá cấu trúc.") + empty({ ico: "👤", title: "Chưa có danh sách người", desc: "Đọc từ data/people.json, mỗi người gắn với position_id + organization_id kèm mốc thời gian from/to.", phase: "Phase 4" }) },
  positions:     { label: "Chức vụ", render: () => head("Chức vụ", "Chức danh (Bộ trưởng, Chủ tịch UBND tỉnh…) cùng chức năng, quyền hạn, căn cứ pháp lý.") + empty({ ico: "⚖", title: "Chưa có danh sách chức vụ", desc: "Đọc từ data/positions.json. Position ≠ Person: chức vụ tồn tại độc lập với người đang giữ.", phase: "Phase 4" }) },
  procedures:    { label: "Thủ tục", render: () => head("Thủ tục hành chính", "Quy trình từng bước: nộp hồ sơ → kiểm tra → thẩm định → phê duyệt → nhận kết quả.") + empty({ ico: "📋", title: "Chưa có thủ tục", desc: "Đọc từ data/procedures.json, kèm hồ sơ yêu cầu, lệ phí, thời hạn, cơ quan tiếp nhận và cơ quan chịu trách nhiệm.", phase: "Phase 6" }) },
  documents:     { label: "Văn bản", render: () => head("Văn bản pháp luật", "Hiến pháp, luật, nghị quyết, nghị định, quyết định, thông tư, chỉ thị, công văn.") + empty({ ico: "📜", title: "Chưa có văn bản", desc: "Đọc từ data/documents.json, kèm quan hệ pháp lý giữa các văn bản (căn cứ, sửa đổi, thay thế).", phase: "Phase 7" }) },
  licenses:      { label: "Giấy phép", render: () => head("Giấy phép / chứng chỉ / biểu mẫu", "Kết quả đầu ra của thủ tục: giấy phép, chứng chỉ, con dấu, biểu mẫu.") + empty({ ico: "📄", title: "Chưa có giấy phép", desc: "Đọc từ data/licenses.json và data/forms.json, liên kết ngược về thủ tục và cơ quan cấp.", phase: "Phase 6" }) },
  sources:       { label: "Nguồn", render: () => head("Nguồn thông tin", "Mỗi dữ kiện phải có ít nhất một nguồn — ưu tiên nguồn chính thức .gov.vn.") + empty({ ico: "🔗", title: "Chưa có danh mục nguồn", desc: "Đọc từ data/sources.json: tên nguồn, cơ quan ban hành, số hiệu văn bản, ngày ban hành, ngày truy cập, mức độ tin cậy và link gốc (không bịa link).", phase: "Phase 8" }) },
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
        <p>Đang ở <strong>Phase 1 — ứng dụng rỗng</strong>: mới có khung giao diện, điều hướng và các trạng thái trống. Chưa nạp dữ liệu hành chính thật; dữ liệu thô đã tra cứu nằm trong các file <code>01–16-*.md</code> của dự án và chỉ được ráp vào <code>data/*.json</code> ở Phase 10.</p>
        <h2>4. Nguyên tắc dữ liệu</h2>
        <ul>
          <li>Không bịa thông tin: thiếu thì để trống, không đoán.</li>
          <li>Mỗi đối tượng phải có ít nhất một nguồn trích dẫn.</li>
          <li>Ưu tiên nguồn chính thức <code>.gov.vn</code> khi các nguồn xung đột; nếu chưa chốt được thì đánh dấu "chưa xác minh", không tự chọn một bên.</li>
          <li>Giữ lịch sử khi cơ quan sáp nhập/đổi tên (<code>effective_from</code> / <code>effective_to</code>) thay vì xóa dữ liệu cũ.</li>
        </ul>
        <h2>5. Nguồn thông tin lấy từ đâu</h2>
        <p>Danh mục nguồn đầy đủ (kèm link gốc và ngày truy cập) sẽ hiển thị ở mục <strong>Nguồn</strong> khi Phase 8 hoàn thành, lấy từ <code>data/sources.json</code>. Toàn bộ quy tắc và nhật ký build nằm trong <code>AGENTS.md</code>, <code>Claude-sodobmhc.md</code>, <code>Roadmap-sodobmhc.md</code>, <code>Build-logs-sodobmhc.md</code> của dự án.</p>
      </div></div>`
  }
};
