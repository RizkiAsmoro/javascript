/*
Getter & Setter :
- adalah kemampuan membuat function yang berbeda untuk mengambil data (getter)
  dan mengubah data (setter) pada property di object
- Jadi kita bisa melakukan hal apapun dalam function 
  sebelum sebuah property dihapus/diubah, seperti melakukan validasi dll
*/


//Getter
const student = {
    firstName: "Rizki",
    lastName: "Asmoro",
    get fullName(){ //fullName menjadi property berbentuk function
        return `${this.firstName} ${this.lastName}`
    }
}
student.firstName = "Alkhaleena"
console.info(student.fullName)


//Setter
const student1 = {
    firstName1: "Jaka",
    lastName1: "Sembung",
    get fullName1(){
        return `${this.firstName1} ${this.lastName1}`;
    },
    set fullName1(value){
       const array = value.split(" ");//memisah menggunakan spasi
        this.firstName1 = array[0];
        this.lastName1 = array[1];
    }
};

student1.fullName1 = "Kembang Gula";
console.table(student1);

student1.fullName1 = "Agung Galunggung";
console.table(student1);