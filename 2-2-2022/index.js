

index = 89;
while(index<=100) {
    console.log(index);
    index++;
}


// Alle geraden Zahlen - cift sayilar

number = 0;
while(number<=100) {
    console.log(number);
    number += 2;
}

//Aufgabe1: Zwei Arrays sollen mit Zahlen gefüllt.
//Das erste mit ungeranden Zahlen und das zweite mit geraden Zahlen.
//Am ende sollen beide Arrays exakt 100 Elemente groß sein.


index = 0;
const evenNumbers = [];
const oddNumbers = [];

//geraden Zahl
while(evenNumbers.length < 100){
    evenNumbers.push(index);
    index+=2;
}

// ungeraden Zahlen

index = 1 ;

while(oddNumbers.length < 100) {
    oddNumbers.push(index);
    index +=2;
}
console.log(evenNumbers.length);
console.log(oddNumbers.length);

console.log("evenNumbers", evenNumbers);
console.log("oddNumbers", oddNumbers);



console.log("---------------------------------------------------------");





