/*
- Jika For In digunakan untuk iterasi property atau index, 
  maka For Of digunakan untuk iterasi terhadap isi value dari iterable object, seperti array, String dll
- For Of tidak dapat digunakan untuk iterasi data object, karen object bukanlah iterable 
*/

const name = ["Rizki" , "Wilianto", "Asmoro"];//array
for(const student of name){
    document.writeln(`<p>${student}</p>`)//yang ditampilkan adalah nilai array nya
}

const address ="Jakarta Indonesia";//string
for(const character of address){
    document.writeln(`<p>${character}</p>`)
}

