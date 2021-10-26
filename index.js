import prompt from 'prompt-sync';
import fs from 'fs';
const input = prompt();
//đọc file
function readFile(data){
    //đọc file, trả về dạng string
}
function toObjectStudent(str){
    //chuyển 1 string sang object student
}
function stringToList(studentList, data){
    //chuyển string đọc từ file thành list student
}
//ghi file
function toStringStudent({id, name, yearOfBirth, address, mark}){
    //chuyển 1 object student sang string
    // return 1 chuỗi
}
function toStringStudentList(studentList){
    //chuyển 1 list student sang string
    //return 1 chuỗi
}
function writeFile(){
    //ghi chuỗi chuyển đổi vào file
}

//hàm chức năng
function inputStudent(studentList){
    //nhập thông tin student từ console, trả về 1 object student
}
function addStudent(studentList,student){
    //add 1 object student vào studentList
}
function showStudentList(studentList){
    //hiển thị toàn bộ danh sách
}
function findStudentById(studentList, id){
    //tìm student bằng student.id
}
function findStudentByKeyword(studentList, keyword){
    //tìm student bằng từ khóa
}
function deleteStudent(studentList,id){
    //xóa 1 student bằng student.id
}
function updateStudent(studentList,id){
    //update 1 student bằng student.id
}
function menu(){
    console.log(`
        Chon chuc nang:
        1. Hien thi danh sach
        2. Tim kiem
        .....(can bo sung them)
    `)
}
function main(){
   //gọi các hàm chức năng tương ứng vào hàm main
   //tạo menu lựa chọn bằng switch-case
    
}
main();