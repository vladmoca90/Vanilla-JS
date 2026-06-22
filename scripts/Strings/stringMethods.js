// A function that applies subtext() to a text
const subText = (text, a, b) => {
    if(text.length == 0) {
        throw new Error('The text cannot be empty');
    }

    return text.substring(a, b);
}

// A function that applies substr() to a text
const substrText = (text, a, b) => {
    if(text.length == 0) {
        throw new Error('The text cannot be empty');
    }

    return text.substr(a, b);
}

