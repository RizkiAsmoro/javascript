 /*
Operator perbandingan:
Semua hasil operator perbandingan adalah hasilnya boolean (True / False)
>   adalah lebih dari
<   adalah kurang dari
>=  adalah lebih dari sama dengan
<=  adalah kurang dari sama dengan
==  adalah sama dengan
====adalah sama dengan sama tipe
!=  adalah tidak sama dengan
!== adalah tidak sama dengan atau sama tipe

*/
 let result = 5 =="5";//true
 document.writeln("<p>" + result + "</p>");

 result = 5 === "5";//false karena tipe data berbeda
 document.writeln("<p>" + result + "</p>");

 result = 5 > 10;//false
 document.writeln("<p>" + result + "</p>");

 result = 5 < 10;//true
 document.writeln("<p>" + result + "</p>");

 result = 5 !== "5";//true karena tidak sama dengan atau tidak sama tipe
 document.writeln("<p>" + result + "</p>");

 result = 5 != "5";//false karena tidak sama dengan
 document.writeln("<p>" + result + "</p>");

 result = 5 <= 10;//true
 document.writeln("<p>" + result + "</p>");

 result = 5 >= 10;//false
 document.writeln("<p>" + result + "</p>");