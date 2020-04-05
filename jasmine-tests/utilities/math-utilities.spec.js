describe('math-utilities', function () {
    describe('becomeAbbreviated()', function () {
        it('Returns an error if the text is empty.', function () {
            expect(function () {
                becomeAbbreviated('').toThrowError();
            });
        });
        it('Returns the text, followed by dot if the text has only one letter.', function () {
            expect(becomeAbbreviated('v')).toBe('v.');
        });
        it('Abbreviates the text if it has more letters or words.', function () {
            expect(becomeAbbreviated('Vlad Mocanu')).toBe('V.M.');
        });
    });
});