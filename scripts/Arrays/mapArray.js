//A function that uses map and makes a multiplication
function mappingMultiplication(list) {
    if(list.length == 0) {
        throw new Error('List cannot be empty');
    }

    var mappedList = [];

    for (var i = 0; i < list.length; i++) {
        list.map(function () {
            return mappedList.push(list[i] * 2);
        });
    }

    return mappedList;
}

//A function that uses and makes an addition
function mappingAddition(list) {
    if(list.length == 0) {
        throw new Error('List cannot be empty');
    }

    var mappedList = [];

    for (var i = 0; i < list.length; i++) {
        list.map(function () {
            return mappedList.push(list[i] + 100);
        });
    }

    return mappedList;
}

//A function that uses and makes a substraction
function mappingSubstraction(list) {
    if(list.length == 0) {
        throw new Error('List cannot be empty');
    }

    var mappedList = [];

    for (var i = 0; i < list.length; i++) {
        list.map(function () {
            return mappedList.push(list[i] - 10);
        });
    }

    return mappedList;
}

//A function that uses and makes a division
function mappingDivision(list) {
    if(list.length == 0) {
        throw new Error('List cannot be empty');
    }

    var mappedList = [];

    for (var i = 0; i < list.length; i++) {
        list.map(function () {
            return mappedList.push(list[i]/2);
        });
    }

    return mappedList;
}