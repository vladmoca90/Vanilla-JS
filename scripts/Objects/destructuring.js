// A file that shows how to destructure an object
const person = {
    name: "Vlad Mocanu",
    age: 33,
    isMarried: false,
}

// Old style
const name = person.name;
const age = person.age;
const isMarried = person.isMarried;


// One option
const { name, age, isMarried } = person;

// Another option
const myName = "Vlad Mocanu";
const myAge = 33;
const myMarriedStatus = false;

// Another way to write the object

const person1 = {
    myName,
    myAge,
    myMarriedStatus,
}

// An object exact as person = {} but only the name property has a different value. You can easily use ... (spread operator)
const person2 = {
    ...person1,
    name: "Ana Mocanu",
}

// A way to destructure arrays
const names = ["Pedro", "Jack", "Jessica"];
const names2 = [...names, "Joel"];