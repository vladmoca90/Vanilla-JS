//A function that filters an list
function filterList(list) {
    if(list.lenth == 0) {
        throw new Error('The list cannot be empty');
    }

    for (var i = 0; i < list.length; i++) {
        var result = list.filter(i => list.length > 6);
    }

    return result;
}