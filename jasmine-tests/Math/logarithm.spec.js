describe('calcLog project', function () {
    it('calculates the natural logarithm', function () {
        expect(calcLog(Math.E)).toBeCloseTo(1);
    });

    it('calculates the natural logarithm of one', function () {
        expect(calcLog(1)).toBe(0);
    });

    it('throws when the input is not positive', function () {
        expect(function () {
            calcLog(0);
        }).toThrowError('Input must be greater than 0.');
    });
});
