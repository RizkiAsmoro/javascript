        /*
        Operasi di Array :
        - array.push(value)     = menambahkan data ke array
        - array.length          = mendapatkan panjang array
        - array[index]          = mendapatkan data dalam index
        - array[index] = value  = mengubah data di posisi index
        - delete array[index]   = menghapus data di posisi index namun index tidak bergeser
        */
        let array_1 = []; // array kosong
        let arrayName   = ["Rizki","Wilianto","Asmoro"];
        
        //menambah jumlah data dalam array, bisa berbagai macam tipe data dalam 1 array
        array_1.push("Rizki");
        array_1.push(100);
        array_1.push(true);
        array_1.push("Wilianto");
        array_1.push("Asmoro");
        
        console.table(array_1);
        
        console.info(array_1[0]);
        console.info(array_1[1]);
        console.info(array_1[2]);
        console.info(array_1[3]);
        console.info(array_1[4]);

        array_1[0]="Alkhaleena";//mengubah data indek ke 0
        console.table(array_1);
        
        delete array_1[1];//menghapus data index ke 1, data yang lain tidak bergeser index
        console.table(array_1);

        array_1.push(200);//menambah data, data yang masuk akan ada di index terakhir
        console.table(array_1);

        array_1[1] = 200;// mengisi data pada data yang sudah dihapus sebelumnya pada index yang sama
        console.table(array_1);

        //Multidimension Array (array didalam array)       
        array_1.push(["Jakarta","Bandung","Cilacap"]);
        console.table(array_1);