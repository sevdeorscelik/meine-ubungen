//AUFGABE-3

class Vehicle {
    constructor(latitude, longitude) {
      this.latitude = latitude;
      this.longitude = longitude;
      this.currentlyRented = true;
    }
  }
  class Bike extends Vehicle {
    constructor(color, size, wheels, latitude, longitude) {
      super(latitude, longitude);
      this.color = color;
      this.size = size;
      this.wheels = wheels;
    }
  }
  class Scooter extends Vehicle {
    constructor(batterMinutesLeft, latitude, longitude) {
      super(latitude, longitude);
      this.batterMinutesLeft = batterMinutesLeft;
    }
  }
  class Vehicles {
    constructor() {
      this.vehicles = [];
    }
    addBike(bike) {
      this.vehicles.push(bike);
    }
    addScooter(scooter) {
      this.vehicles.push(scooter);
    }
    getVehicles() {
      return this.vehicles.map(vehicle => vehicle);
    }
    listBikes() {
      return this.vehicles.filter(vehicle => vehicle.bikes)
    }
  }
   
  const puky = new Bike("red", "child", 3, 2002, 5000);
  const xxx = new Bike("yellow", "adult", 2, 2002888, 50058740);
  const yyy = new Bike("blue", "child", 3, 2782002, 50044820);
  const panther = new Bike("black", "adult", 2, 20047852, 500587410);
  const lion = new Bike("green", "child", 3, 20074852, 50587400);
  const scooterZ = new Scooter(30, 2.0015, 1.0045)
  const vehicles = new Vehicles();
  vehicles.addBike(puky);
  vehicles.addBike(xxx);
  vehicles.addBike(yyy);
  vehicles.addBike(panther);
  vehicles.addBike(lion);

  