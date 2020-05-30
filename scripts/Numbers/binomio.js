//Calculate (a + b)^n, with a, b, n natural non-zero numbers

function calcGeneralBinomio(a, b, n) {
    if(a <= 0 || b <= 0 || n <= 0) {
        throw new Error("a, b and n must be > 0");
    }

    var result = 1;
    var i = 0;

    while (i < n) {
        result = result * (a + b);
        i++;
    }

    return result;
}


//This functions calculates the bonomio with combinations

function calculateBinomioWithCombinations(a, b, n) {
    if(a <= 0 || b <= 0 || n <= 0) {
        throw new Error("a, b and n must be > 0");
    }

    var result = 0;
    var i = 0;

    while (i <= n) {
        result = result + comb(n, i) * power(a, n - i) * power(b, i);
        i++;
    }

    return result;
}