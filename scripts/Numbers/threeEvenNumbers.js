//A function that returns true if all three given numbers are even

const threeEvenNum = (a, b, c) => {
    if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
        return false;
    }

    return true;
}