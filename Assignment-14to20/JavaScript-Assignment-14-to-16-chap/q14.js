// 14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last InFirst Out) 
var devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
var out;
document.write("Devices:" + "<br/>" + devices + "<br/>" + "<br/>");

out = devices.pop();
document.write(`Out:<br/> ${out} <br/>`);
out = devices.pop();
document.write(`Out:<br/> ${out} <br/>`);
out = devices.pop();
document.write(`Out:<br/> ${out} <br/>`);
out = devices.pop();
document.write(`Out:<br/> ${out} <br/>`);