//1
const array = [1, 6, 83, 91, 0, -4, 1337, 3000];

const maxNumber = (array) => {
    let maxi = Math.max(...array);
    console.log(maxi);
};

maxNumber(array);

//2
let arr = [];

const wieder = (word) => {

    for (let index = 0; index < 5; index++) {
        for (let i = 1; i < 2; i++) {
            arr.push(i);
        }
    }
};

wieder(arr)