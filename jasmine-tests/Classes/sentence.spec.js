describe('Sentence and Greeting classes project', function () {
    // Greeting inherits its word from Sentence and formats it with its getter.
    it('returns a description of the inherited word', function () {
        const greeting = new Greeting('Hello!');

        expect(greeting.word).toBe('Hello!');
        expect(greeting.wordType).toBe('The word is Hello!');
        expect(greeting instanceof Sentence).toBe(true);
    });
});
