/*
Anonymous Function
- Function tanpa nama
- Anonymous function dalam variable juga bisa kita buat ketika mengisi parameter
- Digunakan untuk mengirim function yang sederhana
*/

//Anonymous Function dalam variable
const say = function(name){//function tanpa nama yang ada didalam variable say
    document.writeln(`<p>Hi ${name}</p>`)
}
say("Rizki")//panggil parameternya bukan functionnya karena functionnya tidak ada namanya

//Anonymous Function dalam Parameter
function sayHello (callback){
    callback("Asmoro");
}
sayHello(function (name){
    document.writeln(`<p>Hello ${name}</p>`)
});