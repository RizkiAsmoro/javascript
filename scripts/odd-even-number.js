/*
Odd and Even number 
*/
// function isContains(array, searchValue){
//     for(const element of array){
//         if(element == searchValue){
//             document.writeln(`${}`)    
//         }
//     }
// return false;
// }

// const array = [1,2,3,4,5,6,7,8,9];
// const search = array % 2 == 0;
// const found = isContains(array, search);
// // document.writeln(`<p>${found}</p>`)

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


// Memisahkan ganjil dan genap dari suatu array
const angka = [1,2,3,4,5,6,7,8,9];
const genap = [];
const ganjil = [];

angka.forEach(n =>{
    if (n % 2 == 0) {
        genap.push(n)//push nilai n ke array genap
    }else{
        ganjil.push(n)//push nilai n ke array ganjil
    }
})
document.writeln(`<p>Angka genap :${genap}</p>`);
document.writeln(`<p>Angka ganjil :${ganjil}</p>`);