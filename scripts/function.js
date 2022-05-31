/*
Function
- Adalah kode program yang berjalan saat kita panggil
- Cara membuatnya menggunakan kata kunci function lalu diikuti dengan nama function,
  lalu (), dan diakhiri dengan block kurung {}
- Memanggil function dengan menggunakan nama function lalu diikuti dengan kurung ()
- FUNCTION disebut juga METHOD
- Kita bisa mengirim informasi ke function yang ingin kita panggil dengan menggunakan parameter / argumen
- Parameter ditempatkan didalam kurung () di deklarasi function
- Parameter bisa lebih dari 1 dan dipisahkan dengan koma dan tidak perlu dideclare seperti let, const, atau var
*/

// Contoh penggunaan Function Parameter
function perkalianDuaNilai(x,y,z){//membuat function. Parameter ada di dalam kurung yang bisa diakses seperti variable
    z = x * y
    document.writeln(`<p>${x} x ${y} = ${z}</p>`);
};
perkalianDuaNilai (x= 10,y= 5)//memanggil function. dalam kurung adalah value parameter


//Contoh penggunaan function 
function penjumlahanDuaNilai (a, b){
    return a+b;
}
document.writeln(penjumlahanDuaNilai(10,20));