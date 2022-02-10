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


//.
//.
//.

//Loops

const d = new Date() ;
let hour = d.getHours();

while(hour >= 12 && hour < 14) {
    console.log("Mahlzeit");;
    hour = d.getHours();
   
}


//mit for
for (let index = 0; index < array.length; index++) {
  console.log(array[index]);   
}

//for-in
//index in Array
for (let index in array) {
   console.log(array[index]);
}

//for-of
//element im Array
for (let element of array) {
    console.log(element);
}

//functionen
const numbers = [ 1,7,5,2,9,7,3];

const sortArray = () => {
//TODO: Algorithmus
};

const findBiggestAndSmallestNumbers = () => {
    //TODO: Math.max(...numbers) und Math.min(...numbers);
}

const calcAverage = () => {
    //TODO: Summe/Length
};


//function mit parameters

const myFunctionWithParam = (param1) => {
    console.log(`Mr./Mrs. ${param1} do you job!`);
}

//Beispiel
const greetEmployees = (radomArray) => {
    for(let person of randomArray) {
        console.log(`Good morning ${person}`);
    }
}

greetEmployees(myArray)


//functionen mit returns
//...


//schleifen in schleifen

let namesInCompany = [
    ["Nancy", "Sammy", "Greg", "Oscar", "Francine", "John"],
    ["Flinn", "Peter", "Robert", "Ana", "Jenny"]
];

for(let unterarrayIndex = 0; unterarrayIndex < namesInCompany.length; unterarrayIndex++) {

    for(let employeeIndex = 0; employeeIndex < namesInCompany[unterarrayIndex][employeeIndex]; ){
        console.log(namesInCompany[unterarrayIndex][employeeIndex]);
    }
}


//devami lessonde material 10-2-2022


