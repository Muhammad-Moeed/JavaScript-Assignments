var int1 = +prompt("Enter first integer to be compared")
var int2 = +prompt("Enter second integer to be compared")
if (int1 > int2) {
    document.write(`${int1} is larger than ${int2} `)
}
else if (int1 < int2) {
    document.write(`${int2} is larger than ${int1}`)
}
else if (int1 == int2) {
    document.write(`${int1} is equal to  ${int2} <br>`)
}