const nums = [1, 2, 3, 4, 5]

let initialValue = 0;
const sum = nums.reduce((acc, item) => {
    return acc + item
}, initialValue)

console.log(sum);


const numberString = nums.reduce((acc, num, index, arr) => {

    if (index === arr.length - 1 ) {
        return acc + num;
    } else {
        return  acc + String(num) + "-";
    }
    
}, "")

console.log(numberString);
console.log(nums.join("-"));

