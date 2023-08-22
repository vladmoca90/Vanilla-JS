//A function that find certain element/elements in a given array

const findElem = (list) => {
    if (list.length == 0) {
        throw new Error('The list cannot be empty');
    }

    const found = list.find((element) => element % 2 == 0);

    return found;
}