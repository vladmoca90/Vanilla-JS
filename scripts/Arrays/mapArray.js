// find() locates the first entry that matches a condition and returns it.
// map() transforms every element in an array and returns a new array.

// A function that uses map() to multiply each element by 2
const mappingMult = (list) => {
    if (!Array.isArray(list)) {
        throw new Error("Expected an array.");
    }

    if (list.length === 0) {
        throw new Error("List cannot be empty.");
    }

    return list.map(item => item * 2);
};

// A function that uses map() to add 100 to each element
const mappingAdd = (list) => {
    if (!Array.isArray(list)) {
        throw new Error("Expected an array.");
    }

    if (list.length === 0) {
        throw new Error("List cannot be empty.");
    }

    return list.map(item => item + 100);
};

// A function that uses map() to subtract 10 from each element
const mappingSubstr = (list) => {
    if (!Array.isArray(list)) {
        throw new Error("Expected an array.");
    }

    if (list.length === 0) {
        throw new Error("List cannot be empty.");
    }

    return list.map(item => item - 10);
};

// A function that uses map() to divide each element by 2
const mappingDiv = (list) => {
    if (!Array.isArray(list)) {
        throw new Error("Expected an array.");
    }

    if (list.length === 0) {
        throw new Error("List cannot be empty.");
    }

    return list.map(item => item / 2);
};

// Example usage
const numbers = [10, 20, 30, 40];

console.log(mappingMult(numbers));   // [20, 40, 60, 80]
console.log(mappingAdd(numbers));    // [110, 120, 130, 140]
console.log(mappingSubstr(numbers)); // [0, 10, 20, 30]
console.log(mappingDiv(numbers));    // [5, 10, 15, 20]