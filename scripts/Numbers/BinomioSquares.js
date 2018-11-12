//Calculate Newton's binome: (a + b)^2

function calculateBinomio(a, b) {

    return (a + b) * (a + b);
}

//Calculate a^2 - b^2

function calculateDiffOfSquares(a, b) {

    if (a == b) {
        return 0;
    }

    return a * a - b * b;
}