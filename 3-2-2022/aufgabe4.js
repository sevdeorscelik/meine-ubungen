/*
Recherchiere im Internet nach Fibbonaci Zahlen und finde die ersten 40 Zahlen in einer for-Schleife.
*/


fibonacciNumbers = [];
let number1 = 0;
let number2 = 1;

let number3;

for (let index = 0; index < 40; index++) {

    number3 = number1 + number2;

    number1 = number2;
    number2 = number3;

    fibonacciNumbers.push(number3);
}

console.log(fibonacciNumbers);
console.log(fibonacciNumbers.length);


//**** */
let a = 0;
let b = 1;
let c;
const fib = [1 ];

for (let index = 0; index < 40; index++) {

    c = a + b;

    a = b ;
    b = c ;
    
    fib.push(c);

}

console.log(fib);

/*
a b c b+c 
  a b c b+c
    a b c b+c

1 2
1 2 3
1 2 3 5
1 2 3 5 8
*/