// A function the returns the max and minimum number of two digits

const numberOfTwo = (min, max) => {
    min = Math.floor(min);
    max = Math.ceil(max);

    if (min < 10 || max < 10 || min > 99 || max > 99) {
        throw new Error('Numbers must be between 10 and 99.');
    }

    if (min > max) {
        throw new Error('Minimum value cannot be greater than maximum value.');
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Examples

console.log(numberOfTwo(10, 99)); // 10–99
console.log(numberOfTwo(25, 40)); // 25–40