# 🎬 Hướng dẫn Sử dụng Công cụ Tạo Video & Hình ảnh Vilao.ai (🐱 Xu Xu)

Hệ thống tích hợp tạo Video và Hình ảnh thông qua API Vilao (`https://api.vilao.ai/v1`) được thiết lập và quản lý tự động bởi **🐱 Xu Xu**.

---

## 🔑 Thông tin Cấu hình & API Keys

- **Endpoint**: `https://api.vilao.ai/v1`
- **Video API Key**: `sk-5e61f3bc64ce09f375769c5879386c480cd0bb4673e53ed895f65dd6724726ca`
- **Image API Key**: `sk-8584e7ca8d67346a606e91e728f4597be74006458ea7252fabef7580b4ea94b2`
- **Thư mục lưu trữ media tự động**: `ai_media_tools/outputs/`

---

## 📋 Danh sách Models & Báo giá

### 1. Model Video (Video Generation)
| Model ID | Giá / Lượt tạo | Thời lượng (giây) | Tỷ lệ khung hình |
| :--- | :--- | :--- | :--- |
| `seedance-2.5` *(Khuyên dùng)* | 1,333 đ | 5s, 6s, 8s, 10s, 15s | `16:9`, `9:16`, `1:1` |
| `grok-imagine-video-1.5` | 100 đ | 8s, 15s | `auto` |

### 2. Model Hình ảnh (Image Generation & Editing)
| Model ID | Giá / Lượt tạo | Kích thước hỗ trợ | Hỗ trợ Edit |
| :--- | :--- | :--- | :--- |
| `gpt-image-2.5-flare` | 450 đ | `auto`, `1792x1024`, `1024x1792` | Có |
| `gpt-image-2.5-sunburst` | 700 đ | `auto`, `1792x1024`, `1024x1792` | Có |
| `gpt-image-2` | 500 đ | `auto`, `1792x1024`, `1024x1792` | Có |
| `grok-imagine-image` *(Siêu nhanh/rẻ)* | 40 đ | `auto` | Không (có Vision) |

---

## 💻 Cách Chạy Lệnh CLI

Đứng tại thư mục dự án:
```bash
cd "/Users/Admin/Documents/Tạ Quốc Duy Portolio"
```

### 1. Kiểm tra số dư tài khoản
```bash
./ai_media_tools/vilao_client.py balance
```

### 2. Xem danh sách model khả dụng
```bash
./ai_media_tools/vilao_client.py models
```

### 3. Tạo hình ảnh (Image)
```bash
./ai_media_tools/vilao_client.py image --prompt "Chân dung một nữ doanh nhân hiện đại, ánh sáng cinematic" --model gpt-image-2.5-flare --size 1792x1024
```
*(Ảnh sẽ tự động tải về thư mục `ai_media_tools/outputs/`)*

### 4. Tạo video (Video)
```bash
./ai_media_tools/vilao_client.py video --prompt "Drone bay qua bãi biển hoàng hôn nhiệt đới sóng vỗ rì rào, 4k cinematic" --model seedance-2.5 --seconds 5 --size 16:9
```
*(Tiến trình render sẽ hiển thị theo thời gian thực và tự động lưu video định dạng `.mp4` khi hoàn thành)*

### 5. Kiểm tra hoặc tải lại video job cũ
```bash
./ai_media_tools/vilao_client.py check-video --job-id <JOB_ID> --model seedance-2.5
```
