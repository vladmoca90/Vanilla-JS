//A code that counts the number of vowels from a sentence or word

function countVowels(sentence) {

    if (sentence.length == 0) {
        throw new Error('The text cannot be empty');
    }

    return sentence.match('/[aeiou]/g').length;
}