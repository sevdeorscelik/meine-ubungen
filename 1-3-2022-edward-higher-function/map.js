const nums = [1, 2, 3, 4, 5]

const doubles = nums.map(num => num * 2);
console.log(doubles);


//with reduce

const doublesWithReduce = nums.reduce((acc, num) => {

   // acc.push("hallo")
   //  return acc //[ 'hallo', 'hallo', 'hallo', 'hallo', 'hallo' ]

   acc.push(num*2)
   return acc  //[ 2, 4, 6, 8, 10 ]

}, [])
console.log(doublesWithReduce);



const productIdsAvaible = nums.reduce((acc, num) => {
    if ( num === 3) {
        acc.push(`${num} is not avaible`);
    } else {
        acc.push(num)
    }
    return acc
},[])  //bu array isareti önemli. arraye koyuyir o zaman

console.log(productIdsAvaible);  //[ 1, 2, 3, 4, 5 ]




//array
/*
{
    "1": "avaible",
    "2": "avaible",
    "3": "avaible",
    "4": "avaible",
    "5": "avaible"
}
*/

const objOfAvaibleItem = nums.reduce((acc, num) => {
    if ( num === 4){
        acc[num] = "produce avaible 2022-03-04";
    } else if ( num === 3) {
        acc[num] = "avaible";
        acc[num+"a"] = "avaible"
    } else {
        acc[num] = "avaible";
    }
    return acc;
},{})

console.log(objOfAvaibleItem);

