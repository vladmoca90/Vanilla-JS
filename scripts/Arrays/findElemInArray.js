//A function that find certain element/elements in a given array

const findElem = (list, text) => {
    if(list.length == 0) {
        throw new Error('The list cannot be empty');
    }

    for (let i = 0; i<list.length; i++) {
        list.find(text)
    }
}