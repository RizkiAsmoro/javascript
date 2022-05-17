/*
- Optional Chaining Operator (?) digunakan untuk mengamankan ketika ingin mengakses proprty sebuah data nullish
- Jika mencoba akses property dari sebuah object dari nullish tanpa menggunakan optional chaining maka hasilnya error
*/


const student = {
    address: {
        country : "Indonesia"
    }
};
let student_1;

// pengecekan menggunakan IF
if (student.address !== undefined && student.address !== null){
    student_1 = student.address.country;
}
document.writeln("Data Success");
document.writeln(`<p>${student_1}</p>`)

// pengecekan menggunakan Optional Chaining
let student_2 = student?.address?.country;
document.writeln("Data Success");
document.writeln(`<p>${student_1}</p>`)

/*
- Dari kedua pengecekan diatas maka Optional Chaining lebih efektif dalam penulisan codingnya
 */