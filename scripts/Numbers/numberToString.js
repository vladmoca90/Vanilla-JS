// A function that convers a number into a string an returns true if the length is equal to 2

const numberToString = n => {
    if (n <= 0) {
        throw new Error('The number must be positive');
    }

    let transform = n.toString();

    if (transform.length !== 2) {
        return false;
    }

    return true;
}