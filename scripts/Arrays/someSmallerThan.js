//Returns true is at least one element in an array in smaller than a given number

function compareNumbersWith(list, n) {
    if(list.length == 0) {
        throw new Error('the list cannot be empty');
    }

    return list.some(function(elem) {
        return elem > n;
    });
}