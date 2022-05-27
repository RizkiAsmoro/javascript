/*
Inner Function
- Karena tidak ada batasan dalam membuat function maka
  kita dapat membuat function di dalam function yang disebut inner function
- Inner function hanya dapat diakses di tempat diamana membuat functionnya
*/
function outer(){
    function inner(){
        document.writeln(`Inner`);
    }
    inner();
}
outer();
inner();//jika function inner coba diakes diluar maka akan ada error inner is not define
