// Demonstrates object destructuring, property shorthand, and the spread operator

const person = {
  name: "Vlad Mocanu",
  age: 33,
  isMarried: false,
};

// =======================
// Old way (without destructuring)
// =======================

const personName = person.name;
const personAge = person.age;
const personIsMarried = person.isMarried;

console.log(personName);
console.log(personAge);
console.log(personIsMarried);

// =======================
// Object destructuring
// =======================

const { name, age, isMarried } = person;

console.log(name);
console.log(age);
console.log(isMarried);

// =======================
// Rename variables while destructuring
// =======================

const {
  name: myName,
  age: myAge,
  isMarried: myMarriedStatus,
} = person;

console.log(myName);
console.log(myAge);
console.log(myMarriedStatus);

// =======================
// Object property shorthand
// =======================

// Creates an object with the original property names
const personCopy = {
  name: myName,
  age: myAge,
  isMarried: myMarriedStatus,
};

console.log(personCopy);

// =======================
// Copy an object with the spread operator
// and override a property
// =======================

const updatedPerson = {
  ...person,
  name: "Ana Mocanu",
};

console.log(updatedPerson);
console.log(person); // Original object remains unchanged

// =======================
// Array spread operator
// =======================

const names = ["Pedro", "Jack", "Jessica"];

const names2 = [...names, "Joel"];

console.log(names);
console.log(names2);