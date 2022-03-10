//AUFGABE-2

class Tutorial {
    constructor(title, chapters, price, users){
        this.title = title
        this.chapters = chapters
        this.price = price
        this.users = users
    }

    //methods
    addUser(user) {
        this.users.push(user)
    }

    listUser(){
        return "List of users: \n-" + this.users.map(user => user).join('\n-')
    }
}

const tutorial1 = new Tutorial('Javascript', 'Chapter-2', 24.99, ['sevde', 'semih', 'zeynep'])
console.log(tutorial1.listUser());
console.log(tutorial1);
tutorial1.addUser('kübra');
console.log(tutorial1.listUser());




class User {
    constructor(id, firstName, lastName) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
    }

    display(){
        return `Firstname: ${this.firstName}, Lastname: ${this.lastName}, Id: ${this.id}`
    }
}

const user1 = new User(234, 'sevde', 'örs')
const user2 = new User(295, 'semih', 'örsce')

console.log(user1.display());
console.log(user2.display());

