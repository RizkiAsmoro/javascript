/*
Palindrome:

*/

// Palindrome String

let data = "kodOK" 

function checkPlindrome(n){
    let a = n.toLowerCase().split('');
    let b = a.join();
    let reverseArray = [...b].reverse().join('');

    if(b === reverseArray){
        return true;
    }else{
        return false;
    }
}
console.info(checkPlindrome(data))

