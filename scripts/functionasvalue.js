/*
Function as Variable
- Tidak hanya sebuah kode program yang kita eksekusi tapi bisa juga sebagai Value
- Jadi function bisa kita simpan sebagai variable, bisa juga dikirim ke function lainnya
*/

function sayHello(name){
    document.writeln(`<p>Hello ${name}</p>`)
}
sayHello("Rizki");
const var_1 = sayHello; // function sayHello dijadikan variable var_1
var_1("Asmoro");//parameter var_1

// function dapat dikirim ke parameter seperti di bawah ini
function sayHi(callback){
    callback("Wilianto");
}
sayHi(sayHello);
sayHi(var_1);