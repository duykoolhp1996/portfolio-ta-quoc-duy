# Original User Request

## 2026-10-16T17:44:14Z

Kiểm tra, rà soát và đánh giá toàn diện website Portfolio Tạ Quốc Duy (Marketing Manager | Growth & MarTech) trên cả codebase thực tế tại local và website production (https://portfolio.duyhiendigi.com/) dưới góc nhìn đa chiều của Hội đồng tuyển dụng cấp cao (CEO/BOD) và Chuyên gia kỹ thuật web.

Working directory: /Users/Admin/Documents/Tạ Quốc Duy Portolio
Integrity mode: development

## Requirements

### R1. Kiểm Tra Kỹ Thuật & Hiệu Năng Mã Nguồn (Technical & Performance Audit)
Đánh giá tính hợp lệ và sạch đẹp của mã nguồn (HTML5, CSS3, Vanilla JavaScript), kiểm tra 0 lỗi cú pháp và console runtime errors, kiểm tra độ tương thích responsive trên 3 kích thước màn hình (Desktop 1920px/1440px, Tablet 768px, Mobile 375px/414px), kiểm tra tính toàn vẹn của tất cả các liên kết (anchor links, file links `file:///...`, external links), và thẩm định hệ thống SEO kỹ thuật gồm `robots.txt`, `sitemap.xml`, Canonical URL và Schema.org JSON-LD (`Person` & `ProfilePage`).

### R2. Kiểm Định Toàn Diện Trải Nghiệm & Tính Năng Tương Tác (Functional & UX/UI Audit)
Kiểm thử trực tiếp toàn bộ các tương tác trên giao diện:
1. Thanh lọc 6 danh mục dự án (`.case-studies-filter-wrap`): lọc mượt mà theo `data-tags` (`strategy`, `performance`, `brand`, `leadership`, `data`, `martech`), không gián đoạn layout.
2. Case Study Modal 9 phần: mở đúng dữ liệu cho cả 6 dự án lớn, hiển thị đầy đủ khối Đo lường Trước — Sau (`modalMeasurementSec`) và Bài học kinh nghiệm chiến lược (`modalLearningsSec`).
3. Khung trình chiếu nhúng Canva Keynote Ottocast P3 (16:9) và hệ thống phát Video TVC / YouTube.
4. Form liên hệ: kiểm thử các kịch bản nhập liệu (họ tên trống, email sai định dạng, gửi thành công) để xác nhận hiển thị thông báo trạng thái tại chỗ (`#contactFormStatus`) mà không dùng `alert()` chặn trình duyệt.

### R3. Thẩm Định Định Vị Lãnh Đạo & Hồ Sơ Năng Lực (Executive & Leadership Positioning Review)
Rà soát và đánh giá nội dung từ góc nhìn của Ban Giám Đốc (CEO / CMO / Hiring Director):
1. Tính nhất quán của định vị cá nhân: *TẠ QUỐC DUY — MARKETING MANAGER | GROWTH & MARTECH*.
2. Độ xác thực và logic của các con số kinh doanh định lượng (8+ năm kinh nghiệm, ngân sách ads 700M VNĐ/tháng, 130+ video/tháng, 10 nhân sự 2 teams, 40 tỷ doanh thu).
3. Section `#leadership` (Lãnh Đạo Đội Ngũ & Thực Thi Chiến Lược): kiểm tra 6 khối năng lực quản trị P&L, SOP, liên kết Sales và báo cáo BOD.
4. Section `#martech`: tính thực chiến của các hệ thống tự động hóa AI, n8n, CRM webhook và Dashboard đa kênh.

### R4. Báo Cáo Đánh Giá Tổng Hợp & Đề Xuất Tinh Chỉnh (Comprehensive Assessment & Action Plan)
Xây dựng một Báo cáo Thẩm định Độc lập (Independent Evaluation Report) với bảng điểm định lượng (thang điểm 100) phân bổ theo 3 trụ cột:
- Kỹ thuật & Hiệu năng: 30 điểm
- Trải nghiệm UX/UI & Tương tác: 30 điểm
- Định vị Lãnh đạo & Năng lực thuyết phục tuyển dụng: 40 điểm
Đồng thời chỉ ra các điểm xuất sắc nhất (Key Strengths) và danh sách khuyến nghị tối ưu (nếu có) trước khi ứng tuyển các vị trí quản lý cấp cao.

## Acceptance Criteria

### Technical & Functional Integrity
- [ ] Mã nguồn JavaScript không có bất kỳ cú pháp lỗi nào (`node -c` trả về exit 0).
- [ ] Toàn bộ liên kết nội bộ, modal, bộ lọc 6 tiêu chí hoạt động mượt mà, không giật lag.
- [ ] Giao diện hiển thị chuẩn xác, không vỡ layout trên desktop, tablet và mobile.
- [ ] Form liên hệ có thông báo phản hồi tại chỗ (in-place UI alert), ngăn chặn spam và email sai định dạng.
- [ ] File `robots.txt` và `sitemap.xml` truy cập hợp lệ trên production (`https://portfolio.duyhiendigi.com/`).

### Executive Review & Deliverables
- [ ] Báo cáo thẩm định chi tiết được lập thành tài liệu Markdown hoàn chỉnh, có bảng điểm, nhận xét định tính và phân tích SWOT.
- [ ] Các bằng chứng cụ thể cho từng tiêu chí đánh giá được trích dẫn trực tiếp từ mã nguồn và trang web thực tế.
