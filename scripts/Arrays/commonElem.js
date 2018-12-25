//A function that returns the element that appears more than once in an array

function showCommonElem(list) {
    if(list.length == 0) {
        throw new Error('The list cannot be empty');
    }

    var common = [];

    for(var i = 0; i < list.length; i++) {
        if(list[i] == list[i + 1]) {
            common.push(list[i]);
        }
    }

    return common;
}