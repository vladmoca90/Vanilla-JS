describe('math-utilities', function () {
    describe('compareNumbersWith()', function () {
        it('returns an error if list is empty', function () {

            expect(function() {
                compareNumbersWith([], 1)
            }).toThrowError();
        });
        it('returns an error if n doesnot exist', function () {

            expect(function() {
                compareNumbersWith([10, 20, 30])
            }).toThrowError();
        });
        it('returns true is at least one element is greater than n', function () {

            expect(compareNumbersWith([1, 2, 3], 2)).toBeTruthy();
        });
        it('returns false if no element is greater than n', function () {

            expect(compareNumbersWith([1, 2, 3], 3)).toBeFalsy();
        });
        it('returns false if all elements in the list are equal and no element is greater than n', function () {

            expect(compareNumbersWith([7, 7], 7)).toBeFalsy();
        });
    });
});