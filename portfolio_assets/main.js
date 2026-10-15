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
        tag: "Quảng Cáo Số",
        desc: "Điều phối ngân sách quảng cáo 300 triệu/tháng đa kênh, đem về đều đặn hơn 50 khách hàng tiềm năng chất lượng cao mỗi tháng.",
        items: [
          "Tối ưu ngân sách trên Facebook, Google, TikTok và Zalo OA",
          "Lọc khách hàng tiềm năng có thu nhập cao và nhu cầu thực tế",
          "Chuyển giao thông tin khách hàng cho đội ngũ tư vấn chăm sóc"
        ],
        attachment: "Báo cáo hiệu quả chi phí và danh sách khách hàng tiềm năng"
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
      }
    ],
    results: [
      "Đem về đều đặn hơn 50 khách hàng tiềm năng chất lượng cao mỗi tháng.",
      "Vận hành cỗ máy sản xuất 130+ video/tháng, tăng trưởng mạnh tương tác tự nhiên.",
      "Tối ưu chi phí tìm khách và nâng cao tỷ lệ chuyển đổi sang lịch hẹn tham quan thực tế."
    ],
    tech: ["Quản Trị Đội Ngũ", "Chỉ Tiêu KPI", "130+ Video/Tháng", "300Tr Ads/Tháng", "50+ Khách VIP", "Zalo OA", "Facebook & Google"]
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
  const spotlight = document.getElementById("companyChartSpotlight");

  if (companyKey === "all") {
    cards.forEach(c => {
      c.style.display = "flex";
      c.classList.remove("highlighted");
    });
    if (spotlight) spotlight.style.display = "none";
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

    if (spotlight) {
      spotlight.style.display = "block";
      renderCompanySpecificChart(companyKey);
    }
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
  } else if (elementId === "modalSlideContainer") {
    document.getElementById("modalNavSlideBtn")?.classList.add("active");
  } else if (elementId === "modalVideoContainer") {
    document.getElementById("modalNavVideoBtn")?.classList.add("active");
  } else if (elementId === "modalDeliverablesSec") {
    document.querySelector(".modal-nav-pill:nth-of-type(3)")?.classList.add("active");
  } else if (elementId === "modalResultsSec") {
    document.querySelector(".modal-nav-pill:last-of-type")?.classList.add("active");
  }
};

window.openCaseModal = function(caseKey) {
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
        { id: "modalSlideContainer", pillId: "modalNavSlideBtn" },
        { id: "modalVideoContainer", pillId: "modalNavVideoBtn" },
        { id: "modalDeliverablesSec", pillIdx: 2 },
        { id: "modalResultsSec", pillIdx: 3 }
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
    { id: "cases", link: document.querySelector(".nav-pill-links a[href='#cases']") },
    { id: "martech", link: document.querySelector(".nav-pill-links a[href='#martech']") },
    { id: "capabilities", link: document.querySelector(".nav-pill-links a[href='#capabilities']") },
    { id: "deliverables", link: document.querySelector(".nav-pill-links a[href='#deliverables']") }
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

// 6. Contact Form Submit Handler
window.handleFormSubmit = function(e) {
  e.preventDefault();
  const name = document.getElementById("senderName").value;
  const email = document.getElementById("senderEmail").value;
  const subject = document.getElementById("senderSubject").value;

  alert(`Cảm ơn anh/chị ${name}!\nLời nhắn về chủ đề "${subject}" đã được ghi nhận. Tạ Quốc Duy sẽ phản hồi lại qua email ${email} trong thời gian sớm nhất.`);
  e.target.reset();
};
