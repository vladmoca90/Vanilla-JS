//A function that returns a new form for each element in an array

function duplicateElem(list) {

    if (list.length == 0) {
        throw new Error('The list cannot be empty');
    }

    for (i = 0; i < list.length; i++) {
        list.forEach(function () {
            return list[i] += 10;
        });
    }

    return list;
}