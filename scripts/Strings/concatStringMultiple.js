// A function that concatenates a string multiple times

const concatenateMultiple = (text, n) => {
    if(text.length == 0) {
        throw new Error('The text cannot be empty');
    }
    if(n < 0) {
        throw new Error('n must be a positive number');
    }
    if(n == 0) {
        return text;
    }

    let concatenated = text.concat(text);

    return concatenated.repeat(n);
}