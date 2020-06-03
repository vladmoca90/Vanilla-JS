//A function that converts a string (name) into abbreviated form (ex. Alex Mocanu => A.M.)
const becomeAbbreviated = text => {
    if(text.length == 0) {
        throw new Error('Text cannot be empty');
    }
    if(text.length == 1) {
        return text + '.';
    }

    let splitText = text.trim().split(' ');

    if(splitText.length > 1) {
        return splitText[0].charAt(0) + '.' + splitText[1].charAt(0) + '.';
    }

    return splitText.join();
}