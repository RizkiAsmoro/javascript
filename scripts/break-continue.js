/*
- Sama pada loop maka break digunakan untuk menghentikan semua loop
- Continue digunakan untuk menghentikan loop saat ini lalu lanjut ke loop berikutnya
*/
 
// Penggunaan break;
let x = 1;
while (true){
    document.writeln(`<p>${x}</p>`);
    x++;
    if (x >= 6){
        break;//loop apapun akan berhenti total
    }
}

// Penggunaan continue;
for (let y = 1; y <= 5; y++){// loop dari 1 sampai 5
    if (y % 2 === 0){
        continue;
    }
    document.writeln(`<p>Angka Ganjil ${y}</p>`)//tampilkan yang ganjil
}