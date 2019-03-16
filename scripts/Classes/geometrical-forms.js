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

//A class that is sibling of another class
class formatDate extends Date {
  constructor(dateStr) {
    super(dateStr);
  }

  getFormattedDate() {
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
  }
}

console.log(new formatDate('August 19, 1975 23:15:30').getFormattedDate());
