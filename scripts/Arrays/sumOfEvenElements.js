//sum of all even elements in an list//

function evenSum(list) {

    if (list.length == 0) {
        throw new Error("The list is empty");
    }
    if (list.length == 1) {
        if (list[0] % 2 == 0) {
            return list[0];
        } else {
            throw new Error("The only number in the list is not even");
        }
    }

    var even = 0;

    for (var i = 0; i < list.length; i++) {
        if (list[i] % 2 == 0) {
            even += list[i];
        }
    }

    return even;
}