//A function that returns a new form for each element in an array

const duplicateElem = list => {
    if(list.length == 0) {
        throw new Error('The list cannot be empty');
    }

    for (let i = 0; i < list.length; i++) {
        list.forEach(function () {
            return list[i] += 5;
        });
    }

    return list;
}