describe('findDigit project', function () {
    // Position 2 is the third character because positions are zero-based.
    it('returns the digit at a zero-based position', function () {
        expect(getCertainDigit(58392, 2)).toBe(3);
    });

    // An index equal to the number's length is outside the available digits.
    it('rejects an unavailable position', function () {
        expect(function () {
            getCertainDigit(123, 3);
        }).toThrowError('The digit does not exist');
    });

    // This function does not accept a single-digit number.
    it('requires a number with at least two digits', function () {
        expect(function () {
            getCertainDigit(7, 0);
        }).toThrowError('The number must have at leat two digits');
    });
});
