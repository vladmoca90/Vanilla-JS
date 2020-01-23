//A function that calculates how many times a word appears in a text

function countWord(word, text) {
    if (word.length == 0) {
        throw new Error('The word must exist');
    }
    if (text.length == 0) {
        throw new Error('The text must exist');
    }

    var count = 0;

    var wordsList = text.split(' ');

    for (var i = 0; i < wordsList.length; i++) {
        if (wordsList[i] === word) {
            count++;
        }
    }

    return count;
}

countWord('Alex', 'Alex Alex Alex'); //returns 3