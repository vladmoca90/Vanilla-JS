// A function that returns true if all elements in an list are even and false otherwise

const allElementsAreEven = (list) => {
    if (!Array.isArray(list)) {
        throw new TypeError("Expected an array");
    }

    if (list.length === 0) {
        throw new Error("The list cannot be empty");
    }

    for (const num of list) {
        if (num % 2 !== 0) {
            return false;
        }
    }

    return true;
};