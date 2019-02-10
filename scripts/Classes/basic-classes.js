//A basic class with certain properties

class MyName {
  constructor(name) {
    this.name = 'Vlad Mocanu';
  }
}

console.log(new MyName().name); //results => Vlad Mocanu

//A class that also has a parent. In this case, Polygon is the parent of Square
class Polygon {
  constructor(height, width) {
    this.name = 'Polygon';
    this.height = height;
    this.width = width;
  }
}

class Square extends Polygon {
  constructor(length) {
    super(length, length);
    this.name = 'Square';
  }
}