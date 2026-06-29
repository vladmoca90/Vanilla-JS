// A file that shows how to destructure an object

const person = {
  name: "Vlad Mocanu",
  age: 33,
  isMarried: false,
};

// Old way
const name = person.name;
const age = person.age;
const isMarried = person.isMarried;

// Object destructuring
const { name, age, isMarried } = person;

// Rename variables while destructuring
const {
  name: myName,
  age: myAge,
  isMarried: myMarriedStatus,
} = person;

// Object property shorthand
const person1 = {
  myName,
  myAge,
  myMarriedStatus,
};

// Copy an object with the spread operator and override a property
const person2 = {
  ...person,
  name: "Ana Mocanu",
};

// Array spread
const names = ["Pedro", "Jack", "Jessica"];
const names2 = [...names, "Joel"];