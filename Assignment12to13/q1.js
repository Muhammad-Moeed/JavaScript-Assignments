var ch = prompt('Enter any character or number:');
var a = ch.charCodeAt(0);
if ((a >= 48) && (a <= 57)) {
    alert(`${ch} is a number.`)
    document.write(`${ch} is a number.`)
}
else if ((a >= 65) && (a <= 90)) {
    alert(`${ch} is an uppercase letter.`)
    document.write(`${ch} is an uppercase letter.`)
}
else if ((a >= 97) && (a <= 122)) {
    alert(`${ch} is lowercase letter.`)
    document.write(`${ch} is lowercase letter.`)
}
else {
    alert('Invalid input');
}
