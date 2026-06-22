// A function that write a text uppercase
const upperCaseText = text => {
    if(text.length == 0) {
        throw new Error('Text cannot be empty');
    }

    return text.toUpperCase();
}

// A function that write a text lowercase
const lowerCaseText = text => {
    if(text.length == 0) {
        throw new Error('Text cannot be empty');
    }

    return text.toLowerCase();
}