/*
Scope (Global dan local)
- Scope adalah area akses sebuah data
- Setiap kita membuat funtion maka kita membuat scope untuk function tersebut
- Data di global scope bisa diakses di lokal scope 
- Data di local scope hanya bisa diakses di local scope tersebut atau di scope local dibawahnya
*/

const x = 2// global scope variable
function kali (y){//local scope kali
    hasil_kali = y * x;
    document.writeln(`<p>Hasil perkalian ${hasil_kali}</p>`);
}
function bagi (z){//local scope bagi
    hasil_bagi = z / x;
    document.writeln(`<p>Hasil pembagian ${hasil_bagi}</p>`);
}
kali(7);
bagi(20);