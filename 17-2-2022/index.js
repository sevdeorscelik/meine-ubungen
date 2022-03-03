//object methoden


//beispiel einer Problemsituation

const kunde = {
    firstName: "Peter",
    lastName: "Conners",
    fullName: "Peter Conners",
    adress: "First Av. 1569, Brooklyn NY",
    contactNumber: "(+1) 4289 (123) - 1987",
    mail: "peeter.conners@icloud.com"

}


//Kunde evlendi ve soyadi degisti.

kunde.lastName = "Smith";

console.log(kunde);


//soyadi degistirdik ama fullName eski soyad ile kaldi

//"Wichtig! Ich denke dran! Ein update des full names bevor ich den full name anpasse kunde.fullName = kunde.firstName + " " + kunde.lastName 
//console.log(kunde);


//WARNUNG! DATENBESTÄNDE GEHEN IN DATENBANKEN MIT DER ZEIT AUSEINANDER

//lösung:


const kunde = {
    firstName: "Peter",
    lastName: "Conners",
    fullName: function (){
        return `${kunde.firstName} ${kunde.lastName}`
    },
    adress: "First Av. 1569, Brooklyn NY",
    contactNumber: "(+1) 4289 (123) - 1987",
    mail: "peeter.conners@icloud.com"

}

kunde.lastName = "Smith"

const fullName = kunde.fullName() ; //object methoden
console.log(fullName);
console.log(kunde);

//baska bir yöntem
const kunde = {
    firstName: "Peter",
    lastName: "Conners",
    fullName: function (){
        return `${this.firstName} ${this.lastName}`
    },
    adress: "First Av. 1569, Brooklyn NY",
    contactNumber: "(+1) 4289 (123) - 1987",
    mail: "peeter.conners@icloud.com"

}

kunde.lastName = "Smith"

const fullName = kunde.fullName() ; //object methoden
console.log(fullName);
console.log(kunde);


/////************************
//Beispiel2


const room_A2 = {
    type: "single room",
    size : 20,
    netto_rent : 350,
    expenes: 120,
    brutto_rent: function() {
        return this.netto_rent + this.expenses; }
};

//bir yil sonra artis 10euro olacak
room_A2.netto_rent += 10;
room_A2.brutto_rent();

console.log(room_A2.brutto_rent()); //350 + 130

//object methodlarini sadece kücük operationlarda kullaniriz. statik double informationdan kacinmak icin.