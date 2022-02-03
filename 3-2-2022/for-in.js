
const employees = ["John", "Bob", "Chuck", "Robert", "Pete", "Nancy", "Ana", "Francy", "Sammy"];


for (let key in employees) {
    employees[key]
    console.log(`${employees[key]} ist mitarbeiter in der Firma`);
}  


//while

index = 0;

while (index < salaries.length) {
    salaries2022.push(salaries[index]+100);
    index++;
}
//for schleife

for(let index = 0; index < salaries.length; index++){
    salaries2022.push(salaries[index] + 100);
}

// for in
//kritik for-in schleifen in derAusführung etwas langsamer

for(let salariesIndex in salaries) {
    salaries2022.push(salaries[salariesIndex] + 100) ;
};

// for-of-loop

const customers = [ "Dan", "Franky", "Sarah", "Henry", "Chuck"];

for(let customer of customers) {
    console.log(`${customer} is customer of the company`);
}
const myString = "Hello World! How have you been? Have a nice day!";
const myArray = [];
for(let letter of myString){
    console.log(letter);
}
console.log(myArray);