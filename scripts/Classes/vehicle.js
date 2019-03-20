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
}

let car = new Car('Ford', 'Fiesta');

console.log(car.carType);