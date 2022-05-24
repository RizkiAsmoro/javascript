/*
Default Parameter
- Ketika parameter tidak diberi data/default value maka secara otomatis patameter bisa diisi default value
*/

function donatur (alamat, nama = "Hamba ALLAH SWT"){
    console.log(alamat);
    console.log(nama);
} 
donatur("Jakarta");