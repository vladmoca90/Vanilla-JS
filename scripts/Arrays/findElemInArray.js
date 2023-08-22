//A function that find certain element/elements in a given array

const findElem = (list) => {
    if (list.length == 0) {
        throw new Error('The list cannot be empty');
    }

    const found = [];

    for (let i = 0; i < list.length; i++) {;
        found.push(list.find(list => list[i] % 2 == 0));
    }

    return found;
}