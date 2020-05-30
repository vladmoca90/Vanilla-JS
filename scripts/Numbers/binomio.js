//Calculate (a + b)^n, with a, b, n natural non-zero numbers

const calcGeneralBinomio = (a, b, n) => {
    if(a <= 0 || b <= 0 || n <= 0) {
        throw new Error("a, b and n must be > 0");
    }

    let result = 1;
    let i = 0;

    while (i < n) {
        result = result * (a + b);
        i++;
    }

    return result;
}


//This functions calculates the bonomio with combinations

const calculateBinomioWithCombinations = (a, b, n) => {
    if(a <= 0 || b <= 0 || n <= 0) {
        throw new Error("a, b and n must be > 0");
    }

    let result = 0;
    let i = 0;

    while (i <= n) {
        result = result + comb(n, i) * power(a, n - i) * power(b, i);
        i++;
    }

    return result;
}