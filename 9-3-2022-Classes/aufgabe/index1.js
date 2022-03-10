//Car

class Car {
    constructor(make, color, year){
        this.make = make;
        this.color = color;
        this.year = year;
    }
    display(){
        return `Make:${this.make}, \n Color:${this.color}, \n Year:${this.year}`
    }
}

const car1 = new Car('Audi', 'dark-blue', '2014')
console.log(car1);
console.log(car1.display());

const car2 = new Car('Renault', 'white', '2015')
console.log(car2);
console.log(car2.display());



//Cars
class Cars {
    constructor(){
        this.cars = [];
    }

    addCar(car){
         this.cars.push(car);
    }

    listCars(){
       return this.cars.map(car => car.display()).join('\n\n')
    }
}

const cars = new Cars()
cars.addCar(car1)
cars.addCar(car2)
console.log(cars);
console.log(cars.listCars());



//CHALLENGE





