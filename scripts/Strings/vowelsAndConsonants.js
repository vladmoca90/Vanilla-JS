const showVowelsAndConsonants = text => {
    if (text.length === 0) {
        throw new Error('The text must be given');
    }

    const vowels = [];
    const consonants = [];

    for (let i = 0; i < text.length; i++) {
        if (isVowel(text[i])) {
            vowels.push(text[i]);
        } else {
            consonants.push(text[i]);
        }
    }

    return { vowels, consonants };
}

function isVowel(character) {
    return 'aeiou'.includes(character.toLowerCase());
}

if (typeof module !== 'undefined') {
    module.exports = showVowelsAndConsonants;
}