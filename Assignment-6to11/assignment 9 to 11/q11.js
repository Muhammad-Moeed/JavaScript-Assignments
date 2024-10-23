var firstNum = +prompt("Enter first number")
var secondNum = +prompt("Enter second number")
var operation = prompt("Operation will be perform [+, -, *, / & %]")
var result;

if(operation == "+"){
    result = firstNum + secondNum
    document.write(firstNum + " "+ operation +" " + secondNum + " = " + result)
}
else if(operation == "-"){
    result = firstNum - secondNum
    document.write(firstNum + " "+ operation +" " + secondNum + " = " + result)
}
else if(operation == "*"){
    result = firstNum * secondNum
    document.write(firstNum + " "+ operation +" " + secondNum + " = " + result)
}
else if(operation == "/"){
    result = firstNum / secondNum
    document.write(result)
}
else if(operation == "%"){
    result = firstNum % secondNum
    document.write(firstNum + " "+ operation +" " + secondNum + " = " + result)
}
else{
    document.write("Invalid Operation")
}