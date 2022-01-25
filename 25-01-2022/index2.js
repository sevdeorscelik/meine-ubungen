
let result = typeof(5) ; // number
console.log(result);

result = typeof("Hello World!"); // string
console.log(result);

result = typeof(true); // boolean
console.log(result);

const isEqual = "3" == 3 ; // auf gleichheit und typen-glecihheit 
console.log(isEqual);

const myNumber = 1.890.toFixed(2); // bu bir string olur 
console.log(myNumber);
console.log(typeof(myNumber));;

const isBigger = myNumber < 2 ;
console.log(isBigger );


console.log(typeof([1, 2, 3])); // array

/*
Datentyp undefined
Datentyp null
*/

let x ;
console.log(x); // undefined - zu gewesen - keine fehler


let y = null ;
console.log(y); // null, ergebnis nicht, es gibt kein wert, keine Daten.


// beispiele für null
let wohnort = ""; 
let alter = null ;


/*
Modulo-Rechnung
*/
console.log(10%2);  // rest = 0
console.log(11%2);  // rest = 1
console.log(12%2);  // rest = 0
console.log(13%2);  // rest = 1

console.log(15%5); // 1
console.log(16%5); // 2
console.log(17%5); // 3
console.log(18%5); // 4
console.log(20%5); // 0
console.log(21%5); // 1