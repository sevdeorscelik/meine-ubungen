
//Array fontionen

//alt
//function myFunction() {
//    console.log("Hello World!");
//}

//neu

//const myFunction = () => {
//    console.log("Hello World!");
//};

/*
Beispiel: Durchschnittwert aus einem Zahlenarray bestimmen
*/



const numbers = [ 1, 3, 5, 8, 2, 5, 1, 8, 9, 4] ;

const calcAverage = () => {
    //bereichne edn Durchschnitt der Zahlen
    1 + 3 + 5 + 8 + 2 + 5 + 1 + 8 + 9 + 4 / 10;

    let sum = 0;
    for (let number of numbers) {
        //summe bilden
        sum += number; //  1 + 3 + 5 + 8 + 2 + 5 + 1 + 8 + 9 + 4
    }

//summe durch die Menge der Zahlen dividieren
console.log(sum / numbers.length);
}

calcAverage();