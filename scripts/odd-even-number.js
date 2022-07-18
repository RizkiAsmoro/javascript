/*
Odd and Even number 
*/

//Ganjil atau Genap suatu nilai
const number = 12;
if (number % 2 == 0){
    document.writeln(`<p>${number} is even number</p>`)
}else{
    document.writeln(`<p>${number} is odd number</p>`)
}

// using filter method to get odd number in array
const array = [1,2,3,4,5,6,7,8,9];
const odd = array.filter(num => {return num % 2 !== 0;});
document.writeln(`${odd} is odd number`);


// Memisahkan ganjil dan genap dari suatu array dan di simpan ke array lain untuk angka genap dan ganjil
const angka = [1,2,3,4,5,6,7,8,9];
const genap = [];//untuk menampung angka genap
const ganjil = [];//untuk menampung angka ganjil

angka.forEach(n =>{
    if (n % 2 == 0) {
        genap.push(n)//push nilai n ke array genap
    }else{
        ganjil.push(n)//push nilai n ke array ganjil
    }
})
document.writeln(`<p>Angka genap :${genap}</p>`);
document.writeln(`<p>Angka ganjil :${ganjil}</p>`);



// Menentukan mana angka yang ganjil dan mana angka yang genap dari element suatu array
const arrNum = [11,13,12,34,56,789,13,34];

arrNum.forEach(n =>{//pada setiap element n di array arrNum
    if (n % 2 == 0) {
        // genap1.push(n)//push nilai n ke array genap
        document.writeln(`<p>Angka genap :${n}</p>`);
    }else{
        // ganjil1.push(n)//push nilai n ke array ganjil
        document.writeln(`<p>Angka ganjil :${n}</p>`);
    }
})

