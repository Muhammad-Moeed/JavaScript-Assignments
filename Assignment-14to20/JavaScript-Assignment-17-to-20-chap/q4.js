// Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

var tableNumber = +prompt("Enter a number to show its multiplication table");
var tableLength = +prompt("Enter length multiplication table");

document.write(`Multiplication table of ${tableNumber} <br>`);
document.write(`Length ${tableLength} <br> <br>`);

for(i=1; i<=tableLength; i++){
    document.write(`${tableNumber} X ${i} = ${tableNumber*i}<br>` )
}