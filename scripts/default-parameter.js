/*
Default Parameter
- Ketika parameter tidak diberi data/default value maka secara otomatis patameter bisa diisi default value
*/

function donatur (alamat, nama = "Hamba ALLAH SWT"){
    console.log(`Nama   : ${nama}`);
    console.log(`Alamat : ${alamat}`); 
} 
donatur("Jakarta");// parameter yang diisi hanya alamat maka default parameter nama = Hamba Allah SWT
    