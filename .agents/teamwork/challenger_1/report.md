# Báo Cáo Thẩm Định Thực Nghiệm Giao Diện Responsive & Layout Integrity

- **Chuyên viên thực nghiệm**: 🐱 Xu Xu (Challenger 1 — Responsive & Layout Challenger)
- **Mã định danh Subagent**: `challenger_1`
- **Mã Parent Agent (Orchestrator)**: `ff1c4284-b65e-40da-97de-394f14a6d01e`
- **Thời gian kiểm thử**: 2026-10-16T18:20:00Z
- **Công cụ kiểm thử**: Headless Google Chrome v141+ điều khiển tự động qua Playwright Python Test Harness trực tiếp trên DOM thực tế.
- **Phạm vi kiểm thử**: `index.html` và `portfolio_assets/style.css` trên cả môi trường Localhost và Live Production (`https://portfolio.duyhiendigi.com/`).

---

## 1. Tóm Tắt Kết Quả Thực Nghiệm (Executive Summary)

| Hạng mục kiểm tra | Tiêu chuẩn kỹ thuật | Kết quả Local | Kết quả Production | Đánh giá |
|---|---|---|---|---|
| **Mobile Small (375px)** | `scrollWidth <= clientWidth` (Overflow = 0px) | **PASS** (375px / 375px, 0px) | **FAIL** (+271px overflow) | Local đạt chuẩn tuyệt đối; Cần đồng bộ FTP lên Live |
| **Mobile Large (414px)** | `scrollWidth <= clientWidth` (Overflow = 0px) | **PASS** (414px / 414px, 0px) | **FAIL** (+232px overflow) | Local đạt chuẩn tuyệt đối; Cần đồng bộ FTP lên Live |
| **Tablet Portrait (768px)** | `scrollWidth <= clientWidth` (Overflow = 0px) | **PASS** (768px / 768px, 0px) | **PASS** (768px / 768px, 0px) | Đạt chuẩn cả 2 môi trường |
| **Desktop Standard (1440px)** | `scrollWidth <= clientWidth` (Overflow = 0px) | **PASS** (1440px / 1440px, 0px) | **PASS** (1440px / 1440px, 0px) | Đạt chuẩn cả 2 môi trường |
| **Desktop Wide (1920px)** | `scrollWidth <= clientWidth` (Overflow = 0px) | **PASS** (1920px / 1920px, 0px) | **PASS** (1920px / 1920px, 0px) | Đạt chuẩn cả 2 môi trường |
| **Lưới `.case-split-grid`** | Co giãn & xếp chồng 1 cột trên Mobile/Tablet | **PASS** (2 cột trên Desktop, 1 cột trên Mobile/Tablet) | N/A | Toàn vẹn 100%, không tràn viền |
| **Lưới `.pipeline-5step-grid`** | 5 cột Desktop -> 2 cột Tablet -> 1 cột Mobile | **PASS** (5 cols -> 2 cols -> 1 col) | N/A | Toàn vẹn 100%, không tràn viền |
| **Ma trận `.before-after-matrix`** | 2 cột Desktop -> 1 cột Mobile/Tablet | **PASS** (2 cols -> 1 col) | N/A | Toàn vẹn 100%, không tràn viền |
| **Bộ lọc 6 danh mục tại 375px** | Chuyển tab không sinh lỗi giật layout / tràn ngang | **PASS** (0px overflow trên cả 7 trạng thái lọc) | N/A | Đạt chuẩn tuyệt đối |

---

## 2. Bảng Đo Lường Thực Nghiệm Toàn Diện (Empirical Measurements Matrix)

Bộ test harness đã chạy kiểm thử tự động trên 12 kích thước viewport (bao gồm các điểm gãy ranh giới CSS Media Query):

| Viewport Name | Kích thước (WxH) | Local ClientW | Local ScrollW | Local Overflow | Production ScrollW | Production Overflow | Trạng thái Local |
|---|---|---|---|---|---|---|---|
| **Ultra-Small (iPhone SE 1)** | 320 x 568 | 320px | 372px | **+52px** | Chưa test | — | *Off-spec edge case* |
| **Mobile Small (iPhone SE 2/8)** | 375 x 667 | 375px | 375px | **0px** | 646px | +271px | **PASS** |
| **Mobile Small (iPhone X/12 Mini)**| 375 x 812 | 375px | 375px | **0px** | 646px | +271px | **PASS** |
| **Mobile Large (iPhone 11/XR)** | 414 x 896 | 414px | 414px | **0px** | 646px | +232px | **PASS** |
| **Mobile Phablet Landscape** | 480 x 800 | 480px | 480px | **0px** | 646px | +166px | **PASS** |
| **Breakpoint Boundary 600** | 600 x 960 | 600px | 600px | **0px** | 646px | +46px | **PASS** |
| **Breakpoint Boundary 640** | 640 x 960 | 640px | 640px | **0px** | 646px | +6px | **PASS** |
| **Tablet Portrait (iPad)** | 768 x 1024 | 768px | 768px | **0px** | 768px | 0px | **PASS** |
| **Breakpoint Boundary 900** | 900 x 1200 | 900px | 900px | **0px** | 900px | 0px | **PASS** |
| **Tablet Landscape (iPad Pro)** | 1024 x 768 | 1024px | 1024px | **0px** | 1024px | 0px | **PASS** |
| **Desktop Standard (MacBook)** | 1440 x 900 | 1440px | 1440px | **0px** | 1440px | 0px | **PASS** |
| **Desktop Wide (Full HD)** | 1920 x 1080 | 1920px | 1920px | **0px** | 1920px | 0px | **PASS** |

---

## 3. Thẩm Định Độ Toàn Vẹn Của Các Thành Phần Giao Diện Trọng Yếu

### 3.1. Phân Tích Thành Phần Lưới Trọng Điểm

Đo lường chi tiết cấu trúc DOM và Computed CSS của 3 thành phần được chỉ định:

1. **`.case-split-grid` (6 khối dự án Case Studies)**:
   - *Desktop Wide (1920px) & Desktop Standard (1440px)*: `display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 48px;`. Số cột tính toán: 2 cột. `exceedsViewport = False`.
   - *Tablet (768px)*: `@media (max-width: 900px)` kích hoạt `grid-template-columns: 1fr; gap: 28px;`. Số cột tính toán: 1 cột xếp chồng dọc hoàn hảo.
   - *Mobile (414px & 375px)*: Kế thừa 1 cột `1fr`, chiều rộng co giãn vừa khít 100% container (343px tại viewport 375px). `exceedsViewport = False`.

2. **`.pipeline-5step-grid` (Quy trình 5 bước AI & MarTech)**:
   - *Desktop Wide & Standard (1920px / 1440px)*: `grid-template-columns: repeat(5, 1fr); gap: 16px;`. Số cột: 5 cột ngang.
   - *Tablet (768px / 900px)*: `@media (max-width: 900px)` kích hoạt `grid-template-columns: repeat(2, 1fr) !important; gap: 14px;`. Số cột: 2 cột cân đối.
   - *Mobile (640px, 414px, 375px)*: `@media (max-width: 640px)` kích hoạt `grid-template-columns: 1fr !important; gap: 12px;`. Số cột: 1 cột xếp dọc, mỗi thẻ bước quy trình hiển thị đầy đủ, không bị ép hẹp.

3. **`.before-after-matrix` (Ma trận So Sánh Trước — Sau tại 6 Case Studies)**:
   - *Desktop Wide & Standard (1920px / 1440px)*: `grid-template-columns: 1fr 1fr; gap: 22px;`. Số cột: 2 cột đối sánh song song (Cột đỏ cảnh báo - Cột xanh tối ưu).
   - *Tablet & Mobile (768px, 414px, 375px)*: `@media (max-width: 900px)` kích hoạt `grid-template-columns: 1fr !important; gap: 14px;`. Số cột: 1 cột xếp chồng lần lượt Trước rồi đến Sau, chữ không bị tràn hay gãy dòng bất thường.

### 3.2. Kiểm Thử Tương Tác Bộ Lọc Danh Mục Dự Án (Case Studies Filter Tabs at 375px)

Mô phỏng người dùng bấm chuyển đổi liên tục giữa 7 nút lọc trên màn hình di động nhỏ 375px:
- `all` (Tất Cả): `scrollWidth = 375px, clientWidth = 375px` -> **PASS (0px overflow)**
- `strategy` (Chiến Lược): `scrollWidth = 375px, clientWidth = 375px` -> **PASS (0px overflow)**
- `performance` (Hiệu Suất): `scrollWidth = 375px, clientWidth = 375px` -> **PASS (0px overflow)**
- `brand` (Thương Hiệu): `scrollWidth = 375px, clientWidth = 375px` -> **PASS (0px overflow)**
- `leadership` (Lãnh Đạo): `scrollWidth = 375px, clientWidth = 375px` -> **PASS (0px overflow)**
- `data` (Dữ Liệu): `scrollWidth = 375px, clientWidth = 375px` -> **PASS (0px overflow)**
- `martech` (Công Nghệ): `scrollWidth = 375px, clientWidth = 375px` -> **PASS (0px overflow)**

---

## 4. Những Phát Hiện Thực Nghiệm Quan Trọng (Empirical Adversarial Findings)

Bên cạnh việc nghiệm thu thành công các yêu cầu cốt lõi trên codebase cục bộ, chuyên viên phản biện đã đào sâu và phát hiện 3 vấn đề có giá trị thực tiễn cao:

### Phát Hiện 1 [MỨC ĐỘ: CAO] — Lệch Pha Đồng Bộ Production (Production Deployment Drift)
- **Hiện tượng**: Trên trang Live `https://portfolio.duyhiendigi.com/`, Mobile 375px bị tràn ngang **+271px** (`scrollWidth = 646px`) và Mobile 414px bị tràn ngang **+232px** (`scrollWidth = 646px`).
- **Nguyên nhân**:
  1. Thẻ `.nav-actions-box` trên Live chưa nhận quy tắc ẩn các nút phụ trên mobile (`.nav-link-text, .nav-btn-contact { display: none !important; }`).
  2. Khối bài Fanned Deck (`.fanned-deck-container`) trên Live chưa có thuộc tính `overflow-x: auto; scroll-snap-type: x mandatory;`, khiến các thẻ bài xoay góc 3D bung ra ngoài màn hình tới tọa độ `right = 610px`.
  3. Padding của `.case-study-item` trên Live chưa được giảm xuống `24px 16px !important`.
- **Đánh giá**: Codebase Local đã sửa hoàn chỉnh 100% các lỗi này. Đây là lỗi do **chưa upload đồng bộ file `portfolio_assets/style.css` lên hosting production qua FTP**.

### Phát Hiện 2 [MỨC ĐỘ: TRUNG BÌNH] — Hiện Tượng Cắt Cụt Thẻ Video Trong Modal Trên Tablet & Desktop (Hidden Grid Item Clipping)
- **Hiện tượng**: Khi mở Case Study Modal cho các dự án có nhúng Video YouTube (`luclam` và `lath`):
  - Trên Tablet 768px: Cột video thứ hai bị cắt mất **247px - 320px** bề ngang.
  - Trên Desktop 1440px: Cột video thứ hai bị cắt mất **87px - 160px** bề ngang.
- **Cơ chế lỗi**:
  - Tại `portfolio_assets/style.css:3717`: `.modal-video-list { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }`.
  - Trong CSS Grid, `1fr` có giá trị ngầm định là `minmax(auto, 1fr)`.
  - Các thẻ `.modal-video-item` chứa tiêu đề dài tiếng Việt và `white-space: nowrap` nên bề rộng tối thiểu nội tại (`min-content`) đạt tới ~484px.
  - Hai cột cộng lại cần tối thiểu 1016px, trong khi modal card chỉ rộng 880px (trên Desktop) và 716px (trên Tablet).
  - Vì container cha `.modal-video-box` có `overflow: hidden` (dòng 3688), trang web không bị lỗi tràn ngang ở cấp độ `document`, nhưng nội dung thẻ video bên phải bị cắt cụt một phần ra ngoài tầm nhìn của người dùng.
- **Phương án khắc phục đã được kiểm chứng bằng thực nghiệm**:
  Thêm `min-width: 0;` cho `.modal-video-item` và đổi lưới thành `repeat(2, minmax(0, 1fr))` trong `portfolio_assets/style.css:3717`:
  ```css
  .modal-video-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }
  .modal-video-item {
    min-width: 0;
  }
  ```
  *Kết quả thử nghiệm thực tế với đoạn style trên: Mức độ cắt cụt (clippedAmount) giảm ngay lập tức từ 320px về 0px trên Tablet và Desktop.*

### Phát Hiện 3 [MỨC ĐỘ: THẤP] — Tràn Ngang Tại Kích Thước Cực Nhỏ 320px (Ultra-Small 320px Edge Case)
- **Hiện tượng**: Tại kích thước 320px (iPhone SE thế hệ 1, màn hình < 360px), trang xuất hiện thanh cuộn ngang +52px (`scrollWidth = 372px`).
- **Nguyên nhân**: Lưới năng lực cốt lõi `.capabilities-grid` tại `portfolio_assets/style.css:3004` giữ nguyên `grid-template-columns: repeat(2, 1fr)` từ breakpoint 1100px trở xuống và chưa có breakpoint riêng cho màn hình nhỏ hơn 480px.
- **Khuyến nghị**: Bổ sung `@media (max-width: 480px) { .capabilities-grid { grid-template-columns: 1fr; } }` để hoàn thiện trải nghiệm trên cả các thiết bị màn hình siêu nhỏ cổ điển.

---

## 5. Kết Luận & Phán Quyết

1. **Phán Quyết Nghiệm Thu**: **APPROVE**
   Codebase local của dự án (`index.html` và `portfolio_assets/style.css`) đã đáp ứng trọn vẹn và hoàn hảo mọi yêu cầu kiểm thử responsive:
   - Đạt độ tràn ngang 0px (`scrollWidth <= clientWidth`) trên toàn bộ 5 breakpoint quy chuẩn: Mobile Small 375px, Mobile Large 414px, Tablet 768px, Desktop Standard 1440px, Desktop Wide 1920px.
   - Các khối giao diện trọng điểm `.case-split-grid`, `.pipeline-5step-grid`, và `.before-after-matrix` tự động chuyển đổi cấu trúc linh hoạt, xếp chồng 1 cột mượt mà, không gián đoạn giao diện.
2. **Hành động đề xuất cho nhóm triển khai**:
   - Upload ngay file `portfolio_assets/style.css` phiên bản local hiện tại lên FTP hosting production để đồng bộ hóa và xóa bỏ lỗi tràn ngang +271px trên Live.
   - Áp dụng bản vá `minmax(0, 1fr)` và `min-width: 0` cho `.modal-video-list` để các thẻ video trong Case Study Modal hiển thị trọn vẹn 100% trên Tablet và Desktop.
