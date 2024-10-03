// a
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
document.write("given condition for variable a is true <br>");
//Condition True
}

// b
var b = 82;
if (b++ === 83){
alert("given condition for variable b is True");
//Condition False
}

// c
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
//Condition False
}
if (c === 13){
alert("condition 2 is true");
document.write("condition 2 is true <br>");
//Condition True
}
if (++c < 14){
alert("condition 3 is true");
//Condition False
}
if(c === 14){
alert("condition 4 is true");
document.write("condition 4 is true <br>")
//Condition True
}

// d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
document.write("The cost equals <br>");
//Condition True
}

// e
if (true){
alert("True");
document.write("True");
//Condition True
}
if (false){
alert("False");
}



// f
if("car" < "cat"){
alert("car is smaller than cat");
document.write(" car is smaller than cat");
//Condition True
}