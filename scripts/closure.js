/*
Closure
- Adalah kombinasi function da bundle referensi kedata sekitarnya
- Dapat membuat function di local scope dan referensi data sekitar local scope tsb keluar scope
*/

function createAdder(value){
    //local scope
    const owner = "Rizki";
    
    function add(param){
        //nested function
        console.info(owner);//mengakses local scope dari nested
        return value + param;//mengakses 'value' yang ada di local scope di dalam nested 
    }
    return add;
}
const addTwo = createAdder(2);
console.info(addTwo(10));
