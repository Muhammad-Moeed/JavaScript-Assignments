// Q1 :  Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var num = +prompt("Enter number: ");
document.write("Number: " + num + "<br>");
document.write("Round off value: " + Math.round(num) + "<br>");
document.write("Floor value: " + Math.floor(num) + "<br>");
document.write("Ceil value: " + Math.ceil(num) + "<br>");

// Q2 : Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var num = +prompt("Enter number: Negative Float point number");
document.write("Number: " + num + "<br>");
document.write("Round off value: " + Math.round(num) + "<br>");
document.write("Floor value: " + Math.floor(num) + "<br>");
document.write("Ceil value: " + Math.ceil(num) + "<br>");

// Q3 : Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

var num = +prompt("Enter number: ");
document.write("The absolute value of " + num + " is " + Math.abs(num));

// Q4 : Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

var dies = Math.floor(Math.random() * 6 + 1)
document.write("Random dice value: " + dies)

// Q5 : Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

var coinToss = Math.floor(Math.random() * 2)
if(coinToss > 0){
    document.write("Random coin value: Heads");
}
else{
    document.write("Random coin value: Tails");
}

// Q6 : 6. Write a program that shows a random number between 1
// and 100 in your browser.

var randomNumber = Math.floor(Math.random() * 100 + 1)
document.write("Random number between 1-100: " + randomNumber)

// Q7 : Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

var weight = prompt("Enter your weight: ");
var weightParse = parseFloat(weight);
document.write("<br><br>The weight of the user is: " + weightParse + " kilograms")

// Q8 : Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

var secretNum = Math.floor(Math.random() * 10 + 1)
var userNum = +prompt("Enter your Number b/w 1 to 10")

if(secretNum === userNum){
    alert("Congratulations");
}
else{
    alert("Try Again");
}
