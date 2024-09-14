var snack = prompt("Enter your Favorite Snack")
var curruntAge = +prompt("Enter your age")
var maxAge = +prompt("Enter Estimated Maximum Age")
var AmountPerDay = +prompt("Enter Amount of snack per day")
var total = (maxAge - curruntAge) * AmountPerDay

document.write("Favorite Snack: " + snack + "<br>" + "Currunt age: "+ curruntAge + "<br>" + "Estimated Maximum Age: " + maxAge + "<br>" + "Amount of snack per day: " + AmountPerDay + "<br>" +"You will need "+total +" "+ snack + " to last you until the ripe old age of "+ maxAge)