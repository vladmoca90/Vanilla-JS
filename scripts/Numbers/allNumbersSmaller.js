//A function that returns a list with all the numbers smaller than a certain number

const allNumbersSmaller = n => {
    if (n <= 0) {
        throw new Error("The number must be greater than 0");
    }

    let smaller = [];

    for (let i = 0; i < n; i++) {
        if (n > i) {
            smaller.push(i);
        }
    }

    return smaller;
}