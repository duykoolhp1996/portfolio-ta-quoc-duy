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
    challenge: "Bất động sản hoa viên sinh thái là phân khúc đặc thù, giá trị cao và có chu kỳ ra quyết định mua hàng dài. Yêu cầu đặt ra là phải xây dựng được lòng tin sâu sắc, truyền tải được giá trị văn hóa hiếu nghĩa và tạo được dòng khách hàng tiềm năng thực sự quan tâm (Qualified Leads) cho đội ngũ tư vấn chốt đơn.",
    deliverables: [
      {
        title: "Hoạch Định Chiến Lược & Setup KPI 2 Teams",
        tag: "Quản Trị & P&L",
        desc: "Thiết lập cấu trúc vận hành song song Team Digital Marketing & Team Branding (8–14 nhân sự) với khung KPIs định lượng chi tiết cho từng vị trí.",
        items: [
          "Xây dựng bộ chỉ số KPI/OKR rõ ràng cho Ads, Content, Video Editor, Graphic Designer",
          "Chuẩn hóa quy trình SOP phối hợp liên phòng ban Marketing x Sales x CSKH",
          "Kiểm soát ngân sách P&L và đo lường ROI/ROAS thời gian thực"
        ]
      },
      {
        title: "Cỗ Máy Sản Xuất Nội Dung 130+ Videos/Tháng",
        tag: "Media & Branding",
        desc: "Xây dựng quy trình sản xuất nội dung quy mô lớn đạt công suất 130+ video/tháng phủ sóng toàn diện trên TikTok, Reels, Shorts và phóng sự.",
        items: [
          "Phát triển cấu trúc kịch bản video ngắn chuẩn Hook-Body-CTA",
          "Chỉ đạo sản xuất chuỗi phóng sự văn hóa tri ân và trải nghiệm hoa viên 5 sao",
          "Phân phối đa kênh và tối ưu hóa lượt tương tác tự nhiên"
        ]
      },
      {
        title: "Quản Trị Ngân Sách Ads 300Tr & 50+ Q.Leads",
        tag: "Performance Ads",
        desc: "Hoạch định và tối ưu ngân sách quảng cáo số 300.000.000 VNĐ/tháng đa kênh đem về đều đặn 50+ Qualified Leads chất lượng cao/tháng.",
        items: [
          "Chạy và tối ưu đa kênh: Facebook Ads, Google Ads, TikTok Ads, Zalo OA",
          "Thiết lập phễu lọc khách hàng tiềm năng phân khúc BĐS cao cấp",
          "Nuôi dưỡng và chuyển giao lead nóng cho đội ngũ tư vấn chốt deal"
        ]
      },
      {
        title: "Tiếp Thị Điểm Chạm & POSM Sự Kiện Tại Chỗ",
        tag: "Omnichannel & POSM",
        desc: "Kết nối tiếp thị số với hoạt động tại chỗ, nâng cao trải nghiệm và niềm tin cho khách hàng phân khúc hoa viên sinh thái cao cấp.",
        items: [
          "Thiết kế decor không gian sự kiện Nhà tròn và ấn phẩm đón tiếp khách VIP",
          "Phát hành Voucher tri ân sự kiện và Standee đối tác liên kết",
          "Gia tăng niềm tin thương hiệu và tỷ lệ chuyển đổi lịch hẹn thực tế"
        ]
      }
    ],
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
    deliverables: [
      {
        title: "Kiến Tạo Bản Sắc Thương Hiệu Zero to Hero",
        tag: "Branding",
        desc: "Xây dựng trọn vẹn thương hiệu chuỗi F&B trà sữa & quà tặng cao cấp từ con số 0.",
        items: [
          "Hoàn thiện trọn bộ Brand Guidelines, Moodboard và định vị chuỗi cao cấp",
          "Xây dựng nhận diện số và bộ ấn phẩm truyền thông toàn diện",
          "Tuyển dụng, đào tạo và dẫn dắt bộ máy 8 nhân sự Marketing"
        ]
      },
      {
        title: "Hệ Sinh Thái 4 Websites & CRM Tự Động Hóa",
        tag: "Web & CRM",
        desc: "Phát triển hệ sinh thái 4 website vệ tinh kết nối hệ thống CRM khép kín từ data đến giao vận.",
        items: [
          "Xây dựng store.luclam.vn, trahoa.luclam.vn, gift.luclam.vn, vietnamtravel.com",
          "Tích hợp CRM quản trị lead và luồng chăm sóc khách hàng tự động",
          "Ứng dụng AI Automation vào kịch bản tư vấn và nuôi dưỡng khách hàng"
        ]
      },
      {
        title: "Activation Takashimaya & Sự Kiện Tri Ân",
        tag: "Activation & KOLs",
        desc: "Tổ chức chuỗi sự kiện quy mô lớn khẳng định vị thế thương hiệu trên thị trường bán lẻ cao cấp.",
        items: [
          "Chủ trì chuỗi Activation trực tiếp tại TTTM Takashimaya",
          "Tổ chức Gala tri ân quy mô 200+ khách mời và đối tác",
          "Quản lý chiến dịch Booking KOLs/KOCs lan tỏa hình ảnh thương hiệu"
        ]
      },
      {
        title: "Chiến Dịch Tăng Trưởng Doanh Thu 1 Tỷ/Tháng",
        tag: "Growth Marketing",
        desc: "Điều hành chiến dịch quảng cáo đa kênh và mùa vụ quà Tết đạt mốc doanh thu 1 tỷ VNĐ/tháng.",
        items: [
          "Quản trị và tối ưu chiến dịch đa kênh Facebook Ads, Google Ads",
          "Chiến dịch Quà Tết B2B bùng nổ doanh số với combo quà tặng cao cấp",
          "Phủ ấn phẩm POSM Trade Marketing tại tất cả các điểm bán"
        ]
      }
    ],
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
    deliverables: [
      {
        title: "Cắt Giảm 25% Chi Phí Cài Đặt (CPI)",
        tag: "Growth Hacking",
        desc: "Tối ưu hóa chi phí thu hút người dùng cho nền tảng ứng dụng công nghệ số.",
        items: [
          "Tái cấu trúc tệp khách hàng mục tiêu và tracking phễu chuyển đổi qua MMP",
          "Triển khai A/B Testing liên tục thông điệp và visual quảng cáo",
          "Cắt giảm 25% CPI trên toàn bộ các kênh quảng cáo trả phí"
        ]
      },
      {
        title: "Ứng Dụng AI Automation (-30% Thời Gian)",
        tag: "AI & MarTech",
        desc: "Tiên phong đưa các giải pháp AI tự động hóa vào quy trình làm việc của đội ngũ marketing.",
        items: [
          "Xây dựng quy trình nghiên cứu thị trường và lập dàn ý nội dung bằng AI",
          "Giải phóng 30% thời gian triển khai sáng tạo và sản xuất nội dung",
          "Nâng cao tốc độ kiểm thử và nhân bản chiến dịch quảng cáo"
        ]
      },
      {
        title: "Phát Triển 4 Websites & Real-Time Dashboard",
        tag: "MarTech & Data",
        desc: "Xây dựng hạ tầng số và bảng điều khiển đo lường chiến dịch thời gian thực.",
        items: [
          "Phát triển hệ thống nhận diện số và 4 website vệ tinh",
          "Thiết lập Dashboard đo lường realtime kết nối dữ liệu FB, Google, TikTok",
          "Cá nhân hóa chiến dịch Push Notification giúp cải thiện +20% Retention"
        ]
      }
    ],
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
    deliverables: [
      {
        title: "Chiến Lược Mở Rộng Thị Phần B2B & B2C",
        tag: "Chiến Lược Toàn Quốc",
        desc: "Lập kế hoạch marketing ngắn và trung hạn đưa hệ sinh thái màn hình ô tô thông minh chiếm lĩnh thị phần.",
        items: [
          "Lãnh đạo và phân bổ ngân sách cho team Marketing 8 chuyên viên",
          "Kết hợp chiến lược nhận diện người tiêu dùng (B2C) và đẩy hàng đại lý (B2B)",
          "Làm việc cùng các agency sáng tạo chuyên sâu ngành ô tô"
        ]
      },
      {
        title: "Phủ POSM Trade Marketing Hàng Trăm Đại Lý",
        tag: "Trade Marketing",
        desc: "Triển khai bộ nhận diện thương hiệu tại điểm bán trên mạng lưới đại lý phân phối toàn quốc.",
        items: [
          "Phủ ấn phẩm POSM tại hàng trăm đại lý và gara ủy quyền",
          "Tối ưu CPA và chuẩn hóa quy trình phân bổ lead cho các đại lý khu vực",
          "Thúc đẩy tỷ lệ chốt đơn và doanh số bán lẻ tại điểm bán"
        ]
      },
      {
        title: "Chiến Dịch Booking KOLs/KOCs Ngành Xe",
        tag: "KOLs & PR",
        desc: "Hợp tác cùng mạng lưới chuyên gia và reviewer xe hơi uy tín tạo độ phủ nhận diện vượt trội.",
        items: [
          "Booking và định hướng nội dung cho các reviewer công nghệ xe hàng đầu",
          "Quản lý nội dung đa kênh: Facebook, TikTok, YouTube, SEO Website",
          "Định vị Bravigo trở thành top-of-mind trong phân khúc màn hình Android"
        ]
      }
    ],
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
    deliverables: [
      {
        title: "Tăng Trưởng Doanh Thu Từ Ads (+40%)",
        tag: "Performance Ads",
        desc: "Triển khai các chiến dịch quảng cáo trực tuyến hiệu quả cao, thúc đẩy doanh số bán lẻ bứt phá.",
        items: [
          "Tối ưu chiến lược thầu thông minh trên Google Ads & Facebook Ads",
          "Tăng trưởng doanh thu từ quảng cáo +40% so với kỳ trước",
          "Kiểm soát chi phí trên mỗi đơn hàng (CPA) ở mức tối ưu"
        ]
      },
      {
        title: "Xây Dựng Kênh SEO Bền Vững (5.000+ Traffic)",
        tag: "SEO Organic",
        desc: "Chiến lược SEO toàn diện giúp website lath.vn tạo ra nguồn doanh thu tự nhiên ổn định.",
        items: [
          "Đưa website đạt 5.000+ Organic Traffic/tháng ổn định",
          "Tạo ra đều đặn 200+ đơn hàng tự nhiên/tháng không mất chi phí ads",
          "Tối ưu cấu trúc On-page, từ khóa thương mại và trải nghiệm mua hàng"
        ]
      },
      {
        title: "Đưa Hàng Vào Siêu Thị Lotte Mart & Sàn TMĐT",
        tag: "Trade & E-Commerce",
        desc: "Mở rộng kênh phân phối từ bán lẻ truyền thống sang hệ thống siêu thị lớn và sàn TMĐT.",
        items: [
          "Đưa sản phẩm thành công vào chuỗi siêu thị Lotte Mart (+25% mua hàng)",
          "Vận hành gian hàng trên các sàn TMĐT lớn (Shopee, Lazada, Tiki)",
          "Tối ưu UX/UI app KingPang giúp tăng +20% lượt tải ứng dụng"
        ]
      }
    ],
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

  // Deliverables list
  const delivList = document.getElementById("modalDeliverables");
  if (delivList) {
    if (data.deliverables && data.deliverables.length) {
      delivList.innerHTML = data.deliverables.map(d => `
        <div class="deliverable-card">
          <div class="deliverable-header">
            <div class="deliverable-title">
              <i data-lucide="check-circle" style="width: 16px; height: 16px;"></i>
              <span>${d.title}</span>
            </div>
            <span class="deliverable-tag">${d.tag}</span>
          </div>
          <p class="deliverable-desc">${d.desc}</p>
          <ul class="deliverable-checklist">
            ${d.items.map(item => `
              <li>
                <i data-lucide="corner-down-right" style="width: 13px; height: 13px;"></i>
                <span>${item}</span>
              </li>
            `).join("")}
          </ul>
          ${d.attachment ? `
            <div class="deliverable-attachment-hint">
              <i data-lucide="paperclip" style="width: 14px; height: 14px;"></i>
              <span>${d.attachment}</span>
            </div>
          ` : `
            <div class="deliverable-attachment-hint">
              <i data-lucide="paperclip" style="width: 14px; height: 14px;"></i>
              <span>Sẵn sàng đính kèm tài liệu / ấn phẩm minh chứng</span>
            </div>
          `}
        </div>
      `).join("");
    } else {
      delivList.innerHTML = `<div style="color: var(--text-muted); font-size: 0.88rem;">Đang cập nhật các hạng mục chi tiết...</div>`;
    }
  }

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
