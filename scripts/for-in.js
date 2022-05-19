/*
- For in digunakan untuk mengiterasi seluruh data property di object atau index di array
- Walaupun bisa digunakan untuk ARRAY tapi tidak direkomendasikan
*/

const student = {
    name    : "Jaka",
    age     : 17,
    gender  : "Male"
};
for(const property in student){//untuk melakukan perulangan pada semua properti di atas (name, age, gender)
    document.writeln(`<p>${property} : ${student[property]}</p>`) // mengakses property terhadap sebuah object 
}

//Contoh pada array
const name = ["Rizki", "Wilianto", "Asmoro"];
for(const index in name){
    document.writeln(`<p>${index} : ${name[index]}</p>`)
}