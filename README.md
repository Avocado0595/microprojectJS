# microprojectJS
Bài tập javascript:
Viết 1 chương trình console bằng JS mô phỏng 1 chương trình quản lý sinh viên với các chức năng sau:
1. Thông tinh sinh viên gồm: Mã số, tên, quê quán, năm sinh, điểm trung bình
2. Danh sách sinh viên được đọc, ghi thông tin từ file data.txt
3. Chương trình có các chức năng: thêm, xóa, sửa
4. Chức năng tìm kiếm sinh viên theo mã số
5. Chức năng tìm kiếm sinh viên theo ký tự có trong tên: vd: search: "to" => kết quả có các sinh viên: "Tom", "Tong",... (*)
6. Chức năng sắp xếp sinh viên theo thứ tự từ điểm cao đến điểm thấp (*)
7. Chức năng lọc sinh viên theo quê quán (*)
8. Bổ sung chức năng kiểm tra xem id lúc thêm sinh viên có bị trùng hay không. Nếu trùng thì phải nhập lại. (*)
9. Chức năng đăng nhập bằng tài khoản sinh viên và tài khoản giảng viên. Tài khoản sinh viên thì chỉ xem, tìm kiếm, sắp xếp. Tài khoản giảng viên thì có thể thực hiện tất cả chức năng. (**) (chức năng có thể có hoặc không) =)))


Ghi chú:
+ mọi người có thể dùng visual studio code (cài nodejs nhé), hoặc dùng trang https://replit.com/ (trang này dùng require module nhé)
+ nếu dùng replit thì có nút package để add thư viện
+ Chạy trên máy thì dùng nodejs:
    - npm init -y để tạo 1 package.json
    - npm install prompt-sync để cài prompt-sync

Quyền trợ giúp số 1:
- dùng thư viện prompt-sync để nhập xuất trong console
- dùng thư viện fs để đọc ghi file (dùng readFileAsync, writeFileAsync)
