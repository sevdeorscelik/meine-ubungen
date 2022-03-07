# Closure, Recursion and Callbacks

Closure, Recursion and Callbacks are three concepts that are quite important in advanced JavaScript. This exercise allows you to demonstrate that you understand the basics of these three concepts.

## 1. Closure

### 1.1. Closure Countdown

- Create a closure function which will count down a number from 5 to 1 by calling the following code:

```
console.log(subtract());
console.log(subtract());
console.log(subtract());
console.log(subtract());
console.log(subtract());
```

### 1.2 Closure Todo List

- Create a closure function which adds todo items to a private array variable (which can't be changed from outside the function).

```
console.log(addTodo('wash dishes'));
console.log(addTodo('go shopping'));
console.log(addTodo('go to bed'));
```

- The output should look like this:

```
Things to do = 1 and they are: wash dishes.
Things to do = 2 and they are: wash dishes, go shopping.
Things to do = 3 and they are: wash dishes, go shopping, go to bed.
```



## 2. Recursion

### 2.1. Recursive Number Adder

- Complete this recursive function which adds numbers:

```
const nums = [1, 2, 3, 4, 5, 6];
function add(nums) {
    ... // base case, return statement
    ... // recursive case
}
console.log(add(nums));
```

### 2.2. Recursive Counter Function

- What do you think this function outputs?
- Run it and try to explain how it works.

```
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
```

## 3. Callbacks

### 3.1. Callback Nametag Generator

- create a function called `createNametag` which receives two parameters: `name` and `cbLanguage`
- calling the function like this:

```
console.log(createNameTag('Lars', getGermanTagPhrase)); // "Guten Tag, ich heiße Lars"
console.log(createNameTag('Lars', getEnglishTagPhrase)); // "Hello, my name is Lars
```

### 3.2. Transform Numbers Function

- create a function called `transformNumbers(nums, cbTransformer)`
- `nums` is an array of numbers, e.g. [1,2,3]
- `cbTransformer` is a callback function
- make three callback functions which transform the numbers in different ways:
    - `doubleIt`, e.g. [2,4,6]
    - `squareIt`, e.g. [2,4,9]
    - `makeItAWord`, e.g. ["one","two","three"]
    - `convertToStars`, e.g. ["*", "**", "***"]
