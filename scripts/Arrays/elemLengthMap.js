// A function that returns an array containing the length of each element

const returnElemLength = (elements) => {
    if (elements.length === 0) {
        throw new Error("The list cannot be empty");
    }

    return elements.map(element => element.length);
};