/*
Syntax For Loop :
for (init statement;condition;post statement){
// block loop    
}
- Init Statement hanya dieksekusi sekali pada diawal sebelum perulangan
- Condition akan dilakukan pengecekan setiap perulangan, jika true makan akan terus berjalan loop-nya jika false akan berhenti
- Post Statemen akan dilakukan sekali pada akhir loop/perulangan
- Ketiga bagian diatas tidak wajib diisi, jika dikosongkan semua maka artinya true dan looping akan berjalan tidak berhenti
*/


for(let x = 1;x <=5;x++){
    document.writeln(`<p>For Loop ${x}</p>`);
}
// let x = 1 adalah Init Statement
// x <=5 adalah condition
// x++ adalah post statement

// Case Ganji Genap menggunakan perulangan for dan if
for(let z = 1;z <=5;z++){
    if(z % 2 == 1){
        document.writeln(`<p>${z} = Ganjil</p>`)
    }else{
        document.writeln(`<p>${z} = Genap</p>`);
    }
}

// Case Fizz Buzz
for (let number =1; number <= 30; number++){
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