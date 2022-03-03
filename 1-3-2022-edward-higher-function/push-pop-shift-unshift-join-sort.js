//push("etw")  :   sona element ekler

//pop()   :   sondan element siler

//unschift("etw")  :   basa element ekler

//shift() :   bastan element siler

//join("")  :   arrayi string yapar, parantezin icine ne koyarsan string elemanlarinin arasina o gelir

//sort()    : stringleri basharflerini alfabetik siraya göresiralar
//sort()    : numberleri ilk rakamlarina göre kücükten büyüge siralar
//sort(a, b) => a-b : numberlari kücükten büyüge siralar

//sort by length of word:
const colors = [ "purple", "red", "orange", "blue"]
const colorLength = colors.map( m => m.length).sort();
console.log(colorLength);  //[ 3, 4, 6, 6 ]

//sort by lengh of word: 
const colors2  = colors.sort((a, b) => a.length - b.length);
console.log(colors2);  //[ 'red', 'blue', 'purple', 'orange' ]

//reversed order

const colors3 = colors.sort((a, b) => b.length - a.length);
console.log(colors3); [ 'purple', 'orange', 'blue', 'red' ]


