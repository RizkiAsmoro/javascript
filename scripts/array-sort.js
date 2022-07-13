/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sort Array:
- Secara default jika menggunakan method sort() maka array akan diurutkan secara ascending
*/

let numbers = [5,4,7,9,2,8,3,1,6,0];
numbers.sort()
console.info(`${numbers}`)

let name = ["Jaka","Kaka","Alex","Beckham"];
name.sort();
console.info(`${name}`)

// Jika array angka berupa string maka akan diurutkan berdasarkan character pertaman sesuai unicode

let angka = ["40","9","30","80"];
angka.sort();
console.info(`${angka}`); //30,40,80,9