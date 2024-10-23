// 15.  Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method: 
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write(`
    <select style='color:blue; padding:10px 20px;'>
    <option>${phoneManufacturers[0]}</option>
    <option>${phoneManufacturers[1]}</option>
    <option>${phoneManufacturers[2]}</option>
    <option>${phoneManufacturers[3]}</option>
    <option>${phoneManufacturers[4]}</option>
    <option>${phoneManufacturers[5]}</option>
    </select>
    `)