describe('math-utilities', function () {
    describe('removeCharacters()', function () {
        it('returns an error if the text does not exist', function () {
            expect(function () {
                removeCharacters('', 3)
            }).toThrowError();
        });
        it('returns the only character if the text has only one', function () {
            expect(function () {
                removeCharacters('a', 3)
            }).toBe('a');
        });
        it('returns the number of charcters that you want to remove', function () {

            expect(function() {
                removeCharacters('abcdefghijk', 3)
            }).toBe('abc');
        });
    });
});