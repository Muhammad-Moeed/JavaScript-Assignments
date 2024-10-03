// 11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array. 
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar", "Multan"];
document.write(`Cities List: <br/>  ${cities} <br/> <br/>`);

selectedCitites=  cities.slice(0,3)
document.write(`Selected cities List: <br/> ${selectedCitites}`);