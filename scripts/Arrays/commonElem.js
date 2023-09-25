//A function that returns the element that appears more than once in an array

//Version 1 - easiest and the best
let list = ['a', 'b', 'c', 'a', 'a'];

const showCommonElemOne = list => {
    if (list.length == 0) {
        throw new Error('The list cannot be empty');
    }
    if (list.length == 1) {
        return list;
    }

    let common = [];

    for (let i = 0; i < list.length; i++) {
        if (list[0] == list[i]) {
            if (common.indexOf(list[i]) == -1) {
                common.push(list[i]);
            }
        }
    }

    return common;
}


//Version 2
const showCommonElemTwo = list => {
    if (list.length == 0) {
        throw new Error('The list cannot be empty');
    }
    if (list.length == 1) {
        return list;
    }

    let common = [];

    for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
            if (list[i] == list[j]) {
                if (common.indexOf(list[i]) == -1) {
                    common.push(list[i]);
                }
            }
        }
    }

    return common;
}