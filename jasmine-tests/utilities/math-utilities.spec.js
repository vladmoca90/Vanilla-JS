describe('math-utilities', function () {
    describe('sumOfMultiples()', function () {
        it('Returns an error if n is smaller than 0.', function() {
            expect(function() {
                sumOfMultiples(-1).toThrowError();
            });
        });
        it('Returns the sum of all multiples of n', function() {
            expect(sumOfMultiples(8)).toBe(9);
        });
    });
});
