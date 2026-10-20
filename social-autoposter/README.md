# 🐱 Omni Social Auto-Poster (Web App 24/7)

Ứng dụng Web tự động đăng bài lên **Facebook Groups** và **toàn bộ hệ sinh thái Social Media** (Threads, Instagram, X/Twitter, LinkedIn, YouTube, TikTok) dành cho cá nhân, tích hợp bộ lập lịch chạy nền 24/7 và cơ chế chống Checkpoint thông minh.

---

## 🌟 Tính năng nổi bật

1. **Trình soạn thảo đa kênh (Multi-Platform Composer)**:
   - Soạn bài viết 1 lần, đính kèm nhiều ảnh/video.
   - Tự chọn đăng tới bất kỳ kênh nào trong 7 nền tảng: `FB Groups`, `Threads`, `𝕏`, `LinkedIn`, `Instagram`, `YouTube`, `TikTok`.
2. **Trợ lý AI Re-format (AI Format Assistant)**:
   - 1 cú click tự động tối ưu văn phong cho từng kênh:
     - **𝕏 (Twitter)**: Rút ngắn cô đọng dưới 280 ký tự.
     - **Threads**: Giọng văn trò chuyện gần gũi, mở rộng tương tác.
     - **LinkedIn**: Cấu trúc bài học kinh nghiệm, chuyên nghiệp.
     - **Instagram**: Caption hấp dẫn + bộ hashtag thịnh hành.
3. **Cơ chế Đăng bài vào Facebook Groups (Bypass Meta Group API)**:
   - Dùng **Playwright Browser Automation** mô phỏng người dùng thật.
   - Hỗ trợ đăng nhập tự động 1 lần qua Chrome hoặc dán Cookie `c_user; xs`.
   - Giãn cách ngẫu nhiên (Random Delay 3–5 phút) giữa các group chống checkpoint/khóa tài khoản.
4. **Hệ thống Lập lịch 24/7 (Scheduler Engine)**:
   - Đặt lịch ngày/giờ chính xác. Máy chủ ngầm liên tục quét và kích hoạt đăng bài tự động ngay cả khi bạn tắt trình duyệt hoặc đi ngủ.
   - Lưu trữ lịch sử đăng bài và link bài viết sau khi xuất bản.
5. **Giao diện Web Hiện đại**:
   - Giao diện Dark theme tinh tế, trực quan, hỗ trợ tốt cả trên trình duyệt máy tính và điện thoại di động.

---

## 🚀 Hướng dẫn khởi động nhanh

Chỉ cần chạy 1 lệnh duy nhất tại thư mục `social-autoposter`:

```bash
python3 start.py
```

Sau đó mở trình duyệt và truy cập:
👉 **`http://localhost:8000`**

---

## 🔑 Hướng dẫn Kết nối các Mạng Xã hội

### 1. Facebook Groups
- **Cách 1 (Khuyên dùng trên máy tính)**: Bấm nút **"Đăng nhập FB (Mở Chrome)"** trên giao diện Web. Một cửa sổ Chrome sẽ mở ra, bạn chỉ cần đăng nhập tài khoản Facebook bình thường. Khi phát hiện đăng nhập thành công, hệ thống sẽ tự động lưu lại phiên làm việc (Session Storage).
- **Cách 2 (Dành cho VPS hoặc dán thủ công)**: Bấm nút **"Nhập Cookie"**, dán chuỗi cookie (chứa `c_user=...; xs=...`) từ tiện ích trình duyệt (như J2TEAM Cookies, EditThisCookie).

### 2. X (Twitter)
- Vào [developer.x.com](https://developer.x.com/) tạo Free Developer Project.
- Lấy 4 thông số: `API Key`, `API Secret`, `Access Token`, `Access Token Secret`.
- Dán vào mục **Cài đặt & API** trên giao diện Web.

### 3. Threads
- Meta đã phát hành Threads API chính thức tại [developers.facebook.com](https://developers.facebook.com/).
- Cấp quyền `threads_basic`, `threads_content_publish`.
- Điền `Threads User ID` và `Threads Access Token`.

### 4. LinkedIn
- Tạo ứng dụng tại [developer.linkedin.com](https://developer.linkedin.com/).
- Bật sản phẩm "Share on LinkedIn" và "Sign In with LinkedIn".
- Điền `LinkedIn Access Token` và `Person URN` (dạng `urn:li:person:XXXXXX`).

### 5. Instagram Business
- Yêu cầu: Tài khoản Instagram Creator hoặc Business liên kết với Fanpage Facebook.
- Sử dụng Meta Graph API `Instagram Content Publishing`.
- Điền `Instagram Account ID` và `Page Access Token`.

---

## ⏰ Hướng dẫn Treo Server 24/7

### Trên macOS / Linux cá nhân (Dùng PM2)
Nếu muốn server tự khởi động cùng máy tính và chạy ngầm 24/7 không cần mở Terminal:

```bash
# Cài đặt PM2 (nếu chưa có)
npm install -g pm2

# Khởi chạy server ngầm
pm2 start "python3 start.py" --name "social-autoposter"

# Thiết lập tự khởi động khi mở máy
pm2 startup
pm2 save
```

### Trên Cloud VPS (Ubuntu / Debian / Docker)
Bạn có thể copy thư mục `social-autoposter` lên VPS và chạy tương tự qua PM2 hoặc `systemd` service để server chạy 24/7/365 trên internet.
