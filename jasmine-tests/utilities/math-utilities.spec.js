describe('math-utilities', function () {
    describe('removeEvenIndexes()', function () {
        it('returns an error if the list is empty', function () {
            expect(function() {
                removeEvenIndexes([])
            }).toThrowError();
        });
        it('returns text if there is no space', function () {

            expect(trimText('a')).toBe('a');
        });
        it('returns text with no spaces if spaces are only at the beginning and the end', function () {

            expect(trimText(' Alexandru ')).toBe('Alexandru');
        });
        it('returns text with no spaces if spaces are only between the words', function () {

            expect(trimText('Alex andru')).toBe('Alexandru');
        });
        it('returns text with no spaces if spaces are everywhere', function () {

            expect(trimText(' A l e x a n d r u ')).toBe('Alexandru');
        });
    });
});