'use strict';

// ---------------------------------------------------------
// Finding elements in an array
// ---------------------------------------------------------
//
// .find()
// Returns the FIRST element that matches the condition.
// If no element matches, it returns undefined.
//
// .filter()
// Returns ALL matching elements as a new array.
// If no elements match, it returns an empty array.
// ---------------------------------------------------------

const animals = [
    { name: 'Tibbers', type: 'cat', isNeutered: true, age: 2 },
    { name: 'Fluffball', type: 'rabbit', isNeutered: false, age: 1 },
    { name: 'Strawhat', type: 'cat', isNeutered: true, age: 5 }
];

// Validate that animals is an array
if (!Array.isArray(animals)) {
    throw new TypeError('Expected animals to be an array.');
}

// Find the first cat
const firstCat = animals.find(animal => animal.type === 'cat');

// Find all cats
const allCats = animals.filter(animal => animal.type === 'cat');

// Display results
console.log('First cat:');
console.log(firstCat);

console.log('\nAll cats:');
console.log(allCats);

// Handle the case where no match exists
const firstDog = animals.find(animal => animal.type === 'dog');

if (!firstDog) {
    console.log('\nNo dog was found.');
}

/*
Output:

First cat:
{
  name: 'Tibbers',
  type: 'cat',
  isNeutered: true,
  age: 2
}

All cats:
[
  {
    name: 'Tibbers',
    type: 'cat',
    isNeutered: true,
    age: 2
  },
  {
    name: 'Strawhat',
    type: 'cat',
    isNeutered: true,
    age: 5
  }
]

No dog was found.
*/