//A function that converts a string into abbreviated form
function becomeAbbreviated(text) {

    if (text.length == 0) {
        throw new Error('Text cannot be empty');
    }
    if (text.length == 1) {
        return text + '.';
    }

    var splitText = text.trim().split(' ');

    if(splitText.length > 1) {
        return splitText[0] + ' ' + splitText[1].charAt(0) + '.';
    }

    return splitText.join();
}