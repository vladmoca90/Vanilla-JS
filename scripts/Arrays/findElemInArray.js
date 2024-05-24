// A function that find certain element/elements in a given array. 
//find() locates a specific entry by a predicate and returns it. .map() is for all entries!
//.filter() returns an array of matched objects while .find() returns the first matched object

let animals = [
    { name: 'Tibbers', type: 'cat', isNeutered: true, age: 2 },
    { name: 'Fluffball', type: 'rabbit', isNeutered: false, age: 1 },
    { name: 'Strawhat', type: 'cat', isNeutered: true, age: 5 }
]

animalTypeFound = animals.find(animal => animal.type === 'cat');

// animalTypeFound will return:
// {name: 'Tibbers', type: 'cat', isNeutered: true, age: 2}

animalTypeFilter = animals.filter(animal => animal.type === 'cat');

// animalTypeFilter will return:
// [{name: 'Tibbers', type: 'cat', isNeutered: true, age: 2}, {name: 'Strawhat', type: 'cat', isNeutered: true, age: 5}]