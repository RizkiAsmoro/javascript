/*
- With Statement digunakan untuk menurunkan scope data
- Dapat digunakan untuk mengakses property tanpa menyebut datanya atau objectnya
*/

const name ={
    firstName   : "Rizki",
    middleName  : "Wilianto",
    lastName    : "Asmoro"
};

with(name){
    console.info(firstName);
    console.info(middleName);
    console.info(lastName);
}

/* With Statement tidak direkomendasikan untuk digunakan 
karena dapat membuat ambigu jika terdapat property yang sama
*/

//jika tidak menggunakan with statement maka mengakses object nya sepert berikut

console.info(name.firstName);
console.info(name.middleName);
console.info(name.lastName);
// jika objectnya banyak maka akan menjadi tidak efektif tanpa menggunakan with statement