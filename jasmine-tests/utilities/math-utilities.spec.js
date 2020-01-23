describe('math-utilities', function () {
    describe('countWord()', function () {
        it('returns an error if the word does not exist', function () {
            expect(function () {
                countWord('', 'Alex is my brother')
            }).toThrowError();
        });
        it('returns an error if the text doesnot exist', function () {
            expect(function () {
                countWord('Alex', '')
            }).toThrowError();
        });
        it('returns the number of times a word appears in the text', function () {

            expect(countWord('Alex', 'Alex Alex Alex')).toBe(3);
        });
    });
});