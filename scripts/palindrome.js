/*
Palindrome : adalah data yang dibaca dari depan dan belakang akan sama

*/

// Palindrome String menggunakan reverse

let data = "kodOK"
let data2 = "Katak"
let data3 = "rizki" 

//Contoh 1 (cek palindrome string)
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


// Contoh 2 (cek palindrome string)
{
    function isPalindrome(x){
        return x.toLowerCase() == x.toLowerCase().split('').reverse().join(''); 
    }
    let n = isPalindrome('kodoK')
    console.info(n)
}

// Contoh Palindrome tanpa reverse
{ 
function fastestIsPalindrome(str) {
    var len = Math.floor(str.length / 2);
    for (var i = 0; i < len; i++)
      if (str[i] !== str[str.length - i - 1])
        return false;
    return true;
  }

const x = fastestIsPalindrome("kodok")
console.info(`${x}`)
}