/*
Ternary Operator:
- Adalah operasi sederhana dari IF statement
- Terdiri dari kondisi yang dievaluasi, jika menghasilkan nilai TRUE maka nilai pertama yang diambil, 
  jika FALSE maka nilai kedua yang diambil
- Jika hanya ada dua kondisi maka lebih sederhana menggunakan ternary operator dibandingkan IF Operator
*/

// Berikut adalah contoh menggunakan Operator IF
const nilai = 89;
let x;

if (nilai >= 75){
    x = "Anda LULUS";
}else{
    x = "Anda TIDAK Lulus";
}


//Berikut contoh menggunakan Ternary Operator
x = nilai >= 75 ? "Anda LULUS" : "Anda TIDAK lulus";
document.writeln(`<p>${x}</p>`);