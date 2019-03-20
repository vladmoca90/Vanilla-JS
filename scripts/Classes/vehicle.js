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

    greet() {
        console.log('This car is a ' + this.make + ' ' + this.model);
    }
}

let car = console.log(new Car('Ford', 'Fiesta').greet());

console.log(car);