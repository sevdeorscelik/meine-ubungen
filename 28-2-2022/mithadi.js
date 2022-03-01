//1
let plus = "";
for (i = 1; i <= 4;i++) {
    plus += "+";
    console.log(plus);
    
}

//1.2

let plus = "";
for (let i = 5; i >= 1; i--) {
    for (let x = 1; x < i; x++) {
        console.log("#");
    }

}

//-------------
let i="";
for(let i = 1; i<=5; i++){
    console.log(i);
}

for (let i = 5; i >= 1; i--) {
   console.log(i);
    

}




//2.1

const names = ["Ali", "Nancy", "Olga", "Steel"];
const avatars = ["😎", "😉", "😍", "🐢"]
const likes = [22, 345, 667, 89]


for (let index = 0; index <= names.length - 1; index++) {

    console.log(`${avatars[index]} ${names[index]} got ${likes[index]}`);
}

//2.2



//3

for (let i = 1; i <= 5; i++) {
    console.log(i==1 ? `There is ${i} star in the sky` : `There are ${i} stars in the sky`);
   // (i === 1) ? console.log(`There is ${i} star in the sky`): console.log(`There are ${i} stars in the sky`);
}

console.log("1" == true ? "Cool" : "Sorry");


//AEIOU

function findVowels (string) {
   let arr = string.split("");
   let vowel="";
    for (i of arr) {
        if(i === "a" || i==="e" || i==="u" || i==="o" || i==="i") {
            vowel+=i;  
        }
    }
    console.log(vowel.length);
}

findVowels("this is a string")

//----
const vowelCount = (string) => {
    return (string.match(/[a,e,i,o,u]/gi) || []).length;
  };

//-----


  