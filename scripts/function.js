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
function perkalianDuaNilai(x,y,z){//membuat function
    z = x * y
    document.writeln(`${x} x ${y} = ${z}`);
};
perkalianDuaNilai (x= 10,y= 5)//memanggil function
