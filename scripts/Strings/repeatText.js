//A function that repeats a text n times

const repeatText = (text, n) => {
    if(text.length == 0) {
        throw new Error('The text cannot be empty');
    }
    if(n == 0) {
        throw new Error('n must be greater or equal to 1');
    }

    return text.repeat(n);
}