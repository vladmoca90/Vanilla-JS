//A function that return a json object with vowels and consonants or a text

function showVowelsAndConsonants(text) {
    if(text.length == 0) {
        throw new Error('The text must be given');
    }

    var letters = {}
    var vowels = [];
    var consonants = [];

    for (var i = 0; i < text.length; i++) {
        if(charAt(i) == isVowel()) {
            vowels.push(text[i]);
        }
        else {
            consonants.push(text[i]);
        }
    }

    return Object.assign(letters, {
            vowels: vowels,
            consonants: consonants
    });
}

function isVowel() {
    return (text[i] == 'a' || text[i] == 'e' || text[i] == 'i' || text[i] == 'o' || text[i] == 'u');
}