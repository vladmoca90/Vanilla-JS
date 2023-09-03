//A function that returns all the numbers divisible by m and n

const numbersDivisibleWithOr = (n, m) => {
    let count = 0;

    for (let i = 1; i < 100; i++) {
        if (i % n == 0 || i % m == 0) {
            count++;
        }
    }

    return count;
}

//A function that returns all the numbers divisible by m up to n

const numbersDivisibleWithAnd = (n, m) => {
    let count = 0;

    for (let i = 1; i < m; i++) {
        if (i % n == 0) {
            count++;
        }
    }

    return count;
}

//A function that returns the total of numbers with 3 digits up to m

const countNumbersBetweenInterval = (n, m) => {
    let count = 0;

    for (let i = 0; i < m; i++) {
        if (i >= n) {
            count++;
        }
    }

    return count;
}