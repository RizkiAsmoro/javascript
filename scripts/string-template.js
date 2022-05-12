        // String Template menggunakan backtick ``

        //sample 1
        const firstName = "Rizki";
        const middleName = "Wilianto";
        const lastName = "Asmoro"
        const fullName = `Name : ${firstName} ${middleName} ${lastName}`;

        console.info(fullName);

        // String Template Expression
        const nilai = 100;
        const sample2 = `Name : ${fullName}, lulus : ${nilai > 70}`;
        console.info(sample2);

        //Multiline String
        let multiline = ` Nama saya Rizki Wilianto Asmoro
pekerjaan saat ini adalah SAP ABAP Consultant,
namun saya tertarik dengan JavaScript  
        `;

        console.info(multiline);