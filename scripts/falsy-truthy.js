/*
Falsy
- Dalam konteks boolean dianggap false
- Pada JavaScript kondisi tidak hanya boolean yang true/false tapi diluar boolean pun bisa
Contoh data Falsy :
 1. false       =  dianggap false
 2. -0, 0       =  dianggap false
 3. "",'',``    = semua string kosong dianggap false
 4. null        = null dianggap false
 5. undefined   = dianggap false
 6. NaN         = Not a Number dianggap false
 
 Truthy
 - Adalah kebalikan dari false
*/

const value = "";// String kosong maka yang muncul false

if(value){
    document.writeln("<p>True</p>");
}else{
    document.writeln("<p>False</p>");
}

const data = "False";// String tidak kosong maka hasilnya true
if(data){
    document.writeln("<p>True</p>");
}else{
    document.writeln("<p>Fasle</p>");
}

const a = null; // false
if(a){
    document.writeln(`<p>True</p>`);
}else{
    document.writeln(`<p>False</p>`)
}

const b = -1;//true
if(b){
    document.writeln(`<p>True</p>`)
}else{
    Document.writeln(`<p>False</p>`)
}

const c = NaN;//false
if(c){
    document.writeln(`<p>True</p>`)
}else{
    document.writeln(`<p>False</p>`)
}
