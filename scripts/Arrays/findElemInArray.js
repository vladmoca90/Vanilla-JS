//A function that find certain element/elements in a given array

const findElem = (list) => {
    if (list.length == 0) {
        throw new Error('The list cannot be empty');
    }

    let foundList = [];

    for (let i = 0; i < list.length; i++) {
        foundList = list.find(list[i] > 10);

        if (list[i].length > 10) {
            return foundList;
        } else {
            throw new Error('The text does not have more than 10 characters');
        }
    }
}