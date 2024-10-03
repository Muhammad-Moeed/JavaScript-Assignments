// Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for(i=0; i<fruits.length; i++){
    document.write(`${fruits[i]} <br>`);
}
for(j=0; j<fruits.length; j++){
    document.write(`Element at index  ${j}  is  ${fruits[j]}  <br>`);
}