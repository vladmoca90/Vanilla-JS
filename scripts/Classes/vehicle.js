class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    get description() {
        return `${this.make} ${this.model}`;
    }
}

class Car extends Vehicle {
    get vehicleType() {
        return `This car is a ${this.description}`;
    }
}

const car = new Car("Seat", "Leon");

console.log(car.vehicleType);