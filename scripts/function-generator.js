/*
Function Generator :
- Adalah function yang digunakan untuk membuat data generator
- Tempat untuk me-generate data(interator)
- Datanya bisa diiterasi seperti array
- Menggunakan tanda * setelah kata function
- Untuk mengembalikan data setiap iterasinya maka menggunakan kata kunci yield
- Data dalam generator tidak dapat diakses secara index, beda seperti array
*/

// Contoh 1
function* createNames(){
    yield "Rizki";
    yield "Wilianto";
    yield "Asmoro";
}
const names = createNames();
for (const x of names) {
    console.info(x); 
}

// Contoh 2
function* oddNumbers(value){
    debugger;
    for (let i = 0; i <= value; i++) {
    if (i % 2 === 1) {
        yield i;
    }
    }
}
const numbers = oddNumbers(20);
for (const x of numbers) {
    console.info(x);
    
}