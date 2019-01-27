//A function that return a json object with vowels and consonants or a text

function showVowelsAndConsonants(text) {
    if (text.length == 0) {
        throw new Error('The text must be given');
    }

    var splitText = text.trim().split('');
    var letters = {}
    var vowels = [];
    var consonants = [];

    for (var i = 0; i < splitText.length; i++) {
        if (isVowel()) {
            vowels.push(splitText[i]);
        }
        else {
            consonants.push(splitText[i]);
        }
    }

    return Object.assign(letters, {
            vowels: vowels,
            consonants: consonants
    });
}

function isVowel() {
    return (splitText[i] == 'a' || splitText[i] == 'e' || splitText[i] == 'i' || splitText[i] == 'o' || splitText[i] == 'u');
}