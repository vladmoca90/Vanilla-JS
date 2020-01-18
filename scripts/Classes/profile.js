class Profile {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    //this is called a method
    get greet() {
        return 'My name is ' + this.name + ' and I am ' + this.age + ' years old';
    }
}

class Name extends Profile {

}

// const myself = new Name('Vlad Mocanu', 28);

console.log(myself.greet);