/*
Masalah yang timbul jika menggunakan kata kunci VAR
dalam deklarasi variable adalah karena VAR tidak mengikat 
atau tidak mengenal scope
*/

//Contoh berikut jika menggunakan var
var x = 100;

for (var x = 0; x < 5; x++) {
    console.info(`Local ${x}`)
}
console.info(`Global ${x}`)//var merubah nilai global

//Contoh menggunakan let
var z = 100;
for (let z = 0; z < 5; z++) {
    console.info(`Local ${z}`)
}
console.info(`Global ${z}`)