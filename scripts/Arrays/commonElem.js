//A function that returns the element that appears more than once in an array

function showCommonElem(list) {
    if(list.length == 0) {
        throw new Error('The list cannot be empty');
    }
    if(list.length == 1) {
        return list;
    }

    var common = [];

    for(var i = 0; i < list.length; i++) {
        for(var j = i + 1; j < list.length; j++) {
            if(list[i] == list[j]) {
                if(common.indexOf(list[i]) == -1) {
                    common.push(list[i]);
                }
            }
        }
    }

    return common;
}