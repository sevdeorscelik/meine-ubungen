export class Cars {
	constructor() {
		this.cars = [];
	}

	addCar(car) {
		this.cars.push(car);
	}

	listCars() {
		return this.cars.map(car => car.display()).join('\r\n\r\n');
	}

	exportAsHtml(className) {
		return `
<table class=${className}>
	<tr>
		<th>Make</th>
		<th>Color</th>
		<th>Year</th>
	</tr>${this.cars.map(car => car.exportAsHtml()).join('')}
</table>`;
	}

	exportAsJson() {
		return `[
	{
		"make": "testMercedes",
		"color": "red",
		"year": 2015,
	}
]`;
	}

	static instantiateCarsWithJavaScriptObjectArray(javaScriptObjectArray) {
		const cars = new Cars();
		// CHALLENGE: complete :-)
	}

	static instantiateCarsWithCarsObjectArray(carsObjectArray) {
		const cars = new Cars();
		carsObjectArray.forEach(car => cars.addCar(car));
		return cars;
	}
}