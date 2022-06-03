/*
Kata Kunci this :
- Adalah referensi ke object milik siapa
- Jika di dalam object method, this merupakan referensi ke object pemilik functionnya
- Jika di Global Scope, this merupakan referensi ke global object (di browser berupa window)
- Jika di function, this merupakan referensi ke global object (di browser berupa window)
- Jika di function dengan strict mode, this adalah undefined
- Jika di event, this merupakan referensi ke element yang menerima event
*/

//Contoh 1
console.info(this); //hasilnya Window

//Contoh 2 - function
function sample(){
    console.info(this); //hasilnya Window
    
    function inner(){
        console.info(this);
    }
    inner();

}
sample(); 
