describe('capitalize-consonants project', function () {
    it('capitalizes consonants and leaves vowels unchanged', function () {
        expect(capitalizeConsonants('hello world')).toBe('HEllO WOrlD');
    });
});
