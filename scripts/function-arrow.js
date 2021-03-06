/*
Arrorw Function :
- Adalah alternatif pembuatan function yang lebih sederhana daripada function biasa
- Menggunakan tanda => (seperti anaka panah)
- Mirip seperti anonymous function yaitu dibuat di dalam variable / di dalam parameter
*/

//Contoh ke 1 menggunakan block function {}
const sayHello  = (name) =>{
const say = `Hello ${name}, This is arrow function using block`;
    document.writeln(`<p>${say}</p>`);
}
sayHello("Rizki")

// Contoh  ke 2 tanpa block jika : function sederhana hanya 1 baris
const sayHi = (name2) => document.writeln(`<p>Hi ${name2} This is arrow function without block</p>`);
sayHi("Asmoro");

//Contoh ke 3 tanpa block function
const sum = (a, b) => a + b;
document.writeln(sum(10,20));


//Contoh ke 4 tanpa kurung parameter / parameter hanya 1
const sayName = myname => document.writeln(`<p>${myname}</p>`);
sayName("Alkha");

//Contoh ke 5, Arrow Function sebagai parameter seperti anonymous function
function callMyName(call){
    call("Maezurra");
}
callMyName(myName => document.writeln(`<p>${myName}</p>`))
