//A function that applies subtext() to a text
function subText(text, a, b) {
    if (text.length == 0) {
        throw new Error('The text cannot be empty');
    }

    return text.substring(a, b);
}

//A function that applies substr() to a text
function substrText(text, a, b) {
    if (text.length == 0) {
        throw new Error('The text cannot be empty');
    }

    return text.substr(a, b);
}

