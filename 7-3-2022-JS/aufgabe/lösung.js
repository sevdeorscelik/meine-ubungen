const title = (num) => {
    console.log(`=============== AUFGABE ${num} =============`);
}

//1-Closure

//1.1
title(1)


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
title(2)


const addTodo = (todo) => {
    
}