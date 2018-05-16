store = {}
store.drivers = []
store.passengers =[]
store.trips = []

let driverId = 0; 

class Driver {
	constructor(name){
		this.name = name
		this.id = ++driverId

		store.drivers.push(this)
	}
	
	passengers(){
		return this.trips().map(trip =>{
				return trip.passenger()
		})//all of the passengers that a driver has taken on a trip
	}

	trips(){
		//iterate through trips
		return store.trips.filter(trip=>{
			return trip.driverId === this.id
		})
	}

}

let passengerId = 0;

class Passenger {
	constructor (name){
		this.name = name
		this.id = ++passengerId
		store.passengers.push(this)
	}

	trips(){
		return store.trips.filter(trip => this.id === trip.passengerId) // all of the trips the passenger has taken
	}

	drivers(){
		return this.trips().map(trip => trip.driver())
		//all of the drivers that the
		// passenger has been taken on a trip
	}
}

let tripId = 0;

class Trip {
	constructor(driver, passenger){
		this.id = ++tripId
		this.driverId = driver.id 
		this.passengerId = passenger.id
		store.trips.push(this)
	}

	driver(){
		return store.drivers.find(driver => driver.id === this.driverId) // driver associated with the trip
	}

	passenger(){
		return store.passengers.find(passenger => passenger.id === this.passengerId) // the passenger associated with the trip
	}
}