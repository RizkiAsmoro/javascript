/*
- Label merupakan penanda kata kunci break dan continue
- Melakukan break atau continue terhadap perulangan dimana break dan continue berada
- Dengan Label dapat memilih di dimana break dan continue pada berulangan berada
- label menggunakan : (titik dua)
*/
 loopi:
 for (let i = 0; i <= 5; i++){
    loopj:
    for (let j = 0; j <= 10; j++){
        if (j>5){
            continue loopi;
        }
        console.info(`i ${i} - j ${j}`);
    }
 }