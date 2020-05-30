//A function that calculates the addition between the digits of a number
const digitsAddition = n => {
    if(!n) {
        throw new Error('The number must be given');
    }
    if(n < 0) {
        throw new Error('The number must be positive');
    }

    let sum = 0;

    while (n > 0) {
        let digit = n % 10;
        sum += digit;
        n = Math.floor(n / 10)
    }

    return sum;
}
