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
