/* ========================================================
   PORTFOLIO TẠ QUỐC DUY - JAVASCRIPT CONTROLLER
   Author: 🐱 Xu Xu & Tạ Quốc Duy
======================================================== */

// Case Studies Detailed Data for Deep-Dive Modal
const caseStudiesData = {
  sala: {
    category: "Bất Động Sản Hoa Viên Sinh Thái 5 Sao",
    company: "Công Ty Cổ Phần TM & DV Sala Garden",
    role: "Senior Marketing Manager",
    period: "03/2026 – Hiện tại",
    title: "Vận Hành Cỗ Máy Nội Dung 130+ Videos/Tháng & Quản Trị Ngân Sách 300Tr/Tháng Tạo 50+ Q.Leads",
    challenge: "Bất động sản hoa viên sinh thái là phân khúc đặc thù, giá trị cao và có chu kỳ ra quyết định mua hàng dài. Yêu cầu đặt ra là phải xây dựng được lòng tin sâu sắc, truyền tải được giá trị văn hóa hiếu nghĩa và tạo được dòng khách hàng tiềm năng thực sự quan tâm (Qualified Leads) cho đội ngũ tư vấn.",
    solution: [
      "Tái cấu trúc và dẫn dắt song song 2 Teams chuyên biệt: Team Digital Marketing (tối ưu hóa lead và đo lường đa kênh) và Team Branding (sản xuất nội dung và truyền thông thương hiệu).",
      "Thiết lập bộ khung KPIs/OKRs định lượng rõ ràng cho từng vị trí (Ads, Content, Video Editor, Graphic Designer) gắn kết trực tiếp với mục tiêu chuyển đổi.",
      "Xây dựng cỗ máy sản xuất nội dung quy mô lớn đạt công suất 130+ video/tháng phủ rộng trên TikTok, YouTube Shorts, Reels và phóng sự tri ân.",
      "Hoạch định và tối ưu ngân sách quảng cáo số 300.000.000 VNĐ/tháng trên đa kênh (Facebook Ads, Google Ads, TikTok Ads, Zalo OA).",
      "Kết hợp tiếp thị số với trải nghiệm điểm chạm tại chỗ (Decor Nhà tròn sự kiện, Voucher tri ân, Standee đối tác)."
    ],
    results: [
      "Duy trì đều đặn 50+ Qualified Leads chất lượng cao/tháng phục vụ đội ngũ tư vấn chốt đơn hoa viên sinh thái cao cấp.",
      "Tạo độ phủ thương hiệu vượt bậc với hơn 130 video/tháng, tăng trưởng tương tác tự nhiên trên các kênh mạng xã hội.",
      "Tối ưu chi phí trên mỗi khách hàng tiềm năng (CPL) và nâng cao tỷ lệ chuyển đổi từ lead sang lịch hẹn tham quan thực tế."
    ],
    tech: ["Team Leadership", "KPI Matrix", "130+ Videos/Tháng", "300Tr Ads/Tháng", "50+ Q.Leads", "Omnichannel", "Zalo OA"]
  },

  luclam: {
    category: "F&B & Quà Tặng Cao Cấp",
    company: "Công Ty TNHH TM DV SX Lục Lam",
    role: "Marketing Manager",
    period: "04/2024 – 04/2025",
    title: "Kiến Tạo Thương Hiệu Từ Số 0 (Zero to Hero) & Bứt Phá Doanh Thu 1 Tỷ VNĐ/Tháng",
    challenge: "Gia nhập thị trường F&B trà sữa và quà tặng cao cấp với con số 0: chưa có nhận diện thương hiệu, chưa có quy trình tiếp thị và hệ thống vận hành bán hàng trên nền tảng số.",
    solution: [
      "Hoàn thiện trọn bộ Brand Guidelines, moodboard và định vị bản sắc thương hiệu cao cấp, thanh nhã.",
      "Xây dựng hệ sinh thái 4 website chuyên biệt (store.luclam.vn, trahoa.luclam.vn, gift.luclam.vn, vietnamtravel.com) phục vụ đa mục tiêu kinh doanh.",
      "Triển khai hệ thống CRM quản trị khép kín từ data marketing đến chăm sóc và giao hàng.",
      "Tiên phong tích hợp các luồng AI Automation vào quy trình chăm sóc khách hàng và marketing nội dung.",
      "Tổ chức chuỗi Activation trực tiếp tại TTTM Takashimaya, phủ ấn phẩm POSM tại điểm bán và chủ trì sự kiện tri ân quy mô 200+ khách mời cùng dàn KOLs/KOCs."
    ],
    results: [
      "Đưa doanh thu từ con số 0 đạt mốc 1 Tỷ VNĐ/tháng.",
      "Tuyển dụng, đào tạo và xây dựng bộ máy 8 nhân sự Marketing vận hành tự chủ.",
      "Chiến dịch quà Tết bùng nổ doanh số với sự kết hợp nhuần nhuyễn giữa Ads, B2B Gift và Activation."
    ],
    tech: ["Doanh Thu 1 Tỷ/Tháng", "Brand Launching", "4 Websites", "CRM & AI System", "Takashimaya Activation", "Team 8 Mems"]
  },

  fclick: {
    category: "Ứng Dụng Công Nghệ & MarTech",
    company: "Công ty Fclick",
    role: "Marketing Manager & MarTech Lead",
    period: "06/2025 – 02/2026",
    title: "Cắt Giảm 25% CPI & Tự Động Hóa Vận Hành Bằng AI Tiết Kiệm 30% Thời Gian",
    challenge: "Chi phí thu hút người dùng ứng dụng (CPI - Cost Per Install) tăng cao, quy trình sáng tạo nội dung thủ công tốn nhiều nguồn lực và thiếu hệ thống đo lường tập trung.",
    solution: [
      "Tái cấu trúc tệp khách hàng mục tiêu, tối ưu thông điệp A/B testing và chuẩn hóa hệ thống tracking phễu chuyển đổi qua Mobile Measurement.",
      "Ứng dụng AI Automation vào quy trình nghiên cứu thị trường, lập dàn ý nội dung và kiểm tra dữ liệu chiến dịch.",
      "Phát triển hệ thống nhận diện số, 4 website vệ tinh và Real-time Marketing Dashboard kết nối dữ liệu Facebook, Google, TikTok.",
      "Cá nhân hóa chiến dịch Push Notification nhằm gia tăng sự gắn kết của người dùng với ứng dụng."
    ],
    results: [
      "Cắt giảm thành công 25% CPI trên toàn bộ các kênh quảng cáo trả phí.",
      "Tiết kiệm 30% thời gian triển khai sáng tạo và sản xuất nội dung cho team.",
      "Cải thiện 20% tỷ lệ giữ chân người dùng (Retention Rate) sau khi cài đặt ứng dụng."
    ],
    tech: ["AI Automation", "CPI -25%", "Retention +20%", "Real-time Dashboard", "MarTech Lead", "Growth Hacking"]
  },

  bravigo: {
    category: "Thiết Bị Công Nghệ Ô Tô B2B & B2C",
    company: "Bravigo Việt Nam",
    role: "Marketing Manager",
    period: "03/2022 – 04/2024",
    title: "Dẫn Dắt Tiếp Thị Đa Kênh & Mở Rộng Thị Phần Toàn Quốc Qua Hệ Thống Hàng Trăm Đại Lý",
    challenge: "Thị trường màn hình và thiết bị ô tô thông minh cạnh tranh gay gắt, đòi hỏi sự kết hợp chặt chẽ giữa thương hiệu nhận diện với người tiêu dùng (B2C) và chính sách hỗ trợ đẩy hàng cho mạng lưới đại lý (B2B).",
    solution: [
      "Lãnh đạo team Marketing 8 chuyên viên; điều phối ngân sách quảng cáo và hợp tác cùng các agency sáng tạo chuyên sâu ngành ô tô.",
      "Phủ ấn phẩm POSM Trade Marketing tại hàng trăm đại lý phân phối và gara ủy quyền trên toàn quốc.",
      "Triển khai chiến dịch Booking KOLs/KOCs chuyên môn cao trong giới xe hơi (Reviewer công nghệ xe, diễn đàn ô tô).",
      "Quản lý đa kênh (Facebook, TikTok, Google, SEO, Website), tối ưu hóa CPA và tỷ lệ chuyển đổi cho các điểm bán."
    ],
    results: [
      "Thúc đẩy tăng trưởng nhận diện thương hiệu Bravigo trở thành top-of-mind trong phân khúc màn hình ô tô Android.",
      "Gia tăng doanh số bán lẻ thông qua mạng lưới đại lý trên toàn quốc.",
      "Tối ưu chi phí CPA và chuẩn hóa quy trình phân bổ lead cho các đại lý khu vực."
    ],
    tech: ["Auto Tech", "B2B & B2C", "Trade Marketing", "Hàng Trăm Đại Lý", "Agency & KOL Management"]
  },

  lath: {
    category: "Bán Lẻ & Thương Mại Điện Tử",
    company: "LATH Group / TSD Group",
    role: "Marketing Lead / Digital Manager",
    period: "2019 – 2022",
    title: "Tăng Trưởng Doanh Thu Ads +40% & Phủ Sóng Siêu Thị Lotte Mart, Sàn TMĐT",
    challenge: "Cần đa dạng hóa kênh bán hàng từ online sang offline và sàn TMĐT, đồng thời xây dựng kênh tìm kiếm tự nhiên bền vững để giảm phụ thuộc vào quảng cáo.",
    solution: [
      "Tối ưu hóa các chiến dịch Google Ads & Facebook Ads với chiến lược thầu thông minh và phân nhóm tệp đối tượng chuẩn xác.",
      "Phát triển chiến lược SEO toàn diện cho website lath.vn từ nghiên cứu từ khóa, tối ưu On-page đến xây dựng liên kết chất lượng.",
      "Triển khai đưa sản phẩm vào chuỗi siêu thị Lotte Mart và các sàn TMĐT lớn (Shopee, Lazada, Tiki).",
      "Tối ưu hóa giao diện và trải nghiệm người dùng (UX/UI) ứng dụng KingPang; sản xuất chuỗi video review sản phẩm."
    ],
    results: [
      "Doanh thu từ quảng cáo tăng trưởng +40% so với kỳ trước.",
      "Website đạt 5.000+ Organic Traffic/tháng và tạo ra hơn 200 đơn hàng tự nhiên/tháng hoàn toàn miễn phí chi phí ads.",
      "Tăng 25% tỷ lệ mua hàng khi kết hợp với kênh siêu thị và tăng 20% lượt tải app KingPang."
    ],
    tech: ["Ads Rev +40%", "SEO 5k Traffic", "Lotte Mart Trade", "UX/UI App KingPang", "E-Commerce"]
  }
};

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initLucide();
  initStatsCounter();
  initFilters();
  initModal();
  initMobileNav();
  initCopyTools();
});

// 1. Theme Management (Dark / Light)
function initTheme() {
  const themeToggle = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("portfolio_theme") || "dark";
  
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("portfolio_theme", newTheme);
      updateThemeIcon(newTheme);
    });
  }
}

function updateThemeIcon(theme) {
  const themeToggle = document.getElementById("themeToggle");
  if (!themeToggle) return;
  
  if (theme === "light") {
    themeToggle.innerHTML = '<i data-lucide="moon" style="width: 18px; height: 18px;"></i>';
  } else {
    themeToggle.innerHTML = '<i data-lucide="sun" style="width: 18px; height: 18px;"></i>';
  }
  initLucide();
}

// 2. Lucide Icons Helper
function initLucide() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// 3. Animated Stats Counter
function initStatsCounter() {
  const statNumbers = document.querySelectorAll(".stat-number[data-target]");
  if (!statNumbers.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateValue(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(el => observer.observe(el));
}

function animateValue(el) {
  const rawTarget = el.getAttribute("data-target");
  const prefix = el.getAttribute("data-prefix") || "";
  const suffix = el.getAttribute("data-suffix") || "";
  const target = parseFloat(rawTarget);
  const duration = 1800;
  const start = 0;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // EaseOutQuad
    const easeProgress = 1 - (1 - progress) * (1 - progress);
    const current = Math.floor(start + (target - start) * easeProgress);

    el.innerText = `${prefix}${current}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.innerText = `${prefix}${rawTarget}${suffix}`;
    }
  }

  requestAnimationFrame(update);
}

// 4. Case Studies Category Filter
function initFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const caseCards = document.querySelectorAll(".case-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filterVal = btn.getAttribute("data-filter");

      caseCards.forEach(card => {
        const cardCategory = card.getAttribute("data-category");
        if (filterVal === "all" || cardCategory === filterVal) {
          card.style.display = "flex";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, 50);
        } else {
          card.style.opacity = "0";
          card.style.transform = "translateY(15px)";
          setTimeout(() => {
            card.style.display = "none";
          }, 200);
        }
      });
    });
  });
}

// 5. Deep-Dive Modal System
function initModal() {
  const modalOverlay = document.getElementById("caseModal");
  const modalClose = document.getElementById("modalClose");
  const detailBtns = document.querySelectorAll(".case-details-btn");

  if (!modalOverlay) return;

  detailBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const caseKey = btn.getAttribute("data-case");
      const data = caseStudiesData[caseKey];
      if (data) {
        populateModal(data);
        modalOverlay.classList.add("active");
        document.body.style.overflow = "hidden";
      }
    });
  });

  if (modalClose) {
    modalClose.addEventListener("click", closeModal);
  }

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
      closeModal();
    }
  });

  function closeModal() {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }
}

function populateModal(data) {
  document.getElementById("modalBadge").innerText = data.category;
  document.getElementById("modalCompany").innerText = data.company;
  document.getElementById("modalTitle").innerText = data.title;
  document.getElementById("modalRolePeriod").innerText = `${data.role} • ${data.period}`;
  document.getElementById("modalChallenge").innerText = data.challenge;

  // Solutions list
  const solList = document.getElementById("modalSolutions");
  solList.innerHTML = data.solution.map(s => `
    <li>
      <i data-lucide="check-circle" style="width: 18px; height: 18px;"></i>
      <span>${s}</span>
    </li>
  `).join("");

  // Results list
  const resList = document.getElementById("modalResults");
  resList.innerHTML = data.results.map(r => `
    <li>
      <i data-lucide="trending-up" style="width: 18px; height: 18px;"></i>
      <span><strong>${r}</strong></span>
    </li>
  `).join("");

  // Tags
  const tagList = document.getElementById("modalTags");
  tagList.innerHTML = data.tech.map(t => `
    <span class="case-tag" style="background: rgba(245, 158, 11, 0.15); color: var(--accent-gold-light); font-weight: 600;">${t}</span>
  `).join("");

  initLucide();
}

// 6. Mobile Navigation
function initMobileNav() {
  const toggleBtn = document.getElementById("mobileToggle");
  const navLinks = document.getElementById("navLinks");

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      const icon = navLinks.classList.contains("active") ? "x" : "menu";
      toggleBtn.innerHTML = `<i data-lucide="${icon}"></i>`;
      initLucide();
    });

    // Close on link click
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        toggleBtn.innerHTML = `<i data-lucide="menu"></i>`;
        initLucide();
      });
    });
  }
}

// 7. Copy contact info helper
function initCopyTools() {
  window.copyText = function(text, el) {
    navigator.clipboard.writeText(text).then(() => {
      const originalText = el.innerText;
      el.innerText = "✓ Đã sao chép!";
      setTimeout(() => {
        el.innerText = originalText;
      }, 2000);
    });
  };
}
