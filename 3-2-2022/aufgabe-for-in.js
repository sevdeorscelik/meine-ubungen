// Array mit Zahlen. Sortiere die Zahlen im Array in zwei neue Arrays, eines mit ungeraden Zahlen und geraden Zahlen.
// benutzer eine for-of-Schleife.


const numbers = [54, 23, 7, 11, 342, 89, 67, 41, 97, 35];
const evenNumbers = [];
const oddNumbers = [];

for (let index of numbers) {
    if (index % 2 === 0) {
        evenNumbers.push(index);

    } else {
        oddNumbers.push(index);

    }
}
console.log("Even Numbers: ", evenNumbers);
console.log("Odd Numbers", oddNumbers);