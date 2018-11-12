//Given an list, return the reverse of the list

function reverse(list) {

    for (i = 0, j = list.length - 1; i < list.length / 2 && j >= list.length / 2; i++, j--) {
        var a = list[i];
        var b = list[j];

        list[i] = b;
        list[j] = a;
    }

    return list;
}

//Return the reverse of an list with 3 elementsfunction inverse(list) {

function inverse(list) {

    var x = list[0];
    var y = list[1];
    var z = list[2];

    var reverseList = [];

    reverseList.push(z);
    reverseList.push(y);
    reverseList.push(x);

    return reverseList;
}