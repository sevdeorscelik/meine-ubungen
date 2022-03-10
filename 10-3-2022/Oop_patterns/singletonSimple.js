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

class Employees {
	constructor(collectionId) {
		this.collectionId = collectionId;

		if (Employees._instance) {
			return Employees._instance;
		}
		Employees._instance = this;

		this.employees = getFromApi(); 
	}
	list() {
		return this.employees.map(m => `${m.lastName} ${m.firstName} (${m.id})`).join('\r\n');
	}
}

const employees = new Employees();
employees.collectionId = '111';
console.log(employees.list());

const emps = new Employees();
emps.collectionId = '222';
console.log(emps.list());

const emps3 = new Employees();
emps3.collectionId = '333';
console.log(emps3.list());

console.log(employees);
console.log(emps);
console.log(emps3);