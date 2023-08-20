//A function that find certain element/elements in a given array

const findElem = (list, text) => {
    if (list.length == 0) {
        throw new Error('The list cannot be empty');
    }

    let foundList = [];

    for (let i = 0; i < list.length; i++) {
        foundList = list.find(text.length > 10);

        if (text.length > 10) {
            return foundList;
        } else {
            throw new Error('The text does not have more than 10 characters');
        }
    }
}