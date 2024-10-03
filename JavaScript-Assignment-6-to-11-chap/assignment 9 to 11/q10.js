var temperature = prompt("Enter your area Temperature")

if (temperature > 40) {
    document.write(`It is too hot outside`)
}
else if (temperature > 30) {
    document.write(`The Weather today is Normal`)
}
else if (temperature > 20) {
    document.write(`Today's Weather is cool`)
}
else if (temperature > 10) {
    document.write(`OMG! Today's is so Cool`)
}
else{
    document.write(`OMG 🥶`)
}