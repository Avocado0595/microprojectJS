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
        id: keys[0], name: keys[1], yearOfBirth: parseInt(keys[2]), address: keys[3], mark: parseFloat(keys[4].trim())
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
    let stop = true;
    let id;
    do{
        stop = true;
        id = input('Nhap id: ');
        for(let student of studentList){
            if (student.id === id){
                stop=false;
                console.log('id trung, vui long nhap lai');
                break;
            }
        }
        
    } while(!stop);
    let name = input('Nhap ten: ');
    let yearOfBirth = input('Nhap nam sinh: ');
    let address = input('Nhap dia chi: ');
    let mark = input('Nhap diem: ');
    return {id, name, yearOfBirth: parseInt(yearOfBirth), address, mark:parseFloat(mark)};
}

function addStudent(studentList,student){
    //add 1 object student vào studentList
    studentList.push(student);
}
function showStudentList(studentList){
    //hiển thị toàn bộ danh sách
    console.table(studentList);
}
function findStudentById(studentList, id){
    //tìm student bằng student.id
    for(let i=0; i<studentList.length;i++){
        if (studentList[i].id === id){
            return i;
        }
    }
    return -1;
}
function findStudentByKeyword(studentList, keyword){
    //tìm student bằng từ khóa
    let result = [];
    for(let student of studentList){
        
        if(student.name.includes(keyword)){
            result.push(student);
        }
    }
    return result;
}
function deleteStudent(studentList,id){
    //xóa 1 student bằng student.id
    const idxDelStudent = findStudentById(studentList,id);
    if(idxDelStudent !== -1){
        studentList.splice(idxDelStudent,1);
    }
    else{
        console.log('Id sinh vien khong ton tai');
    }
}
function updateStudent(studentList,id){
    //update 1 student bằng student.id
    const idxStudent = findStudentById(studentList,id);
    if(idxStudent!==-1){
        console.log('Cap nhat thong tin');
        let name = input('Nhap ten: ');
        let yearOfBirth = input('Nhap nam sinh: ');
        let address = input('Nhap dia chi: ');
        let mark = input('Nhap diem: ');
        studentList[idxStudent] = {id:studentList[idxStudent].id, name, yearOfBirth : parseInt(yearOfBirth), address,mark:parseFloat(mark)};
    }
    else{
        console.log('Id sinh vien khong ton tai');
    }
}
function sortByMark(studentList){
    const cloneStudentList = [...studentList];
    for(let i=0; i<cloneStudentList.length;i++){
        for(let j=i+1; j<cloneStudentList.length; j++){
            if(cloneStudentList[i].mark < cloneStudentList[j].mark){
                let temp = cloneStudentList[i];
                cloneStudentList[i] = cloneStudentList[j];
                cloneStudentList[j] = temp;
            }
        }
    }
    showStudentList(cloneStudentList);
}
function filterByAddress(studentList, address){
    let result = [];
    for(let student of studentList){
        if(student.address === address){
            result.push(student);
        }
    }
    return result;
}
function menu(){
    console.log(`
    Chon chuc nang:
    1. Hien thi danh sach
    2. Them sinh vien
    3. Cap nhat thong tin sinh vien
    4. Xoa sinh vien
    5. Tim kiem theo id
    6. Tim kiem theo ten
    7. Sap xep theo diem giam dan
    8. Loc sinh vien theo dia chi
    0. Thoat`)
}
function main(){
   //gọi các hàm chức năng tương ứng vào hàm main
   //tạo menu lựa chọn bằng switch-case
   const studentList=[];
    stringToList(studentList);
    while(true){
        menu();
        let option = input('Chon chuc nang: ');
        switch(option){
            case '1':{
                showStudentList(studentList);
                break;
            };
            case '2': {
                console.log('nhap thong tinh sinh vien moi');
                let newStudent = inputStudent(studentList);
                addStudent(studentList,newStudent);
                writeFile(studentList);
                break;
            };
            case '3':{
                let id = input('Nhap id sinh vien can cap nhat: ');
                updateStudent(studentList,id);
                writeFile(studentList);
                break;
            };
            case '4':{
                let id = input('Nhap id sinh vien can xoa: ');
                deleteStudent(studentList,id);
                writeFile(studentList);
                break;
            };
            case '5':{
                let id = input('Nhap id sinh vien can tìm: ');
                let result = findStudentById(studentList,id);
                if(result!==-1)
                {
                    console.log('Ket qua tim kiem:')
                    console.table(studentList[result]);
                }
                else{
                    console.log('Khong tim thay!')
                }
                break;
            };
            case '6':{
                let keyword = input('Nhap tu khoa can tìm: ');
                let result = findStudentByKeyword(studentList,keyword);
                if(result.length>0)
                {
                    console.log('Ket qua tim kiem:')
                    console.table(result);
                }
                else{
                    console.log('Khong tim thay!')
                }
                break;
            };
            case '7':{
                sortByMark(studentList);
                break;
            };
            case '8':{
                let add = input('Nhap dia chi can loc: ');
                let result = filterByAddress(studentList, add);
                if(result.length>0){
                    console.table(result);
                }
                else{
                    console.log("Khong tim thay!");
                }
                break;
            };
            case '0':
                return;
            default:
                console.log('Lua chon khong hop le! Moi chon lai!');
        }
    }
}
main();