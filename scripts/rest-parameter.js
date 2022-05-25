/*
rest parameter
- Fitur digunakan untuk mengirim data ke parameter sebanyal-banyaknya
- Secara otomatis datanya akan dikonversikan menjadi array
- Hanya boleh 1 di function
- Posisinya hanya boleh di posisi paling akhir
*/
function x (text, ...data){///titik 3 kali adalah rest parameter
    let total = 0
    for(const y of data){
        total += y;
    }
    document.writeln(`<p>${text} ${total}</p>`)
}
x ("Nilai Pertama :",10,20,30,40,50);
x ("Nilai Kedua :",60,70,80,90)

/*
Jika data sudah terlanjut berupa array pada Rest Parameter
maka dapat menggunakan fitur Spread Syntax berupa titik 3x didepan arraynya
maka array tsb diubah ke rest parameter
Contohnya sebagai berikut
*/ 
const data = [5,5,5,5,5];
x("Spread Syntax :", ...data);//nilai data yang berupa array akan diubah