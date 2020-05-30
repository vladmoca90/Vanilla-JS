//A function that returns the longest word in a text

const longestWord = text => {
    if (text.length == 0) {
        throw new Error('The text cannot be empty');
    }

    let splitText = text.trim().split(' ');
    let word = splitText[0];

    for (let i = 0; i < splitText.length; i++) {
        if(word.length < splitText[i].length) {
            word = splitText[i];
        }
    }

    return word;
}