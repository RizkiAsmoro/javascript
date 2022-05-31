/*
Function Generator :
- Adalah function yang digunakan untuk membuat data generator
- Tempat untuk me-generate data(interator)
- Datanya bisa diiterasi seperti array
- Menggunakan tanda * setelah kata function
- Untuk mengembalikan data setiap iterasinya maka menggunakan kata kunci yield
*/

function* createNames(){
    yield "Rizki";
    yield "Wilianto";
    yield "Asmoro";
}
console.info(createNames())