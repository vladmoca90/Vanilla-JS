// A function that capitalizes each word in a text

const capitalizeFirstLetter = text => {
    if(text.length == 0) {
        throw new Error('The text cannot be empty');
    }
    if(text.length == 1) {
        return text.toUpperCase();
    }

    let splitText = text.trim().split(' ');
    let capitalizedLetters = [];

    for (let i = 0; i < splitText.length; i++) {
        capitalizedLetters.push(splitText[i].charAt(0).toUpperCase() + splitText[i].substring(1));
    }

    return capitalizedLetters.join(' ');
}