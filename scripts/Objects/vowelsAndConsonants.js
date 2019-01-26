//A function that return a json object with vowels and consonants or a text

function showVowelsAndConsonants(text) {
    if (text.length == 0) {
        throw new Error('The text must be given');
    }

    var splitText = text.trim().split('');

    var letters = [];

    var vowels = [];

    var consonants = [];

    for (var i = 0; i < splitText.length; i++) {
        if (isVowel(v)) {
            vowels.push(splitText[i]);
        }
        if (isConsonant(c)) {
            consonants.push(splitText[i]);
        }
    }

    return letters.push({
        vowels: vowels,
        consonants: consonants,
    });
}

function isVowel(v) {
    var v = (splitText[i] == 'a' || splitText[i] == 'e' || splitText[i] == 'i' || splitText[i] == 'o' || splitText[i] == 'u');

    return v;
}

function isConsonant(c) {
    var c = (splitText[i] !== 'a' || splitText[i] !== 'e' || splitText[i] !== 'i' || splitText[i] !== 'o' || splitText[i] !== 'u');

    return c;
}