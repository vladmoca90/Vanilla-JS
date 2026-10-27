describe('BinomioSquares project', function () {
    it('calculates the square of a sum', function () {
        expect(calculateBinomio(2, 3)).toBe(25);
        expect(calculateBinomio(0, 4)).toBe(16);
    });

    it('calculates the difference of two squares', function () {
        expect(calculateDiffOfSquares(5, 3)).toBe(16);
        expect(calculateDiffOfSquares(4, 4)).toBe(0);
    });
});
