/*
return
*/


const wechselkursrechner = (betrag, kurs) => {
    let ergebnis = (betrag * kurs).toFixed(2);
    return ergebnis;

}


const zweiergebnis = wechselkursrechner(100, 1.14);
//provision
const endbetrag = zweiergebnis * 0.9;
console.log(endbetrag);

//

//hilfsfunktion schreiben

const salariesHR = [1200, 3300, 450, 200, 2500];
const salariesIT = [2500, 3800, 4100, 2100, 3589];


const average = (array) => {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        sum += array[index];
    };
    return sum;
};

const averageHR = average(salariesHR);
const averageIT = average(salariesIT);

const compareSalaries = (average1, average2) => {
    const bigger = Math.max(average1, average2);
    return bigger;
}

    if(averageHR == calcBiggerSallary) {
        console.log("HR has the bigger salary");
    }

    //tamamlanmadi