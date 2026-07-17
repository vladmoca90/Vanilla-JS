/**
 * Removes all elements at even indexes (0, 2, 4, ...)
 *
 * @param {Array} list - The input array.
 * @returns {Array} A new array containing only elements from odd indexes.
 * @throws {TypeError} If the input is not an array.
 * @throws {Error} If the array is empty.
 */
const removeEvenIndexes = (list) => {
    // Validate input type
    if (!Array.isArray(list)) {
        throw new TypeError("Input must be an array.");
    }

    // Validate array is not empty
    if (list.length === 0) {
        throw new Error("The array cannot be empty.");
    }

    const newList = [];

    for (let i = 0; i < list.length; i++) {
        if (i % 2 !== 0) {
            newList.push(list[i]);
        }
    }

    return newList;
};

// Example usage
console.log(removeEvenIndexes([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
console.log(removeEvenIndexes(["a", "b", "c", "d"])); // ["b", "d"]
console.log(removeEvenIndexes([42])); // []