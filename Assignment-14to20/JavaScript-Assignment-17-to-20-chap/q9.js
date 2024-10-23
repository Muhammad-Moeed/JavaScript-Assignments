// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

var arr = [24, 53, 78, 91, 12];
var largestNumber = arr[0];
for(i = 0; i < arr.length; i++){
    if(arr[i] < largestNumber){
        largestNumber = arr[i];
    }
}
document.write(`Array items: ${arr} <br>`);
document.write(`The smallest number is ${largestNumber}`);