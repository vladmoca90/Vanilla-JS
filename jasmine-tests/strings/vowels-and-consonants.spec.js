describe('vowels-and-consonants project', function () {
    it('separates vowels and consonants', function () {
        expect(showVowelsAndConsonants('abec')).toEqual({
            vowels: ['a', 'e'],
            consonants: ['b', 'c']
        });
    });
});
