class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}

class Car extends Vehicle {
    constructor(make, model) {
        super(make, model);
    }

    get carType() {
        return 'This car is a ' + this.make + ' ' + this.model;
    }
    set vehicleType(newMake) {
        if(typeof make == 'string') {
            this.make = newMake;
        } else {
            throw new Error('The car make or car model are not valid.')
        }
    }
}

let car = new Car('Seat', 'Leon');

console.log(car.carType);