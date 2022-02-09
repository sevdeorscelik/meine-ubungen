// *Aufgabe*
// araba 10 paket aliyor. 
// 5 paket kaldiysa ara veriyorsun
//paket varsa dagitimda yaz, pausedeysen pause yaz,

let anzahlPakete = 10 ;

while(anzahlPakete > 0){
    
    if (anzahlPakete < 10 && anzahlPakete % 5 === 0) {
        console.log(`Ich mache eine Pause. Heute habe ich noch ${anzahlPakete} Pakete übrig`);
    }
    console.log(`Paket ausgeliefert. Ich habe noch ${anzahlPakete} übrig` );
    anzahlPakete--;


}

// Aufgabe 3
// wir wollen einen String mit Sinnlostext füllen, damit er eine Länge von 500 Zeichen erreicht.
/*
let myString = "";

while ( myString.length < 500 ) {
    console.log(myString);
    myString= myString + "abc";
}

console.log(myString.length);
*/

let myString="";
let randomNumber;

const alphabet = [ "a", "b", "c", "d", "e", "f"];

do {
    randomNumber = Math.floor(Math.random() * alphabet.length);
    myString = myString + + alphabet[randomNumber];
} while (myString.length < 500) ;
    console.log(myString);





