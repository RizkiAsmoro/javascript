 /*
        - parseInt(string) - string ke number (bilangan bulat)
        - parseFloat(string) - string ke number (bilangan pecahan)
        - Number(string) - string ke number (bulat / pecahan)
        - number.toString() - number ke string
        */

        const value1 = parseInt("1");// string akan diubah menjadi integer
        const value2 = 1;
        const sum = value1 + value2;

        document.writeln(`${sum}`); // hasilnya ada lah 2

        document.writeln(`<p>${parseInt("1.9")}</p>`);// hasilnya adalah 1 karena integer menampilkan bilangan bulat
        document.writeln(`<p>${parseFloat("1.9")}</p>`);//hasilnya adalah 1.9 karena Float menampilkan bilangan pecahan
        document.writeln(`<p>${Number("1.9")}</p>`);// hasilnya 1.9 karena Number menampilkan bilangan bulat/pecahan

        // Conversion Number to String
        const v1 = 1;
        const v2 = 2;
        const total = v1.toString() + v2.toString();//number diubah menjadi string

        document.writeln(`<p>${total}</p>`);// hasilnya akan 12 karena number sudah diubah menjadi string

        /* NaN (Not A Number)
        - Jika data string dikonversi bukan data valid maka hasil konversinya NaN
        - NaN adalah number spesial yang bukan number
        - Nan dioperasikan dengan dtaa number lain maka hasilnya NaN lagi
        */
        // parseInt dan parseFloat mentolerir kesalahan jika number-nya didepan
        document.writeln(`<p>${parseInt("Rizki")}</p>`);// hasilnya NaN
        document.writeln(`<p>${parseInt("99Rizki")}</p>`);// hasilnya 99
        document.writeln(`<p>${parseInt("Rizki99")}</p>`);// hasilnya NaN        
        document.writeln(`<p>${parseFloat("1.1Rizki")}</p>`);// hasilnya 1.1

        //number tidak mentolerir kesalahan jika ada selain number maka hasilnya NaN
        document.writeln(`<p>${Number("Rizki")}</p>`);// hasilnya NaN  
        document.writeln(`<p>${Number("99Rizki")}</p>`);// hasilnya NaN  
        document.writeln(`<p>${Number("Rizki99")}</p>`);// hasilnya NaN        

        //operasi pada NaN
        const a = Number("Rizki");//NaN
        const b = 100;//number
        const x = a + b;//NaN

        document.writeln(`<p>${x}</p>`);// hasilnya NaN karena operasi tipe data apapun jika dengan NaN hasilnya NaN

        // Function isNaN dapat digunakan untuk melakukan pengecekan apakah number NaN atau bukan, jika NaN maka True jika buka False

        document.writeln(`<p>${isNaN(a)}</p>`);// hasilnya true
        document.writeln(`<p>${isNaN(b)}</p>`);// hasilnya false