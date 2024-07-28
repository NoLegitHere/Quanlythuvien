
# Quản lý thư viện

Bài tập giữa kỳ nhóm 2 với đề bài sử dụng framework Angular.js và database MongoDB




## Cài đặt

Tải xuống dự án này bằng git
```bash
  git clone https://github.com/NoLegitHere/Quanlythuvien.git
```
Sau khi tải về mở Command Prompt và đổi sang thư mục
```bash
  cd Quanlythuvien
```
Sẽ thấy 2 thư mục LMS Angular và LMS Server. Trước hết hãy đổi sang thư mục LMS Angular
```bash
  cd "LMS Angular"
  ng build
```
và build trang web và di chuyển nó sang web server
Tiếp theo ta chuyển sang thư mục LMS Server
```bash
  cd "LMS Server"
  npm install
```
và chạy npm start để mở server backend để kết nối giữa web và database.
