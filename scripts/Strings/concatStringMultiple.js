//A function that concatenates a string multiple times

function concatenateMultiple(text, n) {
    if (text.length == 0) {
        throw new Error('The text cannot be empty');
    }
    if (n < 0) {
        throw new Error('n must be a positive number');
    }
    if (n == 0) {
        return text;
    }

    var concatenated = text.concat(text);

    return concatenated.repeat(n);
}