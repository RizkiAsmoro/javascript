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
// X++ adalah post statement