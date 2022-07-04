/*
- Mirip dengan perulangan while perbedaan hanya pada pengecekan condition
- Pengecekan condition dilalukan setelah perulangan, jika true lanjut jika false berhenti
- Jadi minimum ada 1x perulangan walaupun condition false
*/


document.writeln(`---------Contoh 1---------`)
let x = 1;
do {
    document.writeln(`<p>do while loop ${x}</p>`)
    x++;
}while(x <=5);

