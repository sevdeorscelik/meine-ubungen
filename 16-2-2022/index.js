const employee = ["Bob", "Chuck", "John"];

const emploseeSalaries = [3200, 4850, 5300];

console.log("John verdient ?"); // wie finde ich John´s Gehalt

/*

objeckte
--> Struktur
--> Daten modellieren

*/

const employee = {
    id: "A12",
    name: "John",
    gehalt: 3200
};

console.log(`${employee.name} verdient ${employee.gehalt}`);

const employees = [{
        id: "A12",
        name: "John",
        gehalt: 3200
    },
    {
        id: "A14",
        name: "Bob",
        gehalt: 2850
    }
];

for (let object of employees) {
    console.log(object.name, object.gehalt);
}


//Objekt : Auto

const ford_01 = {
    marke: "Ford",
    modell: "Fiesta",
    erscheinungsjahr: 200,
    leistung: "55PS"
}

const ford_02 = {
    marke: "Ford",
    modell: "Mustang",
    erscheinungsjahr: 2015,
    leistung: "90PS"
}

const fiat_01 = {
    marke: "Fiat",
    modell: "e500",
    antrieb: "Elektrisch",
    erscheinungsjahr: 2021,
    leistung: "45KW "
}

//Bir objenin herhangi bir ögesini yazdirmak icin iki yol :

//1- Zugriff über Punktnotation
console.log(fiat_01.leistung);;

//2- Zugriff über Klammernnotation
console.log(fiat_01["leistung"]);

//Objekt´tin bir özelligini degistirmek
fiat_01.leistung = "50KW"

console.log(fiat_01); // artik leistung´u 50KW olarak veriyor


//Person
const jan = {
    name: "Jan",
    alter: 28,
    anschrift: "Berlin",
}

console.log(jan);

