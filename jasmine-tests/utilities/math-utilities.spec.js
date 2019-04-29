describe('math-utilities', function () {
    describe('removeEvenIndexes()', function () {
        it('returns an error if the list is empty', function () {
            expect(function() {
                removeEvenIndexes([])
            }).toThrowError();
        });
        it('returns the only element if the list has only one element', function () {

            expect(removeEvenIndexes([1])).toBe(1);
        });
        it('returns array with elements on odd indexes only', function () {

            expect(removeEvenIndexes([1, 2, 3, 4, 5, 6])).toBe([2, 4, 6]);
        });
    });
});