//A function that returns the longest word in a text

function longestWord(text) {

    if (text.length == 0) {
        throw new Error('The text cannot be empty');
    }

    var splitText = text.trim().split(' ');

    var word = splitText[0];

    for (var i = 0; i < splitText.length; i++) {
        if(word.length < splitText[i].length) {
            word = splitText[i];
        }
    }

    return word;
}