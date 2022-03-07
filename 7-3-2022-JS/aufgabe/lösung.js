const title = (num) => {
    console.log(`=============== AUFGABE ${num} =============`);
}

//1-Closure

//1.1
title(1.1)


const subtract = (() => {
    let sub = 6;
    return () => {
        sub --;
        return sub
    }
})(); 

console.log(subtract());
console.log(subtract());
console.log(subtract());
console.log(subtract());
console.log(subtract());


//1.2
title(1.2)


const addTodo = (() => {
    let num = 0 ;
    let todos = "";

    return (todo) => {
        num++;
        todos += todo + ", "
        return `Things to do = ${num} and they are: ${todos}`
    }

})();

console.log(addTodo('wash dishes'));
console.log(addTodo('go shopping'));
console.log(addTodo('go to bed'));



//2-Recusion

//2.1
title(2.1)

const nums = [1, 2, 3, 4, 5, 6];
function add(nums) {
     // base case, return statement
     // recursive case
}
console.log(add(nums));





title(2.2)

function counter(value, limit) {
	if (value === limit) {
		console.log(value);
	} else {
		console.log(value);
		counter(value + 1, limit);
		console.log(value);
	}
}
counter(0, 3);






title(3.1)

const getGermanTagPhrase = () => {
    return `Guten Tag, ich heiße `;
}

const getEnglishTagPhrase = () => {
    return `Hello, my name is `
}

const createNametag = (name, cbLanguage) => {
   return cbLanguage() + name
}


console.log(createNametag('Lars', getGermanTagPhrase)); // "Guten Tag, ich heiße Lars"
console.log(createNametag('Lars', getEnglishTagPhrase)); // "Hello, my name is Lars







title(3.2)

let numbers = [1,2,3]

const doubleIt = () => {
    return numbers.map(m => m*2);
}


const squareIt = () => {
    return numbers.map(m => m**2);
}


const makeItAWord = () => {
    const wordsOfNumbers = [ "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    return numbers.map( m => wordsOfNumbers[m-1])

}


const convertToStars = () => {
    return numbers.map( m => "*".repeat(m))  
}


const transformNumbers = (numbers, cbTransformer) => {
    return cbTransformer(numbers)
}



console.log(transformNumbers(numbers,doubleIt));
console.log(transformNumbers(numbers,squareIt));
console.log(transformNumbers(numbers,makeItAWord));
console.log(transformNumbers(numbers,convertToStars));

