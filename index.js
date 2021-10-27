import prompt from 'prompt-sync';
import fs from 'fs';
const input = prompt();
//đọc file
function readFile(){
    //đọc file, trả về dạng string
    const data = fs.readFileSync('./data.txt',{encoding:'utf8'});
    return data;
}
function toObjectStudent(str){
    //chuyển 1 string sang object student
    const keys = str.split(",");
    return {
        id: keys[0], name: keys[1], yearOfBirth: keys[2], address: keys[3], mark: keys[4].trim()
    }
}
function stringToList(studentList){
    //chuyển string đọc từ file thành list student
    const data = readFile().split("\n");
    data.forEach(student => {
        if(student != '')
            studentList.push(toObjectStudent(student))
    });
}
//ghi file
function toStringStudent({id, name, yearOfBirth, address, mark}){
    //chuyển 1 object student sang string
    // return 1 chuỗi
    return `${id},${name},${yearOfBirth},${address},${mark}`;
}
function toStringStudentList(studentList){
    //chuyển 1 list student sang string
    //return 1 chuỗi
    let result = '';
    studentList.forEach(student=>result+=toStringStudent({...student})+"\n");
    return result;
}
function writeFile(studentList){
    //ghi chuỗi chuyển đổi vào file
    const data = toStringStudentList(studentList);
    fs.writeFileSync('./data.txt',data,{flag:'w+', encoding:"utf8"});
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
   const studentList=[];
    stringToList(studentList);
    writeFile(studentList);
}
main();