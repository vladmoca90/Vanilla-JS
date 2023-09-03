//A function the returns the max and minimum number of two digits

const numberOfTwo = (min, max) => {
    let max = Math.ceil(max);
    let min = Math.floor(min);

    if (min < 10 || max < 10 && min > 99 || max > 99) {
        throw new Error('The number must be between 10 and 99 only');
    }

    return Math.floor(Math.random() * (max - min)) + min;
}