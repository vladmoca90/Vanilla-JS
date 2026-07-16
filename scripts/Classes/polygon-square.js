class Polygon {
    get area() {
        throw new Error("Area must be implemented by subclasses.");
    }
}

class Square extends Polygon {
    constructor(side) {
        super();
        this.side = side;
    }

    get area() {
        return this.side ** 2;
    }
}

const square = new Square(100);

console.log(square.area); // 10000