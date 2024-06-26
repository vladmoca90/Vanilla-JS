// A class that calculates the area of a polygon

class Polygon {
  constructor(height, width) {
    this.area = width * height;
  }
}

// A class that is sibling of another class

class Square extends Polygon {
  constructor(height, width) {
    super(height, width);
  }

  get squareArea() {
    return this.area;
  }
}

let square = new Square(100, 100);

console.log(square.squareArea);