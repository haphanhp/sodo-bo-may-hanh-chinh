export function renderDetailEmpty(){
  document.getElementById("detail-body").innerHTML = `
    <div class="empty-state" style="min-height:200px;border:0;background:none;padding:0">
      <div class="empty-ico">🔍</div>
      <div class="empty-title">Chưa chọn đối tượng</div>
      <p class="empty-desc">Chọn một cơ quan, người hoặc chức vụ để xem chi tiết: chức năng, nhiệm vụ, quyền hạn, liên hệ và nguồn trích dẫn.</p>
      <div class="empty-meta"><span class="badge">Phase 4</span></div>
    </div>`;
}
