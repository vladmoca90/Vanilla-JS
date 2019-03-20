//A class that calculates the area of a polygon
class Polygon {
    constructor(height, width) {
        this.area = width * height;
    }
}

//A class that is sibling of another class
class Square extends Polygon {
  constructor(height, width) {
    super(height, width);
  }
}

let square = new Square(100, 100);

console.log(square); // return {area: 1000}

//A class that is sibling of another class
class Rectangle extends Polygon {
  constructor(height, width) {
    super(height, width);
  }
}

let rectangle = new Rectangle(15, 11);

console.log(rectangle); // return {area: 165}