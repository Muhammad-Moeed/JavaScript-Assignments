// Q1 : Write a program that displays current date and time in your browser.
var currentDate = new Date();
document.write(`${currentDate}<br>`);

// Q2 : Write a program that alerts the current month in words.
var dateNow = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthNow = dateNow.getMonth();
document.write("Current Month: " + months[monthNow] + "<br>");

// Q3 : Write a program that alerts the first 3 letters of the current day.
var dateday = new Date();
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var dayNow = dateday.getDay();
alert("Today is: " + days[dayNow]);

// Q4 : Write a program that displays a message “It’s Fun day” if it's Saturday or Sunday.
var dayNow = new Date().getDay();
if (dayNow === 0 || dayNow === 6) {  // 0 is Sunday, 6 is Saturday
    document.write("It's Fun day<br>");
}

// Q5 : Show message "First fifteen days of the month" or "Last days of the month".
var dateNow = new Date();
var date = dateNow.getDate();

if (date < 16) {
    document.write('First fifteen days of the month<br>');
} else {
    document.write('Last days of the month.<br>');
}

// Q6 : Determine the minutes since midnight, Jan. 1, 1970.
var dateNow = new Date();
var millisec = dateNow.getTime();
document.write("Current Date: " + dateNow + "<br>");
document.write("Elapsed milliseconds since January 1, 1970: " + millisec + "<br>");
document.write("Elapsed minutes since January 1, 1970: " + (millisec / (1000 * 60)) + "<br>");

// Q7 : Test whether it's before noon or after and alert “Its AM” or “Its PM”.
var hour = new Date().getHours();
if (hour < 12) {
    alert('Its AM');
} else {
    alert('Its PM');
}

// Q8 : Create a Date object for the last day of the last month of 2020.
var laterDate = new Date(2020, 11, 31);  // December is 11 (months are 0-indexed)
document.write("Later Date: " + laterDate + "<br>");

// Q9 : Calculate days since 1st Ramadan (June 18, 2015).
var dateNow = new Date(2025, 1, 28);
var pastRamadan = new Date(2015, 5, 18);
var difference = dateNow - pastRamadan;
var daysPassed = difference / (1000 * 60 * 60 * 24);
document.write(daysPassed + " days passed since 1st Ramadan, 2015<br>");

// Q10 : Display the seconds that elapsed between the reference date and the beginning of 2015.
var referenceDate = new Date();
var startOf2015 = new Date(2015, 0, 1);
var differenceInMillis = referenceDate - startOf2015;
var differenceInSeconds = differenceInMillis / 1000;
document.write("Seconds elapsed between January 1, 2015 and the reference date: " + Math.floor(differenceInSeconds) + "<br>");

// Q11 : Create a Date object for the current date, set it 1 hour ahead.
var currentDate = new Date();
var currentHour = currentDate.getHours();
document.write("Current date: " + currentDate + "<br>");
currentDate.setHours(currentHour + 1);  // Set 1 hour ahead
document.write("1 hour ahead, it will be: " + currentDate + "<br>");

// Q12 : Create a date object and show the date reset to 100 years back.
var currentDate = new Date();
var pastYear = currentDate.getFullYear() - 100;
currentDate.setFullYear(pastYear);
alert("Date 100 years back: " + currentDate);

// Q13 : Ask the user about his age and calculate the birth year.
var userAge = +prompt("Enter your age");
var userYear = new Date().getFullYear() - userAge;
document.write("Your age is " + userAge + "<br>" + "Your birth year is " + userYear + "<br>");

// Q14 : Generate K-Electric bill in your browser.
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var NumberUnits = 410;
var chargeUnits = 16;
var lateCharges = 350;
var netAmount = NumberUnits * chargeUnits;
var grossAmount = netAmount + lateCharges;

document.write(`<h1>K-Electric Bill</h1>
    <br> Customer Name : <b>ABC Customer</b> <br>
    Month: <b>${months[new Date().getMonth()]}</b><br>
    Number of units: <b>${NumberUnits}</b><br>
    Charges per unit : <b>${chargeUnits}</b><br><br>
    Net Amount payable (within Due date): <b>${netAmount.toFixed(2)}</b> <br>
    Late payment surcharge : <b>${lateCharges.toFixed(2)}</b> <br>
    Gross amount payable (after Due Date): <b>${grossAmount.toFixed(2)}</b><br>
`);
