/*
Arrow Function pada Object Method
- Arrow Function bisa digunakan sebagai object method
- Arrow function tidak bisa digunakan untuk akses argumen obejct,
  function generator, kata kunci this dan kata kunci super
*/

//Contoh 1
const person = {
    name:"rizki",
    sayHello: (name) =>{
        console.info(this);//Window
        console.info(`Hello ${name} my name is ${this.name}`)//this tidak dapat digunakan karena this-nya mengacu pada window
        console.info(`Hello ${name}`)

    }
};
person.sayHello("Asmoro")