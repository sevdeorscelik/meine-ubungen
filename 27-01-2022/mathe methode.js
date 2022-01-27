
const rounded = Math.round(1.4);
console.log(rounded); // nächste ganze Zahl

const roundedUp = Math.ceil(1.0001);
console.log(roundedUp); // nächste größere ganze Zahl
console.log(typeof(roundedUp));

const roundedDown = Math.floor(1.999);
console.log(roundedDown); // nächste kleinere ganze Zahl
console.log(typeof(roundedDown));

const integerPart = Math.trunc(1.00);
console.log(integerPart);

// Mininum bestimmen
const mininum = Math.min(0, 150, 30, 20, -8, -200);
console.log(mininum);

// Maximum bestimmen
const max = Math.max(1, 1.5, 900, -1000, 12, 0);
console.log(max);

// Zufallszahl zwichen 0 und 100 (ausschließlich)
let random = Math.random();
random *= 100;
random = Math.round(random);
console.log(random);

// Absoluterte bestimmen
Math.abs(-4.7);

console.log(Math.pow(5, 3)); // 5³
console.log(Math.PI);

// PI
console.log(Math.PI * Math.pow(5, 2)); // radius 5cm -> Fläche 78 cm²

console.log(Math.E);