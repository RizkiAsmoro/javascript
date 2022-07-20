/*
Reverse:
- Membalik suatu nilai secara urutan
*/

//Reverse Aray menggunakan method reverse()
console.info(`----Reverse Aray----`)
const angka = [1,2,3];
console.info(`Urutan angka ${angka}`)
angka.reverse();
console.info(`Reverse Angka ${angka}`)


// Reverse String menggunakan method reverse()
function reverse(s) {
    return s.split("").reverse().join("");
  }
  const x = reverse("rizki");
  console.info(`${x}`);

    
{
// revere String tanpa method reverse()  
function reverseStr(str){
  let finalStr = "";
  for(let i = str.length-1; i >= 0; i--){
      // console.log(str[i]);
      finalStr = finalStr + str[i]; // atau finalStr += str[i];
  }
  return finalStr;
}
console.log(reverseStr("kebalikan"))
}