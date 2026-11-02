describe('create-sentence project', function () {
    it('joins words into a sentence ending in a period', function () {
        expect(createdSentence(['Hello', 'world'])).toBe('Hello world.');
        expect(createdSentence(['Hello'])).toBe('Hello.');
    });
});
