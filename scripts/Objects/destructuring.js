//a file that shows how to destructure an object
const person = {
    name: 'Vlad Mocanu',
    age: 33,
    isMarried: false,
}

//old style
  const name = person.name;
  const age = person.age;
  const isMarried = person.isMarried; 


//one option
const {name, age, isMarried} = person;

//another option
const myName = 'Vlad Mocanu';
const myAge = 33;
const myMarriedStatus = false;

//another way to write the object
const person1 = {
    myName,
    myAge,
    myMarriedStatus,
}

//an object exact as person = {} but only the name property has a different value
const person2 = {
    ...person1,
    name: 'Ana Mocanu',
}

//a way to destructure arrays
const names = ['Pedro', 'Jack', 'Jessica'];
const names2 = [...names, 'Joel'];