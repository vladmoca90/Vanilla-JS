// A function that returns true if all 3 elements are even

//First case

const allEven = list => {
    let a = list[0];
    let b = list[1];
    let c = list[2];

    if(a % 2 == 0 && b % 2 == 0 && c % 2 == 0) {
        return true
    } else {
        return false;
    }
}

//Second case

const allEven = list => {
    let a = list[0];
    let b = list[1];
    let c = list[2];

    return a % 2 == 0 && b % 2 == 0 && c % 2 == 0;
}

//Return true is all numbers are odd

const allOdd = list => {
    let a = list[0];
    let b = list[1];
    let c = list[2];

    return a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0;
}