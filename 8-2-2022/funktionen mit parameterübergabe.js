// Funktionen mit Parameterübergabe

const calcExponential = (number) => {
    const result = number ** 2 ;
    console.log(result);
}

calcExponential(12);
calcExponential(112);


//brutto monats geld rechner

const gehaltsRechner = (zahlstunden, stundengehaltsRechner) => {
    //stunden*gehaltsRechner
    const unternehmensbonus = 20;
    const gehaltsRechner = zahlstunden * stundengehaltsRechner + unternehmensbonus;
    //console.log(gehaltsRechner,"Euro");

    //4% provizion an die absicherung
    if(absicherung){
        gehalt = gehalt * 0.96;
    }
    console.log(`Das Gehalt von ${mitarbeitername} beträgt ${salary}`);
}

//John
gehaltsRechner("John", 8, 12, true); // 716 euro aylik gelir

//Bob
gehaltsRechner("Bob", 68, 22, false); //3716 euro aylik gelir

//Ana mit 112 stunden im Monat, 18 euro gehaltsRechner 
gehaltsRechner("Ana",112, 18, false);

///beispiel 2

const carpma = (a,b) => {
    const c = a * b;
    console.log(c);
};

const bölme = (a,b) => {
    const c = a / b;
    console.log(c);
};
const toplama = (a,b) => {
    const c = a + b;
    console.log(c);
};
const cikarma = (a,b) => {
    const c = a - b;
    console.log(c);
};
carpma(3, 4);
bölme(15, 5);
toplama(2, 5);
cikarma(8, 9);