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

    get vehicleType() {
        return 'This car is a ' + this.make + ' ' + this.model;
    }
}

const car = new Car('Seat', 'Leon');

console.log(car.vehicleType);