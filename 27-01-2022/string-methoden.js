
// String methoden

const greeting = "Hello World! Today is Thursday morning.";

//property length
greeting.length;

//methoden : toUpperCase(), toLowerCase()

greeting.toUpperCase();
greeting.toLowerCase();

//methoden: includes()
greeting.includes("morning");

//methoden substring
greeting[0]; //H
greeting[4]; // o
const subGreeting = greeting.substring(0, 5); // Hello (endIndex not included)
console.log(subGreeting);


console.log(greeting);



//**** Arrays

const dogs = ["Bello", "Rex", "Tiger", "Sniffy"];

//propety:length
dogs.length;

//methode  push
dogs.push("Flizzer");

//methode pop
dogs.pop();

//letztes Element im Array
dogs[dogs.length -1];


console.log(dogs);


