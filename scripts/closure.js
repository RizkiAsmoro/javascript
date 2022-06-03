/*
Closure
- Adalah kombinasi function da bundle referensi kedata sekitarnya
- Dapat membuat function di local scope dan referensi data sekitar local scope tsb keluar scope
*/

function createAdder(value){
    const owner = "Rizki";

    function add(param){
        //nested
        console.info(owner);
        return value + param;
    }
    return add;
}
const addTwo = createAdder(2);
console.info(addTwo(10));
