//A class that calculates the area of a polygon
class Polygon {
    constructor(height, width) {
        this.area = width * height;
    }
}

console.log(new Polygon(4,6).area); //results 24

//A class that contains the perimeter of a triangle
class Triangle {
    constructor(a, b, c) {
        this.total = a + b + c;
    }
}

console.log(new Triangle(4, 6, 8).total); //results 18
