class Publication {
	constructor(title, numberOfPages) {
		this.title = title;
		this.numberOfPages = numberOfPages;
	}

	displayAsLine() {
		return `TITLE: ${this.title}, NUMBER OF PAGES: ${this.numberOfPages}`;
	}
}

class Book extends Publication {
	constructor(title, author, numberOfPages) {
		super(title, numberOfPages);
		this.author = author;
	}

	displayAsLine() {
		return `TITLE: ${this.title}, AUTHOR: ${this.author}, NUMBER OF PAGES: ${this.numberOfPages}`;
	}

	displayAsBlock() {
		return `TITLE: ${this.title}
AUTHOR: ${this.author}
NUMBER OF PAGES: ${this.numberOfPages}`;
	}

	// factory pattern
	static instantiateBook(title, author, numberOfPages) {
		return new Book(title, author, numberOfPages);
	}
}

class Books {
	constructor() {
		this.books = [];
	}

	addBook(book) {
		this.books.push(book);
	}

	getBooksAsArray() {
		return this.books.map(book => book.displayAsLine());
	}

	listBooks() {
		return this.getBooksAsArray().join('\r\n');
	}
}

class Magazine extends Publication {
	constructor(title, issueNumber, numberOfPages) {
		super(title, numberOfPages);
		this.issueNumber = issueNumber; 
	}

	displayAsLine() {
		return `TITLE: ${this.title}, ISSUE NUMBER: ${this.issueNumber}, NUMBER OF PAGES: ${this.numberOfPages}`;
	}
}
// code smell
const book = Book.instantiateBook('Sapiens', 'Yuval Harari', 543);
const book2 = new Book('JavaScript Functional Programmign', 'Federico Kereki', 433);
// console.log(book.displayAsLine());
// console.log(book2.displayAsBlock());
// console.log(book.displayAsBlock());

const books = new Books();
books.addBook(book);
books.addBook(book2);
// console.log(books.listBooks());


const magazine = new Magazine('Spiegel', 34, 543);
console.log(book.displayAsLine());
console.log(magazine.displayAsLine());