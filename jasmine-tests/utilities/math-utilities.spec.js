describe('math-utilities', function () {
    describe('calcArrangements()', function () {
        it('Returns an error if k if greater than n.', function() {
            expect(function() {
                calcArrangements(5, 9).toThrowError();
            });
        });
        it('Returns the value of n if k is equal to 1', function() {
            expect(calcArrangements(4, 1)).toBe(4);
        });
        it('Returns 1 if n is equal to k.', function() {
            expect(calcArrangements(2, 2)).toBe(1);
        });
        it('Calculates the arrangement if all conditions are fulfilled.', function() {
            expect(calcArrangements(4, 2)).toBe(12);
        });
    });
});
