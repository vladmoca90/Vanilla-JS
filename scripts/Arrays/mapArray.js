//A function that uses map and makes a multiplication

const mappingMult = list => {
    if(list.length == 0) {
        throw new Error('List cannot be empty');
    }

    let mappedList = [];

    for (let i = 0; i < list.length; i++) {
        list.map(function () {
            return mappedList.push(list[i] * 2);
        });
    }

    return mappedList;
}

//A function that uses and makes an addition

const mappingAdd = list => {
    if(list.length == 0) {
        throw new Error('List cannot be empty');
    }

    let mappedList = [];

    for (let i = 0; i < list.length; i++) {
        list.map(function () {
            return mappedList.push(list[i] + 100);
        });
    }

    return mappedList;
}

//A function that uses and makes a substraction

const mappingSubstr = list => {
    if(list.length == 0) {
        throw new Error('List cannot be empty');
    }

    let mappedList = [];

    for (let i = 0; i < list.length; i++) {
        list.map(function () {
            return mappedList.push(list[i] - 10);
        });
    }

    return mappedList;
}

//A function that uses and makes a division

const mappingDiv = list => {
    if(list.length == 0) {
        throw new Error('List cannot be empty');
    }

    let mappedList = [];

    for (let i = 0; i < list.length; i++) {
        list.map(function () {
            return mappedList.push(list[i]/2);
        });
    }

    return mappedList;
}