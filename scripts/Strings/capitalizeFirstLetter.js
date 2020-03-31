//A function that capitalizes each word in a text

function capitalizeFirstLetter(text) {
    if (text.length == 0) {
        throw new Error('The text cannot be empty');
    }
    if (text.length == 1) {
        return text.toUpperCase();
    }

    var splitText = text.trim().split(' ');
    var capitalizedLetters = [];

    for (var i = 0; i < splitText.length; i++) {
        capitalizedLetters.push(splitText[i].charAt(0).toUpperCase() + splitText[i].substring(1));
    }

    return capitalizedLetters.join(' ');
}