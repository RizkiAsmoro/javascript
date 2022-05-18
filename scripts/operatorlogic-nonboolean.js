/*
Operator Logika Non Boolean
1. Operator OR (||) Non Boolean
    - Dibaca dari kiri ke kanan
    - Mengambil nilai pertama yang truthy
    - jika tidak ada yang truthy maka yang diambil yang paling kanan
2. Operator AND (&&) Non Boolean
    - Dibaca dari kiri ke kanan
    - Mengambil nilai pertama yang falsy
    - Jika tidak ada yang falsy maka diambil paling kanan atau yang terakhir
*/
// Sample Opererator OR Non Boolean
console.info("Hello" || "");//Hello
console.info("" || []);//[]
console.info("0" || "Null");//0
console.info(0 || "Null");//Null
console.info(undefined || "Undefined");//Undefined
console.info(0 || false);//false

// Case
const student = {
    name :"",
    gender : "Male"    
};
const data = student.name || student.gender;//Male
console.info(data);

//Sampe Operator AND Non Boolean
console.info("Hello" && "");//kosong
console.info("" && []);//kosong 
console.info("0" && "Null");//Null
console.info(0 && "Null");//0
console.info(undefined && "Undefined");//undefined
console.info(0 && false);//0
