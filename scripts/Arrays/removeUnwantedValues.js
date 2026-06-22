// A const that removes null, undefined, ' ', 0, NaN values from an array

const removeUnwantedValues = list => {
    if (list.length == 0) {
        throw new Error("The list cannot be empty");
    }

    let newList = [];

    for (let i = 0; i < list.length; i++) {
        if(list[i] !== 'undefined' || list[i] !== 0 || list[i] !== null || list[i] !== ' ' || list[i] !== NaN) {
            newList.push(list[i]);
        }
    }

    return newList;
}