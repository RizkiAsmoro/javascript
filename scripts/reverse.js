/*
Reverse:
- Membalik suatu nilai secara urutan
*/

//Reverse Aray
console.info(`----Reverse Aray----`)
const angka = [1,2,3];
console.info(`Urutan angka ${angka}`)
angka.reverse();
console.info(`Reverse Angka ${angka}`)


// Reverse String
function reverse(s) {
    return s.split("").reverse().join("");
    
  }
  const x = reverse("rizki");
  console.info(`${x}`);