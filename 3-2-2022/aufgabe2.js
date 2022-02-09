/*
Aufgabenstellung: Finde alle Prinzahlen bis 1000;

Primzahlen sind nur die Zahlen, die durch sich selber und 1 teilbar sind.

Gewünschtes Ergebnis: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293.
*/
/*
let array = [ ] ;

for(var number1 = 2; number1 < 1000; number1++)
{
  for (var number2 = 2; number2 < number1; number2++)
    {
      if(number1 % number2 === 0)
          break;
    }
	if (number1 === number2)
	
    array.push(number1);  
}

console.log(array);
*/
//-------------------

//let number = Math.floor(Math.random() * 100) ;

//console.log(number);

let prinZahlen = [];

for (let i = 2; i <= 1000; i++) {

    if (i == 2 || i == 3 || i == 5 || i == 7) prinZahlen.push(i);

    if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0)
    
        prinZahlen.push(i);
}

console.log(prinZahlen.length);
console.log(prinZahlen);