var obtainedmark1 = +prompt("Enter obtained mark in Chemistry")
var obtainedmark2 = +prompt("Enter obtained mark in math")
var obtainedmark3 = +prompt("Enter obtained mark in physics")

var ObtainedMark = obtainedmark1 + obtainedmark2 + obtainedmark3
var totalmarks = 300
var per = ObtainedMark / totalmarks * 100
document.write(`Total marks : ${totalmarks} <br> Marks obtained : ${ObtainedMark} <br> Percentage : ${per}% <br>`)
if(per >= 80){
   document.write(`Grade : A-one <br>Remarks Excellent`)
}
else if(per >= 70){
    document.write(`Grade : A <br>Remarks Good`)
 }
 else if(per >= 60){
    document.write(`Grade : B <br>Remarks You need to improve`)
 }
 else{
    document.write(`Grade : Fail <br>Remarks Sorry`)
 }