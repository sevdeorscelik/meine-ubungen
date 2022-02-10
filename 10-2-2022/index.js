//string methoden

const greeting = "         Hello World    \n";

//länge besstimmen
const lengthOfString = greeting.length;

//zuggriff per index
const firstLetter = greeting[0]

//slice
console.log(greeting.slice(0, 3)); //index 3 ist exklusiv "Hel"

//split
console.log(greeting.split(" ", 1)); // [ "Hello", "World"]

//trim
console.log(greeting.trim()); // Hello World!

//includes 
greeting.includes("Hello") //returns a boolean

//zahlenmethoden
console.log(Math.PI);
console.log(Math.floor(3.4)); //3
Math.max(2,3,4,5,6,7) //7
Math.min(1,2,3,4,5,6) //1
console.log(Math.ceil(3.2)); //4
console.log(Math.round(3.5)); //4 - yakin olana yuvarlar
Math.random() //zwischen 0 - 1(ink)
Math.abs(-4) //4
Math.sqrt(9) // 3 - karekök alir





