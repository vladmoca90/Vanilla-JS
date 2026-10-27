describe('countDigit project', function () {
    it('counts occurrences of the requested digit', function () {
        expect(countDigit(122321, 2)).toBe(3);
    });

    it('returns zero when the digit is absent', function () {
        expect(countDigit(12345, 0)).toBe(0);
    });

    it('rejects digits outside the decimal range', function () {
        expect(function () {
            countDigit(123, 10);
        }).toThrowError('The digit cannot be negative or greater than 9');
    });
});
