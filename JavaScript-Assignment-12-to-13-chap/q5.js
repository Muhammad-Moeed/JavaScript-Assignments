var correctPasword = "moeed123"
var userPassword = prompt("Enter your password")
if (correctPasword === userPassword) {
    document.write(`Correct! The password you entered matches the original password <br>`)
}
else if (correctPasword !== userPassword) {
    document.write(`Incorrect password <br>`)
}
else {
    document.write(`Please enter your password <br>`)
}
