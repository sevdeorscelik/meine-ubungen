export class Car {
	constructor({ make, color, year }) {
		this.make = make ?? '(make unknown)';
		this.color = color;
		this.year = year;
	}

	display() {
		return `CAR MAKE: ${this.make}
COLOR: ${this.color}
YEAR: ${this.year}`;
	}

	exportAsHtml() {
		return `
	<tr>
		<td>${this.make}</td>
		<td>${this.color}</td>
		<td>${this.year}</td>
	</tr>`;
	}
}