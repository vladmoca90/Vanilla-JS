//A function that calculates the addition between the digits of a number
function digitsAddition(n) {
    if(!n) {
        throw new Error('The number must be given');
    }
    if(n < 0) {
        throw new Error('The number must be positive');
    }

    var sum = 0;

    while (n > 0) {
        var digit = n % 10;
        sum += digit;
        n = Math.floor(n / 10)
    }

    return sum;
}
