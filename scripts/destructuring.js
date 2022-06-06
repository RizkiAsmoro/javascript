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
{
const name = ["Rizki", "Wilianto", "Asmoro", "Alkhaleena", "Maezurra"];
const [firstName, middleName, lastName, ...others] = name;

console.info(firstName);
console.info(middleName);
console.info(lastName);
console.info(others);//sisanya akan dijadikan array
}

// Destructuring Object and nested
{
const student = {
    sName : "Jaka",
    sGender: "Male",
    sAddress : {
        //nested
        street : "Setiabudi",
        city: "Jakarta",
        country: "Indonesia"
    },
    hobby: "football",
    clubFav: "AC Milan"
};

let {sName, sGender,sAddress:{street, city, country}, ...sOthers} = student; // desctructuring object nested
console.info(sName);
console.info(sGender); 
console.info(street); 
console.info(city);
console.info(country); 
console.info(sOthers);
}


//Destructuring Function Parameter
{
    function desParameter ({firstName, middleName,lastName}){
        console.info(firstName);
        console.info(middleName);
        console.info(lastName);
    }
    const name = {
        firstName : "Alkhaleena",
        middleName : "Maezurra",
        lastName : "Asmoro",
    };
    desParameter(name);
}

//Destructuring function array
{
    function sum([x, y]){
        return x + y;
    }
    console.info(sum([10,11]));
    console.info(sum([20,22]));
}