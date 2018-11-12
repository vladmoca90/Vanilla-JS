//A function that transforms a string into a number

function textToNumber(text) {

    if (text.length == 0) {
        throw new Error('The text cannot be empty');
    }

    return parseInt(text);
}