var trafficColor = prompt("Enter a traffic color signal")

var lower = trafficColor.toLocaleLowerCase()
if(trafficColor==="red"){
document.write(`
    <table>
    <tr>
    <th>Signal Color</th>
    <th>Message</th>
    </tr>
    <tr>
    <td>Red</td>
    <td>Must Stop</td>
    </tr>

    </table>
    `)
}
else if (trafficColor === "yellow"){
document.write(
    `
    <table>
    <tr>
    <th>Signal Color</th>
    <th>Message</th>
    </tr>
    <tr>
    <td>Yellow</td>
    <td>Ready to Move</td>
    </tr>

    </table>
    `
)
}
else if (trafficColor==="green"){
document.write(
    `
    <table>
    <tr>
    <th>Signal Color</th>
    <th>Message</th>
    </tr>
    <tr>
    <td>Green</td>
    <td>Move now</td>
    </tr>

    </table>
    `
)
}