store = {}
store.drivers = []
store.passengers =[]
store.trips = []

let driverId = 0; 

class Driver {
	constructor(name, driverId, trips){
		this.name = name
		this.id = ++driverId
		this.trips = trips
		store.trips.push(this.trips)
		store.drivers.push(this)
	}

	trips(){
		//iterate through trips
		return store.trips.filter(trip=>{
			trip.driverId === this.id 
		})
	}

	passengers(){
		return store.passengers.filter(passenger =>{
			passenger.driverId === this.id
		})//all of the passengers that a driver has taken on a trip
	}

}

let passengerId = 0;

class Passenger {
	constructor (name, passengerId, driverId){
		this.name = name
		this.id = ++passengerId
		this.driverId = driverId
		store.passengers.push(this)
	}

	trips(){
		return // all of the trips the passenger has taken
	}

	drivers(){
		return // all of the drivers that the
		// passenger has been taken on a trip
	}
}

let tripId = 0;

class Trip {
	constructor(driverId, passengerId, tripId){
		this.id = ++tripId
		this.driverId = driverId
		this.passengerId = passengerId 
		store.trips.push(this)
	}

	driver(){
		return // driver associated with the trip
	}

	passenger(){
		return // the passenger associated with the trip
	}
}