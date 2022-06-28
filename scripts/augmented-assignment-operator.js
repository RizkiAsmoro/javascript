/*
Augmented Assignment Operator:
result = result + 10    samana dengan     result +=10
result = result - 10    samana dengan     result -=10
result = result * 10    samana dengan     result *=10
result = result ** 10    samana dengan     result **=10
result = result / 10    samana dengan     result /=10
result = result % 10    samana dengan     result %=10
*/

let result = 1 + 3;
document.writeln("<p> 1 + 3 = " + result + "</p>");
let originalResult = result;

result *= 2; // sama saja result = result * 2
document.writeln("<p>" + originalResult + " x 2 = " + result +"</p>");
originalResult = result;

result -= 3 // sama saja result = result - 3
document.writeln("<p>" + originalResult + " - 3 = " + result +"</p>")