//Returns true is at least one element in an array in smaller than a given number

function compareNumbersWith(list) {
    if (list.length == 0) {
        throw new Error('the list cannot be empty');
    }

    for (var i = 0; i < list.length; i++) {
        return list.some(function() {
            return list[i] > 0;
        });
    }

    return true;
}