describe('fixedNumber project', function () {
    // toFixed formats the result as a string with the requested decimal places.
    it('returns a string formatted to the requested decimal places', function () {
        expect(fixedNumber(3.14159, 2)).toBe('3.14');
    });

    // Zero is returned directly rather than formatted as a string.
    it('returns zero for zero', function () {
        expect(fixedNumber(0, 2)).toBe(0);
    });

    // Negative values are outside the function's accepted range.
    it('rejects negative input', function () {
        expect(function () {
            fixedNumber(-1, 2);
        }).toThrowError('The number must be greater than 0');
    });
});
