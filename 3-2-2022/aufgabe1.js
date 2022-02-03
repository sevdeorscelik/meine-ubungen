//1
// Aufgabenstellung: Finde mit einer for -Schleife alle Vielfachen von 3.
// Füge die Vielfachen in ein Array hinzu, bis das Array 200 Elemente lang ist.
// Gewünchtes Ergebnis:
// const multiplesOfThree = [3, 6, 9, 12, 15, 18, ...];
"use strict"

const multiplesOfThree = [];

for (let index = 3; multiplesOfThree.length < 200 ; index+=3) {
   
    multiplesOfThree.push(index);
};

console.log(multiplesOfThree);
console.log("lenght:", multiplesOfThree.length );  



