/*
Recursive Function 
- kemampuan function untuk memanggil function dirinya sendiri
*/

// Contoh jika penggunaan loop biasa tanpa recursive
// case factorial 
function factorial (value){
    let result = 1;
    for(let x = 1; x <= value; x++){
        result *= x;
    }
    return result;
}
console.info(factorial(5));

//Contoh jika menggunakan Recursive 
//case factorial
function factorialRecursive (recursiveValue){
    if(recursiveValue ===1){
        return 1;
    }else{
        return recursiveValue * factorialRecursive(recursiveValue - 1);
    }
}
console.info(factorialRecursive(5))
// 5 * factorialRecursive (4)
// 5 * 4 factorialRecursive (3)
// 5 * 4 * 3 factorialRecursive (2)
// 5 * 4 * 3 * 2 factorialRecursive (1)
// 5 * 4 * 3 * 2 * 1 
