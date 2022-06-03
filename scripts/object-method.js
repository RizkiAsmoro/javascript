/*
Object Method:
- Karena function juga merupakan satu tipe data maka function pun bisa ditambahkan sebagai property di object
- Cara membuatnya sama seperti function sebagai value
- Function didalam properti suatu object
*/

//Contoh 1
const person = {
    name: "Rizki",
    sayHi: function(name){
        console.info(`Hi ${name}`);
    }
};

person.sayHi("Asmoro")

// Contoh 2
const student = {
    name1: "Alkha"
};
student.sayHallo = function (name1){
    console.info(`Hallo ${name1}`);
}
student.sayHallo("Maezurra");
