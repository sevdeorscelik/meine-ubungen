//includes
//slice
//splice
//reverse
//concat
//every
//some
//indexOf
//lastIndexOf
//findIndex
//fill

//###################################

const bookTitles = ["Sapiens", "Nursery Rhymes", "Atlas"];

console.log(bookTitles.includes("Atlas"));
console.log(bookTitles.includes("Atlas2"));


// code smell
// const color = 'blue';
// if (color === 'red' || color === 'green' || color === 'yellow' || color === 'orange') {
// 	console.log('nice color');
// } else {
// 	console.log('bad color');
// }


const color = 'yellow';
if(['red', 'green', 'yellow','orange'].includes(color)) {
// if (color === 'red' || color === 'green' || color === 'yellow' || color === 'orange') {
	console.log('nice color');
} else {
	console.log('bad color');
}

const lengths = ['red', 'green', 'yellow', 'orange'].map(m => m.length);
console.log(lengths);
