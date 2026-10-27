describe('findDigit project', function () {
    it('returns the digit at a zero-based position', function () {
        expect(getCertainDigit(58392, 2)).toBe(3);
    });

    it('rejects an unavailable position', function () {
        expect(function () {
            getCertainDigit(123, 3);
        }).toThrowError('The digit does not exist');
    });

    it('requires a number with at least two digits', function () {
        expect(function () {
            getCertainDigit(7, 0);
        }).toThrowError('The number must have at leat two digits');
    });
});
