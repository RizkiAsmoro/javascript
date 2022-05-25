/*
Function as Variable
- Tidak hanya sebuah kode program yang kita eksekusi tapi bisa juga sebagai Value
- Jadi function bisa kita simpan sebagai variable, bisa juga dikirim ke function lainnya
*/

function perkalian(a,b){
    kali = a * b
    document.writeln(`<p>Hasil perkalian ${kali}</p>`)
}
perkalian(10,5);
const var_1 = perkalian; // function perkalian dijadikan variable var_1
var_1(5,4);

// function dapat dikirim ke parameter seperti di bawah ini

