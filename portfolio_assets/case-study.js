/**
 * PORTFOLIO TẠ QUỐC DUY — CASE STUDY PAGE CONTROLLER
 * Author: 🐱 Xu Xu & Tạ Quốc Duy
 * Feature: Standalone Full-Width Case Study Page for 6 Major Enterprises
 */

(function () {
  const CASE_ORDER = ["sala", "fclick", "luclam", "brewbanhmi", "bravigo", "lath", "phapviet", "namtien"];

  const CASE_META = {
    sala: { name: "Sala Garden", tag: "BĐS Sinh Thái Cao Cấp", icon: "trees" },
    fclick: { name: "Fclick", tag: "App & AI Automation", icon: "bot" },
    luclam: { name: "Lục Lam", tag: "Trà Thảo Mộc 40 Tỷ", icon: "sparkles" },
    brewbanhmi: { name: "Brew & Bánh Mì", tag: "F&B Bắc Mỹ", icon: "coffee" },
    bravigo: { name: "Bravigo", tag: "Phụ Kiện Ô Tô", icon: "car" },
    lath: { name: "LATH Group", tag: "Mỹ Phẩm & SEO", icon: "trending-up" },
    phapviet: { name: "Mắt Kính Pháp Việt", tag: "Social & O2O Freelance", icon: "glasses" },
    namtien: { name: "Xe Máy Nam Tiến", tag: "Showroom O2O & Ads", icon: "bike" }
  };

  function getQueryCase() {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("case");
    return key && CASE_ORDER.includes(key) ? key : "sala";
  }

  function getCaseData(caseKey) {
    const dataSource = window.caseStudiesData || (typeof caseStudiesData !== "undefined" ? caseStudiesData : null);
    if (!dataSource) return null;
    return dataSource[caseKey] || null;
  }

  window.loadCaseStudy = function (caseKey, shouldPushState = true) {
    if (!CASE_ORDER.includes(caseKey)) {
      caseKey = "sala";
    }

    const data = getCaseData(caseKey);
    const container = document.getElementById("caseStudyRenderContainer");
    if (!container) return;

    if (!data) {
      container.innerHTML = `
        <div style="text-align: center; padding: 60px 20px; color: var(--text-muted);">
          <i data-lucide="alert-circle" style="width: 42px; height: 42px; color: #EF4444; margin-bottom: 12px;"></i>
          <h3>Không tìm thấy dữ liệu dự án</h3>
          <p style="margin-top: 8px;">Dự án "${caseKey}" đang được cập nhật hoặc không tồn tại.</p>
          <a href="case-study.html?case=sala" class="btn btn-primary btn-sm" style="margin-top: 16px;">Về Case Study Sala Garden</a>
        </div>
      `;
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    // 1. Update switcher buttons active state
    const switcherBtns = document.querySelectorAll(".case-switcher-bar .case-pill-btn");
    switcherBtns.forEach((btn) => {
      if (btn.getAttribute("data-case") === caseKey) {
        btn.classList.add("active");
        // Scroll button into view inside horizontal switcher if needed
        btn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      } else {
        btn.classList.remove("active");
      }
    });

    // 2. Determine Prev / Next
    const currentIdx = CASE_ORDER.indexOf(caseKey);
    const prevKey = CASE_ORDER[(currentIdx - 1 + CASE_ORDER.length) % CASE_ORDER.length];
    const nextKey = CASE_ORDER[(currentIdx + 1) % CASE_ORDER.length];
    const prevMeta = CASE_META[prevKey];
    const nextMeta = CASE_META[nextKey];

    // 3. Render HTML
    let html = "";

    // === HERO CARD ===
    html += `
      <section class="case-hero-card" id="caseOverview">
        <div class="case-hero-meta-top">
          <span class="case-hero-category">
            <i data-lucide="folder-check"></i>
            <span>${data.category}</span>
          </span>
          <span class="case-hero-period">
            <i data-lucide="calendar" style="width: 14px; height: 14px; vertical-align: middle; margin-right: 4px;"></i>
            ${data.period}
          </span>
        </div>

        <h1 class="case-hero-title">${data.title}</h1>

        <div class="case-hero-company-row">
          <div class="case-hero-company-name">
            ${
              data.logoUrl
                ? `<img src="${data.logoUrl}" alt="${data.company}" style="height: 26px; width: auto; max-width: 110px; object-fit: contain; vertical-align: middle; margin-right: 8px;">`
                : `<i data-lucide="building" style="width: 18px; height: 18px; color: var(--accent-cyan);"></i>`
            }
            <span>${data.company}</span>
          </div>
          <span class="case-hero-role-badge">
            <i data-lucide="user-check"></i>
            <span>Vai trò: ${data.role}</span>
          </span>
        </div>

        <div class="case-narrative-split">
          <div class="narrative-block challenge">
            <div class="narrative-header" style="color: #F87171;">
              <i data-lucide="alert-triangle"></i>
              <span>Bài Toán Kinh Doanh &amp; Thách Thức</span>
            </div>
            <p>${data.challenge}</p>
          </div>

          <div class="narrative-block strategy">
            <div class="narrative-header" style="color: #34D399;">
              <i data-lucide="compass"></i>
              <span>Chiến Lược Tiếp Thị &amp; Giải Pháp Trực Tiếp</span>
            </div>
            <p>${data.strategy}</p>
          </div>
        </div>
      </section>
    `;

    // === LAUNCH PROJECT SHOWCASE (Sala Garden Thiên Phúc Vĩnh Hằng Viên) ===
    if (data.launchProject) {
      const lp = data.launchProject;
      html += `
        <section class="launch-project-showcase" id="launch-project">
          <div class="launch-project-header">
            <div class="launch-badge">
              <i data-lucide="sparkles"></i>
              <span>${lp.badge || "Dự Án Mở Rộng Tiêu Biểu"}</span>
            </div>
            <h2 class="launch-title">${lp.title}</h2>
            <p class="launch-subtitle">${lp.subtitle}</p>
          </div>

          <!-- Highlight Stats Strip -->
          <div class="launch-stats-grid">
            <div class="launch-stat-item">
              <span class="launch-stat-val">${(lp.stats && lp.stats.scale) || lp.scale || "32,54 Hecta"}</span>
              <span class="launch-stat-lbl">Quy Mô Diện Tích</span>
            </div>
            <div class="launch-stat-item">
              <span class="launch-stat-val">${(lp.stats && lp.stats.investment) || lp.investment || "450+ Tỷ VNĐ"}</span>
              <span class="launch-stat-lbl">Tổng Vốn Đầu Tư</span>
            </div>
            <div class="launch-stat-item">
              <span class="launch-stat-val">${(lp.stats && lp.stats.location) || lp.location || "Bãi Dài, P. Uông Bí & Yên Tử, Tỉnh Quảng Ninh"}</span>
              <span class="launch-stat-lbl">Vị Trí Chiến Lược</span>
            </div>
            <div class="launch-stat-item">
              <span class="launch-stat-val">${(lp.stats && lp.stats.timeline) || lp.timeline || lp.role || "Trưởng Phòng Marketing & Truyền Thông"}</span>
              <span class="launch-stat-lbl">${(lp.stats && lp.stats.timeline) || lp.timeline ? "Thời Điểm Triển Khai" : "Vai Trò Đảm Nhận"}</span>
            </div>
          </div>

          <!-- Gallery 4 Ấn Phẩm Thực Tế -->
          <div class="launch-gallery-section">
            <div class="launch-section-label">
              <i data-lucide="image"></i>
              <span>Ấn Phẩm Thực Tế &amp; Phối Cảnh Không Gian Trực Quan (Click Phóng To)</span>
            </div>
            <div class="launch-gallery-grid">
              ${lp.gallery
                .map(
                  (item) => {
                    const itemTitle = (item.name || item.title || "").replace(/'/g, "\\'");
                    const itemCaption = (item.caption || item.desc || "").replace(/'/g, "\\'");
                    const displayName = item.name || item.title || "Ấn phẩm";
                    const displayDesc = item.caption || item.desc || "";
                    return `
                <div class="launch-gallery-card" onclick="openLaunchLightbox('${item.src}', '${itemTitle}: ${itemCaption}')">
                  <div class="launch-gallery-img-box">
                    <img src="${item.src}" alt="${displayName}" loading="lazy">
                    <span class="launch-gallery-tag">${item.tag || "Ấn phẩm"}</span>
                    <div class="launch-gallery-zoom-hint">
                      <i data-lucide="maximize-2"></i>
                      <span>Phóng to</span>
                    </div>
                  </div>
                  <div class="launch-gallery-meta">
                    <h4 class="launch-gallery-title">${displayName}</h4>
                    <p class="launch-gallery-desc">${displayDesc}</p>
                  </div>
                </div>
              `;
                  }
                )
                .join("")}
            </div>
          </div>

          <!-- 4 Tabs Kế Hoạch Chiến Lược -->
          <div class="launch-doc-section">
            <div class="launch-section-label">
              <i data-lucide="file-text"></i>
              <span>Chi Tiết Kế Hoạch Truyền Thông &amp; Phân Phối Đa Kênh</span>
            </div>

            <div class="launch-tabs-nav">
              ${lp.tabs
                .map(
                  (t, i) => `
                <button type="button" class="launch-tab-btn ${i === 0 ? "active" : ""}" onclick="switchLaunchTab('${t.id}', this)">
                  <i data-lucide="${t.icon || "layers"}"></i>
                  <span>${t.title}</span>
                </button>
              `
                )
                .join("")}
            </div>

            <div class="launch-tabs-content">
              ${lp.tabs
                .map(
                  (t, i) => `
                <div class="launch-tab-pane ${i === 0 ? "active" : ""}" data-tab-pane="${t.id}">
                  ${
                    t.content
                      ? t.content
                      : `
                    <div class="launch-pane-lead">${t.lead || ""}</div>
                    <div class="launch-pane-cards">
                      ${
                        t.cards && t.cards.length
                          ? t.cards
                              .map(
                                (c) => `
                            <div class="launch-pane-card">
                              <div class="launch-card-head">
                                <span class="launch-card-tag">${c.tag || ""}</span>
                                <span class="launch-card-time">${c.time || ""}</span>
                              </div>
                              <h4 class="launch-card-title">${c.title || ""}</h4>
                              <ul class="launch-card-list">
                                ${(c.points || c.items || []).map((pt) => `<li><i data-lucide="check"></i><span>${pt}</span></li>`).join("")}
                              </ul>
                            </div>
                          `
                              )
                              .join("")
                          : ""
                      }
                    </div>
                  `
                  }
                </div>
              `
                )
                .join("")}
            </div>
          </div>
        </section>
      `;
    }

    // === CAMPAIGN REPORT (Meta Ads Dashboard Báo Cáo Thực Chiến) ===
    if (data.campaignReport) {
      const cr = data.campaignReport;
      html += `
        <section class="modal-campaign-box" id="campaign-report" style="margin-bottom: 32px;">
          <div class="modal-campaign-header">
            <div class="modal-campaign-title-wrap">
              <span class="modal-campaign-badge">
                <i data-lucide="bar-chart-3"></i>
                ${cr.badge || "Báo Cáo Hiệu Quả Quảng Cáo Thực Chiến (Meta Ads)"}
              </span>
              <span class="modal-campaign-sub">${cr.campaignName}</span>
            </div>
            ${
              cr.sheetUrl
                ? `
              <a href="${cr.sheetUrl}" target="_blank" rel="noopener" class="btn btn-outline btn-xs btn-campaign-sheet" title="Mở file Google Sheet gốc">
                <i data-lucide="file-spreadsheet" style="width: 14px; height: 14px; color: #10B981;"></i>
                <span>Xem Dữ Liệu Bảng Tính Gốc</span>
              </a>
            `
                : ""
            }
          </div>

          <div class="modal-campaign-body">
            <!-- 4 Thẻ KPI Tháng quy đổi -->
            <div class="campaign-kpi-grid">
              <div class="campaign-kpi-card emerald">
                <div class="campaign-kpi-label">Ngân Sách Nhánh Video / Tháng</div>
                <div class="campaign-kpi-val">${cr.monthlySpend}</div>
                <div class="campaign-kpi-note">${cr.weeklySpendNote}</div>
              </div>
              <div class="campaign-kpi-card cyan">
                <div class="campaign-kpi-label">Người Tiếp Cận (Reach) / Tháng</div>
                <div class="campaign-kpi-val">${cr.monthlyReach}</div>
                <div class="campaign-kpi-note">${cr.weeklyReachNote}</div>
              </div>
              <div class="campaign-kpi-card amber">
                <div class="campaign-kpi-label">Lượt Click Liên Kết / Tháng</div>
                <div class="campaign-kpi-val">${cr.monthlyClicks}</div>
                <div class="campaign-kpi-note">${cr.weeklyClicksNote}</div>
              </div>
              <div class="campaign-kpi-card purple">
                <div class="campaign-kpi-label">Chi Phí / Click (CPC) &amp; CTR</div>
                <div class="campaign-kpi-val">${cr.costPerClick}</div>
                <div class="campaign-kpi-note">CTR trung bình: <strong>${cr.ctr}</strong> (Hiệu suất cao)</div>
              </div>
            </div>

            <!-- Phân Bổ Nhân Khẩu Học Thực Tế -->
            <div class="campaign-breakdown-card">
              <div class="campaign-breakdown-head">
                <i data-lucide="users"></i>
                <span>Phân Bổ Nhân Khẩu Học &amp; Tối Ưu Tệp Khách Hàng (Dữ Liệu Thật)</span>
              </div>
              <div class="campaign-table-wrap">
                <table class="campaign-demo-table">
                  <thead>
                    <tr>
                      <th>Nhóm Tuổi</th>
                      <th>Tỷ Lệ Ngân Sách</th>
                      <th>Lượt Click / Tuần</th>
                      <th>Tiếp Cận / Tuần</th>
                      <th>CPC Trung Bình</th>
                      <th>Đánh Giá Hiệu Quả</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${cr.demographics
                      .map(
                        (demo) => `
                      <tr ${demo.isPrimary ? 'class="row-primary"' : ""}>
                        <td>
                          <strong>${demo.age}</strong>
                          ${demo.isPrimary ? '<span class="demo-tag-primary">Tệp Trọng Tâm</span>' : ""}
                        </td>
                        <td><span class="badge-budget">${demo.spendPct}</span></td>
                        <td>${demo.clicks} clicks</td>
                        <td>${demo.reach}</td>
                        <td><strong>${demo.cpc}</strong></td>
                        <td>${demo.assessment}</td>
                      </tr>
                    `
                      )
                      .join("")}
                  </tbody>
                </table>
              </div>
              <div class="campaign-gender-bar">
                <span class="gender-item"><i data-lucide="user"></i> Nam Giới: <strong>${cr.genderSplit.male}</strong></span>
                <span class="gender-item"><i data-lucide="user-check"></i> Nữ Giới: <strong>${cr.genderSplit.female}</strong></span>
                <span class="gender-note">(${cr.genderSplit.note})</span>
              </div>
            </div>

            <!-- Nhận Định & Chiến Lược Thực Chiến -->
            <div class="campaign-strategic-notes">
              <div class="campaign-note-item">
                <i data-lucide="lightbulb" class="note-icon"></i>
                <div>
                  <strong>Chiến Thuật Video Đột Phá:</strong>
                  <span>Tập trung 100% video dạng Storytelling tri ân đấng sinh thành, chạm đúng cảm xúc đối tượng 55+ giúp đạt CTR ấn tượng 6.14% và CPC chạm đáy 1.205đ/click.</span>
                </div>
              </div>
              <div class="campaign-note-item">
                <i data-lucide="trending-up" class="note-icon"></i>
                <div>
                  <strong>Chuyển Giao Trực Tiếp Cho Đội Ngũ Bán Hàng:</strong>
                  <span>Phễu lọc khách qua video giúp loại bỏ tệp rác, cung cấp hơn 50+ khách hàng tiềm năng chất lượng cao mỗi tháng có sẵn mong muốn tham quan thực địa.</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      `;
    }

    // === CANVA EMBED SLIDE (Bravigo) ===
    if (data.embedSlide) {
      html += `
        <section class="modal-slide-box" id="slide-presentation" style="margin-bottom: 32px;">
          <div class="modal-slide-header">
            <div class="modal-slide-title">
              <i data-lucide="presentation"></i>
              <span>${data.embedSlide.title}</span>
            </div>
            <a href="${data.embedSlide.url}" target="_blank" rel="noopener" class="btn btn-outline btn-xs">
              <i data-lucide="external-link"></i>
              <span>Mở Toàn Màn Hình</span>
            </a>
          </div>
          <div class="modal-slide-iframe-wrap">
            <iframe loading="lazy" src="${data.embedSlide.url}" allowfullscreen="allowfullscreen" allow="fullscreen"></iframe>
          </div>
        </section>
      `;
    }

    // === SUB-PROJECTS SHOWCASE (Lục Lam: Dự án 1 - Hộp Quà Tết & Dự án 2 - Trà Hoa Đà Lạt) ===
    if (data.subProjects && data.subProjects.length > 0) {
      html += `
        <section class="modal-subprojects-box" id="sub-projects" style="margin-bottom: 32px; position: relative;">
          <span id="videos" style="position: absolute; top: -80px;"></span>
          <span id="video-showcase" style="position: absolute; top: -80px;"></span>
          <div class="modal-subprojects-header">
            <div class="modal-subprojects-title-wrap">
              <span class="modal-subprojects-badge">
                <i data-lucide="layers"></i>
                <span>Các Dự Án Trọng Điểm Của Doanh Nghiệp (${data.subProjects.length} Dự Án)</span>
              </span>
              <h2 class="modal-subprojects-heading">Danh Mục Dự Án Triển Khai Thực Chiến</h2>
            </div>
            <div class="subprojects-nav-pills">
              ${data.subProjects
                .map(
                  (sp) => `
                <a href="#${sp.anchor}" class="subproject-nav-pill ${sp.badgeColor || "amber"}">
                  <i data-lucide="${sp.badgeColor === 'amber' ? 'gift' : 'flower-2'}" style="width: 13px; height: 13px;"></i>
                  <span>${sp.num}: ${sp.title.split("(")[0].replace("Dự Án", "").trim()}</span>
                  <i data-lucide="arrow-down" style="width: 12px; height: 12px;"></i>
                </a>
              `
                )
                .join("")}
            </div>
          </div>

          <div class="subprojects-cards-list">
            ${data.subProjects
              .map(
                (sp) => `
              <div class="subproject-detail-card ${sp.badgeColor || "amber"}" id="${sp.anchor}">
                <div class="sp-card-top">
                  <span class="sp-num-badge ${sp.badgeColor || "amber"}">
                    <i data-lucide="${sp.badgeColor === 'amber' ? 'gift' : 'flower-2'}"></i>
                    <span>${sp.num} • ${sp.badge}</span>
                  </span>
                  <h3 class="sp-card-title">${sp.title}</h3>
                  <p class="sp-card-subtitle">${sp.subtitle}</p>
                </div>

                <div class="sp-card-grid">
                  <!-- Video Embed Column -->
                  <div class="sp-video-col">
                    <div class="sp-video-wrap">
                      <iframe src="https://www.youtube.com/embed/${sp.videoId}" title="${sp.videoTitle}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="sp-video-meta">
                      <span class="sp-video-title">${sp.videoTitle}</span>
                      <span class="sp-video-desc">${sp.videoDesc}</span>
                    </div>
                  </div>

                  <!-- Content & Scope Column -->
                  <div class="sp-info-col">
                    <div class="sp-desc-box">${sp.desc}</div>
                    
                    <div class="sp-scope-block">
                      <div class="sp-scope-title">
                        <i data-lucide="check-circle-2"></i>
                        <span>Phạm Vi Trực Tiếp Triển Khai:</span>
                      </div>
                      <ul class="sp-scope-list">
                        ${sp.scope.map((s) => `<li><i data-lucide="check"></i><span>${s}</span></li>`).join("")}
                      </ul>
                    </div>

                    <!-- Mini KPI row -->
                    <div class="sp-kpi-row">
                      ${sp.kpis
                        .map(
                          (k) => `
                        <div class="sp-kpi-item">
                          <span class="sp-kpi-val">${k.val}</span>
                          <span class="sp-kpi-lbl">${k.label}</span>
                          ${k.note ? `<span class="sp-kpi-note">${k.note}</span>` : ""}
                        </div>
                      `
                        )
                        .join("")}
                    </div>
                  </div>
                </div>
              </div>
            `
              )
              .join("")}
          </div>
        </section>
      `;
    } else if (data.videos && data.videos.length > 0) {
      html += `
        <section class="modal-video-box" id="video-showcase" style="margin-bottom: 32px;">
          <div class="modal-video-header">
            <div class="modal-video-title">
              <i data-lucide="play-circle"></i>
              <span>Tư Liệu Video Chiến Dịch &amp; Phóng Sự Truyền Thông</span>
            </div>
          </div>
          <div class="modal-video-grid">
            ${data.videos
              .map(
                (v) => `
              <div class="modal-video-item">
                <div class="modal-video-iframe-wrap">
                  <iframe src="https://www.youtube.com/embed/${v.id}" title="${v.title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="modal-video-caption">
                  <span class="video-caption-title">${v.title}</span>
                  <span class="video-caption-desc">${v.desc}</span>
                </div>
              </div>
            `
              )
              .join("")}
          </div>
        </section>
      `;
    }

    // === WORKSTREAMS: CÔNG VIỆC CHUYÊN MÔN & HIỆU QUẢ TƯƠNG ỨNG (Content - Ads - SEO...) ===
    html += `
      <section class="case-section-box" id="deliverables" style="margin-bottom: 32px;">
        <div class="case-section-header">
          <div class="case-section-badge" style="background: rgba(6, 182, 212, 0.12); color: #06B6D4; border-color: rgba(6, 182, 212, 0.25);">
            <i data-lucide="layers"></i>
            <span>Phân Chia Công Việc Chuyên Môn &amp; Hiệu Quả Tương Ứng (${data.deliverables ? data.deliverables.length : 0} Nhóm Hạng Mục)</span>
          </div>
          <h2 class="case-section-title">Chi Tiết Từng Công Việc &amp; Hiệu Quả Đo Lường Được (Content — Ads — SEO — Tech)</h2>
          <p style="font-size: 0.9rem; color: var(--text-muted); margin-top: 6px; margin-bottom: 0;">
            Minh bạch hóa phạm vi trách nhiệm trực tiếp song hành cùng chỉ số kinh doanh định lượng tương ứng cho từng phân môn.
          </p>
        </div>

        <div class="case-workstreams-list">
          ${
            data.deliverables && data.deliverables.length
              ? data.deliverables
                  .map(
                    (d, idx) => `
              <div class="workstream-matrix-card">
                <!-- Card Header -->
                <div class="ws-card-header">
                  <div class="ws-header-left">
                    <span class="ws-pillar-pill ${d.pillar ? d.pillar.toLowerCase().replace(/[^a-z0-9]/g, '') : 'default'}">
                      <i data-lucide="${d.icon || 'briefcase'}"></i>
                      <span>${d.pillarTag || d.tag || 'Hạng Mục'}</span>
                    </span>
                    <h3 class="ws-card-title">${d.title}</h3>
                  </div>
                  ${d.tag ? `<span class="ws-tag-badge">${d.tag}</span>` : ''}
                </div>

                <!-- Split Body: Công Việc ↔ Hiệu Quả Tương Ứng -->
                <div class="ws-card-split-body">
                  <!-- Cột 1: Công Việc Thực Hiện -->
                  <div class="ws-col ws-col-scope">
                    <div class="ws-col-label">
                      <i data-lucide="check-square" style="color: #06B6D4;"></i>
                      <span>Công Việc Trực Tiếp Triển Khai</span>
                    </div>
                    <ul class="ws-scope-list">
                      ${d.items
                        .map(
                          (item) => `
                        <li>
                          <i data-lucide="check"></i>
                          <span>${item}</span>
                        </li>
                      `
                        )
                        .join("")}
                    </ul>
                  </div>

                  <!-- Cột 2: Hiệu Quả Công Việc Tương Ứng -->
                  <div class="ws-col ws-col-impact">
                    <div class="ws-col-label">
                      <i data-lucide="trending-up" style="color: #10B981;"></i>
                      <span>Hiệu Quả Công Việc Tương Ứng</span>
                    </div>
                    ${
                      d.impact && d.impact.metrics && d.impact.metrics.length
                        ? `
                      <div class="ws-metrics-grid">
                        ${d.impact.metrics
                          .map(
                            (m) => `
                          <div class="ws-metric-item">
                            <span class="ws-metric-val">${m.val}</span>
                            <span class="ws-metric-lbl">${m.label}</span>
                          </div>
                        `
                          )
                          .join("")}
                      </div>
                    `
                        : ''
                    }
                    ${
                      d.impact && d.impact.summary
                        ? `
                      <div class="ws-impact-summary">
                        <i data-lucide="award"></i>
                        <p>${d.impact.summary}</p>
                      </div>
                    `
                        : (d.desc ? `<p class="ws-impact-desc">${d.desc}</p>` : '')
                    }
                  </div>
                </div>

                <!-- Card Footer Attachment -->
                ${
                  d.attachment
                    ? `
                  <div class="ws-card-footer">
                    <i data-lucide="paperclip"></i>
                    <span>Tài liệu kiểm chứng: <strong>${d.attachment}</strong></span>
                  </div>
                `
                    : ""
                }
              </div>
            `
                  )
                  .join("")
              : `<p style="color: var(--text-muted);">Đang cập nhật...</p>`
          }
        </div>
      </section>
    `;

    // === RESULTS (Kết quả kinh doanh định lượng) ===
    html += `
      <section class="case-section-box" id="results" style="margin-bottom: 32px;">
        <div class="case-section-header">
          <div class="case-section-badge" style="background: rgba(16, 185, 129, 0.12); color: #34D399; border-color: rgba(16, 185, 129, 0.25);">
            <i data-lucide="trophy"></i>
            <span>Hiệu Quả Kinh Doanh Định Lượng</span>
          </div>
          <h2 class="case-section-title">Kết Quả Nổi Bật Mang Lại Cho Doanh Nghiệp</h2>
        </div>

        <div class="case-results-grid">
          ${
            data.results && data.results.length
              ? data.results
                  .map(
                    (r) => `
              <div class="case-result-card">
                <div class="result-card-val">${r.metric}</div>
                <div class="result-card-lbl">${r.label}</div>
                <p class="result-card-detail">${r.detail}</p>
              </div>
            `
                  )
                  .join("")
              : `<p style="color: var(--text-muted);">Đang cập nhật...</p>`
          }
        </div>
      </section>
    `;

    // === MEASUREMENT (Trước — Sau & KPIs) ===
    if (data.measurement) {
      html += `
        <section class="case-section-box" id="measurement" style="margin-bottom: 32px;">
          <div class="case-section-header">
            <div class="case-section-badge" style="background: rgba(168, 85, 247, 0.12); color: #C084FC; border-color: rgba(168, 85, 247, 0.25);">
              <i data-lucide="scale"></i>
              <span>Phương Pháp Đo Lường &amp; Kiểm Thử</span>
            </div>
            <h2 class="case-section-title">Chỉ Số Trước &amp; Sau Khi Triển Khai</h2>
          </div>

          <div class="case-measurement-split">
            <div class="measurement-card before">
              <div class="measurement-label">
                <i data-lucide="arrow-down-circle"></i>
                <span>Thực Trạng Trước Khi Tiếp Nhận</span>
              </div>
              <p>${data.measurement.before}</p>
            </div>
            <div class="measurement-card after">
              <div class="measurement-label">
                <i data-lucide="arrow-up-circle"></i>
                <span>Kết Quả Đột Phá Sau Khi Tối Ưu</span>
              </div>
              <p>${data.measurement.after}</p>
            </div>
          </div>

          ${
            data.measurement.kpis && data.measurement.kpis.length
              ? `
            <div class="modal-kpis-strip" style="margin-top: 20px;">
              ${data.measurement.kpis
                .map(
                  (k) => `
                <div class="modal-kpi-chip">
                  <i data-lucide="target"></i>
                  <span>${k}</span>
                </div>
              `
                )
                .join("")}
            </div>
          `
              : ""
          }
        </section>
      `;
    }

    // === STRATEGIC LEARNINGS ===
    if (data.learnings) {
      html += `
        <section class="case-section-box" id="learnings" style="margin-bottom: 32px;">
          <div class="case-section-header">
            <div class="case-section-badge" style="background: rgba(245, 158, 11, 0.12); color: #FBBF24; border-color: rgba(245, 158, 11, 0.25);">
              <i data-lucide="book-open"></i>
              <span>Đúc Kết Kinh Nghiệm Quản Trị</span>
            </div>
            <h2 class="case-section-title">Bài Học &amp; Góc Nhìn Chiến Lược Thực Tiễn</h2>
          </div>

          <div class="modal-learnings-card" style="padding: 28px 32px; border-radius: var(--radius-lg, 16px); background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.07); position: relative;">
            <i data-lucide="quote" class="quote-icon" style="font-size: 2rem; color: rgba(6, 182, 212, 0.25); position: absolute; top: 20px; right: 24px;"></i>
            <p style="font-size: 1.05rem; line-height: 1.8; color: #E2E8F0; font-style: italic; position: relative; z-index: 2;">
              "${data.learnings}"
            </p>
          </div>
        </section>
      `;
    }

    // === TECH STACK & KEYWORDS ===
    if (data.tech && data.tech.length) {
      html += `
        <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 8px; margin-bottom: 40px; padding: 18px 22px; border-radius: var(--radius-md, 12px); background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.05);">
          <span style="font-size: 0.78rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; margin-right: 6px;">
            <i data-lucide="tag" style="width: 13px; height: 13px; vertical-align: middle; margin-right: 4px;"></i>
            Từ Khóa Năng Lực:
          </span>
          ${data.tech
            .map(
              (t) => `
            <span style="font-size: 0.78rem; padding: 4px 12px; border-radius: var(--radius-full, 9999px); background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.08); color: #CBD5E1;">
              ${t}
            </span>
          `
            )
            .join("")}
        </div>
      `;
    }

    // === PREV / NEXT BOTTOM NAVIGATION ===
    html += `
      <nav class="case-nav-bottom" aria-label="Điều Hướng Dự Án Khác">
        <a href="case-study.html?case=${prevKey}" class="case-nav-card prev" onclick="event.preventDefault(); loadCaseStudy('${prevKey}');">
          <div class="nav-dir-label">
            <i data-lucide="arrow-left"></i>
            <span>Dự Án Trước Đó</span>
          </div>
          <div class="nav-dir-title">${prevMeta.name}</div>
          <div class="nav-dir-tag">${prevMeta.tag}</div>
        </a>

        <a href="index.html#companies-growth-hub" class="case-nav-home-btn" title="Về Danh Mục Dự Án Trang Chủ">
          <i data-lucide="grid"></i>
          <span>Tất Cả Dự Án</span>
        </a>

        <a href="case-study.html?case=${nextKey}" class="case-nav-card next" onclick="event.preventDefault(); loadCaseStudy('${nextKey}');">
          <div class="nav-dir-label">
            <span>Dự Án Kế Tiếp</span>
            <i data-lucide="arrow-right"></i>
          </div>
          <div class="nav-dir-title">${nextMeta.name}</div>
          <div class="nav-dir-tag">${nextMeta.tag}</div>
        </a>
      </nav>
    `;

    // 4. Inject into container
    container.innerHTML = html;

    // 5. Initialize Lucide Icons
    if (window.lucide) {
      window.lucide.createIcons();
    }

    // 6. Update Page Title
    document.title = `${data.title} — Tạ Quốc Duy | Case Study Chi Tiết`;

    // 7. Update URL search param
    if (shouldPushState) {
      let targetHash = window.location.hash || "";
      if (targetHash === "#launch-project" && caseKey !== "sala") {
        targetHash = "";
      }
      const newUrl = `${window.location.pathname}?case=${caseKey}${targetHash}`;
      window.history.pushState({ case: caseKey }, "", newUrl);
    }

    // 8. Handle Anchor Hash scroll or Top scroll
    if (window.location.hash) {
      const targetEl = document.querySelector(window.location.hash);
      if (targetEl) {
        setTimeout(() => {
          targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 150);
        return;
      }
    }
    // Default: smooth scroll to top of main
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Switch Launch Tab (Phân đoạn kế hoạch Thiên Phúc Vĩnh Hằng Viên)
  window.switchLaunchTab = function (tabId, btn) {
    const parent = btn.closest(".launch-doc-section");
    if (!parent) return;
    parent.querySelectorAll(".launch-tab-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    parent.querySelectorAll(".launch-tab-pane").forEach((p) => {
      if (p.getAttribute("data-tab-pane") === tabId) {
        p.classList.add("active");
      } else {
        p.classList.remove("active");
      }
    });
    if (window.lucide) window.lucide.createIcons();
  };

  // Lightbox handlers
  window.openLaunchLightbox = function (src, caption) {
    const overlay = document.getElementById("launchLightboxOverlay");
    if (!overlay) return;
    const img = overlay.querySelector(".launch-lightbox-img");
    const cap = overlay.querySelector(".launch-lightbox-caption");
    if (img) img.src = src;
    if (cap) cap.innerText = caption || "";
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  window.closeLaunchLightbox = function () {
    const overlay = document.getElementById("launchLightboxOverlay");
    if (!overlay) return;
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  };

  window.closeLaunchLightboxOnBackdrop = function (event) {
    if (event.target.id === "launchLightboxOverlay") {
      window.closeLaunchLightbox();
    }
  };

  // Keyboard Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      window.closeLaunchLightbox();
    }
  });

  // Browser Back / Forward handler
  window.addEventListener("popstate", (e) => {
    const caseKey = getQueryCase();
    window.loadCaseStudy(caseKey, false);
  });

  // DOM Loaded
  document.addEventListener("DOMContentLoaded", () => {
    const initialCase = getQueryCase();
    window.loadCaseStudy(initialCase, false);
  });
})();
