# BÁO CÁO KIỂM TRA KỸ THUẬT & HIỆU NĂNG MÃ NGUỒN (R1)
**Hệ Thống**: Website Portfolio Tạ Quốc Duy — Marketing Manager | Growth & MarTech  
**Môi Trường Khảo Sát**: Codebase Local (`file:///Users/Admin/Documents/Ta%CC%A3%20Quo%CC%82%CC%81c%20Duy%20Portolio/`) & Production Live (`https://portfolio.duyhiendigi.com/`)  
**Kiểm Thử & Đánh Giá Bởi**: 🐱 Xu Xu (explorer_tech_1 — Technical & Performance Auditor)  
**Thời Điểm Thẩm Định**: 2026-10-17T00:57:00+07:00  
**Tình Trạng Chung**: Hợp lệ cơ bản, cấu trúc mã sạch, 0 lỗi cú pháp JS, nhưng phát hiện một số lỗi vỡ layout responsive trên Mobile (375px/414px), cảnh báo console về icon Lucide, thiếu tracking tags theo User Rule #6 trên `index.html`, và dung lượng ảnh tải ban đầu lớn (>10MB).

---

## 1. TỔNG QUAN ĐIỂM SỐ KỸ THUẬT (TECHNICAL SCORECARD)

| Hạng Mục Đánh Giá | Thang Điểm | Điểm Đạt Được | Trạng Thái | Nhận Xét Cốt Lõi |
|---|:---:|:---:|:---:|---|
| **1. Cú pháp & Kiến trúc JavaScript** | 6.0 | 5.5 | **TỐT** | `node -c` đạt exit code 0; 0 cú pháp lỗi; tồn tại hàm vẽ biểu đồ cũ chưa dọn dẹp. |
| **2. Ngữ nghĩa & Tiêu chuẩn HTML5** | 5.0 | 4.5 | **TỐT** | 1 H1 duy nhất, cấu trúc phân cấp H2-H4 chặt chẽ, 6 `<article>`, thiếu landmark `<main>`. |
| **3. Console Errors & Tài Nguyên Mạng** | 5.0 | 4.0 | **KHÁ** | 0 lỗi runtime crash, 100% tài nguyên HTTP 200, nhưng 8 warnings console do Lucide thiếu icon `youtube`. |
| **4. Tương Thích Responsive (3 Breakpoints)** | 5.0 | 2.5 | **CẦN SỬA** | Desktop & Tablet hoàn hảo; Mobile (375px/414px) bị tràn ngang (`scrollWidth` 646px > `clientWidth` 399px) do lỗi class CSS `.case-split-grid` và 5 cột pipeline. |
| **5. Tính Toàn Vẹn Liên Kết (Link Integrity)** | 3.0 | 3.0 | **XUẤT SẮC** | 100% anchor links nội bộ trỏ đúng ID, relative files và external links (Canva, YouTube) trả về HTTP 200. |
| **6. SEO Kỹ Thuật (Robots, Sitemap, Schema)** | 4.0 | 3.5 | **TỐT** | `robots.txt` chuẩn, Schema JSON-LD hợp lệ 100%; `sitemap.xml` chứa URL fragments `#` chưa tối ưu theo Google Search Central. |
| **7. Tracking Tags (Hotjar & Google Tag)** | 2.0 | 0.5 | **CHƯA ĐẠT** | Trang `index.html` chưa gắn Hotjar (hjid: 6791459) và Google tag (`G-9KQYN3R3X2`) trong `<head>` (vi phạm User Rule #6). |
| **TỔNG ĐIỂM KỸ THUẬT (R1)** | **30.0** | **23.5 / 30.0** | **78.3% (Khá - Cần Tinh Chỉnh Trước Khi Đạt Chuẩn Xuất Sắc)** |

---

## 2. CHI TIẾT KẾT QUẢ KIỂM ĐỊNH KỸ THUẬT

### 2.1. Kiểm Tra Cú Pháp JavaScript (`node -c`) & Console Runtime

#### Bằng chứng kiểm thử tự động:
- **Lệnh thực thi**:
  ```bash
  node -c ./portfolio_assets/main.js
  # Exit Code: 0 (Không xuất hiện lỗi cú pháp)
  ```
- **Kiểm thử cú pháp toàn bộ inline scripts trong các file HTML liên quan**:
  ```bash
  node -e "..."
  # Kết quả:
  # File index.html: 3 script tags -> SYNTAX OK
  # File quoc_duy_digital.html: 5 script tags -> SYNTAX OK
  # File CV_Ta_Quoc_Duy_Marketing_Manager.html: 2 script tags -> SYNTAX OK
  # File cv_export_page1.html: 3 script tags -> SYNTAX OK
  # File cv_export_page2.html: 3 script tags -> SYNTAX OK
  ```

#### Kiểm định Console Runtime trực tiếp trên trình duyệt (Headless Chrome via `agent-browser`):
- **Lỗi Runtime (Errors)**: `0 errors` (Không có Uncaught ReferenceError, TypeError hay SyntaxError).
- **Cảnh báo (Warnings)**: Xuất hiện **8 cảnh báo console** lặp lại:
  ```text
  [warning] <i data-lucide="youtube" style="width: 13px; height: 13px;"></i> icon name was not found in the provided icons object.
  [warning] <i data-lucide="youtube" style="width: 13px; height: 13px;"></i> icon name was not found in the provided icons object.
  [warning] <i data-lucide="youtube" style="width: 12px; height: 12px; margin-right: 4px; display: inline-block; vertical-align: middle;"></i> icon name was not found in the provided icons object.
  [warning] <i data-lucide="youtube" style="width: 14px; height: 14px;"></i> icon name was not found in the provided icons object.
  [warning] <i data-lucide="youtube"></i> icon name was not found in the provided icons object.
  ```
- **Nguyên nhân kỹ thuật**: Trong thư viện Lucide Icons các phiên bản mới (`unpkg.com/lucide@latest`), các social brand icons (như `youtube`, `facebook`, `twitter`) đã bị loại bỏ khỏi gói icon lõi. Do đó khi gọi `<i data-lucide="youtube"></i>`, Lucide không tìm thấy định nghĩa icon và để trống phần tử hiển thị.
- **Vị trí cụ thể trong mã nguồn**:
  - `index.html`: dòng 585, 675, 1445, 1449, 1641, 1763, 1767, 2543.
  - `portfolio_assets/main.js`: dòng 926 (`<i data-lucide="youtube"></i> ${badgeTitle}`).

#### Rà soát Dead Code / Mã Dư Thừa trong JavaScript:
- Tại dòng 680-742 của `portfolio_assets/main.js`, tồn tại hàm:
  ```javascript
  function renderCompanySpecificChart(companyKey) {
    const cfg = companyChartData[companyKey];
    if (!cfg) return;
    const titleEl = document.getElementById("spotlightChartTitle");
    const badgeEl = document.getElementById("spotlightCompanyBadge");
    ...
    const canvas = document.getElementById("growthChart");
  ```
  Hàm này tham chiếu các phần tử DOM `#spotlightChartTitle`, `#spotlightCompanyBadge`, `#growthChart` (các ID này không tồn tại trong `index.html` do hệ thống đã chuyển sang hiển thị 5 bảng số liệu độc lập). Dù có lập trình phòng thủ (`if (!canvas) return;`), hàm này không được gọi ở bất cứ đâu và là dead code cần dọn dẹp hoặc đóng gói lại.
- Tại dòng 1304 của `portfolio_assets/main.js`, `const phoneInput = document.getElementById("senderPhone");` truy vấn ID `senderPhone` không có trong form liên hệ của `index.html` (được xử lý an toàn qua toán tử điều kiện null).

---

### 2.2. Kiểm Tra Ngữ Nghĩa HTML5 & Cấu Trúc Khung Trang

#### Thống kê thẻ HTML5 trên `index.html`:
```text
<header>: 1
<nav>: 1
<main>: 0 (CHÚ Ý: Chưa có thẻ <main> bọc nội dung chính)
<section>: 11 (hero, impact, about, leadership, cases, martech, capabilities, deliverables, keynote-ottocast, timeline, faq, contact)
<article>: 6 (Cả 6 dự án thực chiến đều được định danh ngữ nghĩa chuẩn bằng <article class="case-study-item">)
<footer>: 1
<h1>: 1 ("Chiến Lược Marketing. Tăng Trưởng Dựa Trên Dữ Liệu & AI.")
<h2>: 10 (Phân bổ cho 10 section trọng yếu)
<h3>: 45
<h4>: 25
```

#### Đánh giá chi tiết:
- **Ưu điểm**:
  - Tiêu đề cấp 1 (`<h1>`) duy nhất, chuẩn SEO On-page Google Search Essentials.
  - 6 Case Studies được bọc trong `<article>` mang tính độc lập và ngữ nghĩa cao.
  - Các thuộc tính hỗ trợ tiếp cận (Accessibility): `role="dialog"`, `aria-modal="true"` trên Case Study Modal, `aria-label="Đóng cửa sổ"` trên nút đóng, `aria-label="Mở Menu Điều Hướng"` trên nút mobile hamburger.
- **Hạn chế**:
  - Thiếu thẻ `<main>` bao bọc các `<section>` nội dung từ sau navbar đến trước `<footer>`. Việc bổ sung `<main id="main-content">` sẽ giúp trình đọc màn hình (Screen Readers) và thuật toán đánh giá tiếp cận (WCAG 2.1) nhận diện vùng nội dung trọng tâm.

---

### 2.3. Kiểm Tra Độ Tương Thích Responsive (Desktop - Tablet - Mobile)

#### Bảng Kiểm Định Kích Thước Viewport Thực Tế:

| Kích Thước Màn Hình | Viewport Test | Tràn Ngang (`scrollWidth > clientWidth`) | Trạng Thái Thanh Menu | Đánh Giá Hiển Thị |
|---|:---:|:---:|:---:|---|
| **Desktop 4K / QHD** | 1920 × 1080 | **Không** (`1905px = 1905px`) | Dock Capsule nổi (Flex) | Rất đẹp, bố cục cân đối, hiệu ứng 3D fanned deck mượt mà. |
| **Desktop Laptop** | 1440 × 900 | **Không** (`1425px = 1425px`) | Dock Capsule nổi (Flex) | Chuẩn mực, padding hợp lý, font chữ sắc nét. |
| **Tablet Portrait** | 768 × 1024 | **Không** (`753px = 753px`) | Ẩn Dock, hiện nút Menu (Flex) | Tự động ẩn Dock máy tính, chuyển sang Menu trượt, 3D props ẩn. |
| **Mobile Lớn** | 414 × 896 | **CÓ TRÀN NGANG NGHIÊM TRỌNG** (`scrollWidth: 646px > clientWidth: 399px`) | Nút Menu bị đẩy tràn khỏi mép phải | **LỖI LAYOUT**: Bị vỡ chiều ngang, trang web bị trượt ngang 247px. |
| **Mobile Chuẩn** | 375 × 667 | **CÓ TRÀN NGANG NGHIÊM TRỌNG** (`scrollWidth: 646px > clientWidth: 360px`) | Nút Menu bị đẩy tràn khỏi mép phải | **LỖI LAYOUT**: Bị vỡ chiều ngang, giao diện bị xô lệch trên iPhone SE/Mini. |

#### Nguyên Nhân Cốt Lõi Gây Vỡ Layout Mobile:

1. **Lỗi Mismatch Tên Class Trong Media Query CSS**:
   - Trong `portfolio_assets/style.css` dòng 3013 (`@media (max-width: 900px)`):
     ```css
     .impact-grid,
     .pillars-3col-grid,
     .martech-layers-grid,
     .deliverables-grid,
     .about-editorial-wrap,
     .case-body-grid, /* <-- SAI TÊN CLASS! */
     .contact-card-wrap {
       grid-template-columns: 1fr;
     }
     ```
   - Trong `index.html` dòng 1097, class thực tế là `.case-split-grid`:
     ```html
     <div class="case-split-grid">
     ```
   - Và tại dòng 1798 của `style.css`:
     ```css
     .case-split-grid {
       display: grid;
       grid-template-columns: 1.15fr 0.85fr; /* 2 CỘT CỐ ĐỊNH */
       gap: 36px;
       align-items: start;
     }
     ```
   - **Hậu quả**: Do nhầm lẫn thành `.case-body-grid`, thuộc tính 2 cột của `.case-split-grid` không hề bị ghi đè trên mobile! Cả 6 dự án đều bị ép hiển thị 2 cột song song trên màn hình 375px/414px, dẫn tới vỡ khung.

2. **Lưới Pipeline 5 Bước Trong Section MarTech Không Có Responsive**:
   - Tại dòng 2039 của `style.css`:
     ```css
     .pipeline-5step-grid {
       display: grid;
       grid-template-columns: repeat(5, 1fr); /* 5 CỘT CỐ ĐỊNH TOÀN BỘ SCREEN */
       gap: 16px;
       margin-bottom: 56px;
     }
     ```
   - **Hậu quả**: Không có bất kỳ media query nào cho `.pipeline-5step-grid`. Trên màn hình điện thoại 375px, hệ thống ép 5 thẻ nằm ngang, đẩy chiều rộng section lên hơn 600px.

3. **Bảng Đo Lường So Sánh Trước — Sau Trong Case Study Thiếu Media Query**:
   - Tại dòng 1913 của `style.css`:
     ```css
     .before-after-matrix {
       display: grid;
       grid-template-columns: 1fr 1fr; /* 2 CỘT CỐ ĐỊNH */
       gap: 22px;
     }
     ```
   - **Hậu quả**: Khi nằm trong cột phải của `.case-split-grid`, khối này tiếp tục chia đôi thành 2 cột nhỏ, làm chữ bị co cụm và tràn viền.

4. **Thanh Navbar Action Buttons Bị Chèn Ép Trên Màn Hình Dưới 640px**:
   - Tại dòng 116 của `index.html`:
     ```html
     <div class="nav-actions-box">
       <a href="CV_Ta_Quoc_Duy_Marketing_Manager.pdf" class="nav-link-text">Tải CV (PDF)</a>
       <a href="#contact" class="nav-btn-contact">Tuyển Dụng</a>
       <button class="mobile-toggle" id="mobileToggle">...</button>
     </div>
     ```
   - Trên mobile, cả 2 nút "Tải CV" và "Tuyển Dụng" vẫn hiển thị bên cạnh nút Hamburger, trong khi cả 2 nút này đã được nhân bản đầy đủ bên trong Drawer trượt (`.mobile-nav-drawer-actions`). Việc giữ cả hai trên thanh điều hướng nhỏ hẹp khiến cụm navbar bị phình ra ngoài viewport (`right: 444px > 399px`).

5. **Padding Quá Lớn Của `.case-study-item`**:
   - Dòng 1215 `style.css`: `.case-study-item { padding: 46px 48px; }`. Trên mobile 375px, padding 48px mỗi bên chiếm tới 96px (25% màn hình), làm vùng hiển thị thực tế chỉ còn ~279px, khiến nút `white-space: nowrap` ("Xem Slide Ra Mắt Ottocast P3 (Canva)") dài 316px bị tràn ra ngoài.

---

### 2.4. Kiểm Tra Tính Toàn Vẹn Liên Kết (Link Integrity)

#### A. Internal Anchor Links:
Kiểm tra đối chiếu 100% thuộc tính `href="#..."` với tập hợp thuộc tính `id="..."` trong DOM:
- `href="#hero"` -> Tìm thấy `<section id="hero">` (Dòng 161)
- `href="#about"` -> Tìm thấy `<section id="about">` (Dòng 747)
- `href="#impact"` -> Tìm thấy `<section id="impact">` (Dòng 345)
- `href="#leadership"` -> Tìm thấy `<section id="leadership">` (Dòng 890)
- `href="#cases"` -> Tìm thấy `<section id="cases">` (Dòng 1039)
- `href="#martech"` -> Tìm thấy `<section id="martech">` (Dòng 1957)
- `href="#deliverables"` -> Tìm thấy `<section id="deliverables">` (Dòng 2197)
- `href="#timeline"` -> Tìm thấy `<section id="timeline">` (Dòng 2320)
- `href="#contact"` -> Tìm thấy `<section id="contact">` (Dòng 2405)
- `href="#keynote-ottocast"` -> Tìm thấy `<div id="keynote-ottocast">` (Dòng 1730)

#### B. Relative Links & File Links:
- `portfolio_assets/style.css?v=2.5`: Tồn tại trên đĩa (81,910 bytes) & live 200 OK.
- `portfolio_assets/main.js?v=2.5`: Tồn tại trên đĩa (68,696 bytes) & live 200 OK.
- `quoc_duy_digital.html`: Tồn tại trên đĩa (54,433 bytes).
- `CV_Ta_Quoc_Duy_Marketing_Manager.pdf`: Tồn tại trên đĩa (1,481,944 bytes) & live 200 OK (Content-Length: 1481944).
- Các liên kết file markdown (`file:///...`) trong tài liệu dự án đều trỏ chính xác đến các file có thực trên ổ đĩa.

#### C. External Links (Kiểm tra phản hồi HTTP thực tế):
- `https://brewbanhmicafe.com`: **HTTP 200 OK**
- `https://www.youtube.com/watch?v=8WTAEo6BWiY`: **HTTP 200 OK**
- `https://www.youtube.com/watch?v=9EtwFvB1za8`: **HTTP 200 OK**
- `https://www.canva.com/design/DAFzc_JdrZs/tAccurnki2vgpJgjPrDIUQ/view?embed`: **HTTP 200 OK**
- CDN `https://unpkg.com/lucide@latest`: **HTTP 200 OK**
- CDN `https://cdn.jsdelivr.net/npm/chart.js`: **HTTP 200 OK**
- Google Fonts CSS: **HTTP 200 OK**

---

### 2.5. Thẩm Định SEO Kỹ Thuật (Robots.txt, Sitemap.xml, Canonical, Schema.org)

#### 1. Robots.txt:
- Đường dẫn live: `https://portfolio.duyhiendigi.com/robots.txt`
- Trạng thái HTTP: `200 OK`
- Nội dung:
  ```txt
  # Robots.txt for Tạ Quốc Duy Portfolio
  # Website: https://portfolio.duyhiendigi.com/

  User-agent: *
  Allow: /
  Allow: /portfolio_assets/
  Allow: /CV_Ta_Quoc_Duy_Marketing_Manager.pdf

  # Sitemaps
  Sitemap: https://portfolio.duyhiendigi.com/sitemap.xml
  ```
- Nhận xét: Hoàn toàn hợp lệ, cho phép bot Googlebot/Bingbot thu thập đầy đủ tài nguyên tĩnh và file CV PDF.

#### 2. Sitemap.xml:
- Đường dẫn live: `https://portfolio.duyhiendigi.com/sitemap.xml`
- Trạng thái HTTP: `200 OK`
- Các URL khai báo:
  - `https://portfolio.duyhiendigi.com/` (priority 1.0)
  - `https://portfolio.duyhiendigi.com/#about` (priority 0.8)
  - `https://portfolio.duyhiendigi.com/#leadership` (priority 0.9)
  - `https://portfolio.duyhiendigi.com/#cases` (priority 0.9)
  - `https://portfolio.duyhiendigi.com/#martech` (priority 0.8)
  - `https://portfolio.duyhiendigi.com/#timeline` (priority 0.7)
  - `https://portfolio.duyhiendigi.com/#contact` (priority 0.8)
  - `https://portfolio.duyhiendigi.com/CV_Ta_Quoc_Duy_Marketing_Manager.pdf` (priority 0.8)
- **Vấn đề SEO cần tối ưu**: Theo nguyên tắc chính thức của Google Search Central (và tiêu chuẩn Sitemaps.org / RFC 3986), XML sitemap **không nên chứa các URL fragment (chứa dấu `#`)**. Các anchor hash này chỉ là vị trí cuộn trang phía trình duyệt máy khách, không phải là các trang HTML độc lập. Bot tìm kiếm của Google sẽ tự động cắt bỏ phần sau `#` và coi các URL này là trùng lặp (duplicate URLs) với trang chủ, có thể dẫn đến lãng phí crawl budget. Khuyến nghị chỉ giữ lại URL gốc và URL file PDF.

#### 3. Thẻ Canonical:
- Đã được khai báo chính xác tại dòng 11 của `index.html`:
  ```html
  <link rel="canonical" href="https://portfolio.duyhiendigi.com/">
  ```
- Hoàn toàn nhất quán với `og:url` và `twitter:url`.

#### 4. Dữ Liệu Có Cấu Trúc Schema.org JSON-LD:
- Đã được nhúng tại dòng 28-72 của `index.html`:
  ```json
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://portfolio.duyhiendigi.com/#person",
        "name": "Tạ Quốc Duy",
        "jobTitle": "Marketing Manager",
        "description": "Senior Marketing Manager với 8+ năm kinh nghiệm trong hoạch định chiến lược tiếp thị, quản trị ngân sách tới 700 triệu/tháng, điều hành đội ngũ 10 nhân sự và ứng dụng MarTech & AI Automation.",
        "url": "https://portfolio.duyhiendigi.com/",
        "image": "https://portfolio.duyhiendigi.com/avatar.png",
        "email": "admin@duyhiendigi.com",
        "telephone": "+84392225986",
        "alumniOf": {
          "@type": "CollegeOrUniversity",
          "name": "Đại học Bách Khoa TP.HCM (HCMUT)"
        },
        "knowsAbout": [
          "Marketing Strategy & Leadership",
          "Performance Marketing & Growth",
          "MarTech, Data Analytics & AI Automation",
          "Omnichannel Marketing",
          "High-volume Video Production",
          "CRM & Conversion Rate Optimization"
        ]
      },
      {
        "@type": "ProfilePage",
        "@id": "https://portfolio.duyhiendigi.com/#webpage",
        "url": "https://portfolio.duyhiendigi.com/",
        "name": "Tạ Quốc Duy — Marketing Manager | Growth & MarTech Portfolio",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://portfolio.duyhiendigi.com/#website",
          "url": "https://portfolio.duyhiendigi.com/",
          "name": "Tạ Quốc Duy Portfolio"
        },
        "about": {
          "@id": "https://portfolio.duyhiendigi.com/#person"
        }
      }
    ]
  }
  ```
- **Kết quả xác thực cú pháp & ngữ nghĩa**: Cú pháp JSON chuẩn, phân cấp `@graph` mẫu mực, liên kết chéo `about` giữa `ProfilePage` và `Person` chính xác. Đường dẫn ảnh đại diện `avatar.png` tồn tại và trả về HTTP 200 OK.

---

### 2.6. Thẩm Định Thẻ Theo Dõi (Tracking Tags per User Rule #6)

Theo **User Rule #6**:
> "Bắt buộc gắn đầy đủ thẻ Tracking (`<head>`): Hotjar Tracking Code (hjid: 6791459, hjsv: 6), Google tag (gtag.js) (ID: `G-9KQYN3R3X2`)".

#### Hiện trạng thực tế:
- Trong file phụ `quoc_duy_digital.html`: Có đầy đủ cả Hotjar (dòng 24-34) và Google Tag (dòng 36-43).
- Trong file chính `index.html` (trang chủ đang chạy live tại `https://portfolio.duyhiendigi.com/`): **HOÀN TOÀN CHƯA CÓ THẺ TRACKING NÀO TRONG `<head>`!**
  - Không có đoạn mã Google tag `gtag.js` với ID `G-9KQYN3R3X2`.
  - Không có đoạn mã theo dõi hành vi Hotjar (`hjid: 6791459`).
- **Mức độ rủi ro**: Cao đối với việc đo lường số liệu truy cập của nhà tuyển dụng và tuân thủ quy tắc toàn cục của trợ lý 🐱 Xu Xu.

---

### 2.7. Đánh Giá Hiệu Năng Tải Trang (Performance & Asset Payload)

1. **Tổng dung lượng tài nguyên ban đầu (Uncompressed Asset Payload)**:
   - Các file hình ảnh PNG minh họa 3D có kích thước rất lớn:
     - `prop_megaphone.png`: **1.28 MB**
     - `prop_computer.png`: **1.30 MB**
   - Các hình ảnh mockup JPEG:
     - `mockup_bravigo.jpg`: **701 KB**
     - `mockup_fclick.jpg`: **640 KB**
     - `mockup_luclam.jpg`: **603 KB**
     - `mockup_sala.jpg`: **605 KB**
     - `char_bravigo.jpg`: **605 KB**
     - `char_lath.jpg`: **602 KB**
     - `char_fclick.jpg`: **562 KB**
     - `char_sala.jpg`: **529 KB**
     - `mockup_brewbanhmi.jpg`: **529 KB**
   - **Tổng dung lượng ảnh tải trong lần đầu vượt quá 10 MB!**
2. **Khuyến nghị tối ưu**:
   - Chuyển đổi định dạng sang **WebP** hoặc **AVIF** với mức nén 80-85%. Các ảnh PNG 1.3MB có thể giảm xuống dưới 150KB mà không mất chi tiết trong suốt. Tổng dung lượng trang sẽ giảm từ 10MB xuống dưới 2MB (giảm hơn 80% băng thông), cải thiện rõ rệt chỉ số LCP (Largest Contentful Paint) trên mạng di động 4G.
   - Thêm thuộc tính `loading="lazy"` cho toàn bộ ảnh dưới nếp gấp màn hình (below-the-fold) trong các case study 02 đến 06.

---

## 3. DANH MỤC ĐỀ XUẤT KHẮC PHỤC KỸ THUẬT (ACTIONABLE REMEDIATIONS)

Dưới đây là các đoạn mã đề xuất tinh chỉnh chính xác, sẵn sàng chuyển giao cho bộ phận triển khai:

### Khuyến nghị 1: Bổ sung Media Query khắc phục vỡ layout Mobile trong `portfolio_assets/style.css`

```css
/* Sửa lỗi class mismatch và bổ sung stacking cho Mobile */
@media (max-width: 900px) {
  /* Thay thế .case-body-grid bằng .case-split-grid */
  .case-split-grid {
    grid-template-columns: 1fr !important;
    gap: 24px;
  }
  
  /* Chuyển pipeline 5 bước sang 1 cột hoặc 2 cột trên Tablet/Mobile */
  .pipeline-5step-grid {
    grid-template-columns: 1fr !important;
    gap: 12px;
  }

  /* Chuyển ma trận Trước - Sau sang 1 cột */
  .before-after-matrix {
    grid-template-columns: 1fr !important;
    gap: 14px;
  }
}

@media (max-width: 640px) {
  /* Thu gọn navbar trên mobile, ẩn các nút chữ để tránh tràn ngang */
  .nav-actions-box .nav-link-text,
  .nav-actions-box .nav-btn-contact {
    display: none !important;
  }

  /* Giảm padding của Case Study Card trên mobile */
  .case-study-item {
    padding: 24px 16px !important;
  }

  /* Cho phép nút bấm co giãn linh hoạt */
  .case-footer-actions .btn {
    white-space: normal !important;
  }
}
```

### Khuyến nghị 2: Bổ sung Tracking Tags vào `<head>` của `index.html` (Tuân thủ User Rule #6)

Chèn ngay trước thẻ đóng `</head>` (dòng 85 của `index.html`):

```html
  <!-- Hotjar Tracking Code per Global Rule -->
  <script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:6791459,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
  </script>

  <!-- Google tag (gtag.js) per Global Rule -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-9KQYN3R3X2"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-9KQYN3R3X2');
  </script>
```

### Khuyến nghị 3: Thay thế icon YouTube Lucide để triệt tiêu 8 cảnh báo Console

Thay vì dùng `<i data-lucide="youtube"></i>` (không tồn tại trong Lucide mới), sử dụng inline SVG YouTube chuẩn nhận diện hoặc icon `video`/`play` có sẵn:

```html
<svg class="lucide-yt" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style="display:inline-block; vertical-align:middle; color:#EF4444;">
  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
</svg>
```

### Khuyến nghị 4: Tinh gọn `sitemap.xml` theo chuẩn Google Search Central

Loại bỏ các URL fragment `#about`, `#leadership`, `#cases`, `#martech`, `#timeline`, `#contact` khỏi `sitemap.xml`, chỉ giữ lại:
1. `https://portfolio.duyhiendigi.com/` (priority 1.0)
2. `https://portfolio.duyhiendigi.com/CV_Ta_Quoc_Duy_Marketing_Manager.pdf` (priority 0.8)

---

## 4. KẾT LUẬN & ĐÁNH GIÁ CHUNG CỦA CHUYÊN GIA

Mã nguồn của website Portfolio Tạ Quốc Duy được xây dựng với nền tảng kỹ thuật tốt: kiến trúc Vanilla JS gọn gàng không phụ thuộc framework cồng kềnh, phân tầng HTML5 ngữ nghĩa chuẩn xác, liên kết tài nguyên đạt độ toàn vẹn 100%, và cấu trúc Schema.org JSON-LD thể hiện năng lực chuyên môn sắc bén.

Sau khi điều chỉnh các lỗi responsive trên Mobile (chủ yếu do nhầm tên class `.case-body-grid` thay vì `.case-split-grid` và thiếu media query cho lưới pipeline/ma trận so sánh) cùng với việc gắn bổ sung thẻ tracking GA4/Hotjar theo Rule #6, website sẽ đạt trạng thái **Hoàn Hảo (Grade A+)**, tạo ấn tượng kỹ thuật và độ chỉn chu cao nhất trước Hội Đồng Tuyển Dụng và Ban Giám Đốc.
