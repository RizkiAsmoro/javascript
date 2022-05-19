    /*
    - Merupakan data kosong
    - Berbeda dengan undefine, jika null memang datanya sudah diset tapi memang datanya null
    - Jika undefine maka datanya belum didefinisikan atau belum ditambah value apapun

    */

    let x = null; // jika diganti let x; maka hasilnya undefine
    if (x === undefined){
        alert("Undefine");
    }else if (x === null){
        alert("Null");
    }else{
        alert(x);
    }