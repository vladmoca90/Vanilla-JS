//A function that increments the elements in an list by n

function incrementElements(list, n) {
    if (list.length == 0) {
        throw new Error('The list cannot be empty');
    }

    for (var i = 0; i < list.length; i++) {
        list[i] += n;
    }

    return list;
}