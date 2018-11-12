﻿//The function takes two non-zero natural numbers n and p, and return n^p

function power(n, p) {

    if (n == 1) {
        return 1;
    }
    if (p == 1) {
        return n;
    }

    var i = 1;

    var multip = n;

    while (i < p) {
        multip = multip * n;
        i++;
    }

    return multip;
}

//The function square receives a number and returns the square of that number

function square(n) {

    if (n <= 0) {
        throw new Error("n must non-zero and positive");
    }

    return power(n, 2);
}

//Given two numbers a and b, which are the "catetele", calculate the "ipotenuza"

function calculateHyp(a, b) {

    if (a < 0 || b < 0) {
        throw new Error("Invalid parameters");
    }

    return Math.sqrt(square(a) + square(b));
}