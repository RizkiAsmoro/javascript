/*
Palindrome:

*/

// Palindrome String

let data = "kodOK"
let data2 = "Katak"
let data3 = "rizki" 
let data4 = ["KOTAK"]

function checkPlindrome(n){
    let a = n.toLowerCase().split('');//ubah data menjadi uppercase dan split string
    let b = a.join(); // join string yang sudah diubah dan di split sebelumnya
    let reverseArray = [...b].reverse().join('');//reverse dan join string

    if(b === reverseArray){
        console.info(`${n} is Palindrome`);
    }else{
        console.info(`${n} is Not Palindrome`);
    }
}
checkPlindrome(data);
checkPlindrome(data2);
checkPlindrome(data3);
checkPlindrome(data4);