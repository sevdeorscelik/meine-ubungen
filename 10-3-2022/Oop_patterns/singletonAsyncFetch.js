import fetch from 'node-fetch';
     
class Employees {
    constructor() {
        if (Employees._instance) {
            return Employees._instance
        }
        Employees._instance = this;
 
        this.emulatedWaitTimeInSeconds = 2;
        this.employees = [];
        this.dataLoaded = false;
 
        this.url = 'https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/employees.json';
 
        this.initPromise = (async () => {
                const response = await fetch(this.url);
                this.employees = await response.json();
                this.dataLoaded = true;
                console.log(`work done: got ${this.employees.length} employees`);
        })();
    }
 
    async list() {
        await this.initPromise;
        return this.employees.map(m => `${m.firstName} ${m.lastName} (${m.employeeID})`);
    }
 
}
 
const employees = new Employees();
const emps = new Employees();
 
console.log(111);
(async () => {
    console.log(await employees.list());
})();
console.log(222);
(async () => {
    console.log(await emps.list());
})();
console.log(333);