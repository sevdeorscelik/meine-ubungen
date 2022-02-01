// else if

// Beispiel Ampel
/*
const ampel = "rot" // gelb oder rot

if (ampel === "rot") {
    console.log("Der Fahrer darf dir Kreuzung überqueren.");
} else if (ampel === "gelb") {
    console.log("Der Fahrer setzt den Bremsvorgang ein.");
} else if (ampel === "rot") {
    console.log("Der Fahrer muss stehen bleiben.");
} else {
    console.log("Die Ampel ist defekt");
}
*/
// switch - case

//beispiel mit wochentagen

const aktuellerWochentag = "Montag"; // "Montag", "Dienstag", ..."Samstag"

switch (aktuellerWochentag) {

    case "Montag":
        console.log("Eine neue Woche beginnt.");
        console.log("Ders erste Arbeitstag in der neuen Woche.");
        break;
    case "Dienstag":
        console.log("Auto in die Reinigung bringen.");
        break;
    case "Mittwoch":
        console.log("Wascg- & Putztag.");
        break;
    case "Donnerstag":
        console.log("Filmabend.");;
        break;
    case "Freitag":
        console.log("Essensabend");
        break;
    case "Samstag":
        console.log("Wandertag");
        break;
    case "Sonntag":
        console.log("Familientag");
        break;
    default:
        console.log("Heute ist ein Spaßtag");
}



// Ampel mit switch case

const ampel = "grün"

switch (ampel) {
    case "grün":
        console.log("Der Fahrer darf dir Kreuzung überqueren.");
        break;
    case "gelb":
        console.log("Der Fahrer setzt den Bremsvorgang ein.");
        break;
    case "rot":
        console.log("Der Fahrer muss halten.");
        break;
    default:
        console.log("Die Ampel ist defekt");

}