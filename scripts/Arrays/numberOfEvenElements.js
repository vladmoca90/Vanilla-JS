// A function that returns the number of even elements in an list

const numberOfEvenElements = (list) => {
    if (!Array.isArray(list)) {
        throw new Error("Expected an array.");
    }

    let count = 0;

    for (const number of list) {
        if (number % 2 === 0) {
            count++;
        }
    }

    return count;
};