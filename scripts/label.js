/*
- Label merupakan penanda kata kunci break dan continue
- Melakukan break atau continue terhadap perulangan dimana break dan continue berada
- Dengan Label dapat memilih di dimana break dan continue pada berulangan berada
- label menggunakan : (titik dua)
*/
 loopi:// label loopi
 for (let i = 0; i <= 4; i++){
    loopj: //label loopj
    for (let j = 0; j <= 7; j++){
        if (j>3){
            continue loopi;
        }
        console.info(`i ${i} - j ${j}`);
    }
 }