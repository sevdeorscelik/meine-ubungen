//CLOSURE

const add = (function () {
    let counter = 0;
    return function () {counter += 1; return counter}

})(); //sondaki () ayni fonksiyonu tekrar cagiriyor
 
console.log(add());
console.log(add());
console.log(add());

//örnek-1
const carp = (() => {
    let counter = 1;
    return () => {
        counter *= 2;
        return counter
    }
})();

console.log(carp()); //2
console.log(carp()); //4
console.log(carp()); //8
console.log(carp()); //16
console.log(carp()); //32


//örnek-2:

function mainFunct() {
    
    function withTwo(){
        return 2*2
    }
    function withThree(){
        return 3*3
    }
    return{
        withTwoFunc:withTwo(),
        withThreeFunc: withThree()
    }
}

const mainFuncs = mainFunct()

console.log(mainFuncs.withThreeFunc);
console.log(mainFuncs.withTwoFunc);


//örnek-3


