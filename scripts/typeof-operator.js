/*
- Operator yang bisa digunakan untuk melihat tipe data sebuah value atau variable Karena JavaScript merupakan dynamic language 
- Hasil dari operator typeof adalah string
Misal :
Undefine = "Undefine"
Null     = "object"
Boolean  = "boolean"
Number   = "number"
BitInt   = "biginit"
String   = "string"
Symbol   = "string"
Symbol   = "symbol"
Function = "function"
Lainya   = "object"
*/
let data; // maka hasilnya akan undefine
const typeData = typeof data;
document.writeln(`<p>${typeData}</p>`);

let data2 = 100; // hasilnya number
const typeData2 = typeof data2;
document.writeln(`<p>${typeData2}<p>`);

let data3 = "DATA"; // hasilnya string
const typeData3 = typeof data3;
document.writeln(`<p>${typeData3}<p>`);

let data4 = []; // hasilnya object
const typeData4 = typeof data4;
document.writeln(`<p>${typeData4}<p>`);

let data5 = true; // hasilnya object
const typeData5 = typeof data5;
document.writeln(`<p>${typeData5}<p>`);





