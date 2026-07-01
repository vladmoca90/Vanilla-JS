// Dictionaries (key-value collections)

// A dictionary stores data as key-value pairs.
// In JavaScript, dictionaries are usually implemented using plain objects ({})
// or the built-in Map object.

// ================================
// Object dictionary
// ================================

const animalDict = {
    bird: "goose",
    fish: "shark",
    insect: "spider",
    mammal: "wolf",
    reptile: "monitor",
};

// Access values
console.log(animalDict.bird);        // Dot notation
console.log(animalDict["fish"]);     // Bracket notation

// Update values
animalDict.bird = "eagle";
animalDict["fish"] = "salmon";

// Dynamic keys (must use bracket notation)
const key = "mammal";
animalDict[key] = "lion";

// Add new properties
animalDict.amphibian = "frog";

// Delete properties
delete animalDict.reptile;

// Check if a key exists
console.log("bird" in animalDict); // true

// Get all keys
console.log(Object.keys(animalDict));

// Get all values
console.log(Object.values(animalDict));

// Get all key-value pairs
console.log(Object.entries(animalDict));

// Loop through an object
for (const key in animalDict) {
    console.log(key, animalDict[key]);
}

// ================================
// Map
// ================================

// Map is a built-in JavaScript object that also stores key-value pairs.
// Unlike plain objects, a Map allows keys of any data type.

const scores = new Map();

scores.set("John", 95);
scores.set("Sarah", 88);

console.log(scores.get("John"));   // 95
console.log(scores.has("Sarah"));  // true

scores.delete("Sarah");

// Objects can even be used as keys.
const user = { id: 1 };

scores.set(user, 100);

console.log(scores.get(user)); // 100

// Loop through a Map
for (const [key, value] of scores) {
    console.log(key, value);
}