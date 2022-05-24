/*
rest parameter
- Fitur digunakan untuk mengirim data ke parameter sebanyal-banyaknya
- Secara otomatis datanya akan dikonversikan menjadi array
- Hanya ada 1 di function
- Posisinya hanya boleh di posisi paling akhir
*/
function x (text, ...data){///titik 3 kali adalah rest parameter
    let total = 0
    for(const y of data){
        total += y;
    }
    document.writeln(`${text} ${total}`)
}

x ("Nilai",10,20,30,40,50);