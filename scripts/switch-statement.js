/*
- Jika hanya ingin menggunakan perbandingan sederhana misal hanya menggunakan ==
- SWITCH adalah percabangan sederhana selain if namun SWITCH lebih sederhana
- Kondisinya hanya perbandingan ==
*/

    const nilai = "A";
    switch (nilai) {
        case "A":
            document.writeln("<p>Anda lulus dengan nilai memuaskan</p>");
            break; // eksekusi akan berhenti
        case "B":
        case "C":
            document.writeln("<p>Anda lulus</p>");
            break;
        case "D":
            document.writeln("<p>Anda TIDAK lulus</p>");
            break;
        default: // default sama seperti else
            document.writeln("<p>GAGAL</p>");
    }

