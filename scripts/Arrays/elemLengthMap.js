//A function that returns an array with the length of elements

const returnElemLength = elements => {
    if(elements.length == 0) {
        throw new Error('The list cannot be empty');
    }

    return elements.map(elements => elements.length);
}