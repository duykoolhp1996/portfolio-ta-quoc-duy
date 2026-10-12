/* ========================================================
   PORTFOLIO TẠ QUỐC DUY — JAVASCRIPT CONTROLLER
   Author: 🐱 Xu Xu & Tạ Quốc Duy
   Features: 3D Fanned Deck Modal Integration, Stats Counter,
             FAQ Accordion, Smooth Scroll, Form Handler
======================================================== */

// Professional Case Studies Dataset (Strictly aligned with CV)
const caseStudiesData = {
  sala: {
    category: "Bất Động Sản Hoa Viên Sinh Thái Cao Cấp",
    company: "Công Ty Cổ Phần TM & DV Sala Garden",
    role: "Marketing Manager",
    period: "03/2026 – Hiện tại",
    title: "Vận Hành Hệ Thống Nội Dung 130+ Videos/Tháng & Quản Trị Ngân Sách 300Tr Tạo 50+ Q.Leads",
    challenge: "Bất động sản hoa viên sinh thái 5 sao là phân khúc đặc thù, giá trị cao và chu kỳ ra quyết định mua hàng dài. Thách thức lớn nhất là phải xây dựng được lòng tin sâu sắc, truyền tải trọn vẹn giá trị văn hóa hiếu nghĩa và tạo ra dòng khách hàng tiềm năng thực sự quan tâm (Qualified Leads) cho đội ngũ tư vấn chốt đơn.",
    strategy: "Tái cấu trúc và dẫn dắt song song hai đội ngũ chuyên biệt: Team Digital Marketing (tập trung chuyển đổi dữ liệu, lead và đo lường) và Team Branding (sáng tạo nội dung, nhận diện và trải nghiệm). Chuẩn hóa quy trình vận hành liên phòng ban Marketing x Sales x CSKH.",
    deliverables: [
      {
        title: "Hoạch Định Chiến Lược & Setup KPI 2 Teams",
        tag: "Strategy & P&L",
        desc: "Thiết lập cấu trúc vận hành song song Team Digital Marketing & Team Branding (8–14 nhân sự) với khung KPIs định lượng chi tiết cho từng vị trí.",
        items: [
          "Bộ khung KPI/OKR chi tiết cho Ads Specialist, Content Creator, Video Editor, Graphic Designer",
          "Chuẩn hóa quy trình SOP phối hợp liên phòng ban Marketing – Sales – CSKH",
          "Kiểm soát ngân sách P&L và theo dõi đo lường ROI/ROAS thời gian thực"
        ],
        attachment: "SOP phối hợp liên phòng ban & Bảng theo dõi KPI"
      },
      {
        title: "Cỗ Máy Sản Xuất Nội Dung 130+ Videos/Tháng",
        tag: "Content Factory",
        desc: "Xây dựng quy trình sản xuất nội dung quy mô lớn đạt công suất 130+ video/tháng phủ sóng toàn diện trên TikTok, Reels, Shorts và phóng sự.",
        items: [
          "Phát triển cấu trúc kịch bản video ngắn chuẩn Hook-Body-CTA tăng giữ chân khán giả",
          "Chỉ đạo sản xuất chuỗi phóng sự văn hóa tri ân và trải nghiệm hoa viên sinh thái 5 sao",
          "Phân phối đa nền tảng số và tối ưu hóa lượt tương tác tự nhiên"
        ],
        attachment: "Bộ kịch bản video ngắn & Phân luồng sản xuất"
      },
      {
        title: "Quản Trị Ngân Sách Ads 300Tr & 50+ Q.Leads",
        tag: "Performance Ads",
        desc: "Hoạch định và tối ưu ngân sách quảng cáo số 300.000.000 VNĐ/tháng đa kênh đem về đều đặn 50+ Qualified Leads chất lượng cao/tháng.",
        items: [
          "Quản lý và tối ưu đa kênh: Facebook Ads, Google Ads, TikTok Ads, Zalo OA",
          "Thiết lập phễu lọc khách hàng tiềm năng phân khúc bất động sản cao cấp",
          "Nuôi dưỡng và chuyển giao lead chất lượng cho đội ngũ tư vấn chốt deal"
        ],
        attachment: "Dashboard báo cáo hiệu suất chi phí CPL/Qualified Leads"
      },
      {
        title: "Tiếp Thị Điểm Chạm & POSM Sự Kiện Tại Chỗ",
        tag: "Omnichannel & POSM",
        desc: "Kết nối tiếp thị số với hoạt động tại chỗ, nâng cao trải nghiệm và niềm tin cho khách hàng tham quan thực tế.",
        items: [
          "Thiết kế decor không gian sự kiện Nhà tròn và ấn phẩm đón tiếp khách VIP",
          "Phát hành Voucher tri ân sự kiện và Standee đối tác liên kết",
          "Gia tăng niềm tin thương hiệu và tỷ lệ chuyển đổi lịch hẹn thực tế"
        ],
        attachment: "Ấn phẩm POSM tại chỗ & Concept Decor sự kiện"
      }
    ],
    results: [
      "Duy trì đều đặn 50+ Qualified Leads chất lượng cao/tháng phục vụ đội ngũ tư vấn chốt đơn.",
      "Vận hành cỗ máy sản xuất 130+ video/tháng, tăng trưởng tương tác tự nhiên trên các kênh số.",
      "Tối ưu chi phí trên mỗi khách hàng tiềm năng (CPL) và nâng cao tỷ lệ chuyển đổi từ lead sang lịch hẹn tham quan thực tế."
    ],
    tech: ["Team Leadership", "Setup KPI từng vị trí", "130+ Videos/Tháng", "300Tr Ads/Tháng", "50+ Q.Leads", "Omnichannel", "Zalo OA"]
  },

  fclick: {
    category: "Nền Tảng Ứng Dụng Công Nghệ Số",
    company: "Công ty Fclick",
    role: "Marketing Manager & MarTech Lead",
    period: "06/2025 – 02/2026",
    title: "Cắt Giảm 25% CPI & Tối Ưu Hóa Vận Hành Bằng AI Tiết Kiệm 30% Thời Gian",
    challenge: "Chi phí thu hút người dùng cài đặt ứng dụng (CPI - Cost Per Install) tăng cao, quy trình sáng tạo và sản xuất nội dung thủ công tốn nhiều nguồn lực, đồng thời thiếu bảng điều khiển đo lường tập trung.",
    strategy: "Tái cấu trúc tệp khách hàng mục tiêu, tối ưu thông điệp qua A/B testing liên tục, chuẩn hóa tracking phễu qua MMP. Tiên phong ứng dụng AI Automation vào sản xuất nội dung và thiết lập Real-time Dashboard kết nối đa kênh.",
    deliverables: [
      {
        title: "Tối Ưu Phễu Chuyển Đổi & Cắt Giảm 25% CPI",
        tag: "Growth Hacking",
        desc: "Tái cấu trúc tệp khách hàng mục tiêu và tối ưu hóa chi phí thu hút người dùng cho ứng dụng số.",
        items: [
          "Chuẩn hóa hệ thống tracking phễu chuyển đổi và phân tầng đối tượng theo hành vi",
          "Triển khai A/B Testing liên tục thông điệp, hình ảnh và video quảng cáo",
          "Cắt giảm thành công 25% chi phí cài đặt (CPI) trên toàn bộ kênh trả phí"
        ],
        attachment: "Báo cáo A/B Testing & Phân tích phễu chuyển đổi"
      },
      {
        title: "Ứng Dụng AI Automation (-30% Thời Gian Vận Hành)",
        tag: "AI & Automation",
        desc: "Tiên phong đưa các giải pháp AI tự động hóa vào quy trình làm việc của đội ngũ marketing.",
        items: [
          "Xây dựng quy trình nghiên cứu thị trường và lập dàn ý nội dung bằng AI Agents",
          "Tiết kiệm 30% thời gian triển khai sáng tạo và sản xuất nội dung cho team",
          "Nâng cao tốc độ kiểm thử và nhân bản chiến dịch quảng cáo đa kênh"
        ],
        attachment: "Tài liệu quy trình AI Content Engine & Workflow"
      },
      {
        title: "Phát Triển 4 Websites Vệ Tinh & Real-Time Dashboard",
        tag: "MarTech & Data",
        desc: "Xây dựng hạ tầng số và bảng điều khiển đo lường chiến dịch thời gian thực.",
        items: [
          "Xây dựng hoàn thiện hệ thống nhận diện số và 4 website vệ tinh",
          "Thiết lập Dashboard đo lường realtime kết nối dữ liệu Facebook, Google, TikTok",
          "Cá nhân hóa chiến dịch Push Notification giúp cải thiện 20% tỷ lệ giữ chân (Retention)"
        ],
        attachment: "Kiến trúc hệ sinh thái 4 website & Dashboard số liệu"
      }
    ],
    results: [
      "Giảm thành công 25% CPI trên toàn bộ các kênh quảng cáo trả phí.",
      "Tiết kiệm 30% thời gian triển khai sáng tạo và sản xuất nội dung theo CV.",
      "Cải thiện 20% tỷ lệ giữ chân người dùng (Retention Rate) sau khi cài đặt ứng dụng."
    ],
    tech: ["AI Automation", "CPI -25%", "Retention +20%", "Real-time Dashboard", "MarTech Lead", "Growth Hacking"]
  },

  luclam: {
    category: "Chuỗi F&B & Quà Tặng Cao Cấp",
    company: "Công Ty TNHH TM DV SX Lục Lam (Lục Lam Group)",
    role: "Marketing Manager",
    period: "04/2024 – 04/2025",
    title: "Kiến Tạo Thương Hiệu Từ Số 0 (Zero to Hero) & Bứt Phá Doanh Thu 1 Tỷ VNĐ/Tháng",
    challenge: "Gia nhập thị trường F&B trà sữa và quà tặng cao cấp từ con số 0: chưa có nhận diện thương hiệu, chưa có hạ tầng tiếp thị số và thiếu hệ thống quy trình vận hành bán hàng khép kín.",
    strategy: "Xây dựng chiến lược thương hiệu Zero-to-Hero: thiết lập trọn bộ Brand Guidelines & Moodboard, phát triển hệ sinh thái 4 website chuyên biệt kết nối CRM, kết hợp chuỗi Activation tại TTTM Takashimaya với chiến dịch Ads bùng nổ doanh số.",
    deliverables: [
      {
        title: "Kiến Tạo Bản Sắc Thương Hiệu Zero to Hero",
        tag: "Brand Identity",
        desc: "Xây dựng trọn vẹn thương hiệu chuỗi F&B trà sữa & quà tặng cao cấp từ con số 0.",
        items: [
          "Hoàn thiện trọn bộ Brand Guidelines, Moodboard và định vị chuỗi cao cấp",
          "Xây dựng nhận diện số và bộ ấn phẩm truyền thông toàn diện",
          "Tuyển dụng, đào tạo và dẫn dắt bộ máy 8 nhân sự Marketing vận hành tự chủ"
        ],
        attachment: "Brand Guidelines & Moodboard định vị Lục Lam"
      },
      {
        title: "Hệ Sinh Thái 4 Websites & CRM Khép Kín",
        tag: "Web & CRM Architecture",
        desc: "Phát triển hệ sinh thái 4 website vệ tinh kết nối hệ thống CRM khép kín từ data đến giao vận.",
        items: [
          "Xây dựng store.luclam.vn, trahoa.luclam.vn, gift.luclam.vn, vietnamtravel.com",
          "Tích hợp CRM quản trị lead và luồng chăm sóc khách hàng tự động",
          "Tích hợp các luồng tự động hóa bằng AI vào chăm sóc khách hàng"
        ],
        attachment: "Sơ đồ kiến trúc 4 website & Quy trình CRM"
      },
      {
        title: "Activation Takashimaya & Sự Kiện Tri Ân",
        tag: "Activation & KOLs",
        desc: "Tổ chức chuỗi sự kiện quy mô lớn khẳng định vị thế thương hiệu trên thị trường bán lẻ cao cấp.",
        items: [
          "Chủ trì chuỗi Activation trực tiếp tại TTTM danh tiếng Takashimaya",
          "Tổ chức sự kiện tri ân quy mô 200+ khách mời và đối tác",
          "Quản lý quan hệ và điều phối chiến dịch Booking KOLs/KOCs"
        ],
        attachment: "Hình ảnh sự kiện Takashimaya & Kế hoạch Activation"
      },
      {
        title: "Chiến Dịch Tăng Trưởng Doanh Thu 1 Tỷ/Tháng",
        tag: "Growth Marketing",
        desc: "Điều hành chiến dịch quảng cáo đa kênh và mùa vụ quà Tết đạt mốc doanh thu 1 tỷ VNĐ/tháng.",
        items: [
          "Quản trị và tối ưu chiến dịch đa kênh Google Ads & Facebook Ads",
          "Chiến dịch Quà Tết bùng nổ doanh số kết hợp B2B Gift và điểm bán lẻ",
          "Triển khai ấn phẩm POSM Trade Marketing tại tất cả các điểm bán"
        ],
        attachment: "Kế hoạch chiến dịch Quà Tết & Báo cáo doanh số"
      }
    ],
    results: [
      "Đưa doanh thu từ con số 0 đạt mốc 1 tỷ VNĐ/tháng.",
      "Tuyển dụng, đào tạo và xây dựng bộ máy 8 nhân sự Marketing.",
      "Hoàn thiện hệ sinh thái 4 website và hệ thống CRM quản trị dữ liệu khép kín."
    ],
    tech: ["Doanh Thu 1 Tỷ/Tháng", "Brand Launching", "Team 8 Mems", "4 Websites", "CRM & AI System", "Takashimaya Activation"]
  },

  bravigo: {
    category: "Thiết Bị Công Nghệ Ô Tô Thông Minh (B2B & B2C)",
    company: "Bravigo Việt Nam",
    role: "Marketing Manager",
    period: "03/2022 – 04/2024",
    title: "Mở Rộng Thị Phần Toàn Quốc Qua Mạng Lưới Hàng Trăm Đại Lý & Trade Marketing",
    challenge: "Thị trường màn hình và thiết bị ô tô thông minh cạnh tranh gay gắt, đòi hỏi sự kết hợp chặt chẽ giữa xây dựng nhận diện thương hiệu với người tiêu dùng (B2C) và chính sách thúc đẩy hàng qua mạng lưới đại lý phân phối (B2B).",
    strategy: "Hoạch định chiến lược marketing trung và dài hạn, quản lý đội ngũ 8 chuyên viên, phối hợp chặt chẽ với agency sáng tạo và hệ thống KOLs/KOCs chuyên môn cao ngành xe; phủ sóng ấn phẩm POSM tại hàng trăm đại lý toàn quốc.",
    deliverables: [
      {
        title: "Chiến Lược Mở Rộng Thị Phần B2B & B2C",
        tag: "Chiến Lược Toàn Quốc",
        desc: "Lập kế hoạch marketing ngắn và trung hạn đưa hệ sinh thái màn hình ô tô thông minh chiếm lĩnh thị phần.",
        items: [
          "Lãnh đạo và phân bổ ngân sách cho team Marketing 8 chuyên viên",
          "Kết hợp chiến lược nhận diện người tiêu dùng (B2C) và đẩy hàng đại lý (B2B)",
          "Làm việc cùng các agency sáng tạo chuyên sâu ngành ô tô"
        ],
        attachment: "Kế hoạch tiếp thị mở rộng thị phần Bravigo"
      },
      {
        title: "Phủ POSM Trade Marketing Hàng Trăm Đại Lý",
        tag: "Trade Marketing",
        desc: "Triển khai bộ nhận diện thương hiệu tại điểm bán trên mạng lưới đại lý phân phối toàn quốc.",
        items: [
          "Phối hợp khối kinh doanh triển khai POSM tại hàng trăm đại lý và gara ủy quyền",
          "Tối ưu CPA và chuẩn hóa quy trình phân bổ lead cho các đại lý khu vực",
          "Hỗ trợ tổ chức các sự kiện trải nghiệm lái thử tại đại lý"
        ],
        attachment: "Bộ nhận diện POSM tại đại lý & Gara ô tô"
      },
      {
        title: "Chiến Dịch Booking KOLs/KOCs Ngành Xe",
        tag: "KOLs & PR",
        desc: "Hợp tác cùng mạng lưới chuyên gia và reviewer xe hơi uy tín tạo độ phủ nhận diện vượt trội.",
        items: [
          "Booking và định hướng nội dung cho các reviewer công nghệ xe hàng đầu",
          "Sản xuất TVC, chuỗi video review công nghệ trên YouTube và TikTok",
          "Định vị Bravigo trở thành thương hiệu top-of-mind trong phân khúc màn hình ô tô Android"
        ],
        attachment: "Danh sách KOLs hợp tác & Kịch bản TVC review"
      }
    ],
    results: [
      "Thúc đẩy tăng trưởng nhận diện thương hiệu Bravigo trên toàn quốc.",
      "Phủ sóng ấn phẩm POSM tại hàng trăm đại lý phân phối và gara ủy quyền.",
      "Quản lý điều phối hiệu quả đội ngũ 8 chuyên viên và mạng lưới đối tác agency/KOLs."
    ],
    tech: ["Auto Tech", "B2B & B2C", "Trade Marketing", "Team 8 Mems", "Hàng Trăm Đại Lý", "KOL Campaigns"]
  },

  lath: {
    category: "Bán Lẻ & Thương Mại Điện Tử",
    company: "LATH Group / TSD Group",
    role: "Marketing Lead",
    period: "08/2020 – 02/2022",
    title: "Tăng Trưởng Doanh Thu Ads +40% & Phát Triển 5.000+ SEO Traffic Tự Nhiên",
    challenge: "Cần tối ưu hóa chi phí quảng cáo trực tuyến, đa dạng hóa nguồn khách hàng sang tìm kiếm tự nhiên bền vững và đưa sản phẩm vào chuỗi siêu thị lớn cùng các sàn TMĐT.",
    strategy: "Triển khai chiến lược Performance Ads với thầu thông minh kết hợp SEO On-page/Off-page toàn diện cho website lath.vn; đưa sản phẩm vào chuỗi siêu thị Lotte Mart; tối ưu UX/UI ứng dụng di động KingPang.",
    deliverables: [
      {
        title: "Tăng Trưởng Doanh Thu Từ Ads (+40%)",
        tag: "Performance Ads",
        desc: "Triển khai các chiến dịch quảng cáo trực tuyến hiệu quả cao, thúc đẩy doanh số bán lẻ bứt phá.",
        items: [
          "Tối ưu chiến lược thầu thông minh trên Google Ads & Facebook Ads",
          "Tăng trưởng doanh thu từ quảng cáo +40% so với kỳ trước theo CV",
          "Tối ưu hoạt động Marketing hỗ trợ hệ thống showroom bán lẻ"
        ],
        attachment: "Báo cáo tăng trưởng doanh thu Ads & ROAS"
      },
      {
        title: "Xây Dựng Kênh SEO Bền Vững (5.000+ Traffic)",
        tag: "SEO Organic",
        desc: "Chiến lược SEO toàn diện giúp website lath.vn tạo ra nguồn doanh thu tự nhiên ổn định.",
        items: [
          "Đưa website lath.vn đạt hơn 5.000 organic traffic/tháng tự nhiên",
          "Tạo ra hơn 200 đơn hàng tự nhiên/tháng không mất chi phí quảng cáo",
          "Tối ưu cấu trúc On-page, Off-page và trải nghiệm mua sắm"
        ],
        attachment: "Báo cáo tăng trưởng Organic Traffic & Từ khóa SEO"
      },
      {
        title: "Đưa Hàng Vào Siêu Thị Lotte Mart & Sàn TMĐT",
        tag: "Trade & E-Commerce",
        desc: "Mở rộng kênh phân phối từ bán lẻ truyền thống sang hệ thống siêu thị lớn và sàn TMĐT.",
        items: [
          "Đưa sản phẩm thành công vào chuỗi siêu thị Lotte Mart (tăng 25% tỷ lệ mua hàng)",
          "Vận hành gian hàng trên các sàn TMĐT lớn (Shopee, Lazada, Tiki)",
          "Tối ưu UX/UI app KingPang giúp tăng 20% lượt tải ứng dụng"
        ],
        attachment: "Hồ sơ sản phẩm Lotte Mart & Case Study App KingPang"
      }
    ],
    results: [
      "Tăng 40% doanh thu từ quảng cáo so với kỳ trước.",
      "Hơn 5.000 organic traffic/tháng và hơn 200 đơn hàng tự nhiên/tháng.",
      "Tăng 25% tỷ lệ mua hàng khi vào chuỗi Lotte Mart; tăng 20% lượt tải app KingPang."
    ],
    tech: ["Ads Rev +40%", "SEO 5k Traffic", "200+ Đơn Tự Nhiên", "Lotte Mart Trade", "UX/UI App KingPang"]
  }
};

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  initLucide();
  initStatsCounter();
  initFaqAccordion();
  initSmoothScroll();
  initGrowthChart();
});

// Chart Hub Tab Switcher
window.switchChartTab = function(tabId, btn) {
  const buttons = document.querySelectorAll(".chart-tab-btn");
  buttons.forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");

  const panels = document.querySelectorAll(".chart-view-panel");
  panels.forEach(p => p.classList.remove("active"));
  const target = document.getElementById(tabId);
  if (target) {
    target.classList.add("active");
  }
};

// Interactive Chart.js Controller
let growthChartInstance = null;
function initGrowthChart() {
  const canvas = document.getElementById("growthChart");
  if (!canvas || !window.Chart) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  // Custom Chart Theme
  growthChartInstance = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "Bravigo (AutoTech)",
        "Lục Lam (F&B Chain)",
        "Fclick (SaaS App)",
        "Sala Garden (BĐS 5*)",
        "LATH Group (AI MarTech)"
      ],
      datasets: [
        {
          label: "Tối Ưu Chi Phí CPI/CPL (%)",
          data: [-15, -25, -25, -35, -30],
          type: "line",
          borderColor: "#F43F5E",
          backgroundColor: "#F43F5E",
          borderWidth: 3,
          tension: 0.35,
          pointBackgroundColor: "#F43F5E",
          pointBorderColor: "#FFFFFF",
          pointBorderWidth: 2,
          pointRadius: 6,
          pointHoverRadius: 8,
          yAxisID: "y"
        },
        {
          label: "Tăng Trưởng Quy Mô & Doanh Số (%)",
          data: [40, 100, 140, 85, 75],
          backgroundColor: "rgba(6, 182, 212, 0.85)",
          hoverBackgroundColor: "#22D3EE",
          borderRadius: 8,
          borderSkipped: false,
          yAxisID: "y"
        },
        {
          label: "Năng Suất & Tự Động Hóa AI (%)",
          data: [35, 60, 90, 120, 145],
          backgroundColor: "rgba(16, 185, 129, 0.8)",
          hoverBackgroundColor: "#34D399",
          borderRadius: 8,
          borderSkipped: false,
          yAxisID: "y"
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: "index",
        intersect: false
      },
      plugins: {
        legend: {
          position: "top",
          labels: {
            color: "#94A3B8",
            font: {
              family: "'Plus Jakarta Sans', sans-serif",
              size: 12,
              weight: "600"
            },
            padding: 18,
            usePointStyle: true,
            boxWidth: 8
          }
        },
        tooltip: {
          backgroundColor: "rgba(15, 23, 42, 0.95)",
          titleColor: "#FFFFFF",
          bodyColor: "#94A3B8",
          borderColor: "rgba(255, 255, 255, 0.15)",
          borderWidth: 1,
          padding: 12,
          boxPadding: 6,
          cornerRadius: 8,
          titleFont: {
            family: "'Space Grotesk', sans-serif",
            size: 13,
            weight: "700"
          },
          bodyFont: {
            family: "'Plus Jakarta Sans', sans-serif",
            size: 12
          },
          callbacks: {
            label: function(context) {
              const label = context.dataset.label || "";
              const val = context.parsed.y;
              if (val < 0) {
                return `${label}: Cắt giảm ${Math.abs(val)}% chi phí`;
              }
              return `${label}: +${val}% hiệu suất`;
            }
          }
        }
      },
      scales: {
        x: {
          grid: {
            color: "rgba(255, 255, 255, 0.05)"
          },
          ticks: {
            color: "#94A3B8",
            font: {
              family: "'Plus Jakarta Sans', sans-serif",
              size: 11,
              weight: "600"
            }
          }
        },
        y: {
          grid: {
            color: "rgba(255, 255, 255, 0.06)"
          },
          ticks: {
            color: "#94A3B8",
            font: {
              family: "'Plus Jakarta Sans', sans-serif",
              size: 11
            },
            callback: function(value) {
              return value + "%";
            }
          },
          suggestedMin: -40,
          suggestedMax: 160
        }
      }
    }
  });
}

// 1. Lucide Icons Helper
function initLucide() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// 2. Animated Stats Counter (Intersection Observer)
function initStatsCounter() {
  const statNumbers = document.querySelectorAll(".impact-num[data-target]");
  if (!statNumbers.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateValue(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  statNumbers.forEach(el => observer.observe(el));
}

function animateValue(el) {
  const rawTarget = el.getAttribute("data-target");
  const prefix = el.getAttribute("data-prefix") || "";
  const suffix = el.getAttribute("data-suffix") || "";
  const target = parseFloat(rawTarget);
  const duration = 1600;
  const start = 0;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // EaseOutCubic
    const easeProgress = 1 - Math.pow(1 - progress, 3);
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

// 3. Modal Deep-Dive Controller
window.openCaseModal = function(caseKey) {
  const data = caseStudiesData[caseKey];
  if (!data) return;

  const modal = document.getElementById("caseModalOverlay");
  if (!modal) return;

  // Populate data
  document.getElementById("modalCategory").innerText = data.category;
  document.getElementById("modalTitle").innerText = data.title;
  document.getElementById("modalCompany").innerText = data.company;
  document.getElementById("modalRole").innerText = data.role;
  document.getElementById("modalPeriod").innerText = data.period;
  document.getElementById("modalChallenge").innerText = data.challenge;
  document.getElementById("modalStrategy").innerText = data.strategy;

  // Render Deliverables
  const delivContainer = document.getElementById("modalDeliverables");
  if (delivContainer) {
    if (data.deliverables && data.deliverables.length) {
      delivContainer.innerHTML = data.deliverables.map(d => `
        <div class="modal-deliverable-item">
          <div class="modal-del-header">
            <span class="modal-del-title">${d.title}</span>
            <span class="modal-del-tag">${d.tag}</span>
          </div>
          <p class="modal-del-desc">${d.desc}</p>
          <ul class="modal-del-list">
            ${d.items.map(item => `
              <li>
                <i data-lucide="check-circle-2"></i>
                <span>${item}</span>
              </li>
            `).join("")}
          </ul>
        </div>
      `).join("");
    } else {
      delivContainer.innerHTML = `<div style="color: var(--text-muted); font-size: 0.88rem;">Đang cập nhật các hạng mục chi tiết...</div>`;
    }
  }

  // Render Results
  const resContainer = document.getElementById("modalResults");
  if (resContainer) {
    resContainer.innerHTML = data.results.map(r => `
      <li>
        <i data-lucide="trending-up"></i>
        <span><strong>${r}</strong></span>
      </li>
    `).join("");
  }

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
  initLucide();
};

window.closeCaseModal = function() {
  const modal = document.getElementById("caseModalOverlay");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
};

window.closeModalOnBackdrop = function(e) {
  if (e.target.id === "caseModalOverlay") {
    window.closeCaseModal();
  }
};

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    window.closeCaseModal();
  }
});

// 4. FAQ Accordion Controller
function initFaqAccordion() {
  const faqCards = document.querySelectorAll(".faq-card");
  faqCards.forEach(card => {
    const btn = card.querySelector(".faq-question-btn");
    if (btn) {
      btn.addEventListener("click", () => {
        const isOpen = card.classList.contains("open");
        // Close all
        faqCards.forEach(c => c.classList.remove("open"));
        // Toggle current
        if (!isOpen) {
          card.classList.add("open");
        }
      });
    }
  });
}

// 5. Smooth Scroll & Active Nav Spy
function initSmoothScroll() {
  const links = document.querySelectorAll("a[href^='#']");
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (targetId && targetId !== "#" && targetId !== "#modal") {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });
}

// 6. Contact Form Submit Handler
window.handleFormSubmit = function(e) {
  e.preventDefault();
  const name = document.getElementById("senderName").value;
  const email = document.getElementById("senderEmail").value;
  const subject = document.getElementById("senderSubject").value;

  alert(`Cảm ơn anh/chị ${name}!\nLời nhắn về chủ đề "${subject}" đã được ghi nhận. Tạ Quốc Duy sẽ phản hồi lại qua email ${email} trong thời gian sớm nhất.`);
  e.target.reset();
};
