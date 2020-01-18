class Profile {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Name extends Profile {
        constructor(name, age) {
            super(name, age);
        }

        //this is called a method
    get greet() {
        return 'My name is ' + this.name + ' and I am ' + this.age + ' years old';
    }
}

const myselt = new Name('Vlad Mocanu', 28);

console.log(myself.greet);