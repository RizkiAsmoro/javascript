/*
Array Method ForEach and Map
- Digunakan untuk melakukan looping
*/

// Contoh iterasi element pada array
const kota = ["Jakarta","Bandung","Surabaya","Yogyakarta"]
kota.forEach(element => console.info(`${element}`))


//Contoh for loop untuk iteasi element pada array
const nama = ["Rizki","Wilianto","Asmoro","Alkhaleena","Maezurra"]
for (let i = 0; i < nama.length; i++) {
    // const element = array[i];
    console.info(`${i} ${nama[i]}`)
}

//Contoh foreach untuk loop tanpa for
const brand = ["Nike","Adidas","Puma","NewBalance"];
brand.forEach(function(n) {
    console.info(`${n}`)
})