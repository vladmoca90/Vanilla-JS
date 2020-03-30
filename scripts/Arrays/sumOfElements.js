//sum of the elements of an list//

function sum(list) {

    if (list.length == 0) {
        throw new Error("The list is empty");
    }
    if (list.length == 1) {
        if (list[0])
            return list[0];
    }

    var sum = 0;

    for (var i = 0; i < list.length; i++) {
        sum += list[i];
    }

    return sum;
}