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
    category: "Nền Tảng Ứng Dụng Công Nghệ Số",
    company: "Công ty Fclick",
    role: "Quản Lý Marketing & Trưởng Nhóm MarTech",
    period: "06/2025 – 02/2026",
    title: "Cắt Giảm 25% Chi Phí Tìm Khách & Tự Động Hóa AI Tiết Kiệm 30% Thời Gian",
    challenge: "Chi phí quảng cáo để thu hút người dùng cài đặt ứng dụng ngày càng tăng cao, khâu sản xuất nội dung tốn nhiều thời gian và thiếu báo cáo số liệu tập trung.",
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
    category: "Chuỗi F&B & Quà Tặng Cao Cấp",
    company: "Công Ty TNHH TM DV SX Lục Lam (Lục Lam Group)",
    logoUrl: "portfolio_assets/images/logo_luclam.png",
    role: "Quản Lý Marketing",
    period: "04/2024 – 04/2025",
    title: "Xây Dựng Thương Hiệu Từ Số 0 & Đạt Doanh Thu 1 Tỷ Đồng/Tháng",
    challenge: "Gia nhập ngành F&B trà sữa và quà tặng cao cấp từ con số 0: chưa có thương hiệu, chưa có kênh bán hàng online và thiếu quy trình tiếp nhận đơn hàng.",
    strategy: "Xây dựng trọn bộ nhận diện thương hiệu cao cấp, phát triển hệ thống 4 website kết nối phần mềm quản lý khách hàng, kết hợp quảng cáo mùa vụ với sự kiện trải nghiệm tại trung tâm thương mại Takashimaya.",
    deliverables: [
      {
        title: "Xây Dựng Nhận Diện Thương Hiệu Từ Đầu",
        tag: "Xây Dựng Thương Hiệu",
        desc: "Định vị phong cách chuỗi F&B trà hoa và quà tặng cao cấp từ con số 0.",
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
        title: "Chiến Dịch Bứt Phá Doanh Thu 1 Tỷ/Tháng",
        tag: "Tăng Trưởng Bán Hàng",
        desc: "Kết hợp quảng cáo online và bán quà tặng mùa Tết đạt mốc doanh thu 1 tỷ/tháng.",
        items: [
          "Chạy quảng cáo mục tiêu trên Facebook và Google",
          "Đẩy mạnh gói quà Tết cho doanh nghiệp và khách lẻ",
          "Trưng bày đồng bộ tài liệu bán hàng tại tất cả các điểm bán"
        ],
        attachment: "Kế hoạch chiến dịch Quà Tết & Báo cáo doanh số"
      }
    ],
    results: [
      "Đưa doanh thu từ con số 0 đạt mốc 1 tỷ đồng/tháng.",
      "Xây dựng và đào tạo đội ngũ 8 nhân sự Marketing vận hành độc lập.",
      "Hoàn thiện hệ sinh thái 4 website và hệ thống quản lý dữ liệu khách hàng."
    ],
    tech: ["Doanh Thu 1 Tỷ/Tháng", "Ra Mắt Thương Hiệu", "Đội Ngũ 8 Người", "4 Website", "Quản Lý Khách Hàng", "Sự Kiện Takashimaya"]
  },

  bravigo: {
    category: "Thiết Bị Công Nghệ Ô Tô Thông Minh (B2B & B2C)",
    company: "Bravigo Việt Nam & Thiết Bị Công Nghệ Xe",
    role: "Quản Lý Marketing",
    period: "03/2022 – 04/2024",
    title: "Phát Triển Thị Phần Qua Hàng Trăm Đại Lý & Chủ Trì Ra Mắt Flagship Ottocast P3",
    challenge: "Thị trường phụ kiện công nghệ ô tô cạnh tranh khốc liệt. Cần kết hợp giữa quảng bá cho người lái xe và chính sách phân phối cho hệ thống gara, đại lý. Đồng thời cần tổ chức sự kiện ra mắt hoành tráng cho sản phẩm chiến lược Ottocast P3.",
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
    category: "Bán Lẻ & Thương Mại Điện Tử",
    company: "LATH Group / TSD Group",
    role: "Trưởng Nhóm Marketing",
    period: "08/2020 – 02/2022",
    title: "Tăng 40% Doanh Thu Quảng Cáo & Đạt 5.000 Lượt Khách Tự Nhiên/Tháng",
    challenge: "Cần tối ưu chi phí quảng cáo, mở rộng nguồn khách hàng tự nhiên từ tìm kiếm Google và đưa sản phẩm vào hệ thống siêu thị lớn cùng các sàn thương mại điện tử.",
    strategy: "Tối ưu hóa quảng cáo Google và Facebook, đẩy mạnh từ khóa website lath.vn lên top tìm kiếm tự nhiên, đưa sản phẩm vào chuỗi siêu thị Lotte Mart và cải thiện trải nghiệm ứng dụng KingPang.",
    deliverables: [
      {
        title: "Tăng Trưởng 40% Doanh Thu Quảng Cáo",
        tag: "Quảng Cáo Trực Tuyến",
        desc: "Tối ưu ngân sách quảng cáo để tăng doanh số bán lẻ vượt bậc.",
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
      }
    ],
    results: [
      "Tăng 40% doanh thu từ quảng cáo so với kỳ trước.",
      "Đạt hơn 5.000 lượt truy cập tự nhiên và hơn 200 đơn hàng miễn phí mỗi tháng.",
      "Tăng 25% tỷ lệ mua hàng khi vào chuỗi Lotte Mart; tăng 20% lượt tải ứng dụng."
    ],
    tech: ["Doanh Thu Ads +40%", "5.000 Khách Tự Nhiên", "200+ Đơn Miễn Phí", "Hệ Thống Lotte Mart", "Tối Ưu Ứng Dụng"]
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
  document.getElementById("modalCategory").innerText = `Hạng mục: ${data.category}`;
  document.getElementById("modalTitle").innerText = data.title;
  if (data.logoUrl) {
    document.getElementById("modalCompany").innerHTML = `<img src="${data.logoUrl}" alt="Logo" style="width: 20px; height: 20px; border-radius: 4px; vertical-align: middle; margin-right: 6px; display: inline-block;"> <span>${data.company}</span>`;
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

  // Render Slide Embed (if available)
  const slideContainer = document.getElementById("modalSlideContainer");
  if (slideContainer) {
    if (data.embedSlide) {
      slideContainer.innerHTML = `
        <div class="modal-slide-box" id="modalSlideSection">
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
    } else {
      slideContainer.innerHTML = "";
      slideContainer.style.display = "none";
    }
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
