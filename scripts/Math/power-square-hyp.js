//The const takes two non-zero natural numbers n and p, and return n^p

const power = (n, p) => {
    if(n == 1) {
        return 1;
    }
    if(p == 1) {
        return n;
    }

    let i = 1;
    let multip = n;

    while (i < p) {
        multip = multip * n;
        i++;
    }

    return multip;
}

//The const square receives a number and returns the square of that number

const square = n => {
    if(n <= 0) {
        throw new Error("n must non-zero and positive");
    }

    return power(n, 2);
}

//Given two numbers a and b, which are the "catetele", calculate the "ipotenuza"
const calculateHyp = (a, b) => {
    if(a < 0 || b < 0) {
        throw new Error("Invalid parameters");
    }

    return Math.sqrt(square(a) + square(b));
}