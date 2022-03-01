const person = {
    firstName : "Niko",
    lastName : "Schmidt"
}

console.log(Object.entries(person)); // array icinnde iki array seklinde verir
console.log(Object.keys(person)); //sadece keyleri array icinde verir
console.log(Object.values(person)); //sadece degerleri array icinde verir


const field = "lastName";

console.log(person[field]);  //Schmidt verir

const person2 = person;

console.log(person2.lastName);  //Schmidt

person2.lastName = "newname";
console.log(person2.lastName);  //newname
console.log(person.lastName); //newname