//A function that counts how many times a digit is present

function countDigit(number, digit) {

    if (number == null || digit == null) {
        throw new Error('The number or digit cannot have a null value');
    }

    if (digit < 0 || digit > 9) {
        throw new Error('The digit cannot be negative or greater than 9');
    }

    var count = 0;

    var newNumber = number.toString();

    for (var i = 0; i < newNumber.length; i++) {
        if(newNumber.charAt(i) == digit) {
            count++;
        }
    }

    return count;
}