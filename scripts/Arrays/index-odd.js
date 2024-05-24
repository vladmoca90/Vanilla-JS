// A function that removes the elements on an odd index

const removeOddIndexes = list => {
    if(list.length == 0) {
        throw new Error('The list cannot be empty');
    }
    if(list.length == 1) {
        return list[0];
    }

    let newList = [];

    for (let i = 0; i < list.length; i++) {
        if(i % 2 == 0) {
            newList.push(list[i]);
        }
    }

    return newList;
}