// Q1 : Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// var firstName = prompt("Enter your first name: ");
// var lastName = prompt("Enter your last name: ");
// var fullName = firstName +" "+ lastName;
// alert(fullName);

//Q2 : Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// var mob = prompt('Enter your favorite mobile phone model: ');
// document.write('Your favorite phone is: ' + mob + '<br>' + 'Length of string: ' + mob.length);


//Q3 : Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

// var str = "Pakistani";
// var nIndex = str.indexOf("n");
// document.write("String: " + str + "<br>");
// document.write("Index of 'n': " + nIndex );

// Q4 : Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

// var str = "Hello World";
// var lIndex = str.lastIndexOf("l");
// document.write("String: " + str + "<br>");
// document.write("Last index of 'l': " + lIndex );

// Q5 : Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

// var str = 'Pakistani';
// var st = str.charAt(3);
// var index = 3;
// document.write("String: " + str + "<br>" + "Character at index " + index + ": " + st);

// Q6 : Repeat Q1 using string concat() method.

// var firstName = prompt("Enter your first name: ");
// var lastName = prompt("Enter your last name: ");
// var fullName = firstName.concat(" ", lastName);
// alert(fullName);

// Q7 : Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// var str = "Hyderabad";
// var replaceStr = str.replace("Hyder", "Islam");
// document.write("City: " + str + "<br>");
// document.write("After replacement: " + replaceStr);

// Q8 : Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

// var str = "Ali and Sami are best friends. They play cricket and football together.";
// var replaceStr = str.replaceAll("and", "&");
// document.write("Message: " + str + "<br>");
// document.write("After replacement: " + replaceStr);

// Q9 : Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

// var str = "472";
// var num = parseInt(str);
// document.write("value: " + str + "<br>");
// document.write("Tpye: " + typeof(str) + "<br>");
// document.write("value: " + num + "<br>");
// document.write("Tpye: " + typeof(num) + "<br>");

// Q10 : Write a program that takes user input. Convert and
// show the input in capital letters.

// var str = prompt("Enter Input: ");
// document.write("User input: " + str + "<br>");
// document.write("Upper case: " + str.toUpperCase())

// Q11 : Write a program that takes user input. Convert and
// show the input in title case.

// var userInput = prompt("Enter your Text to convert to Title Case");
// var titleCase = userInput.slice(0, 1).toUpperCase() + userInput.slice(1).toLowerCase();
// document.write("User Input: " + userInput +"<br>"+"Title Case: "+ titleCase);

// Q12 : Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// var num = 35.36;
// var string = num.toString();
// var dot = string.replace('.', '');
// document.write('Number: ' + num + '<br>' + 'String: ' + dot);

// Q13 : Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

// var username = prompt("Enter your name: ");
// var charValue;
// for(var i = 0; i < username.length; i++){
//     charValue = username[i].charCodeAt(0);
//     if(charValue === 33 || charValue === 44 || charValue === 46 || charValue === 64){
//         alert("Please enter a valid username")
//     }
// } 

// Q14 : You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var order = prompt("What do you want to order: ").toLowerCase();
// var check = false;
// for(var i = 0; i < arr.length; i++){
//     if(order === arr[i]){
//         document.write(arr[i] + " is available at index " + i + " in our bakery");
//         check = true;
//     }
// }
// if (check === false){
//     document.write("We are sorry! " + order + " is not available in our bakery");
// }

//Q15 :  Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

