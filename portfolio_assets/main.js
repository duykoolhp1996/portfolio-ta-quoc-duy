/* ========================================================
   PORTFOLIO TẠ QUỐC DUY — JAVASCRIPT CONTROLLER
   Author: 🐱 Xu Xu & Tạ Quốc Duy
   Features: 3D Fanned Deck Modal Integration, Stats Counter,
             FAQ Accordion, Smooth Scroll, Form Handler
======================================================== */

// Dữ liệu chi tiết các dự án (Đồng bộ số liệu thực tế từ CV)
const caseStudiesData = {
  sala: {
    category: "Bất Động Sản Hoa Viên Sinh Thái Cao Cấp",
    company: "Công Ty Cổ Phần TM & DV Sala Garden",
    role: "Quản Lý Marketing",
    period: "03/2026 – Hiện tại",
    title: "Sản Xuất 130+ Video/Tháng & Quản Trị Ngân Sách Ads 300Tr Tạo 50+ Khách VIP",
    challenge: "Bất động sản sinh thái cao cấp có giá trị lớn và chu kỳ mua kéo dài. Thách thức lớn là tạo dựng niềm tin sâu sắc và mang về khách hàng thực sự có nhu cầu để đội ngũ tư vấn chốt giao dịch.",
    strategy: "Điều hành 2 nhóm chuyên biệt: Nhóm Quảng cáo số (chuyển đổi và đo lường) và Nhóm Thương hiệu (nội dung, hình ảnh). Chuẩn hóa quy trình phối hợp nhịp nhàng giữa Marketing và Kinh doanh.",
    deliverables: [
      {
        title: "Giao Kế Hoạch & Chỉ Tiêu Cho 2 Nhóm",
        tag: "Quản Trị Đội Ngũ",
        desc: "Vận hành song song 2 nhóm (10 nhân sự) với chỉ tiêu công việc định lượng rõ ràng từng vị trí.",
        items: [
          "Bộ chỉ tiêu cụ thể cho từng chuyên viên quảng cáo, nội dung, dựng video và thiết kế",
          "Chuẩn hóa quy trình phối hợp nhịp nhàng giữa Marketing, Kinh doanh và CSKH",
          "Kiểm soát ngân sách chi phí và hiệu quả đầu tư theo thời gian thực"
        ],
        attachment: "Quy trình phối hợp liên phòng ban & Bảng theo dõi chỉ tiêu"
      },
      {
        title: "Quy Trình Sản Xuất 130+ Video/Tháng",
        tag: "Sản Xuất Nội Dung",
        desc: "Xây dựng luồng sản xuất nội dung quy mô lớn đạt 130+ video/tháng phủ khắp TikTok, Reels, Shorts và phóng sự.",
        items: [
          "Chuẩn hóa kịch bản video ngắn thu hút người xem ngay 3 giây đầu",
          "Sản xuất chuỗi phóng sự văn hóa tri ân và trải nghiệm hoa viên sinh thái",
          "Phân phối đa kênh để tăng tương tác và nhận diện tự nhiên"
        ],
        attachment: "Bộ kịch bản video ngắn & Phân luồng sản xuất"
      },
      {
        title: "Tối Ưu Ngân Sách Ads 300Tr & 50+ Khách VIP",
        tag: "Quảng Cáo Số & Tối Ưu Dữ Liệu",
        desc: "Điều phối ngân sách quảng cáo 300 triệu/tháng đa kênh, đem về đều đặn hơn 50 khách hàng tiềm năng chất lượng cao mỗi tháng.",
        items: [
          "Thực chiến chiến dịch Video Storytelling: Tiếp cận 250.000+ người/tháng, 24.900+ clicks với CPC chỉ 1.205đ và CTR đạt 6.14%",
          "Target phân khúc đối tượng sâu: Tập trung 80.5% ngân sách vào nhóm 55+ tuổi (tệp gia chủ ra quyết định BĐS cao cấp)",
          "Tối ưu ngân sách đa kênh trên Facebook, Google, TikTok, Zalo OA và chuyển giao Lead cho đội ngũ tư vấn chăm sóc"
        ],
        attachment: "Báo cáo hiệu quả chi phí & Google Sheet đối soát chiến dịch video"
      },
      {
        title: "Tiếp Thị Trực Tiếp & Sự Kiện Đón Tiếp",
        tag: "Tiếp Thị Thực Địa",
        desc: "Gắn kết quảng cáo online với trải nghiệm thực tế tại dự án để tăng tỷ lệ chốt đơn.",
        items: [
          "Trang trí không gian đón tiếp và tài liệu giới thiệu cho khách VIP",
          "Phát hành phiếu ưu đãi và tài liệu giới thiệu tại sự kiện",
          "Gia tăng niềm tin và tỷ lệ đặt lịch hẹn tham quan thực tế"
        ],
        attachment: "Tài liệu trưng bày thực tế & Không gian sự kiện"
      },
      {
        title: "Kế Hoạch Ra Mắt Dự Án Thiên Phúc Vĩnh Hằng Viên (Yên Tử)",
        tag: "Dự Án Mở Rộng 450 Tỷ",
        desc: "Xây dựng toàn diện kế hoạch truyền thông tích hợp (IMC Plan), kịch bản sự kiện khởi động 200+ VIP, video teaser và trọn bộ ấn phẩm POSM in ấn.",
        items: [
          "Kế hoạch truyền thông 3 giai đoạn (Teasing ➔ Launching ➔ Chuyển đổi bán hàng)",
          "Kịch bản sản xuất Video Teaser 45s cảm xúc và Phối cảnh 3D 2m30s màn hình LED",
          "Kịch bản tiến trình sự kiện khởi động chi tiết từng phút và lời dẫn MC",
          "Thông cáo báo chí và trọn bộ ấn phẩm in ấn POSM, thư mời VIP ép kim sang trọng"
        ],
        attachment: "Kế hoạch IMC Plan • Kịch bản sự kiện • Bộ ấn phẩm POSM"
      }
    ],
    // DỰ ÁN MỞ RỘNG MỚI: THIÊN PHÚC VĨNH HẰNG VIÊN (YÊN TỬ — QUẢNG NINH)
    launchProject: {
      badge: "Dự Án Mở Rộng Chiến Lược 2026 (Sala Garden & Faraland VN)",
      title: "Công Viên Nghĩa Trang Sinh Thái Thiên Phúc Vĩnh Hằng Viên (Yên Tử — Quảng Ninh)",
      subtitle: "Quy mô 32,54 ha • Tổng vốn đầu tư 450+ Tỷ VNĐ • Vị trí Bãi Dài kế cận Chùa Ba Vàng",
      scale: "32,54 Hecta",
      investment: "450+ Tỷ VNĐ",
      location: "Bãi Dài, P. Uông Bí & Yên Tử, Tỉnh Quảng Ninh",
      theme: "“Gìn Giữ Hiếu Đạo — Kiến Tạo Vĩnh Hằng”",
      role: "Trưởng Phòng Marketing (Marketing Manager) — Trực tiếp lập Kế hoạch truyền thông tổng thể (IMC Plan), kịch bản sự kiện, kịch bản video teaser & bộ nhận diện POSM",
      gallery: [
        {
          src: "portfolio_assets/images/sala_thienphuc_render.jpg",
          tag: "Phối Cảnh Tổng Thể 3D",
          name: "Quy Hoạch Sinh Thái 5 Sao (32,54 ha)",
          caption: "Phối cảnh tổng thể Công viên nghĩa trang sinh thái Thiên Phúc Vĩnh Hằng Viên kế cận Chùa Ba Vàng và non thiêng Yên Tử."
        },
        {
          src: "portfolio_assets/images/sala_thienphuc_invitation.jpg",
          tag: "Ấn Phẩm VIP",
          name: "Thư Mời Sự Kiện Khởi Động Trang Trọng",
          caption: "Thư mời cao cấp gửi tặng 200+ đại biểu chính quyền địa phương, ban lãnh đạo Faraland VN và khách hàng VIP."
        },
        {
          src: "portfolio_assets/images/sala_thienphuc_backdrop.jpg",
          tag: "Sân Khấu Sự Kiện",
          name: "Backdrop Lễ Khởi Động & Ký Kết Chiến Lược",
          caption: "Thiết kế nhận diện sân khấu Lễ khởi động dự án Thiên Phúc Vĩnh Hằng Viên mang sắc vàng hoàng kim và non thiêng Yên Tử."
        },
        {
          src: "portfolio_assets/images/sala_thienphuc_posm.jpg",
          tag: "Nhận Diện POSM",
          name: "Bộ Ấn Phẩm In Ấn Khổ Lớn & Standee",
          caption: "Bộ ấn phẩm in ấn kích thước lớn, standee đón tiếp và tài liệu bán hàng Sales Kit chuẩn nhận diện Sala Garden."
        }
      ],
      tabs: [
        {
          id: "imc",
          title: "Kế Hoạch Truyền Thông (IMC Plan)",
          icon: "book-open",
          badge: "Chiến Lược 3 Giai Đoạn",
          content: `
            <div class="launch-pane-header">
              <h4 class="launch-pane-title"><i data-lucide="compass" style="color: #F59E0B;"></i> Kế Hoạch Truyền Thông Tích Hợp (IMC Plan)</h4>
              <span class="launch-pane-badge">3 Giai Đoạn • Phủ Đông Bắc</span>
            </div>
            <div class="launch-doc-timeline">
              <div class="launch-timeline-item">
                <strong>Giai Đoạn 1: Teasing Khởi Sinh (15 Ngày Trước Sự Kiện)</strong><br>
                Lan tỏa video teaser cảm xúc 45s về non thiêng Yên Tử và chữ Hiếu gia tộc. Phóng sự văn hóa báo hiếu, seeding cộng đồng Phật tử và tiếp cận danh sách VIP Quảng Ninh, Hải Phòng, Hà Nội.
              </div>
              <div class="launch-timeline-item">
                <strong>Giai Đoạn 2: Bùng Nổ Lễ Khởi Động (Ngày D-Day 02/06/2026)</strong><br>
                Tổ chức sự kiện tiếp đón 200+ đại biểu VIP, nghi thức tâm linh cầu an, trình chiếu phim phối cảnh 3D màn hình LED, lễ ký kết phân phối chiến lược Faraland VN và phát hành thông cáo báo chí.
              </div>
              <div class="launch-timeline-item">
                <strong>Giai Đoạn 3: Chuyển Đổi &amp; Bán Hàng (Sustaining 30 Ngày Tiếp Theo)</strong><br>
                Chạy quảng cáo chuyển đổi đa kênh (Meta Ads, Google Search, Zalo OA), tổ chức tour đón khách VIP tham quan thực địa dự án kết hợp chiêm bái Chùa Ba Vàng. Mục tiêu: 50+ cọc giữ chỗ tháng đầu.
              </div>
            </div>
            <div class="launch-quotes-box">
              “Thông điệp cốt lõi: Gìn Giữ Hiếu Đạo — Kiến Tạo Vĩnh Hằng. Nơi linh khí non thiêng Yên Tử giao hòa cùng chuẩn mực hoa viên sinh thái 5 sao, mang lại phúc lộc trường tồn cho muôn đời sau.”
            </div>
          `
        },
        {
          id: "video",
          title: "Kịch Bản Video Teaser & Phối Cảnh",
          icon: "clapperboard",
          badge: "2 Sản Phẩm Media",
          content: `
            <div class="launch-pane-header">
              <h4 class="launch-pane-title"><i data-lucide="video" style="color: #06B6D4;"></i> Kịch Bản Sản Xuất Video Truyền Thông</h4>
              <span class="launch-pane-badge" style="background: rgba(6, 182, 212, 0.15); color: #67E8F9;">Teaser 45s &amp; Phối Cảnh 2m30s</span>
            </div>
            <div class="launch-doc-timeline">
              <div class="launch-timeline-item">
                <strong>1. Video Teaser 45s — “Nơi Non Thiêng Giao Hòa” (Reels / TikTok / Shorts)</strong><br>
                Cảnh mở đầu flycam mây vờn đỉnh Yên Tử và tiếng chuông Chùa Ba Vàng ngân vang. Dẫn dắt cảm xúc: “Chữ Hiếu trọn đời không chỉ là phụng dưỡng sớm hôm, mà là chuẩn bị chốn an nghỉ an lạc vĩnh hằng cho cha mẹ.”
              </div>
              <div class="launch-timeline-item">
                <strong>2. Phim Phối Cảnh 3D &amp; Triết Lý 2 Phút 30 Giây (LED Sự Kiện &amp; Ads)</strong><br>
                Giới thiệu trọn vẹn vị trí Bãi Dài (Tựa Sơn Hướng Thủy), quy hoạch 32,54 ha chuẩn resort sinh thái, công viên mặt nước ngũ hành, khu mộ gia tộc bề thế và dịch vụ chăm sóc hương khói 365 ngày trọn đời.
              </div>
            </div>
            <div class="launch-quotes-box">
              “Kịch bản định hướng khơi gợi lòng hiếu đạo và văn hóa cội nguồn, nói không với quảng cáo giật gân, chạm sâu vào tâm thức của những người con hiếu thảo và gia chủ thượng lưu.”
            </div>
          `
        },
        {
          id: "event",
          title: "Kịch Bản Sự Kiện Khởi Động & MC",
          icon: "mic",
          badge: "200+ Đại Biểu VIP",
          content: `
            <div class="launch-pane-header">
              <h4 class="launch-pane-title"><i data-lucide="calendar" style="color: #10B981;"></i> Tiến Trình Sự Kiện &amp; Lời Dẫn MC Chi Tiết</h4>
              <span class="launch-pane-badge">08:30 – 11:30 • 02/06/2026</span>
            </div>
            <div class="launch-doc-timeline">
              <div class="launch-timeline-item">
                <strong>08:30 – 09:00 | Đón Tiếp Đại Biểu &amp; Check-in Photo VIP</strong><br>
                Đội ngũ lễ tân trang phục nhã nhặn đón tiếp đại biểu, trao tặng hoa cài ngực và tài liệu Sales Kit, check-in tại Backdrop nhận diện hoàng kim.
              </div>
              <div class="launch-timeline-item">
                <strong>09:00 – 09:30 | Nghi Lễ Khởi Động &amp; Trình Chiếu Phim Dự Án</strong><br>
                Tiết mục múa nghệ thuật “Khởi Sinh An Lạc”, lời phát biểu của Ban Lãnh Đạo Sala Garden &amp; Faraland VN, công chiếu phim 3D dự án trên màn hình LED.
              </div>
              <div class="launch-timeline-item">
                <strong>09:30 – 10:30 | Lễ Ký Kết Phân Phối Chiến Lược &amp; Công Bố Chính Sách</strong><br>
                Lễ ký kết giữa Chủ đầu tư và các đại lý chiến lược, công bố bảng hàng đợt 1 và chương trình tri ân 50 khách hàng đầu tiên.
              </div>
              <div class="launch-timeline-item">
                <strong>10:30 – 11:30 | Tham Quan Thực Địa &amp; Tiệc Trà Giao Lưu</strong><br>
                Đưa đón khách VIP tham quan sa bàn và vị trí dự án thực tế, tư vấn chuyên sâu về phong thủy sinh phần.
              </div>
            </div>
          `
        },
        {
          id: "pr",
          title: "Thông Cáo Báo Chí & POSM",
          icon: "newspaper",
          badge: "Báo Uy Tín & In Ấn",
          content: `
            <div class="launch-pane-header">
              <h4 class="launch-pane-title"><i data-lucide="file-text" style="color: #A855F7;"></i> Thông Cáo Báo Chí &amp; Bộ Ấn Phẩm In Ấn (POSM)</h4>
              <span class="launch-pane-badge" style="background: rgba(168, 85, 247, 0.15); color: #D8B4FE;">Phát Hành Ngay</span>
            </div>
            <div class="launch-doc-timeline">
              <div class="launch-timeline-item">
                <strong>Thông Cáo Báo Chí Chính Thức:</strong><br>
                Tiêu đề: <em>“Chính Thức Khởi Động Công Viên Nghĩa Trang Sinh Thái Thiên Phúc Vĩnh Hằng Viên Tại Quảng Ninh: Gìn Giữ Hiếu Đạo — Kiến Tạo Vĩnh Hằng”</em>. Phủ sóng trên các đầu báo lớn: Báo Quảng Ninh, VnExpress, Dân Trí, Batdongsan.com.vn.
              </div>
              <div class="launch-timeline-item">
                <strong>Trọn Bộ Ấn Phẩm POSM Thiết Kế Đồng Bộ:</strong><br>
                Bao gồm Thư mời VIP ép kim sang trọng, Backdrop sân khấu 8x4m, Standee thông điệp, Sách giới thiệu dự án (Brochure 24 trang) và Thẻ đeo Ban tổ chức.
              </div>
            </div>
            <div class="launch-quotes-box">
              “Bộ ấn phẩm được thiết kế với chuẩn mực nhận diện thương hiệu cao cấp nhất, kết hợp giữa gam màu vàng cát phong thủy và xanh ngọc sinh thái của Sala Garden.”
            </div>
          `
        }
      ]
    },
    // Dữ liệu Báo Cáo Thực Chiến từ Google Sheet (Quy đổi từ báo cáo 1 tuần sang trung bình 1 tháng ~ 30 ngày)
    campaignReport: {
      badge: "Báo Cáo Hiệu Quả Quảng Cáo Thực Chiến (Meta Ads)",
      campaignName: "Chiến Dịch Video Storytelling: 27.05 || Sala Garden || Video Chị Hường (Khu Vực TP.HCM)",
      sheetUrl: "https://docs.google.com/spreadsheets/d/1hDKJeryiMEovkD9u5Xkq92jNO5Ypeakhd-R2enVnf-g/edit?gid=2051067932#gid=2051067932",
      monthlySpend: "~30.000.000 VNĐ / Tháng",
      weeklySpendNote: "Dữ liệu gốc 1 tuần: 6.999.894 VNĐ (Ngoại suy chu kỳ 30 ngày)",
      monthlyReach: "250.000+ Người",
      weeklyReachNote: "Dữ liệu gốc 1 tuần: 58.359 người tiếp cận",
      monthlyClicks: "24.900+ Clicks",
      weeklyClicksNote: "Dữ liệu gốc 1 tuần: 5.810 lượt click vào liên kết",
      efficiency: "CPC 1.205đ • CTR 6.14%",
      efficiencyNote: "CPM 73.956đ • Tiết kiệm 65% chi phí so với chuẩn ngành BĐS",
      demographics: [
        {
          age: "65+ Tuổi",
          isHighlight: true,
          budgetShare: "56.3%",
          monthlyCost: "~16.900.000 VNĐ",
          monthlyClicks: "15.700 Clicks",
          cpc: "1.079 VNĐ",
          isLowCpc: true,
          ctr: "11.2%",
          insight: "Chi phí rẻ nhất, CTR cao nhất. Khách hàng cao tuổi chủ động tìm hiểu đất sinh phần gia tộc cho tương lai."
        },
        {
          age: "55–64 Tuổi",
          isHighlight: true,
          budgetShare: "24.2%",
          monthlyCost: "~7.300.000 VNĐ",
          monthlyClicks: "6.000 Clicks",
          cpc: "1.213 VNĐ",
          isLowCpc: true,
          ctr: "8.9%",
          insight: "Độ tuổi chuẩn bị nghỉ hưu, có tích lũy tài chính mạnh, quan tâm sâu sắc phong thủy và văn hóa tri ân gia tiên."
        },
        {
          age: "45–54 Tuổi",
          isHighlight: false,
          budgetShare: "9.6%",
          monthlyCost: "~2.900.000 VNĐ",
          monthlyClicks: "1.600 Clicks",
          cpc: "1.808 VNĐ",
          isLowCpc: false,
          ctr: "6.3%",
          insight: "Con cái thành đạt tìm kiếm nơi yên nghỉ trang trọng để báo hiếu cha mẹ đấng sinh thành."
        },
        {
          age: "35–44 Tuổi",
          isHighlight: false,
          budgetShare: "6.6%",
          monthlyCost: "~2.000.000 VNĐ",
          monthlyClicks: "1.100 Clicks",
          cpc: "1.869 VNĐ",
          isLowCpc: false,
          ctr: "6.8%",
          insight: "Khách hàng trẻ tiếp cận bước đầu, tỷ lệ tương tác chuyển đổi thấp hơn nhóm trung niên & cao tuổi."
        },
        {
          age: "25–34 Tuổi",
          isHighlight: false,
          budgetShare: "3.3%",
          monthlyCost: "~1.000.000 VNĐ",
          monthlyClicks: "600 Clicks",
          cpc: "1.628 VNĐ",
          isLowCpc: false,
          ctr: "8.1%",
          insight: "Tệp thử nghiệm nội dung văn hóa hoa viên sinh thái, kiểm soát ngân sách ở mức tối thiểu (3.3%)."
        }
      ],
      strategicTakeaway: "Tập trung 80.5% ngân sách vào nhóm 55+ tuổi đem về 86.9% toàn bộ lượt click với CPC chỉ 1.079đ – 1.213đ và CTR đạt 8.9% – 11.2%. Đây là bằng chứng rõ nét của tư duy Growth & Data-driven: Không đốt tiền dàn trải, dùng video câu chuyện chân thực chạm đúng tâm lý khách hàng cao tuổi để tối ưu chi phí thấp hơn 60-70% so với thị trường BĐS."
    },
    results: [
      "Đem về đều đặn hơn 50 khách hàng tiềm năng chất lượng cao mỗi tháng cho đội ngũ kinh doanh.",
      "Vận hành cỗ máy sản xuất 130+ video/tháng phủ đa nền tảng, tăng trưởng mạnh tương tác tự nhiên.",
      "Tối ưu chiến dịch Video Storytelling đạt CTR 6.14% và CPC 1.205 VNĐ (rẻ hơn 65% so với mặt bằng chung BĐS).",
      "Tiếp cận hơn 250.000 người/tháng và tạo ra hơn 24.900 lượt click chất lượng từ tệp khách hàng tiềm năng 55+ tuổi."
    ],
    measurement: {
      before: "Quy trình giữa Marketing và Sales rời rạc; sản xuất video thủ công chỉ 20-30 video/tháng; tỷ lệ Lead VIP đạt dưới 20 leads/tháng; chi phí CPL cao do quảng cáo dàn trải diện rộng.",
      after: "Chuẩn hóa cỗ máy sản xuất 130+ video/tháng phủ TikTok, Reels, Shorts. Quản trị ngân sách 300Tr/tháng đem về 50+ khách VIP/tháng; chiến dịch video đạt CTR 6.14%, CPC 1.205đ và tỷ lệ chuyển đổi hẹn tham quan thực tế tăng 45%.",
      kpis: [
        "130+ Video Đa Nền Tảng / Tháng",
        "50+ Khách VIP Tiềm Năng / Tháng",
        "Chiến Dịch Video: CPC 1.205đ • CTR 6.14%",
        "250.000+ Người Tiếp Cận / Tháng",
        "Tệp 55+ Tuổi Chiếm 80.5% Ngân Sách"
      ]
    },
    learnings: "Trong phân khúc BĐS cao cấp, khách hàng không ra quyết định vì quảng cáo hạ giá hay giật gân, mà mua bằng niềm tin tâm linh, sự uy nghiêm và phong thủy sinh thái. Do đó, cỗ máy video ngắn chân thực kết hợp phân đoạn dữ liệu chuẩn xác (tập trung nhóm 55+ tuổi) và tiếp đón thực địa chu đáo chính là đòn bẩy then chốt để chuyển đổi từ Lead sang Hợp đồng.",
    tech: ["Quản Trị Đội Ngũ", "Chỉ Tiêu KPI", "130+ Video/Tháng", "300Tr Ads/Tháng", "CPC 1.205đ", "CTR 6.14%", "Tệp 55+ Tuổi", "Meta Ads", "Google & Zalo OA"]
  },

  fclick: {
    category: "Ứng Dụng Di Động (Mobile App) & Công Nghệ",
    company: "Công ty Fclick (Ứng Dụng Mobile App)",
    logoUrl: "portfolio_assets/images/logo_fclick_white_text.png",
    role: "Quản Lý Marketing & Trưởng Nhóm MarTech",
    period: "06/2025 – 02/2026",
    title: "Cắt Giảm 25% Chi Phí Tải Ứng Dụng (CPI) & Tự Động Hóa AI Tiết Kiệm 30% Thời Gian",
    challenge: "Chi phí quảng cáo để thu hút người dùng tải ứng dụng (CPI) ngày càng tăng cao, khâu sản xuất nội dung tốn nhiều thời gian và thiếu báo cáo số liệu tập trung.",
    strategy: "Điều chỉnh tệp khách hàng, thử nghiệm liên tục các mẫu quảng cáo và đo lường chính xác từng bước. Ứng dụng AI tự động hóa khâu lên ý tưởng nội dung và kết nối số liệu về một bảng theo dõi chung.",
    deliverables: [
      {
        title: "Tối Ưu Quảng Cáo & Cắt Giảm 25% Chi Phí",
        tag: "Tăng Trưởng Người Dùng",
        desc: "Tái cấu trúc nhóm đối tượng và cải thiện tỷ lệ chuyển đổi trên các kênh quảng cáo.",
        items: [
          "Đo lường hành vi người dùng từ lúc thấy quảng cáo đến khi cài ứng dụng",
          "Thử nghiệm liên tục các mẫu tiêu đề, hình ảnh và video thu hút nhất",
          "Cắt giảm 25% chi phí trên mỗi lượt cài đặt ứng dụng"
        ],
        attachment: "Báo cáo thử nghiệm quảng cáo & Phân tích hành vi người dùng"
      },
      {
        title: "Ứng Dụng AI Giảm 30% Thời Gian Vận Hành",
        tag: "Tự Động Hóa AI",
        desc: "Đưa các công cụ AI vào quy trình làm việc hằng ngày của đội ngũ Marketing.",
        items: [
          "Dùng AI hỗ trợ nghiên cứu xu hướng và lập dàn ý nội dung nhanh",
          "Tiết kiệm 30% thời gian sáng tạo và sản xuất nội dung cho nhóm",
          "Tăng tốc độ thử nghiệm các mẫu thông điệp quảng cáo mới"
        ],
        attachment: "Tài liệu quy trình sản xuất nội dung bằng AI"
      },
      {
        title: "Xây Dựng 4 Website & Báo Cáo Số Liệu Tự Động",
        tag: "Hạ Tầng Dữ Liệu",
        desc: "Thiết lập các trang thông tin vệ tinh và bảng theo dõi hiệu quả đa kênh.",
        items: [
          "Hoàn thiện 4 website thông tin hỗ trợ giới thiệu sản phẩm",
          "Kết nối số liệu quảng cáo Facebook, Google, TikTok về một báo cáo chung",
          "Tăng 20% tỷ lệ người dùng tiếp tục gắn bó với ứng dụng"
        ],
        attachment: "Sơ đồ 4 website vệ tinh & Báo cáo số liệu thời gian thực"
      }
    ],
    results: [
      "Cắt giảm 25% chi phí cài đặt trên toàn bộ các kênh quảng cáo trả phí.",
      "Tiết kiệm 30% thời gian sản xuất và vận hành nội dung nhờ AI.",
      "Tăng 20% tỷ lệ người dùng tiếp tục gắn bó với ứng dụng sau khi cài đặt."
    ],
    measurement: {
      before: "Chi phí CPI leo thang do cạnh tranh hiển thị trên App Store & Google Play; việc sản xuất ý tưởng và visual thử nghiệm thủ công mất 3-4 ngày/bộ; dữ liệu rời rạc giữa các kênh khiến việc ra quyết định bị chậm trễ.",
      after: "Cắt giảm 25% chi phí CPI; ứng dụng AI tự động hóa sản xuất nội dung giúp đội ngũ tiết kiệm 30% thời gian; hệ thống báo cáo tập trung giúp theo dõi thời gian thực và tăng 20% tỷ lệ giữ chân người dùng.",
      kpis: ["-25% Chi Phí Tải Ứng Dụng (CPI)", "Tiết Kiệm 30% Thời Gian Nhờ AI", "+20% Tỷ Lệ Giữ Chân Người Dùng"]
    },
    learnings: "Giá trị thực sự của MarTech và AI trong Growth Marketing không phải là 'thay thế' nhân sự, mà là giải phóng đội ngũ khỏi các việc cơ bắp lặp đi lặp lại để họ có thể tập trung phân tích sâu tâm lý người dùng và thiết kế những phễu kích hoạt giữ chân (retention hooks) mang lại LTV cao.",
    tech: ["Tự Động Hóa AI", "Giảm 25% Chi Phí Cài Đặt", "Giữ Chân +20%", "Báo Cáo Tự Động", "Quản Lý MarTech"]
  },

  luclam: {
    category: "Chuỗi Trà Thảo Mộc & Quà Tặng Cao Cấp",
    company: "Công Ty TNHH TM DV SX Lục Lam (Trà Thảo Mộc & Quà Tặng)",
    logoUrl: "portfolio_assets/images/logo_luclam.png",
    role: "Quản Lý Marketing",
    period: "04/2024 – 04/2025",
    title: "Xây Dựng Thương Hiệu Từ Số 0 & Đạt Doanh Thu 40 Tỷ Đồng",
    challenge: "Gia nhập ngành trà hoa thảo mộc và quà tặng cao cấp từ con số 0: chưa có thương hiệu, chưa có kênh bán hàng online và thiếu quy trình tiếp nhận đơn hàng.",
    strategy: "Xây dựng trọn bộ nhận diện thương hiệu cao cấp, phát triển hệ thống 4 website kết nối phần mềm quản lý khách hàng, kết hợp quảng cáo mùa vụ với sự kiện trải nghiệm tại trung tâm thương mại Takashimaya.",
    deliverables: [
      {
        title: "Xây Dựng Nhận Diện Thương Hiệu Từ Đầu",
        tag: "Xây Dựng Thương Hiệu",
        desc: "Định vị phong cách chuỗi trà hoa thảo mộc và quà tặng cao cấp từ con số 0.",
        items: [
          "Thiết lập bộ quy chuẩn nhận diện, màu sắc và phong cách thương hiệu",
          "Thiết kế toàn bộ bao bì, menu và ấn phẩm truyền thông đồng bộ",
          "Tuyển dụng, đào tạo và dẫn dắt đội ngũ 8 nhân sự marketing"
        ],
        attachment: "Bộ quy chuẩn thương hiệu & Phong cách thiết kế Lục Lam"
      },
      {
        title: "Hệ Thống 4 Website & Quản Lý Khách Hàng",
        tag: "Hệ Thống Bán Hàng",
        desc: "Phát triển hệ thống website chuyên biệt kết nối dữ liệu đơn hàng và chăm sóc khách hàng.",
        items: [
          "Xây dựng 4 website bán lẻ, trà hoa, quà tặng và du lịch",
          "Tự động lưu trữ thông tin khách hàng và kích hoạt chăm sóc tự động",
          "Ứng dụng công nghệ hỗ trợ trả lời và phân loại đơn hàng nhanh"
        ],
        attachment: "Sơ đồ kiến trúc 4 website & Quy trình chăm sóc khách hàng"
      },
      {
        title: "Sự Kiện Takashimaya & Hợp Tác Người Nổi Tiếng",
        tag: "Trải Nghiệm & Sự Kiện",
        desc: "Tổ chức hoạt động trải nghiệm thực tế khẳng định chất lượng thương hiệu cao cấp.",
        items: [
          "Tổ chức chuỗi hoạt động dùng thử trà tại TTTM Takashimaya",
          "Tổ chức sự kiện tri ân hơn 200 khách mời và đối tác",
          "Hợp tác cùng người có ảnh hưởng (KOLs) để lan tỏa thương hiệu"
        ],
        attachment: "Hình ảnh sự kiện Takashimaya & Kế hoạch trải nghiệm"
      },
      {
        title: "Chiến Dịch Bứt Phá Doanh Thu 40 Tỷ & Hộp Quà Tết",
        tag: "Tăng Trưởng Bán Hàng",
        desc: "Kết hợp quảng cáo online và bán quà tặng mùa Tết đạt mốc doanh thu 40 tỷ, sản xuất loạt video quảng bá dòng sản phẩm Trà hoa Lục Lam và video Behind The Scenes (BTS) hoàn thiện hộp quà Tết thủ công cao cấp.",
        items: [
          "Chạy quảng cáo mục tiêu trên Facebook và Google cho các set trà hoa cao cấp",
          "Đẩy mạnh gói quà Tết cho doanh nghiệp B2B và khách hàng bán lẻ",
          "Sản xuất video dự án Trà Hoa Lục Lam giới thiệu các dòng sản phẩm thảo mộc thượng hạng",
          "Chỉ đạo sản xuất video Behind The Scenes (BTS) quy trình hoàn thiện Hộp Quà Tết Lục Lam (Duy Hiền Agency)",
          "Trưng bày đồng bộ tài liệu bán hàng tại tất cả các điểm bán và sự kiện"
        ],
        attachment: "Kế hoạch chiến dịch Quà Tết & 2 Video Truyền Thông (YouTube)"
      }
    ],
    videos: [
      {
        id: "8WTAEo6BWiY",
        title: "Dự Án Trà Hoa Lục Lam (Video Giới Thiệu Sản Phẩm)",
        desc: "Thước phim giới thiệu nhận diện thương hiệu và các dòng sản phẩm trà hoa thảo mộc thượng hạng Lục Lam (Duy Hiền Agency thực hiện).",
        thumb: "portfolio_assets/images/luclam_trahoa_video.jpg",
        tag: "Dự Án Trà Hoa"
      },
      {
        id: "7kSgznq7ly8",
        title: "Behind The Scenes (BTS) — Dự Án Hộp Quà Tết Lục Lam",
        desc: "Thước phim hậu trường ghi lại quá trình sản xuất, thiết kế bao bì và đóng gói thủ công tỉ mỉ bộ sưu tập Hộp Quà Tết Lục Lam cao cấp (Duy Hiền Agency thực hiện).",
        thumb: "portfolio_assets/images/luclam_bts_video.jpg",
        tag: "Behind The Scenes (BTS)"
      }
    ],
    results: [
      "Đưa doanh thu từ con số 0 đạt mốc 40 tỷ đồng.",
      "Sản xuất thành công 2 video chiến dịch (Trà hoa & BTS Hộp Quà Tết) lan tỏa mạnh mẽ hình ảnh thương hiệu.",
      "Xây dựng và đào tạo đội ngũ 8 nhân sự Marketing vận hành độc lập.",
      "Hoàn thiện hệ sinh thái 4 website và hệ thống quản lý dữ liệu khách hàng."
    ],
    measurement: {
      before: "Thương hiệu trà thảo mộc mới thành lập từ số 0; chưa có kênh bán hàng trực tuyến; bao bì và nhận diện chưa đồng nhất; chưa có hệ thống CRM quản lý khách hàng; doanh thu khởi điểm 0 VNĐ.",
      after: "Cán mốc 40 Tỷ VNĐ doanh thu lũy kế; hoàn thiện hệ sinh thái 4 website vệ tinh kết nối CRM; sự kiện trải nghiệm Takashimaya tiếp cận hơn 200 khách VIP & đối tác B2B; 2 video chiến dịch truyền thông lan tỏa mạnh mẽ.",
      kpis: ["Doanh Thu 40 Tỷ Đồng Lũy Kế", "Hệ Sinh Thái 4 Website Bán Hàng & CRM", "Đội Ngũ 8 Nhân Sự Vận Hành Độc Lập", "Sự Kiện Trải Nghiệm Takashimaya 200+ Khách"]
    },
    learnings: "Với ngành trà thảo mộc & quà tặng cao cấp, niềm tin của khách hàng doanh nghiệp B2B không đến từ quảng cáo giảm giá sốc, mà đến từ trải nghiệm trực giác (offline sampling tại TTTM hạng sang như Takashimaya) kết hợp với nhận diện bao bì thủ công tinh xảo và câu chuyện thương hiệu trung thực được ghi lại qua video hậu trường (Behind The Scenes).",
    tech: ["Doanh Thu 40 Tỷ", "2 Video Lục Lam", "Video BTS Quà Tết", "Ra Mắt Thương Hiệu", "Đội Ngũ 8 Người", "4 Website", "Quản Lý Khách Hàng", "Sự Kiện Takashimaya"]
  },

  bravigo: {
    category: "Ngành Xe Ô Tô & Phụ Kiện Thông Minh (B2B & B2C)",
    company: "Bravigo Việt Nam (Thiết Bị Công Nghệ Xe Ô Tô)",
    role: "Quản Lý Marketing",
    period: "03/2022 – 04/2024",
    title: "Phát Triển Thị Phần Qua Hàng Trăm Đại Lý & Chủ Trì Ra Mắt Flagship Ottocast P3",
    challenge: "Thị trường phụ kiện công nghệ xe ô tô cạnh tranh khốc liệt. Cần kết hợp giữa quảng bá cho người lái xe và chính sách phân phối cho hệ thống gara, đại lý. Đồng thời cần tổ chức sự kiện ra mắt hoành tráng cho sản phẩm chiến lược Ottocast P3.",
    strategy: "Hoạch định chiến lược tiếp thị, quản lý đội ngũ 8 chuyên viên, phối hợp cùng các kênh đánh giá xe uy tín và phủ sóng tài liệu trưng bày tại hàng trăm đại lý. Đảm nhiệm vai trò Trưởng Ban Tổ Chức sự kiện và tự thiết kế toàn bộ Slide thuyết trình giới thiệu Ottocast P3.",
    deliverables: [
      {
        title: "Chiến Lược Phân Phối Đại Lý & Người Tiêu Dùng",
        tag: "Chiến Lược Thị Phần",
        desc: "Kết hợp quảng bá thương hiệu đến tài xế với chính sách hỗ trợ bán hàng cho hệ thống đại lý.",
        items: [
          "Lãnh đạo và phân bổ ngân sách cho nhóm 8 chuyên viên marketing",
          "Kết hợp giữa truyền thông thương hiệu và chính sách đẩy hàng đại lý",
          "Phối hợp với các đối tác truyền thông chuyên sâu về ô tô"
        ],
        attachment: "Kế hoạch tiếp thị mở rộng thị phần Bravigo"
      },
      {
        title: "Phủ Sóng Ấn Phẩm Trưng Bày Tại Hàng Trăm Đại Lý",
        tag: "Tiếp Thị Điểm Bán",
        desc: "Đồng bộ nhận diện thương hiệu tại các gara và đại lý phân phối toàn quốc.",
        items: [
          "Lắp đặt bảng biển, tài liệu giới thiệu tại hàng trăm đại lý và gara",
          "Chuyển giao khách hàng tiềm năng theo đúng khu vực cho đại lý xử lý",
          "Hỗ trợ tổ chức các buổi trải nghiệm và lái thử sản phẩm tại chỗ"
        ],
        attachment: "Tài liệu trưng bày tại đại lý & Gara ô tô"
      },
      {
        title: "Hợp Tác Với Các Kênh Đánh Giá Xe Uy Tín",
        tag: "Truyền Thông Chuyên Môn",
        desc: "Hợp tác với các chuyên gia và reviewer xe hơi hàng đầu tạo lòng tin với khách hàng.",
        items: [
          "Hợp tác sản xuất video trải nghiệm với các reviewer xe hàng đầu",
          "Sản xuất chuỗi video giới thiệu tính năng trên YouTube và TikTok",
          "Đưa thương hiệu trở thành lựa chọn hàng đầu trong phân khúc thiết bị ô tô"
        ],
        attachment: "Danh sách hợp tác reviewer & Kịch bản video trải nghiệm"
      },
      {
        title: "Chủ Trì Ra Mắt Ottocast P3 & Thiết Kế Slide Thuyết Trình",
        tag: "Sự Kiện Ra Mắt",
        desc: "Trưởng Ban Tổ Chức sự kiện ra mắt Flagship Ottocast P3; tự tay cấu trúc và thiết kế 100% Slide thuyết trình trên Canva.",
        items: [
          "Lên kế hoạch sự kiện và điều phối khu vực trải nghiệm thực tế cho đại lý",
          "Tự tay thiết kế toàn bộ Slide thuyết trình trên Canva với hình ảnh sắc nét, hiện đại",
          "Làm rõ các tính năng nổi bật (Chip Snapdragon, Hệ điều hành OttoDrive, Đèn viền nội thất)",
          "Quy tụ đông đảo đại lý, gara ô tô và các chuyên gia đánh giá xe hàng đầu"
        ],
        attachment: "Slide thuyết trình Canva & Kịch bản chương trình ra mắt"
      }
    ],
    embedSlide: {
      title: "Slide Giới Thiệu Sự Kiện Ra Mắt Ottocast P3",
      author: "Tạ Quốc Duy (Trưởng Ban Tổ Chức & Người Thiết Kế Slide)",
      url: "https://www.canva.com/design/DAFzc_JdrZs/tAccurnki2vgpJgjPrDIUQ/view?embed",
      canvaLink: "https://www.canva.com/design/DAFzc_JdrZs/tAccurnki2vgpJgjPrDIUQ/view?utm_content=DAFzc_JdrZs&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
    },
    results: [
      "Gia tăng mạnh mẽ độ nhận diện thương hiệu thiết bị ô tô thông minh trên toàn quốc.",
      "Phủ sóng hình ảnh và tài liệu trưng bày tại hàng trăm đại lý, gara ủy quyền.",
      "Tổ chức thành công sự kiện ra mắt Ottocast P3, thúc đẩy hàng loạt đơn đặt hàng từ đại lý.",
      "Quản lý hiệu quả đội ngũ 8 chuyên viên và các đối tác truyền thông ngành xe."
    ],
    measurement: {
      before: "Phụ thuộc vào các bài PR kỹ thuật nặng nề, thiếu công cụ bán hàng trực quan tại điểm bán (POSM); hệ thống đại lý chưa được trang bị tài liệu giới thiệu đồng bộ khiến tỷ lệ chuyển đổi tại gara thấp.",
      after: "Phủ sóng hình ảnh và kệ trải nghiệm tại hàng trăm đại lý toàn quốc; sự kiện ra mắt Ottocast P3 quy tụ đông đảo chủ gara tạo cú hích doanh số đặt cọc lớn ngay trong đêm ra mắt; điều hành trơn tru đội ngũ 8 nhân sự.",
      kpis: ["Mạng Lưới Hàng Trăm Đại Lý / Gara Phủ Sóng", "Quản Lý Đội Ngũ 8 Chuyên Viên", "Chủ Trì Ra Mắt Flagship Ottocast P3 & Thiết Kế Slide Canva"]
    },
    learnings: "Mô hình kinh doanh B2B2C ngành phụ tùng xe hơi đòi hỏi chiến lược đẩy - kéo nhịp nhàng (Push - Pull Strategy): Kéo người dùng cuối (B2C) bằng các video trải nghiệm thực tế của các KOC/Reviewer xe hơi uy tín, đồng thời Đẩy cho các gara (B2B) bằng tài liệu bán hàng trực quan, chính sách hoa hồng rõ ràng và hỗ trợ kỹ thuật tận nơi.",
    tech: ["Công Nghệ Ô Tô", "Ra Mắt Ottocast P3", "Tự Thiết Kế Slide Canva", "Tiếp Thị Điểm Bán", "Đội Ngũ 8 Người", "Hàng Trăm Đại Lý"]
  },

  lath: {
    category: "Công Ty Mỹ Phẩm & Thương Mại Điện Tử",
    company: "LATH Group (Thương Hiệu Mỹ Phẩm & Bán Lẻ)",
    role: "Trưởng Nhóm Marketing",
    period: "08/2020 – 02/2022",
    title: "Tăng 40% Doanh Thu Quảng Cáo Mỹ Phẩm & Đạt 5.000 Lượt Khách Tự Nhiên/Tháng",
    challenge: "Ngành mỹ phẩm cạnh tranh cao, cần tối ưu chi phí quảng cáo, mở rộng nguồn khách hàng tự nhiên từ tìm kiếm Google và đưa sản phẩm mỹ phẩm vào hệ thống siêu thị lớn cùng các sàn thương mại điện tử.",
    strategy: "Tối ưu hóa quảng cáo Google và Facebook cho các dòng mỹ phẩm, đẩy mạnh từ khóa website lath.vn lên top tìm kiếm tự nhiên, đưa sản phẩm mỹ phẩm vào chuỗi siêu thị Lotte Mart và cải thiện trải nghiệm ứng dụng mua sắm KingPang.",
    deliverables: [
      {
        title: "Tăng Trưởng 40% Doanh Thu Quảng Cáo Mỹ Phẩm",
        tag: "Quảng Cáo Trực Tuyến",
        desc: "Tối ưu ngân sách quảng cáo để tăng doanh số bán lẻ mỹ phẩm vượt bậc.",
        items: [
          "Tối ưu giá thầu thông minh trên Google Ads và Facebook Ads",
          "Tăng trưởng doanh thu từ quảng cáo 40% so với kỳ trước",
          "Điều phối các chương trình quảng bá hỗ trợ hệ thống showroom"
        ],
        attachment: "Báo cáo tăng trưởng doanh thu quảng cáo & Hiệu quả chi phí"
      },
      {
        title: "Đưa Website Lên Top Google (5.000 Lượt Xem/Tháng)",
        tag: "Tìm Kiếm Tự Nhiên",
        desc: "Tối ưu nội dung và cấu trúc website để thu hút khách hàng miễn phí từ Google.",
        items: [
          "Đưa website lath.vn đạt hơn 5.000 lượt truy cập tự nhiên mỗi tháng",
          "Tạo ra hơn 200 đơn hàng tự nhiên mỗi tháng không tốn chi phí quảng cáo",
          "Cải thiện nội dung và trải nghiệm mua sắm trên website"
        ],
        attachment: "Báo cáo lượng khách hàng tự nhiên & Xếp hạng từ khóa"
      },
      {
        title: "Đưa Hàng Vào Chuỗi Siêu Thị Lotte Mart & Sàn Online",
        tag: "Kênh Phân Phối",
        desc: "Mở rộng kênh bán hàng sang hệ thống siêu thị lớn và các sàn thương mại điện tử.",
        items: [
          "Đưa sản phẩm thành công vào hệ thống siêu thị Lotte Mart (tăng 25% tỷ lệ mua)",
          "Vận hành bán hàng trên các sàn Shopee, Lazada và Tiki",
          "Cải thiện giao diện ứng dụng KingPang giúp tăng 20% lượt tải"
        ],
        attachment: "Hồ sơ sản phẩm vào Lotte Mart & Cải tiến ứng dụng KingPang"
      },
      {
        title: "Sản Xuất Loạt 6 Video TVC & Viral Chiến Dịch Truyền Thông",
        tag: "Sản Xuất Video & TVC",
        desc: "Lên ý tưởng, kịch bản, quay dựng loạt 6 video quảng cáo sản phẩm, phỏng vấn khách hàng và chiến dịch viral cho thương hiệu LATH, bàn chải Wangta Hàn Quốc và máy pha cafe (Duy Hiền Agency thực hiện).",
        items: [
          "Quảng cáo TVC Kem đánh răng LATH phục vụ chiến dịch digital ads đa kênh",
          "Video phỏng vấn thực tế khách hàng sử dụng sản phẩm gia tăng uy tín (Social Proof)",
          "Video viral 'Hành trình đi tìm kem đánh răng LATH' lan tỏa tương tác tự nhiên",
          "Loạt video quảng bá Bàn chải Wangta Hàn Quốc, Máy pha cafe và Dự án quảng cáo K-Cafe"
        ],
        attachment: "Bộ 6 video TVC & Chiến dịch truyền thông YouTube (Duy Hiền Agency)"
      }
    ],
    videos: [
      {
        id: "9EtwFvB1za8",
        title: "Quảng Cáo Kem Đánh Răng LATH (TVC Chính)",
        desc: "TVC quảng cáo chính thức cho dòng sản phẩm kem đánh răng cao cấp LATH, tối ưu chuyển đổi chiến dịch Ads.",
        thumb: "portfolio_assets/images/lath_video_1.jpg",
        tag: "TVC Quảng Cáo"
      },
      {
        id: "AWXE9p1qRFA",
        title: "Phỏng Vấn Người Sử Dụng Kem Đánh Răng LATH",
        desc: "Video trải nghiệm thực tế từ khách hàng (Social Proof), gia tăng uy tín và tỷ lệ chốt đơn thương mại điện tử.",
        thumb: "portfolio_assets/images/lath_video_2.jpg",
        tag: "Social Proof / Phỏng Vấn"
      },
      {
        id: "iUNuUEvbvww",
        title: "Hành Trình Video Đi Tìm Kem Đánh Răng LATH",
        desc: "Video viral dạng storytelling hấp dẫn, lan tỏa thương hiệu tự nhiên đến cộng đồng người tiêu dùng trẻ.",
        thumb: "portfolio_assets/images/lath_video_4.jpg",
        tag: "Viral Storytelling"
      },
      {
        id: "nepsZmYowrQ",
        title: "Bàn Chải Wangta & Kem Đánh Răng Cao Cấp LATH",
        desc: "Giới thiệu bộ đôi chăm sóc răng miệng cao cấp Hàn Quốc phân phối vào hệ thống Lotte Mart và sàn TMĐT.",
        thumb: "portfolio_assets/images/lath_video_5.jpg",
        tag: "Sản Phẩm & Phân Phối"
      },
      {
        id: "c2M3sue3stE",
        title: "Video Giới Thiệu Máy Pha Cafe Cao Cấp",
        desc: "Video quảng bá dòng máy pha cà phê hiện đại phân phối cho phân khúc gia đình và văn phòng cao cấp.",
        thumb: "portfolio_assets/images/lath_video_3.jpg",
        tag: "Thiết Bị & Đời Sống"
      },
      {
        id: "NMxCwslc6qc",
        title: "Dự Án Quảng Cáo K-Cafe Hàn Quốc",
        desc: "Chiến dịch video quảng bá thương hiệu cà phê K-Cafe Hàn Quốc trong hệ sinh thái sản phẩm LATH Group.",
        thumb: "portfolio_assets/images/lath_video_6.jpg",
        tag: "Quảng Cáo F&B"
      }
    ],
    results: [
      "Tăng 40% doanh thu từ quảng cáo so với kỳ trước nhờ loạt video TVC & Ads chuẩn chuyển đổi.",
      "Đạt hơn 5.000 lượt truy cập tự nhiên và hơn 200 đơn hàng miễn phí mỗi tháng.",
      "Sản xuất thành công 6 video truyền thông chủ lực cho LATH, Wangta và K-Cafe.",
      "Tăng 25% tỷ lệ mua hàng khi vào chuỗi Lotte Mart; tăng 20% lượt tải ứng dụng."
    ],
    measurement: {
      before: "Chi phí Ads cao nhưng biên lợi nhuận mỏng; 100% khách vào website đến từ quảng cáo trả phí; chưa có sự hiện diện tại chuỗi bán lẻ hiện đại; ứng dụng di động KingPang tỷ lệ thoát trang cao.",
      after: "Doanh thu quảng cáo tăng trưởng 40%; kênh SEO tự nhiên vượt 5.000 lượt xem/tháng mang về đều đặn hơn 200 đơn hàng miễn phí; đưa sản phẩm thành công vào hệ thống siêu thị Lotte Mart (tăng 25% tỷ lệ mua); sản xuất 6 TVC & Viral video hoàn chỉnh.",
      kpis: ["Doanh Thu Ads Tăng Trưởng +40%", "5.000+ Lượt Xem SEO / Tháng (200+ Đơn Miễn Phí)", "Phân Phối Chuỗi Siêu Thị Lotte Mart", "Sản Xuất 6 Video TVC & Viral Truyền Thông"]
    },
    learnings: "Chiến lược Digital Marketing bền vững cho ngành mỹ phẩm & tiêu dùng là mô hình kiềng 3 chân: Kết hợp Performance Ads chuyển đổi nhanh + SEO nội dung thu hút khách hàng miễn phí trọn đời + Độ phủ kệ hàng siêu thị (Lotte Mart) để củng cố tối đa lòng tin của người tiêu dùng.",
    tech: ["Doanh Thu Ads +40%", "6 Video TVC & Viral", "5.000 Khách Tự Nhiên", "200+ Đơn Miễn Phí", "Hệ Thống Lotte Mart", "Tối Ưu Ứng Dụng"]
  },

  brewbanhmi: {
    category: "Chuỗi F&B Cà Phê & Bánh Mì Quốc Tế (California, USA)",
    company: "Brew & Bánh Mì Cafe (Milpitas, CA, USA)",
    logoUrl: "portfolio_assets/images/logo_brewbanhmi_wordmark_light.png",
    websiteUrl: "https://brewbanhmicafe.com",
    role: "Quản Lý Marketing & Phát Triển Kênh Số",
    period: "2024 – 2025",
    title: "Xây Dựng Website Song Ngữ & Tích Hợp Hệ Thống Đặt Món Online Toast Tab Tại Mỹ",
    challenge: "Ra mắt thương hiệu F&B cà phê phin & bánh mì Việt Nam tại Milpitas (California). Cần tiếp cận hiệu quả khách hàng bản xứ lẫn cộng đồng người Việt, giải quyết bài toán đặt món trực tuyến nhanh chóng và tối ưu hóa vị trí tìm kiếm trên Google Maps (Local SEO).",
    strategy: "Xây dựng toàn diện website brewbanhmicafe.com chuẩn song ngữ (Anh - Việt), tích hợp liền mạch hệ thống POS đặt món online Toast Tab, tối ưu hóa hiện diện Local SEO Google Maps và chuẩn hóa trải nghiệm F&B quốc tế.",
    deliverables: [
      {
        title: "Xây Dựng Website Thương Hiệu brewbanhmicafe.com Song Ngữ",
        tag: "Phát Triển Website",
        desc: "Thiết kế và lập trình website thương hiệu chuẩn trải nghiệm người dùng F&B quốc tế.",
        items: [
          "Phát triển giao diện song ngữ (Tiếng Anh & Tiếng Việt) chuẩn mực, mượt mà trên di động",
          "Trưng bày trực quan menu: Cà phê phin, Bánh mì giòn, Trà trái cây, Matcha và Bánh ngọt",
          "Tối ưu tốc độ tải trang cao và cấu trúc thân thiện với công cụ tìm kiếm Google"
        ],
        attachment: "Website chính thức: brewbanhmicafe.com"
      },
      {
        title: "Tích Hợp Cổng Đặt Món Trực Tuyến Toast Tab",
        tag: "Chuyển Đổi Số F&B",
        desc: "Kết nối hệ sinh thái bán hàng tự động phục vụ khách đặt mang về và tiệc sự kiện.",
        items: [
          "Tích hợp nút gọi món online trực tiếp với nền tảng Toast Tab POS phổ biến tại Mỹ",
          "Tự động hóa luồng tiếp nhận đơn hàng mang đi (Pick-up) và dịch vụ suất ăn sự kiện (Catering)",
          "Giảm thiểu sai sót khi gọi món và tiết kiệm tối đa thời gian vận hành cho quán"
        ],
        attachment: "Hệ thống đặt món trực tuyến Toast Tab"
      },
      {
        title: "Tối Ưu Hiện Diện Local SEO & Google Maps Tại Mỹ",
        tag: "Tiếp Thị Địa Phương",
        desc: "Định vị thương hiệu vững chắc trên bản đồ số khu vực Milpitas, California.",
        items: [
          "Tối ưu hồ sơ Google Business Profile thu hút khách hàng tìm kiếm 'Coffee & Banh Mi near me'",
          "Đạt hàng loạt đánh giá 5 sao từ khách hàng địa phương trên Google Reviews",
          "Kết nối định vị chỉ đường và hotline đặt hàng thuận tiện cho cư dân và dân văn phòng"
        ],
        attachment: "Hồ sơ Local SEO Google Maps & Đánh giá 5 sao"
      }
    ],
    results: [
      "Vận hành thành công website thương hiệu brewbanhmicafe.com với 100% giao diện song ngữ mượt mà.",
      "Tích hợp trơn tru hệ thống gọi món trực tuyến Toast Tab, thúc đẩy doanh thu đơn Pick-up & Catering.",
      "Tối ưu Local SEO đạt vị trí tìm kiếm nổi bật tại khu vực Milpitas, California với phản hồi 5 sao xuất sắc."
    ],
    measurement: {
      before: "Thương hiệu F&B mới khai trương tại California chưa có tên tuổi trên bản đồ số; chưa có luồng đặt hàng trực tuyến; khách gọi món qua điện thoại dễ nhầm lẫn vào khung giờ ăn trưa cao điểm.",
      after: "Vận hành hoàn chỉnh website song ngữ brewbanhmicafe.com; tự động hóa 100% đơn đặt hàng mang về (Pick-up) và tiệc sự kiện (Catering) qua Toast Tab POS; xác lập vị trí Local SEO vững chắc trên Google Maps với đánh giá 5 sao tích cực.",
      kpis: ["100% Giao Diện Song Ngữ Anh — Việt", "Tích Hợp Tự Động Toast Tab POS (Pick-up & Catering)", "Local SEO Google Maps Đánh Giá 5 Sao"]
    },
    learnings: "Tại thị trường dịch vụ ẩm thực Bắc Mỹ, khách hàng văn phòng đặc biệt ưu tiên tốc độ và sự tiện lợi. Trải nghiệm số 1-chạm (One-tap ordering qua Toast Tab) kết hợp danh tiếng uy tín trên Google Maps Reviews là yếu tố sống còn để chuyển đổi khách vãng lai thành khách hàng thân thiết mỗi ngày.",
    tech: ["Website Song Ngữ", "Đặt Món Toast Tab", "Local SEO Milpitas", "F&B Quốc Tế", "Dịch Vụ Catering", "Google Reviews 5*"]
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

// Interactive Company Boards & Chart Controller
let growthChartInstance = null;

const companyChartData = {
  sala: {
    title: "Phân Bổ Hoạt Động & Tăng Trưởng Khách VIP (Sala Garden)",
    badge: "BĐS Hoa Viên Sinh Thái 5 Sao",
    labels: ["Tháng 1", "Tháng 2", "Tháng 3", "Hiện Tại"],
    datasets: [
      {
        label: "Khách VIP Thực Tế Quan Tâm (Leads)",
        data: [35, 42, 49, 54],
        type: "line",
        borderColor: "#10B981",
        backgroundColor: "#10B981",
        borderWidth: 3,
        tension: 0.35,
        pointBackgroundColor: "#10B981",
        pointBorderColor: "#FFFFFF",
        pointBorderWidth: 2,
        pointRadius: 6,
        yAxisID: "y"
      },
      {
        label: "Số Lượng Video Sản Xuất / Tháng",
        data: [85, 110, 125, 135],
        backgroundColor: "rgba(6, 182, 212, 0.8)",
        borderRadius: 8,
        yAxisID: "y"
      }
    ],
    yCallback: val => val + " chỉ số"
  },
  fclick: {
    title: "Tối Ưu Chi Phí CPI & Tiết Kiệm Thời Gian Vận Hành (Fclick)",
    badge: "Ứng Dụng Di Động & Công Nghệ",
    labels: ["Giai Đoạn 1", "Giai Đoạn 2", "Giai Đoạn 3", "Hoàn Thiện"],
    datasets: [
      {
        label: "Chỉ Số Chi Phí Tải App (CPI)",
        data: [100, 88, 79, 75],
        type: "line",
        borderColor: "#06B6D4",
        backgroundColor: "#06B6D4",
        borderWidth: 3,
        tension: 0.35,
        pointBackgroundColor: "#06B6D4",
        pointBorderColor: "#FFFFFF",
        pointBorderWidth: 2,
        pointRadius: 6,
        yAxisID: "y"
      },
      {
        label: "Thời Gian Tiết Kiệm Nhờ AI (%)",
        data: [5, 15, 25, 30],
        backgroundColor: "rgba(16, 185, 129, 0.8)",
        borderRadius: 8,
        yAxisID: "y"
      }
    ],
    yCallback: val => val + "%"
  },
  luclam: {
    title: "Cột Mốc Tăng Trưởng Doanh Thu Đạt 40 Tỷ VNĐ (Lục Lam)",
    badge: "Chuỗi Trà Thảo Mộc & Quà Tặng",
    labels: ["Khởi Đầu (Từ Số 0)", "Ra Mắt 4 Website", "Takashimaya & Gala", "Cán Mốc 40 Tỷ"],
    datasets: [
      {
        label: "Doanh Thu Lũy Kế (Tỷ VNĐ)",
        data: [0, 12, 28, 40],
        backgroundColor: "rgba(245, 158, 11, 0.85)",
        hoverBackgroundColor: "#FBBF24",
        borderRadius: 8,
        yAxisID: "y"
      }
    ],
    yCallback: val => val + " Tỷ"
  },
  bravigo: {
    title: "Phát Triển Mạng Lưới Đại Lý & Gara Ô Tô Toàn Quốc (Bravigo)",
    badge: "Ngành Xe Ô Tô & Phụ Kiện",
    labels: ["Giai Đoạn 1", "Giai Đoạn 2", "Giai Đoạn 3", "Sự Kiện Ottocast P3"],
    datasets: [
      {
        label: "Mạng Lưới Đại Lý & Điểm Bán Ủy Quyền",
        data: [80, 160, 250, 360],
        backgroundColor: "rgba(59, 130, 246, 0.85)",
        hoverBackgroundColor: "#60A5FA",
        borderRadius: 8,
        yAxisID: "y"
      }
    ],
    yCallback: val => val + " Đại Lý"
  },
  lath: {
    title: "Tăng Trưởng Lượng Khách Tự Nhiên (SEO) & Doanh Thu Quảng Cáo (LATH Group)",
    badge: "Mỹ Phẩm & Bán Lẻ Trực Tuyến",
    labels: ["Giai Đoạn 1", "Giai Đoạn 2", "Giai Đoạn 3", "Vào Siêu Thị Lotte Mart"],
    datasets: [
      {
        label: "Lượt Truy Cập Tự Nhiên SEO / Tháng",
        data: [1200, 2600, 3900, 5200],
        backgroundColor: "rgba(236, 72, 153, 0.8)",
        borderRadius: 8,
        yAxisID: "y"
      },
      {
        label: "Tăng Trưởng Doanh Thu Quảng Cáo (%)",
        data: [10, 20, 32, 40],
        type: "line",
        borderColor: "#06B6D4",
        backgroundColor: "#06B6D4",
        borderWidth: 3,
        tension: 0.35,
        pointBackgroundColor: "#06B6D4",
        pointBorderColor: "#FFFFFF",
        pointBorderWidth: 2,
        pointRadius: 6,
        yAxisID: "y"
      }
    ],
    yCallback: val => (val > 100 ? val + " Lượt" : val + "%")
  },
  brewbanhmi: {
    title: "Hiệu Quả Hiện Diện Số & Đặt Món Trực Tuyến (Brew & Bánh Mì Cafe)",
    badge: "F&B Quốc Tế (Milpitas, CA)",
    labels: ["Khởi Tạo", "Ra Mắt Web Song Ngữ", "Tích Hợp Toast Tab", "Tối Ưu Local SEO"],
    datasets: [
      {
        label: "Lượt Truy Cập Website / Tháng",
        data: [600, 1900, 3400, 5000],
        backgroundColor: "rgba(245, 158, 11, 0.8)",
        borderRadius: 8,
        yAxisID: "y"
      },
      {
        label: "Tăng Trưởng Đơn Online & Catering (%)",
        data: [10, 30, 55, 80],
        type: "line",
        borderColor: "#10B981",
        backgroundColor: "#10B981",
        borderWidth: 3,
        tension: 0.35,
        pointBackgroundColor: "#10B981",
        pointBorderColor: "#FFFFFF",
        pointBorderWidth: 2,
        pointRadius: 6,
        yAxisID: "y"
      }
    ],
    yCallback: val => (val > 100 ? val + " Lượt" : val + "%")
  }
};

window.filterCompanyBoard = function(companyKey, btn) {
  // Update active pill button
  const pills = document.querySelectorAll(".company-pill");
  pills.forEach(p => p.classList.remove("active"));
  if (btn) btn.classList.add("active");

  const cards = document.querySelectorAll(".company-board-card");

  if (companyKey === "all") {
    cards.forEach(c => {
      c.style.display = "flex";
      c.classList.remove("highlighted");
    });
  } else {
    cards.forEach(c => {
      if (c.getAttribute("data-company") === companyKey) {
        c.style.display = "flex";
        c.classList.add("highlighted");
      } else {
        c.style.display = "none";
        c.classList.remove("highlighted");
      }
    });
  }

  // Refresh lucide icons
  if (window.lucide) window.lucide.createIcons();
};

function renderCompanySpecificChart(companyKey) {
  const cfg = companyChartData[companyKey];
  if (!cfg) return;

  const titleEl = document.getElementById("spotlightChartTitle");
  const badgeEl = document.getElementById("spotlightCompanyBadge");
  if (titleEl) titleEl.textContent = cfg.title;
  if (badgeEl) badgeEl.textContent = cfg.badge;

  const canvas = document.getElementById("growthChart");
  if (!canvas || !window.Chart) return;

  if (growthChartInstance) {
    growthChartInstance.destroy();
  }

  const ctx = canvas.getContext("2d");
  growthChartInstance = new Chart(ctx, {
    type: "bar",
    data: {
      labels: cfg.labels,
      datasets: cfg.datasets
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
          labels: {
            color: "#94A3B8",
            font: { family: "'Plus Jakarta Sans', sans-serif", size: 12, weight: "600" },
            padding: 14,
            usePointStyle: true
          }
        },
        tooltip: {
          backgroundColor: "rgba(15, 23, 42, 0.95)",
          titleColor: "#FFFFFF",
          bodyColor: "#94A3B8",
          borderColor: "rgba(255, 255, 255, 0.15)",
          borderWidth: 1,
          padding: 10,
          cornerRadius: 8
        }
      },
      scales: {
        x: {
          grid: { color: "rgba(255, 255, 255, 0.05)" },
          ticks: { color: "#94A3B8", font: { family: "'Plus Jakarta Sans', sans-serif", size: 11 } }
        },
        y: {
          grid: { color: "rgba(255, 255, 255, 0.06)" },
          ticks: {
            color: "#94A3B8",
            font: { family: "'Plus Jakarta Sans', sans-serif", size: 11 },
            callback: cfg.yCallback || (v => v)
          }
        }
      }
    }
  });
}

function initGrowthChart() {
  // Mặc định ở chế độ Tất Cả 5 Ô Bảng, người xem nhìn thấy trực diện 5 bảng số liệu độc lập
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
window.scrollModalTo = function(elementId) {
  const el = document.getElementById(elementId);
  const body = document.getElementById("modalBody");
  if (el && body) {
    const elTop = el.offsetTop - body.offsetTop;
    body.scrollTo({ top: Math.max(0, elTop - 10), behavior: "smooth" });
  }

  // Update active pill manually on click
  const pills = document.querySelectorAll(".modal-nav-pill");
  pills.forEach(p => p.classList.remove("active"));
  if (elementId === "modalOverview") {
    pills[0]?.classList.add("active");
  } else if (elementId === "modalLaunchProjectContainer") {
    document.getElementById("modalNavLaunchBtn")?.classList.add("active");
  } else if (elementId === "modalSlideContainer") {
    document.getElementById("modalNavSlideBtn")?.classList.add("active");
  } else if (elementId === "modalVideoContainer") {
    document.getElementById("modalNavVideoBtn")?.classList.add("active");
  } else if (elementId === "modalCampaignContainer") {
    document.getElementById("modalNavCampaignBtn")?.classList.add("active");
  } else if (elementId === "modalDeliverablesSec") {
    document.getElementById("modalNavDelivBtn")?.classList.add("active") || document.querySelector(".modal-nav-pill:nth-of-type(5)")?.classList.add("active");
  } else if (elementId === "modalResultsSec") {
    document.getElementById("modalNavResultsBtn")?.classList.add("active") || document.querySelector(".modal-nav-pill:last-of-type")?.classList.add("active");
  }
};

window.openCaseModal = function(caseKey, targetSection = null) {
  const data = caseStudiesData[caseKey];
  if (!data) return;

  const modal = document.getElementById("caseModalOverlay");
  if (!modal) return;

  // Populate data
  document.getElementById("modalCategory").innerText = `Hạng mục: ${data.category}`;
  document.getElementById("modalTitle").innerText = data.title;
  if (data.logoUrl) {
    document.getElementById("modalCompany").innerHTML = `<img src="${data.logoUrl}" alt="Logo" style="height: 22px; width: auto; max-width: 90px; object-fit: contain; vertical-align: middle; margin-right: 8px; display: inline-block;"> <span>${data.company}</span>`;
  } else {
    document.getElementById("modalCompany").innerText = data.company;
  }
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

  const countBadge = document.getElementById("modalDelivCount");
  if (countBadge && data.deliverables) {
    countBadge.innerText = `${data.deliverables.length} Hạng Mục`;
  }

  // Render Launch Project Showcase (Dự án mở rộng Thiên Phúc Vĩnh Hằng Viên)
  const launchContainer = document.getElementById("modalLaunchProjectContainer");
  const launchNavBtn = document.getElementById("modalNavLaunchBtn");

  if (launchContainer) {
    if (data.launchProject) {
      const lp = data.launchProject;
      launchContainer.innerHTML = `
        <div class="modal-launch-box" id="modalLaunchSection" style="margin-top: 14px;">
          <div class="modal-launch-header">
            <div class="modal-launch-title-wrap">
              <span class="modal-launch-badge">
                <i data-lucide="sparkles"></i>
                ${lp.badge}
              </span>
              <h3 class="modal-launch-title">${lp.title}</h3>
              <span class="modal-launch-sub">${lp.subtitle}</span>
            </div>
          </div>

          <div class="modal-launch-body">
            <!-- 4 Thẻ chỉ số dự án -->
            <div class="launch-metrics-strip">
              <div class="launch-metric-chip gold">
                <div class="launch-chip-val" style="color: #FBBF24;">${lp.scale}</div>
                <div class="launch-chip-label">Quy Mô Quần Thể Sinh Thái</div>
              </div>
              <div class="launch-metric-chip emerald">
                <div class="launch-chip-val" style="color: #34D399;">${lp.investment}</div>
                <div class="launch-chip-label">Tổng Vốn Đầu Tư Dự Kiến</div>
              </div>
              <div class="launch-metric-chip cyan">
                <div class="launch-chip-val" style="color: #67E8F9;">Tựa Sơn Hướng Thủy</div>
                <div class="launch-chip-label">Đất Non Thiêng Cạnh Ba Vàng</div>
              </div>
              <div class="launch-metric-chip purple">
                <div class="launch-chip-val" style="color: #D8B4FE;">200+ Khách VIP</div>
                <div class="launch-chip-label">Sự Kiện Khởi Động &amp; Đối Tác</div>
              </div>
            </div>

            <!-- Gallery 4 ảnh tương tác -->
            <div class="launch-gallery-section">
              <div class="launch-gallery-title">
                <i data-lucide="image"></i>
                <span>Bộ Nhận Diện, Phối Cảnh &amp; Ấn Phẩm Thực Tế (Bấm để phóng to)</span>
              </div>
              <div class="launch-gallery-grid">
                ${lp.gallery.map(img => `
                  <div class="launch-photo-card" onclick="openLaunchLightbox('${img.src}', '${img.caption}')" title="Bấm để xem ảnh phóng to">
                    <img src="${img.src}" alt="${img.name}" class="launch-photo-img" loading="lazy">
                    <div class="launch-photo-overlay">
                      <span class="launch-photo-tag">${img.tag}</span>
                      <div class="launch-photo-name">
                        <span>${img.name}</span>
                        <span class="launch-photo-zoom-icon"><i data-lucide="maximize-2" style="width: 12px; height: 12px;"></i> Xem lớn</span>
                      </div>
                    </div>
                  </div>
                `).join("")}
              </div>
            </div>

            <!-- 4 Tab Tài liệu chiến lược -->
            <div class="launch-doc-section">
              <div class="launch-tabs-nav">
                ${lp.tabs.map((tab, idx) => `
                  <button type="button" class="launch-tab-btn ${idx === 0 ? 'active' : ''}" onclick="switchLaunchTab('${tab.id}', this)">
                    <i data-lucide="${tab.icon}"></i>
                    <span>${tab.title}</span>
                  </button>
                `).join("")}
              </div>
              <div class="launch-tabs-content">
                ${lp.tabs.map((tab, idx) => `
                  <div class="launch-tab-pane ${idx === 0 ? 'active' : ''}" data-tab-pane="${tab.id}">
                    ${tab.content}
                  </div>
                `).join("")}
              </div>
            </div>
          </div>
        </div>
      `;
      launchContainer.style.display = "block";
      if (launchNavBtn) launchNavBtn.style.display = "inline-flex";
    } else {
      launchContainer.innerHTML = "";
      launchContainer.style.display = "none";
      if (launchNavBtn) launchNavBtn.style.display = "none";
    }
  }

  // Render Slide Embed (if available)
  const slideContainer = document.getElementById("modalSlideContainer");
  const slideNavBtn = document.getElementById("modalNavSlideBtn");

  if (slideContainer) {
    if (data.embedSlide) {
      slideContainer.innerHTML = `
        <div class="modal-slide-box" id="modalSlideSection" style="margin-top: 10px;">
          <div class="modal-slide-header">
            <span class="modal-slide-badge"><i data-lucide="presentation"></i> ${data.embedSlide.title}</span>
            <a href="${data.embedSlide.canvaLink}" target="_blank" rel="noopener" class="btn btn-outline btn-xs" style="font-size: 0.76rem; padding: 5px 10px;">
              <i data-lucide="external-link" style="width: 13px; height: 13px;"></i>
              <span>Mở Canva Toàn Màn Hình</span>
            </a>
          </div>
          <div class="canva-embed-wrapper">
            <iframe loading="lazy" src="${data.embedSlide.url}" allowfullscreen="allowfullscreen" allow="fullscreen"></iframe>
          </div>
          <p class="modal-slide-caption">
            <i data-lucide="check-circle-2" style="width: 14px; height: 14px; color: var(--accent-emerald); display: inline-block; vertical-align: middle; margin-right: 4px;"></i>
            ${data.embedSlide.author} • Slide thuyết trình chuẩn nhận diện cao cấp, có thể xem lướt từng trang trực tiếp.
          </p>
        </div>
      `;
      slideContainer.style.display = "block";
      if (slideNavBtn) slideNavBtn.style.display = "inline-flex";
    } else {
      slideContainer.innerHTML = "";
      slideContainer.style.display = "none";
      if (slideNavBtn) slideNavBtn.style.display = "none";
    }
  }

  // Render Video Showcase (if available, e.g. LATH Group, Lục Lam)
  const videoContainer = document.getElementById("modalVideoContainer");
  const videoNavBtn = document.getElementById("modalNavVideoBtn");

  if (videoContainer) {
    if (data.videos && data.videos.length) {
      const isSingleBts = data.videos.length === 1 && data.videos[0].tag.includes("BTS");
      const badgeTitle = isSingleBts
        ? `Video Behind The Scenes (BTS) Hộp Quà Tết (Duy Hiền Agency)`
        : `${data.videos.length} Video Chiến Dịch Truyền Thông &amp; TVC (Duy Hiền Agency)`;
      const navBtnText = isSingleBts ? `Video BTS Quà Tết (YouTube)` : `${data.videos.length} Video Chiến Dịch (YouTube)`;
      const actionText = isSingleBts ? `Xem Video YouTube` : `Xem Kênh YouTube`;

      videoContainer.innerHTML = `
        <div class="modal-video-box" id="modalVideoSection" style="margin-top: 10px;">
          <div class="modal-video-header">
            <span class="modal-video-badge"><i data-lucide="youtube"></i> ${badgeTitle}</span>
            <a href="https://www.youtube.com/watch?v=${data.videos[0].id}" target="_blank" rel="noopener" class="btn btn-outline btn-xs" style="font-size: 0.76rem; padding: 5px 10px; background: rgba(239, 68, 68, 0.15); border-color: rgba(239, 68, 68, 0.4); color: #FCA5A5;">
              <i data-lucide="external-link" style="width: 13px; height: 13px;"></i>
              <span>${actionText}</span>
            </a>
          </div>
          <div class="modal-video-list" style="${isSingleBts ? 'grid-template-columns: 1fr;' : ''}">
            ${data.videos.map(v => `
              <a href="https://www.youtube.com/watch?v=${v.id}" target="_blank" rel="noopener" class="modal-video-item" title="${v.title}">
                <div class="modal-video-thumb" style="${isSingleBts ? 'width: 130px; height: 74px;' : ''}">
                  <img src="${v.thumb}" alt="${v.title}" loading="lazy">
                  <span class="thumb-play-icon"><i data-lucide="play"></i></span>
                </div>
                <div class="modal-video-meta">
                  <span class="modal-video-tag">${v.tag}</span>
                  <div class="modal-video-title">${v.title}</div>
                  <div class="modal-video-desc">${v.desc}</div>
                </div>
              </a>
            `).join("")}
          </div>
        </div>
      `;
      videoContainer.style.display = "block";
      if (videoNavBtn) {
        const textSpan = videoNavBtn.querySelector("span");
        if (textSpan) textSpan.innerText = navBtnText;
        videoNavBtn.style.display = "inline-flex";
      }
    } else {
      videoContainer.innerHTML = "";
      videoContainer.style.display = "none";
      if (videoNavBtn) videoNavBtn.style.display = "none";
    }
  }

  // Render Campaign Report (if available, e.g. Sala Garden)
  const campaignContainer = document.getElementById("modalCampaignContainer");
  const campaignNavBtn = document.getElementById("modalNavCampaignBtn");

  if (campaignContainer) {
    if (data.campaignReport) {
      const cr = data.campaignReport;
      campaignContainer.innerHTML = `
        <div class="modal-campaign-box" id="modalCampaignSection" style="margin-top: 10px;">
          <div class="modal-campaign-header">
            <div class="modal-campaign-title-wrap">
              <span class="modal-campaign-badge">
                <i data-lucide="bar-chart-3"></i>
                ${cr.badge || "Báo Cáo Hiệu Quả Quảng Cáo Thực Chiến (Meta Ads)"}
              </span>
              <span class="modal-campaign-sub">${cr.campaignName}</span>
            </div>
            ${cr.sheetUrl ? `
              <a href="${cr.sheetUrl}" target="_blank" rel="noopener" class="btn btn-outline btn-xs btn-campaign-sheet" title="Mở file Google Sheet gốc">
                <i data-lucide="file-spreadsheet" style="width: 14px; height: 14px; color: #10B981;"></i>
                <span>Xem Dữ Liệu Bảng Tính Gốc</span>
              </a>
            ` : ""}
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
                <div class="campaign-kpi-label">Hiệu Quả Chi Phí (CPC &amp; CTR)</div>
                <div class="campaign-kpi-val">${cr.efficiency}</div>
                <div class="campaign-kpi-note">${cr.efficiencyNote}</div>
              </div>
            </div>

            <!-- Bảng phân tích nhân khẩu học theo độ tuổi & giới tính -->
            <div class="campaign-table-wrap">
              <div class="campaign-table-title">
                <i data-lucide="users"></i>
                <span>Phân Bổ Nhân Khẩu Học Thực Tế &amp; Hiệu Suất Nhấp Chuột (Dữ Liệu Thật 100%)</span>
              </div>
              <div class="campaign-table-scroll">
                <table class="campaign-data-table">
                  <thead>
                    <tr>
                      <th>Nhóm Tuổi</th>
                      <th>Tỷ Trọng Ngân Sách</th>
                      <th>Chi Phí Quy Đổi / Tháng</th>
                      <th>Lượt Click / Tháng</th>
                      <th>Chi Phí / Click (CPC)</th>
                      <th>Tỷ Lệ Nhấp (CTR)</th>
                      <th>Đánh Giá Thực Chiến</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${cr.demographics.map(d => `
                      <tr class="${d.isHighlight ? 'highlight-row' : ''}">
                        <td><strong>${d.age}</strong> ${d.isHighlight ? '<span class="badge-core">Trọng Tâm</span>' : ''}</td>
                        <td><strong>${d.budgetShare}</strong></td>
                        <td>${d.monthlyCost}</td>
                        <td><strong>${d.monthlyClicks}</strong></td>
                        <td><span class="cpc-badge ${d.isLowCpc ? 'low' : ''}">${d.cpc}</span></td>
                        <td><span class="ctr-badge">${d.ctr}</span></td>
                        <td><small>${d.insight}</small></td>
                      </tr>
                    `).join("")}
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Breakdown giới tính & Insight -->
            <div class="campaign-gender-strip">
              <div class="gender-item">
                <div class="gender-header">
                  <span class="gender-name"><i data-lucide="user-check"></i> Nam Giới (Male) — 66.7% Ngân Sách</span>
                  <span class="gender-metric">~20.1M VNĐ/Tháng • 14.300+ Clicks (CPC 1.405đ)</span>
                </div>
                <p class="gender-desc">Tệp gia chủ, người đứng đầu gia đình trực tiếp ra quyết định tài chính cho đất hoa viên sinh thái gia tộc.</p>
              </div>
              <div class="gender-item">
                <div class="gender-header">
                  <span class="gender-name"><i data-lucide="heart"></i> Nữ Giới (Female) — 32.7% Ngân Sách</span>
                  <span class="gender-metric">~9.8M VNĐ/Tháng • 10.600+ Clicks (CPC Siêu Rẻ 929đ)</span>
                </div>
                <p class="gender-desc">Tương tác cao, đóng vai trò đồng thuận và tham vấn sâu về vị trí phong thủy, thẩm mỹ khuôn viên gia đình.</p>
              </div>
            </div>

            <!-- Strategic Takeaway Callout -->
            <div class="campaign-callout">
              <i data-lucide="lightbulb"></i>
              <div>
                <strong>Tư Duy Tối Ưu Tăng Trưởng (Data-driven Insight):</strong>
                <span>${cr.strategicTakeaway}</span>
              </div>
            </div>
          </div>
        </div>
      `;
      campaignContainer.style.display = "block";
      if (campaignNavBtn) campaignNavBtn.style.display = "inline-flex";
    } else {
      campaignContainer.innerHTML = "";
      campaignContainer.style.display = "none";
      if (campaignNavBtn) campaignNavBtn.style.display = "none";
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

  // Render Measurement (Before — After)
  const measurementSec = document.getElementById("modalMeasurementSec");
  const measurementContainer = document.getElementById("modalMeasurement");
  if (measurementSec && measurementContainer) {
    if (data.measurement) {
      measurementContainer.innerHTML = `
        <div class="modal-compare-grid">
          <div class="modal-compare-card before">
            <div class="modal-compare-header">
              <i data-lucide="alert-circle"></i>
              <span>Trước Khi Tối Ưu</span>
            </div>
            <p>${data.measurement.before}</p>
          </div>
          <div class="modal-compare-card after">
            <div class="modal-compare-header">
              <i data-lucide="check-circle-2"></i>
              <span>Sau Khi Triển Khai Thực Tế</span>
            </div>
            <p>${data.measurement.after}</p>
          </div>
        </div>
        ${data.measurement.kpis && data.measurement.kpis.length ? `
          <div class="modal-kpis-strip">
            ${data.measurement.kpis.map(k => `
              <div class="modal-kpi-chip">
                <i data-lucide="target"></i>
                <span>${k}</span>
              </div>
            `).join("")}
          </div>
        ` : ''}
      `;
      measurementSec.style.display = "block";
    } else {
      measurementSec.style.display = "none";
    }
  }

  // Render Learnings
  const learningsSec = document.getElementById("modalLearningsSec");
  const learningsContainer = document.getElementById("modalLearnings");
  if (learningsSec && learningsContainer) {
    if (data.learnings) {
      learningsContainer.innerHTML = `
        <div class="modal-learnings-card">
          <i data-lucide="quote" class="quote-icon"></i>
          <p>${data.learnings}</p>
        </div>
      `;
      learningsSec.style.display = "block";
    } else {
      learningsSec.style.display = "none";
    }
  }

  // Reset scroll position & activate first tab
  const modalBody = document.getElementById("modalBody");
  if (modalBody) {
    modalBody.scrollTop = 0;
  }
  const pills = document.querySelectorAll(".modal-nav-pill");
  pills.forEach((p, idx) => {
    if (idx === 0) p.classList.add("active");
    else p.classList.remove("active");
  });

  // Modal internal ScrollSpy
  if (modalBody && !modalBody.dataset.spyInit) {
    modalBody.dataset.spyInit = "true";
    modalBody.addEventListener("scroll", () => {
      const scrollPos = modalBody.scrollTop + 90;
      const sections = [
        { id: "modalOverview", pillIdx: 0 },
        { id: "modalLaunchProjectContainer", pillId: "modalNavLaunchBtn" },
        { id: "modalSlideContainer", pillId: "modalNavSlideBtn" },
        { id: "modalVideoContainer", pillId: "modalNavVideoBtn" },
        { id: "modalCampaignContainer", pillId: "modalNavCampaignBtn" },
        { id: "modalDeliverablesSec", pillId: "modalNavDelivBtn" },
        { id: "modalResultsSec", pillId: "modalNavResultsBtn" }
      ];

      let currentSec = null;
      for (let i = sections.length - 1; i >= 0; i--) {
        const sEl = document.getElementById(sections[i].id);
        if (sEl && sEl.style.display !== "none" && sEl.offsetHeight > 0) {
          const top = sEl.offsetTop - modalBody.offsetTop;
          if (scrollPos >= top) {
            currentSec = sections[i];
            break;
          }
        }
      }

      if (currentSec) {
        const allPills = document.querySelectorAll(".modal-nav-pill");
        allPills.forEach(p => p.classList.remove("active"));
        if (currentSec.pillId) {
          document.getElementById(currentSec.pillId)?.classList.add("active");
        } else if (allPills[currentSec.pillIdx]) {
          allPills[currentSec.pillIdx].classList.add("active");
        }
      }
    }, { passive: true });
  }

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
  initLucide();

  // If a specific section was targeted (e.g. from subproject banner click)
  if (targetSection) {
    setTimeout(() => {
      window.scrollModalTo(targetSection);
    }, 180);
  }
};

window.switchLaunchTab = function(tabId, btn) {
  const parent = btn.closest(".launch-doc-section");
  if (!parent) return;
  parent.querySelectorAll(".launch-tab-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  parent.querySelectorAll(".launch-tab-pane").forEach(p => {
    if (p.getAttribute("data-tab-pane") === tabId) {
      p.classList.add("active");
    } else {
      p.classList.remove("active");
    }
  });
  if (window.lucide) window.lucide.createIcons();
};

window.openLaunchLightbox = function(imgSrc, caption) {
  let lb = document.getElementById("launchLightboxOverlay");
  if (!lb) {
    lb = document.createElement("div");
    lb.id = "launchLightboxOverlay";
    lb.className = "launch-lightbox-overlay";
    lb.onclick = function(e) {
      if (e.target === lb || e.target.classList.contains("launch-lightbox-close")) {
        window.closeLaunchLightbox();
      }
    };
    lb.innerHTML = `
      <div class="launch-lightbox-box">
        <button class="launch-lightbox-close" aria-label="Đóng">&times;</button>
        <img class="launch-lightbox-img" src="" alt="Preview">
        <div class="launch-lightbox-caption"></div>
      </div>
    `;
    document.body.appendChild(lb);
  }
  const imgEl = lb.querySelector(".launch-lightbox-img");
  const capEl = lb.querySelector(".launch-lightbox-caption");
  if (imgEl) imgEl.src = imgSrc;
  if (capEl) capEl.innerText = caption || "";
  lb.classList.add("active");
};

window.closeLaunchLightbox = function() {
  const lb = document.getElementById("launchLightboxOverlay");
  if (lb) lb.classList.remove("active");
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

// Interactive Case Studies Filter Controller
window.filterCaseStudies = function(category, btn) {
  // Update active state of buttons
  const filterBtns = document.querySelectorAll(".case-filter-btn");
  filterBtns.forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");

  // Filter items based on data-tags
  const items = document.querySelectorAll(".case-study-item");
  items.forEach(item => {
    const tags = item.getAttribute("data-tags") || "";
    if (category === "all" || tags.toLowerCase().includes(category.toLowerCase())) {
      item.classList.remove("filtered-out");
    } else {
      item.classList.add("filtered-out");
    }
  });

  // Re-initialize Lucide icons in case
  initLucide();
};

// Interactive LATH Video Controller (Case Study 05)
window.selectLathVideo = function(videoId, title, tag, posterUrl, btnElement) {
  // Update active thumbnail
  const thumbBtns = document.querySelectorAll(".video-thumb-btn");
  thumbBtns.forEach(b => b.classList.remove("active"));
  if (btnElement) btnElement.classList.add("active");

  const titleEl = document.getElementById("lathCurrentTitle");
  const tagEl = document.getElementById("lathCurrentTag");
  const posterImg = document.getElementById("lathCurrentPosterImg");
  const posterWrap = document.getElementById("lathVideoPoster");
  const iframeSlot = document.getElementById("lathIframeSlot");

  if (titleEl) titleEl.innerText = title;
  if (tagEl) tagEl.innerText = tag;
  if (posterImg) posterImg.src = posterUrl;

  // If iframe is already playing, switch video immediately
  if (iframeSlot && iframeSlot.style.display !== "none") {
    iframeSlot.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>`;
  } else if (posterWrap) {
    posterWrap.onclick = () => window.playLathVideo(videoId, title);
  }
};

window.playLathVideo = function(videoId, title) {
  const posterWrap = document.getElementById("lathVideoPoster");
  const iframeSlot = document.getElementById("lathIframeSlot");

  if (posterWrap && iframeSlot) {
    posterWrap.style.display = "none";
    iframeSlot.style.display = "block";
    iframeSlot.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>`;
  }
};

// Interactive Lục Lam Video Controller (Case Study 03)
window.selectLuclamVideo = function(videoId, title, tag, posterUrl, btnElement) {
  if (btnElement) {
    const parentGrid = btnElement.closest(".video-thumbnails-grid");
    if (parentGrid) {
      parentGrid.querySelectorAll(".video-thumb-btn").forEach(b => b.classList.remove("active"));
      btnElement.classList.add("active");
    }
  }

  const titleEl = document.getElementById("luclamCurrentTitle");
  const tagEl = document.getElementById("luclamCurrentTag");
  const posterImg = document.getElementById("luclamCurrentPosterImg");
  const posterWrap = document.getElementById("luclamVideoPoster");
  const iframeSlot = document.getElementById("luclamIframeSlot");

  if (titleEl) titleEl.innerText = title;
  if (tagEl) tagEl.innerText = tag;
  if (posterImg) posterImg.src = posterUrl;

  if (iframeSlot && iframeSlot.style.display !== "none") {
    iframeSlot.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>`;
  } else if (posterWrap) {
    posterWrap.onclick = () => window.playLuclamVideo(videoId, title);
  }
};

window.playLuclamVideo = function(videoId = "8WTAEo6BWiY", title = "Dự Án Trà Hoa Lục Lam") {
  const posterWrap = document.getElementById("luclamVideoPoster");
  const iframeSlot = document.getElementById("luclamIframeSlot");

  if (posterWrap && iframeSlot) {
    posterWrap.style.display = "none";
    iframeSlot.style.display = "block";
    iframeSlot.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>`;
  }
};

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

// 5. Smooth Scroll & Active Nav Spy + Mobile Drawer Controller
function initSmoothScroll() {
  const dockLinks = document.querySelectorAll(".nav-pill-links li a");
  const mobileDrawer = document.getElementById("mobileNavDrawer");
  const mobileToggle = document.getElementById("mobileToggle");
  const allNavAnchors = document.querySelectorAll("a[href^='#']");

  // Smooth scroll handler
  allNavAnchors.forEach(link => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (targetId && targetId !== "#" && targetId !== "#modal") {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: "smooth" });

          // If clicked from dock, set active immediately
          if (link.classList.contains("nav-pill-item")) {
            dockLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
          }

          // Close mobile drawer if open
          if (mobileDrawer && mobileDrawer.classList.contains("open")) {
            mobileDrawer.classList.remove("open");
          }
        }
      }
    });
  });

  // Mobile Drawer Toggle
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      mobileDrawer.classList.toggle("open");
    });

    document.addEventListener("click", (e) => {
      if (!mobileDrawer.contains(e.target) && !mobileToggle.contains(e.target)) {
        mobileDrawer.classList.remove("open");
      }
    });
  }

  // Active Nav Scroll Spy
  const sections = [
    { id: "about", link: document.querySelector(".nav-pill-links a[href='#about']") },
    { id: "impact", link: document.querySelector(".nav-pill-links a[href='#impact']") },
    { id: "leadership", link: document.querySelector(".nav-pill-links a[href='#leadership']") },
    { id: "cases", link: document.querySelector(".nav-pill-links a[href='#cases']") },
    { id: "martech", link: document.querySelector(".nav-pill-links a[href='#martech']") },
    { id: "timeline", link: document.querySelector(".nav-pill-links a[href='#timeline']") },
    { id: "capabilities", link: document.querySelector(".nav-pill-links a[href='#capabilities']") },
    { id: "deliverables", link: document.querySelector(".nav-pill-links a[href='#deliverables']") },
    { id: "contact", link: document.querySelector(".nav-pill-links a[href='#contact']") }
  ];

  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY + 180;
    let currentSectionId = null;

    for (let i = sections.length - 1; i >= 0; i--) {
      const secEl = document.getElementById(sections[i].id);
      if (secEl && secEl.offsetTop <= scrollPos) {
        currentSectionId = sections[i].id;
        break;
      }
    }

    dockLinks.forEach(link => {
      if (currentSectionId && link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }, { passive: true });
}

// 6. Contact Form Submit Handler (Chuyên nghiệp & Xác thực dữ liệu chuẩn)
window.handleFormSubmit = function(e) {
  e.preventDefault();
  const nameInput = document.getElementById("senderName");
  const emailInput = document.getElementById("senderEmail");
  const subjectInput = document.getElementById("senderSubject");
  const phoneInput = document.getElementById("senderPhone");
  const msgInput = document.getElementById("senderMessage");
  const statusContainer = document.getElementById("contactFormStatus");

  const name = nameInput ? nameInput.value.trim() : "";
  const email = emailInput ? emailInput.value.trim() : "";
  const subject = subjectInput ? subjectInput.value.trim() : "Trao đổi công việc";
  const phone = phoneInput ? phoneInput.value.trim() : "";
  const message = msgInput ? msgInput.value.trim() : "";

  // Validate form
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!name) {
    if (statusContainer) {
      statusContainer.style.display = "block";
      statusContainer.className = "contact-status-error";
      statusContainer.innerHTML = '<i data-lucide="alert-triangle" style="width:16px;height:16px;display:inline-block;vertical-align:middle;margin-right:6px;"></i> Vui lòng nhập họ và tên của anh/chị.';
      initLucide();
    }
    return;
  }

  if (!email || !emailRegex.test(email)) {
    if (statusContainer) {
      statusContainer.style.display = "block";
      statusContainer.className = "contact-status-error";
      statusContainer.innerHTML = '<i data-lucide="alert-triangle" style="width:16px;height:16px;display:inline-block;vertical-align:middle;margin-right:6px;"></i> Vui lòng nhập địa chỉ email hợp lệ để nhận phản hồi.';
      initLucide();
    }
    return;
  }

  // Display success feedback
  if (statusContainer) {
    statusContainer.style.display = "block";
    statusContainer.className = "contact-status-success";
    statusContainer.innerHTML = `
      <div style="font-weight: 700; margin-bottom: 4px; display: flex; align-items: center; gap: 6px;">
        <i data-lucide="check-circle" style="width:18px;height:18px;color:#10B981;"></i>
        <span>Gửi Lời Nhắn Thành Công!</span>
      </div>
      <div>Cảm ơn anh/chị <strong>${name}</strong> đã quan tâm. Thông tin về chủ đề <em>"${subject}"</em> đã được chuyển tới Tạ Quốc Duy. Tôi sẽ phản hồi lại qua email <strong>${email}</strong> hoặc SĐT trong thời gian sớm nhất!</div>
    `;
    initLucide();
  }

  e.target.reset();

  // Tự ẩn sau 10 giây
  setTimeout(() => {
    if (statusContainer) {
      statusContainer.style.display = "none";
    }
  }, 10000);
};

