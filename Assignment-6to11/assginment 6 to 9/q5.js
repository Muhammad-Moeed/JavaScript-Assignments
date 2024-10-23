// a
var sub1 = prompt("Enter subject 1 name")
var sub2 = prompt("Enter subject 2 name")
var sub3 = prompt("Enter subject 3 name")

// b
var totalMarks = 100

// c & d
var ob1 = +prompt("Enter obtained marks in subject 1")
var ob2 = +prompt("Enter obtained marks in subject 2")
var ob3 = +prompt("Enter obtained marks in subject 3")

//e
var totalSubjectMarks = 100 * 3
var totalobtainedMarks = ob1 + ob2 + ob3

var persub1 = ob1 / totalMarks * 100
var persub2 = ob2 / totalMarks * 100
var persub3 = ob3 / totalMarks * 100

var per = totalobtainedMarks / totalSubjectMarks * 100

document.write(
    `
    <table>
    <tr>
    <th><pre>Subject  </pre></th>
    <th><pre>Total Marks  </pre></th>
    <th><pre>Obtained Marks  </pre></th>
    <th><pre>Percentage </pre>  </pre></th>
    </tr>

    <tr>
    <td>${sub1}</td>
    <td>${totalMarks}</td>
    <td>${ob1}</td>
    <td>${persub1}%</td>
    </tr>

    <tr>
    <td>${sub2}</td>
    <td>${totalMarks}</td>
    <td>${ob2}</td>
    <td>${persub2}%</td>
    </tr>

    <tr>
    <td>${sub3}</td>
    <td>${totalMarks}</td>
    <td>${ob3}</td>
    <td>${persub3}%</td>
    </tr>

    <tr>
    <td></td>
    <td>${totalSubjectMarks}</td>
    <td>${totalobtainedMarks}</td>
    <td>${per}%</td>
    </tr>

    </table>
    `
)
