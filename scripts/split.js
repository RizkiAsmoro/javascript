/*
Split :
*/

//Split String
    const nama = "Rizki Wilianto Asmoro";
    const s = nama.split(" ");
    const s1 = nama.split("");
    const s2 = nama.split(" ",2);



    console.info(`${s}`)// Rizki,Wilianto,Asmoro
    console.info(`${s1}`)// R,i,z,k,i, ,W,i,l,i,a,n,t,o, ,A,s,m,o,r,o
    console.info(`${s2}`)// Rizki,Wilianto
    console.info(`${s[2]}`)// Asmoro

    
//Join
const fName = "Rizki";
const lName = "Asmoro";
const fullName = fName.lName.join("");
console.info(`${fullName}`);