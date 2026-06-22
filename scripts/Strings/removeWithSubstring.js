// A function that removes a certain number of characters from a string

const removeCharacters = (text, n) => {
    if(text.length == 0) {
        throw new Error('String cannot be empty');
    }
    if(text.length == 1) {
        return text[0];
    }

    return text.substring(0, n);
}