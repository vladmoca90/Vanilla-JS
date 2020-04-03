//Calculate Newton's binome: (a + b)^2

function calculateBinomio(a, b) {
    if(a == 0) {
        return b*b;
    }
    if(b == 0) {
        return a*a;
    }

    return (a + b) * (a + b);
}

//Calculate a^2 - b^2

function calculateDiffOfSquares(a, b) {
    if (a == b) {
        return 0;
    }

    return a * a - b * b;
}