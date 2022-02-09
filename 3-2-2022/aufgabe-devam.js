/*
//Aufgabe
Liste an Mitarbeitern enthält zehn Mitarbeiternamen und soll in der Konsole ausgegeben werden.
Jeder Name soll ausgegeben werden mit dem 
console.log("John ist Mitarbeiter in der Firma");
console.log("Bob ist Mitarbeiter in der Firma");
// ... verwende eine for-Schleife.

*/

// ext: z.B.: "John ist Mitarbeiter in der Firma".
const employees = ["John", "Bob", "Chuck", "Robert", "Pete", "Nancy", "Ana", "Francy", "Sammy"];


for (let index = 0; index < employees.length; index++) {

    console.log(`${employees[index]} ist mitarbeiter in der Firma`);

}

//for-in

for (let key in employees) {
    employees[key]
    console.log(`2.Lösung: ${employees[key]} ist mitarbeiter in der Firma`);
}  
