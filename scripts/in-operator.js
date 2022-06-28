/*
In Operator
- Operator untuk mengecek ada properti atau tidak pada suatu object
- Untuk cek index di array ada atau tidak
*/

const siswa = {
    nama : "Rizki",
    kelas : 17
}
if ("nama" in siswa){// true
    alert (`Hello ${siswa.nama}`);
}else {
    alert("Hello")
}

/*
NOTE:
- In Operator hanya mengecek apakah sebuah properti index ada atau tidak, jadi tidak mengecek value nya
- walaupun nilai propertinya undefine atau null maka dianggap ada
*/

const karyawan = {
    nama : "Asmoro",
    umur : undefined
}
if ("umur" in karyawan){
    alert(`Hello ${karyawan.umur}`);
}else{
    alert("Hello")
}

//selama index nya ada maka hasilnya akan true
const nama = [null, "rizki", "Asmoro"];
const result = 0 in nama;
document.writeln(`${result}`)
