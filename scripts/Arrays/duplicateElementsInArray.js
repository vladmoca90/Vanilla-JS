//A function that duplicates elements of an array

function duplicateElements(list) {
    if(list.length == 0) {
        throw new Error('The list cannot be empty');
    }

    var duplicated = [];

    for (var i = 0; i < list.length; i++) {
        duplicated.push(list[i]);
        duplicated.push(list[i]);
    }

    return duplicated;
}


//A function that duplicates elements of an array n times

function duplicateMultipleTimes(list, n) {
    if(list.length == 0) {
        throw new Error('The list cannot be empty');
    }
    if(n < 0) {
        throw new Error('n must be greater or equal to 0');
    }
    if(n == 0) {
        return list;
    }

    var multipleDuplicates = [];

    for (var i = 0; i < list.length; i++) {
        for (var j = 0; j < n; j++) {
            multipleDuplicates.push(list[i]);
        }
    }

    return multipleDuplicates;
}