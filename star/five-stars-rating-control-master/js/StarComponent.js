export class StarComponent {

	constructor(document, id, numberOfStars = 3) {
		this.document = document;
		this.id = id;
		this.contentElem = this.document.querySelector('.content');
		this.starControlElem = this.createDivWithClassNameAndAppend('starControl', this.contentElem);
		this.starsElem = this.createDivWithClassNameAndAppend('stars', this.starControlElem);
		this.numberElem = this.createDivWithClassNameAndAppend('number', this.starControlElem);
		this.numberOfStars = numberOfStars;
	}

	createDivWithClassNameAndAppend(className, parentElem) {
		const div = this.createDivWithClassName(className);
		parentElem.appendChild(div);
		return div;
	}

	createDivWithClassName(className) {
		const div = document.createElement('div');
		div.classList.add(className);
		return div;
	}

	setStars = (numberOfStars) => {
		this.numberOfStars = numberOfStars;
		this.createStars();
		localStorage.setItem(StarComponent.getComponentStateIdCode(this.id), this.numberOfStars);
	}

	createStars() {
		this.starsElem.innerHTML = '';
		for (let i = 1; i <= 5; i++) {
			const starElem = document.createElement('i');
			if (i <= this.numberOfStars) {
				starElem.classList.add('fa', 'fa-star');
			} else {
				starElem.classList.add('fa', 'fa-star-o');
			}
			starElem.addEventListener('click', () => this.setStars(i));
			this.starsElem.appendChild(starElem);
		}
		this.numberElem.innerText = this.numberOfStars;
	}

	static getComponentStateIdCode(id) {
		return `numberOfStars-${id}`;
	}

	static instantiate(document, id) {
		const cachedStars = Number(localStorage.getItem(StarComponent.getComponentStateIdCode(id)));
		const numberOfStars = cachedStars === 0 ? 3 : cachedStars;
		const starComponent = new StarComponent(document, id, numberOfStars);
		starComponent.createStars();
	}

}