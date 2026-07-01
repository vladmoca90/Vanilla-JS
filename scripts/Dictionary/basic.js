// Objects can be used as dictionaries (key-value stores).

const animalDict = {
    bird: "goose",
    fish: "shark",
    insect: "spider",
    mammal: "wolf",
    reptile: "monitor",
};

// Access or update values using bracket notation.
animalDict["bird"] = "eagle";

// Or use dot notation when the key is a valid identifier.
animalDict.bird = "eagle";

// Use bracket notation when the key is stored in a variable.
const key = "fish";
console.log(animalDict[key]);

// Create an empty dictionary.
const dictionary = {};

// JavaScript also provides the Map object.
const map = new Map();

map.set("apple", 5);
console.log(map.get("apple"));