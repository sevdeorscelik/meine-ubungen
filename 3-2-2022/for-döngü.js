// for - schleife

let index = 0;
while (index < 10) {
    console.log("while-schleife:", index);
    index++;
}

//aynisini for ile bu sekilde su sekilde yazariz : 

for (let index = 0; index < 10; index++) {
    console.log("for-schleife:", index);
}

//use strict
"use strict";

for (let index = 0; index < 10; index++) {
    console.log("use-strict", index);
}

//beispiel alle geraden zahlen von 100 bis 120
const evenNumbers = [];

for (let index = 100; index < 120; index += 2) {
    console.log("beispiel", index);
    evenNumbers.push(index); //array´e pushlayalim
}

console.log("evenNumbers array: ", evenNumbers); //arayi yazdiralim

//beispiel : ein array mit 50 ungeraden Zahlen aufbauen

const oddNumbers = [];

for (let index = 1; oddNumbers.length < 50; index += 2) {
    oddNumbers.push(index);
};
console.log("oddNumbers array", oddNumbers);


//**** Nested Array *****

//0 dan 5 e kadar alta alta 10 kez yaz. tek console.log kullanarak
for(let index = 0; index < 10; index++){
   console.log("nested Array", 0, 1, 2, 3, 4, 5);

};

//breite

for (let index = 0; index < 10; index++) {
    
    //breit
    let string = " ";
    for (let counter = 0; counter <= 5; counter++) {   // console´un icine uzun uzun syilari yazmamak icin burda yeni bir for denklemi kuruyoruz
        string = string + counter + " ";
    }
    console.log("andre Lösung", string);
}

//beispiel : 1 1 1 2 2 2 3 3 3 
//          1 1 1 2 2 2 3 3 3 
//          1 1 1 2 2 2 3 3 3   bu sekilde nasil yazariz?

for( let repeat = 0; repeat < 3; repeat++){

    let zahlenString = " ";
    for (let index = 1; index<=3; index++){

        for (let counter = 0; counter < 3; counter++) {
            zahlenString = zahlenString + index + " ";
            
        };
    };
    console.log("zahlenString:", zahlenString);
};

