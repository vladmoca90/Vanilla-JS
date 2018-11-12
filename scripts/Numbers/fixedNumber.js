﻿//Calculate the fixed value of a given number
function fixedNumber(n, f) {

    if (n < 0) {
        throw new Error("The number must be greater than 0");
    }
    if (n == 0) {
        return 0;
    }

    var m = n.toFixed(f);

    return m;

}