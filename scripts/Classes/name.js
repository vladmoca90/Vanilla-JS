// A class method
class Name {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Adding a method to the constructor
    get greet() {
        return 'My name is ' + this.name + ' and I am ' + this.age + ' years old';
    }
}

const myself = new Name('Vlad Mocanu', 28);

console.log(myself.greet); // returns a text with your name in it