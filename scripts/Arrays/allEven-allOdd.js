// A function that returns true if all 3 elements are even

//First case

function allEven(list) {

    var a = list[0];
    var b = list[1];
    var c = list[2];

    if(a % 2 == 0 && b % 2 == 0 && c % 2 == 0) {
        return true
    } else {
        return false;
    }

}

//Second case

function allEven(list) {

    var a = list[0];
    var b = list[1];
    var c = list[2];

    return a % 2 == 0 && b % 2 == 0 && c % 2 == 0;

}

//Return true is all numbers are odd

function allOdd(list) {

    var a = list[0];
    var b = list[1];
    var c = list[2];

    return a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0;

}