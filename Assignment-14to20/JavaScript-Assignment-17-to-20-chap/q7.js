// You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:
var arr = ['cake', 'apple pie', 'cookie', 'chips', 'patties']

var check = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");

let found = false;

for (let i = 0; i < arr.length; i++) {
    if (check === arr[i]) {
        document.write(`${arr[i]} is available at index ${i} in our bakery`);
        found = true;
        break;
    }
}

if (!found) {
    document.write(`We are sorry. ${check} is not available in our bakery`);
}


