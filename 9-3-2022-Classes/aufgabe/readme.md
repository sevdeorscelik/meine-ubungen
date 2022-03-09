# Create apps with JavaScript classes

Use your knowledge of JavaScript classes to create the apps listed here: build the appropriate classes, instantiate the classes as objects, and call the appropriate methods on the objects to make your app work.

## 1. Used Car App

- Car
	- constructor(make,color,year)
	- properties
	    - make
	    - color
	    - year
	- methods
	    - display()
- Cars
	- constructor()
	- properties
	    - cars *(array)*
	- methods
	    - addCar(car)
	    - listCars()

### Challenge :muscle:
	- method: getCarsByColor(color)
	- method: getCarsByMake(make)
	- method: exportAsHtml()
	- method: exportAsJson()
	- method: exportAsXml()

## 2. Coding School App

- Tutorial
	- properties
		- title
		- chapters - *number*
		- price - *number*
		- users - *(array)*
	- methods
		- addUser(user)
		- listUsers()
- user
	- properties
		- id
		- firstName
		- lastName
	- display()


## 3. Transportation-Sharing App

- Vehicle
	- latitude
	- longitude
	- currentlyRented - *boolean*
- Bike
	- color
	- size (child, adult)
	- wheels (2,3)
- Scooter
	- batteryMinutesLeft
- Vehicles
	- properties
		- vehicles - *array*
	- addBike(bike)
	- addScooter(scooter)
	- listBikes([child/adult/all])
	- listCurrentlyFree()
 
### CHALLENGE :muscle:
- additional methods for Vehicles
	- displayOnMap()
		- text?
		- canvas?
		- Google Maps API?
	- getClosestVehicle(lat,long)
