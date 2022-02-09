/*
Falls Nutzer angemeldet ist, 
    zeige ihm seine Chronik an,
    sonst die Startseite
*/ 

let isLoggedIn = true; // nicht initialisiert

    // Condition, Bedigung
if (isLoggedIn === true) {
    //Nutzer weiterleiten zur Nutzerchronik
    console.log("Deine Chronik...");
}
else {
    console.log("Startseite... mit Anmeldung");
}

//Beispiel 2. Reisebudget




// Beispiel 3: BMI
let gewicht;
let groesse;

/* Nutzer abfrage */
gewicht = 60;
groesse = 1.70;

let bmi = gewicht / groesse ** 2 ;

if( 20 < bmi <=25 ) {
    console.log("dein BMI ist im Normalbereich");
} else {
    console.log("Dein BMI ist außerhalb des Normalbereichs.");
}

console.log("Ende");

/* 
Situation:
Eine Ampel hat rot, gelb oder grün schalten.
Falls grün, darf der Fahrer die Straße überqueren.
Falls gelb, muss er den Bremsvorgang einsetzen.
Falss rot, darf er die Ampel nicht mehr überqueren.
*/

let ampel; // kann "rot, "gelb oder "grün" sein
let fahrer = "steht";

if(ampel === "grün") {
    console.log("Der Fahrer die Straße überqueren.");
    fahrer = "fährt" ;

} else if (ampel == "gelb") {
    console.log("Der Fahrer die Straße nicht überqueren");
    fahrer = "steht";
    console.log(fahrer);

} else {
    console.log("Der Fahrer darf die Ampel nicht mehr überqueren");
    fahrer = "steht";
    console.log(fahrer);

}

/*mit Switch*/


