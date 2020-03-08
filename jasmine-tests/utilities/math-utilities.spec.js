describe('math-utilities', function () {
    describe('sumOfMultiples()', function () {
        it('returns an error if n has a negative value', function () {
            expect(function () {
                sumOfMultiples(-3)
            }).toThrowError();
        });
        it('returns the sum of multiples of n is greater than 0', function () {
            expect(sumOfMultiples(50)).toBe(408);
        });
    });
});