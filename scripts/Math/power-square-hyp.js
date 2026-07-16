// The const takes two non-zero natural numbers n and p, and return n^p

const power = (n, p) => {
    if (n < 0 || p < 0) {
        throw new Error("Arguments must be non-negative");
    }

    let result = 1;

    for (let i = 0; i < p; i++) {
        result *= n;
    }

    return result;
};

const square = n => {
    if (n < 0) {
        throw new Error("Number cannot be negative");
    }

    return power(n, 2);
};

const calculateHyp = (a, b) => {
    if (a < 0 || b < 0) {
        throw new Error("Sides must be non-negative");
    }

    return Math.sqrt(square(a) + square(b));
};

console.log(calculateHyp(3, 4)); // 5
console.log(calculateHyp(5, 12)); // 13
console.log(calculateHyp(0, 4)); // 4