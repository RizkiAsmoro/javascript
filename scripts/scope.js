/*
Scope (Global dan local)
- Scope adalah area akses sebuah data
- Setiap kita membuat funtion maka kita membuat scope untuk function tersebut
- Data di global scope bisa diakses di lokal scope 
- Data di local scope hanya bisa diakses di local scope tersebut atau di scope local dibawahnya
*/

// Contoh mengakses global scope
const x = 2// global scope variable
function kali (y){//local scope kali
    hasil_kali = y * x; 
    //document.writeln(`<p>Hasil perkalian ${hasil_kali}</p>`);// akses local scopeS
}
function bagi (z){//local scope bagi
    hasil_bagi = z / x;
}
kali(7);//mengakses global scope
bagi(20);//mengakses global scope
document.writeln(`<p>Hasil pembagian ${hasil_bagi}</p>`);//mengakses global scope
document.writeln(`<p>Hasil perkalian ${hasil_kali}</p>`);//mengakses global scope


// Nested Function Scope 
function first(){
    let firstVariable = "Hallo";
    function firstNest(){//Nested
        const nestedVariable = "Variable nested"
        document.writeln(`<p>${firstVariable}</p>`)//mengakses scope yang diatasnya
    }
    firstNest();

    console.info(nestedVariable)//Error : nestedVariable is not defined karena kita tidak bisa akses variable nestedVariable dari global
}
first();