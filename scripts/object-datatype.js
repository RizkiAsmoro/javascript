const siswa={};

//ubah property/attribute/index tidak lagi number
siswa["nama"] = "Rizki Asmoro"; 
siswa["alamat"] = "Jakarta";
siswa["kelas"] = 12;

console.table(siswa);

delete siswa["kelas"];
console.table(siswa);

// membuat object property
const anggota = {
    "nama" : "Karim Benzema",
    alamat : "Bandung",
    "kelas" : 12
};
console.table(anggota);

//mengakses object property
console.info(`Nama Siswa :${anggota.nama}`);
console.info(`Alamat Siswa : ${anggota.alamat}`);
console.info(`Kelas Siswa : ${anggota.kelas}`);
