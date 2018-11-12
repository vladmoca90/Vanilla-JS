//A function that sorts the strings of an array by length from shortest to longest

function sortAscByLength(list) {

    if (list.length == 0) {
        throw new Error('The list cannot be empty');
    }
    if (list.length == 1) {
        return list[0];
    }

    var sortedList = [];

    for (i = 0; i < list.length; i++) {
        if (list[i].length < list[i + 1].length) {
            sortedList.push(list[i]);
        }
        if (list[i].length > list[i + 1].length) {
            sortedList.push(list[i + 1]);
        }
    }

    return sortedList;
}