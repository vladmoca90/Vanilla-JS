//Give a list of numbers, return a list with the squares of these numbers

function squareList(list) {
    if (list.length == 0) {
        return list;
    }

    for (var i = 0; i < list.length; i++) {
        var number = list[i] * list[i];
        list[i] = number;
    }

    return list;
}