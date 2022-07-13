/*
Join Array:
- Adalah method untuk menggabungkan semua element dalam array kedalam bentuk string
- Pemisah-nya dapat berupa koma atau pemisah string lain 
- Jika element undefined atau null atau array kosong makan akan dijadikan string kosong
*/

const makanan = ["Sate", "Soto", "Bakso"];
const minuman = []

console.info(makanan.join());
console.info(makanan.join(""))
console.info(makanan.join(" "))
console.info(makanan.join("-"))
console.info(minuman.join())//empty



