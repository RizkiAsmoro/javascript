       /*
        Operator Logika : digunakan untuk tipeda data boolean
        && = Dan
        || = Atau
        !  = Kabalikan
        ---------------------------------------------------------
        - Operator && akan bernilai TRUE jika kedua nilai sama-sama TRUE, sisanya FALSE
        - Operator || akan bernilai TRUE jika ada salah satu nilai saja yang bernilai TRUE
        - Operator ! adalah kebalikan dari nilai        
        */
        document.writeln("<p>---&&---</p>")
        const nilai = 80;
        const absensi = 80;
        const lulusNilai = nilai >= 75;
        const lulusAbsensi = absensi >= 75;
        
        const lulus = lulusNilai && lulusAbsensi;
        document.writeln(lulus)

        document.writeln("<p>---||---</p>")
        const matematika = 70;
        const bahasa = 70;
        const lulusMatemaatika = matematika > 75;
        const lulusBahasa = bahasa > 75;

        const lulusUjian = lulusMatemaatika || lulusBahasa;
        document.writeln(lulusUjian);    
