// A class method
class Name {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Adding a method to the constructor
    greet() {
        return this.name + 'is my name. I am' + this.age + 'years old';
    }
}

const myself = new Name('Vlad Mocanu', 28);

console.log(myself); // returns an object with the name and age