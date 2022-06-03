/*
Object Method:
- Karena function juga merupakan satu tipe data maka function pun bisa ditambahkan sebagai property di object
- Cara membuatnya sama seperti function sebagai value
- Function didalam properti suatu object
*/

const person = {
    name: "Rizki",
    sayHi: function(name){
        console.info(`Hi ${name}`);
    }
};

person.sayHi("Asmoro")