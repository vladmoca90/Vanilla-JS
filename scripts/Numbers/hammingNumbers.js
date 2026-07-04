// Returns all Hamming numbers up to a given limit.

const getHammingNumbers = (limit) => {
    const hammingNumbers = [];

    for (let i = 1; i <= limit; i++) {
        let num = i;

        while (num % 2 === 0) {
            num /= 2;
        }

        while (num % 3 === 0) {
            num /= 3;
        }

        while (num % 5 === 0) {
            num /= 5;
        }

        if (num === 1) {
            hammingNumbers.push(i);
        }
    }

    return hammingNumbers;
};

console.log(getHammingNumbers(100));