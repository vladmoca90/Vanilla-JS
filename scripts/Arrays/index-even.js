//A function that removes the elements on an even index

function removeEvenIndexes(list) {
    if (list.length == 0) {
        throw new Error('The list cannot be empty');
    }

    var newList = [];

    for (var i = 0; i < list.length; i++) {
        if (i % 2 !== 0) {
            newList.push(list[i]);
        }
    }

    return newList;
}