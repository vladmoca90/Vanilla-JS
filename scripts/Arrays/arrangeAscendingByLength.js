// A function that sorts the strings of an array by length from shortest to longest

// Sort strings by length from shortest to longest
const sortAscByLength = (list) => {
    if (list.length === 0) {
        throw new Error("The list cannot be empty");
    }

    return [...list].sort((a, b) => a.length - b.length);
};