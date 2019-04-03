class Numbers {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}

class Even extends Numbers {
    constructor(make, model) {
        super(make, model);
    }

    get carType() {
        return 'This car is a ' + this.make + ' ' + this.model;
    }
}

let car = new Car('Seat', 'Leon');

console.log(car.carType);