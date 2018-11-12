//A function that write a text uppercase
function upperCaseText(text) {

    if (text.length == 0) {
        throw new Error('Text cannot be empty');
    }

    return text.toUpperCase();
}

//A function that write a text lowercase
function lowerCaseText(text) {

    if (text.length == 0) {
        throw new Error('Text cannot be empty');
    }

    return text.toLowerCase();
}