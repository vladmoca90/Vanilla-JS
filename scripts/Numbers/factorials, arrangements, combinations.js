//Calculate the factorial

function fact(n) {

    if (n < 0) {
        throw new Error("the n must be greater of equal to 0");
    }
    if (n == 0) {
        return 1;
    }

    return fact(n);
}

//Calculate arrangements

function calculateArrangements(n, k) {

    if (k > n) {
        throw new Error("The k must be < than n");
    }
    if (k == 1) {
        return n;
    }
    if (n == k) {
        return 1;
    }

    return fact(n) / fact(n - k);
}

//Calculate combinations

function calculateCombinations(n, k) {

    if (k > n) {
        throw new Error("The k must be < than n");
    }
    if (k == 1) {
        return n;
    }
    if (n == k) {
        return 1;
    }

    return fact(n) / [fact(n) * fact(n - k)];
}