//Returns true is at least one element in an array in smaller than a given number

function compareNumbersWith(list, n) {
    if (list.length == 0) {
        throw new Error('The list cannot be empty');
    }
    if (!n) {
        throw new Error('The n number must be given');
    }

    return list.some(function(elem) {
        return elem > n;
    });
}