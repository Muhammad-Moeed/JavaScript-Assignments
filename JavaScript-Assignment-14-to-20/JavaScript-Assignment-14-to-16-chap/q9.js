// 9. Initialize an array with color names. Display the array elements in your browser.
var colorNames = [];

// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. 
var input = prompt("What color you wants to add to the beginning?");
colorNames.unshift(input);

document.write(`After add of the begining array: ${colorNames} <br/>`);

// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. 
input = prompt("What color you wants to add to the end?");
colorNames.push(input);

document.write(`After add of the end array: ${colorNames} <br/>`);

// c. Add two more color to the beginning of the array. 
input = prompt("Add two more color to the beginning/nEnter first color: ");
colorNames.unshift(input);
input = prompt("Add two more color to the beginning/nEnter second color: ");
colorNames.unshift(input);

document.write(`After add two colors begining of the array: ${colorNames} <br/>`);

// d. Delete the first color in the array. 
colorNames.shift();

document.write(`Adter delete first color of array: ${colorNames} <br/>`);

// e. Delete the last color in the array
colorNames.pop();

document.write(`After delete last color of array: ${colorNames} <br/>`);

// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index.
var indexNo = +prompt("Which index you wants to add a color: ");
input = prompt("Please enter your color name: ");
colorNames.splice(indexNo, 0, input);

document.write(`After add the color to desired position: ${colorNames} <br/>`);

// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete
indexNo = +prompt("At which index you wants to delete a color: ");
var deleteCount = +prompt("how many colors you want to delete ");
colorNames.splice(indexNo, deleteCount);

document.write(`After delete color: ${colorNames} <br/>`);
