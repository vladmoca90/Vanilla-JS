//A file that shows how to destructure an object
const person = {
    name: 'Vlad Mocanu',
    age: 33,
    isMarried: false,
}

//old style
/*
  const name = person.name;
  const age = person.age;
  const isMarried = person.isMarried; 
*/

//one option

/*  const {name, age, isMarried} = person;  */

//another option
const name = 'Vlad Mocanu';
const age = 33;
const isMarried = false;

const person = {
    name,
    age,
    isMarried,
}

const person2 = {
    ...person,
    name: 'Ana Mocanu',
} //an object exact as person = {} but only the name property has a different value