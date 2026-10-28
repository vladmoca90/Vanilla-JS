describe('preciseNumber project', function () {
    // toPrecision returns a string rounded to the requested significant digits.
    it('returns a string formatted to the requested significant digits', function () {
        expect(preciseNumber(3.14159, 3)).toBe('3.14');
    });

    // Zero is returned directly rather than formatted as a string.
    it('returns zero for zero', function () {
        expect(preciseNumber(0, 3)).toBe(0);
    });

    // Negative values are outside the function's accepted range.
    it('rejects negative input', function () {
        expect(function () {
            preciseNumber(-1, 3);
        }).toThrowError('Then number must be greater than 0');
    });
});
