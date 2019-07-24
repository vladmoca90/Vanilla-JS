//A function that removes a certain number of characters from a string

function removeFromText(text, n) {

    if (text.length == 0) {
        throw new Error('String cannot be empty');
    }

    return text.slice(0, n);
}