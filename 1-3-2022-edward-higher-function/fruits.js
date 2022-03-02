const fruits = [ "apple", "orange", "cherry"];

fruits.forEach(fruit => console.log(fruit)); //apple orange cherry verir altalta

fruits.forEach(fruit => {
    console.log(fruit);  //farkli yazim sekli
})


fruits.forEach((fruit,index, array) => {   
    console.log(`This is ${fruit}, (fruit ${index+1} of ${array.length})`);      
});                                 

