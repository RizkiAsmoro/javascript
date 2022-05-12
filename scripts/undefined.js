 // UNDEFINED adalah variable atau data yang belum didefinisikan

 let name;
 if(name === undefined){
     console.info("undefined");
 }else{
     console.info("defined");
 }


 const names =["Rizki","Asmoro"];//mengakses index data yang tidak ada        
 if(names[2] === undefined){ //index data pada array names hanya 0 dan 1
     console.info("Array Undefined");
 }else{
     console.info("Array Defined");
 }


 const person = {};
 if(person.name === undefined){ //mengakses object name yang belum didefinisikan maka hasilnya Object Undefined
     console.info("Object Undefined");
 }else{
     console.info("Object Defined");
 }