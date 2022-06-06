/*
Destructuring:
- Fitur yang digunakan untuk membongkar value-value dari array
  atau object ke dalam variable-variable
- Jadi dapat mempermudah mengambil data dari array atau object
  tanpa harus melakukan pengambilan data satu persatu
*/

/* Jika mengambil data satu persatu dari array
const nama = ["Rizki","Wilianto","Asmoro"];
const first = name[0];
const middle = name[1];
const last = name[2];

console.info(first);
console.info(middle);
console.info(last);
*/

//Destructuring Array
const name = ["Rizki", "Wilianto", "Asmoro", "Alkhaleena", "Maezurra"];
const [firstName, middleName, lastName, ...others] = name;

console.info(firstName);
console.info(middleName);
console.info(lastName);
console.info(others);//sisanya akan dijadikan array


// Destructuring Object
const student = {
    sName : "Jaka",
    sGender: "Male",
    sAddress : {
        street : "Setiabudi",
        city: "Jakarta",
        country: "Indonesia"
    },
    hobby: "football",
    clubFav: "AC Milan"
};

let {sName, sGender, ...sOthers} = student;
console.info(sName);
console.info(sGender); 
console.info(sOthers);