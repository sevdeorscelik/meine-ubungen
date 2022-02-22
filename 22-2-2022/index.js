const books = [{
        title: "the bad man",
        author: "giacomo",
        alreadyRead: false
    },
    {
        title: "freedom",
        author: "marion",
        alreadyRead: false
    }
]

for (let book of books) {
    if (book.alreadyRead) { // === true yerine direkt böyle yazabiliriz
        console.log(`You already read ${book.title} by ${book.author}`);
    } else {
        console.log(`You still need to read ${book.title} by ${book.author}`);
    }
}

//2. yazim sekli

for (let book of books) {
    book.alreadyRead
       ? console.log(`You already read ${book.title} by ${book.author}`)
       : console.log(`You still need to read ${book.title} by ${book.author}`)
}



//2.soru// hepsni tek bir arraye koyduk
let result = [];
for (let book of books) {
    result.push(...Object.keys(book));
}
console.log(result);



//3 - her satiri array yapti
let result2 = [];
for (let book of books) {
    result2.push(Object.entries(book));
}
console.log(result2);