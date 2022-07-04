// Case Fizz Buzz
// Fizz untuk angka yang habis dibagi 3, Buzz angka yang habis dibagi 5 
// fizzbuzz untuk angka yang habis dibagi 3 dan habis dibagi 5
for (let number =1; number <= 50; number++){
    if(number % 3 == 0 && number % 5 == 0  ){
        document.writeln(`FizzBuzz,`)
    }else if(number % 5 == 0 ){
        document.writeln(`Buzz,`)
    }else if(number % 3 == 0){
        document.writeln(`Fizz,`)
    }else{
        document.writeln(`${number},`)
    }
}