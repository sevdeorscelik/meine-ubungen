

//const strongPassword = process.argv[2];
//console.log(strongPassword);

// for-Schleife berechnet eine Zufallszahl. Falls die Zahl übereinstimmt, dann console.log mit dem Treffer.
// wie lange braucht das Programm für unterschiedlich lange Zahlenkombinationen
// zwei Stellen: 78
// drei Stellen: 265
// ...
/*
for (let i = 0; i < 100000; i++) {
    let ZufallZahl = Math.trunc(Math.random() * 100000);
    if (strongPassword == ZufallZahl) {
        console.log("Password is correct");
        i = 100000;
    }
}
*/

let randomNumber = Math.floor(Math.random() * 10) ; // 0 - 999 arasinda

console.log(randomNumber);

while (true) {
    randomNumber = Math.floor(Math.random() * 10);

    if (randomNumber === Number(strongPassword)) {
        console.log("Treffer!");
        // kesmek icin return. ( break sadece switchte)
        return;
    }
}
