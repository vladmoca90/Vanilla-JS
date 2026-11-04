const showVowelsAndConsonants = require('../../scripts/Strings/vowelsAndConsonants');

describe('showVowelsAndConsonants', () => {
    test('separates vowels and consonants while preserving their order', () => {
        expect(showVowelsAndConsonants('abec')).toEqual({
            vowels: ['a', 'e'],
            consonants: ['b', 'c']
        });
    });

    test('recognizes uppercase vowels', () => {
        expect(showVowelsAndConsonants('AbeC')).toEqual({
            vowels: ['A', 'e'],
            consonants: ['b', 'C']
        });
    });

    test('throws when given an empty string', () => {
        expect(() => showVowelsAndConsonants('')).toThrow('The text must be given');
    });
});
