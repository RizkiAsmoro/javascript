/*
Function Return Value
- Secara default function tidak mengembalikan nilai apapun, namun hal tersebut bisa dilakukan
- Agar dapat mengembalikan value mengunakan kata kunci retur dalam function 
- Dalam block function untuk menghasilkan nilai tersebut maka harus menggunakan return diikuti dengan data yang diinginkan
- Function hanya mengembalikan 1 value, jika ingin lebih dari 1 makan value tsb dibungkus menggunakan array
*/

//Contoh return 1
function name (firstName, lastName){
    const x = (`Hello ${firstName} ${lastName}`);
    return x;
}

const z = name ("Rizki", "Asmoro");
document.writeln(`${z}`);


//Contoh return lebih dari 1 kali
function getFinalExam (value){
    if(value >=90){
        return "A";
    }else if (value >=80){
        return "B";
    }else if (value >= 70){
        return "C";
    }else{
        return "D";
    }
}
const finalValue = getFinalExam(99);
document.writeln(`<p>Your Final Exam Value ${finalValue}</p>`);


// Return dapat digunakan untuk menghentikan eksekusi sebuah function
function isContains(array, searchValue){
    for (const element of array){
        document.writeln(`<p>index ${element}</p>`)
        if (element === searchValue){
            return true;//jika nilai yang dicari ada
        }
    }
    return false;//jika nilai yang dicari tidak ada
}
const array = [12,2,23,4,32,1124,24,13,234,346,234];//data aray
const search = 24;//nilai yang dicari
const found = isContains(array, search);
document.writeln(`<p>search value = ${search} ${found}</p>`);
