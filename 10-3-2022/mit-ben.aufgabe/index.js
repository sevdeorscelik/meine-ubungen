const getFromApi = () => {
	console.log('api called');
	return [
		{
			id: 2,
			lastName: "Nordruf",
			firstName: "Andreas"
		},
		{
			id: 3,
			lastName: "Moritor",
			firstName: "Nico"
		},
		{
			id: 4,
			lastName: "Rothchild",
			firstName: "Maria"
		}
	];
}



class Customers {
    constructor(){
        this.customers = getFromApi(); 

		if (Customers._instance) {
			return Customers._instance;
		}
		Customers._instance

		
    }

    list(){
        return this.customers.map(m => `${m.lastName}, ${m.lastName}, ${m.id}`).join('\r\n') 

    }


}

const customers = new Customers();
const cust = new Customers();

console.log(customers.list());
console.log(cust.list());

console.log(customers);
console.log(cust);



