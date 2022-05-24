/*
Optional Parameter:
- Secara default, paramter di function itu optional / tidak wajib diisi
- Jika parameter tidak diisi maka nilainya undefined
*/

function value(value1, value2, value3){
    console.log(value1)
    console.log(value2)
    console.log(value3)
}
value(10,11)//nilai yang muncul 10,11,undefined
//jika nilai yang diisi kelebihan makan tidak ditampilkan