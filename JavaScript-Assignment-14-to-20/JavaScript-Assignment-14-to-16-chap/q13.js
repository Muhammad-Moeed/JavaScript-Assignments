// 13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)
var devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
var out;
document.write(`Devices: <br/> ${devices} <br/> <br/>`);

out = devices.shift();
document.write(`Out:<br/> ${out} <br/>`);
out = devices.shift();
document.write(`Out:<br/> ${out} <br/>`);
out = devices.shift();
document.write(`Out:<br/> ${out} <br/>`);
out = devices.shift();
document.write(`Out:<br/> ${out} <br/>`);