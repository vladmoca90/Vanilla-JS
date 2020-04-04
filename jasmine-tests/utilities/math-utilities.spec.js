describe('math-utilities', function () {
    describe('calcGeneralBinomio()', function () {
        it('returns an error if at least one of the numbers is zero.', function () {
            expect( function() {
                calcGeneralBinomio(2, 0, 2);
            }).toThrowError();
        });
        it('returns an error if at least one of the numbers is negative.', function () {
            expect( function() {
                calcGeneralBinomio(-1, 0, -7);
            }).toThrowError();
        });
        it('calculates the binomio isall numbers are greater than 0.', function() {
            expect(calcGeneralBinomio(2, 2, 2)).toBe(16);
        });
    });
});
