/*
Optional Chaining:
- Optional Chaining Operator (?) digunakan untuk mengamankan ketika ingin mengakses proprty sebuah data nullish
- Jika mencoba akses property dari sebuah object dari nullish tanpa menggunakan optional chaining maka hasilnya error
*/


const x= {
    a: {
        b: "Data B"
    }
};
let y;

// pengecekan menggunakan IF
document.writeln(`<p>------Pengecekan IF------</p>`)
if (x.a !== undefined && x.b !== null){
    y = x.a.b;
}
document.writeln("Data Success");
document.writeln(`<p>${y}</p>`)

// pengecekan menggunakan Optional Chaining
document.writeln(`<p>------Pengecekan Optional Chaining------</p>`)
let z = x?.a?.b;
document.writeln("Data Success");
document.writeln(`<p>${z}</p>`)

/*
- Dari kedua pengecekan diatas maka Optional Chaining lebih efektif dalam penulisan codingnya
 */