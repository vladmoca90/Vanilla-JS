//A class that calculates the area of a polygon

class Polygon {
    constructor(height, width) {
        this.area = width * height;
    }
}

console.log(new Polygon(4,6).area);