describe('math-utilities', function () {
    describe('specificStringEnd()', function () {
        it('throws an error if the sentence if empty', function() {

            expect(function() {specificStringEnd('', 'abc')}).toThrowError();
        });
        it('throws an error if the end if empty', function() {

            expect(function() {specificStringEnd('abcdefgh', '')}).toThrowError();
        });
        it('Returns true of the end matches the last word in the sentence', function() {

            expect(specificStringEnd('abc', 'c')).toBe(true);
        });
    });
});