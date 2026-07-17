/**
 * Removes elements at odd indexes from an array.
 * Example:
 * [10, 20, 30, 40, 50] -> [10, 30, 50]
 *
 * @param {Array} list - The input array.
 * @returns {Array} A new array containing only elements from even indexes.
 * @throws {TypeError} If the input is not an array.
 * @throws {Error} If the array is empty.
 */
const removeOddIndexes = (list) => {
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
        if (i % 2 === 0) {
            newList.push(list[i]);
        }
    }

    return newList;
};

// Examples
console.log(removeOddIndexes([1, 2, 3, 4, 5]));       // [1, 3, 5]
console.log(removeOddIndexes(["a", "b", "c", "d"]));  // ["a", "c"]
console.log(removeOddIndexes([42]));                  // [42]

// Throws errors
// console.log(removeOddIndexes([]));
// console.log(removeOddIndexes("hello"));