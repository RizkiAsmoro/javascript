/*
nullish Coalescing Operator:
- Nullist value adalah nilai null dan undefined
- Nullist coalescing operator menggunakan ??
- Jika datanya nullist value maka datanya diset akan diubah menjadi apa 
- Lebih sederhana dibandingkan mengunakan IF Operator
*/



let parameter; //jika parameter diberi nilai misal parameter = "Hallo" maka hasilnya Hallo

//Berikut contoh jika menggunakan IF
let data = parameter;
if(parameter === null || parameter === undefined){
    data = "Nilai Default";
}
document.writeln(`<p>${data}</p>`)


//Berikut contoh menggunakan nullish coalescing operator
data = parameter ?? "Nilai Default"; 
document.writeln(`<p>${data}</p>`)
