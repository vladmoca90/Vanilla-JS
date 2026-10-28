describe('countDigit project', function () {
    // Count repeated appearances of the selected digit in the number.
    it('counts occurrences of the requested digit', function () {
        expect(countDigit(122321, 2)).toBe(3);
    });

    // Return zero when none of the number's digits match.
    it('returns zero when the digit is absent', function () {
        expect(countDigit(12345, 0)).toBe(0);
    });

    // Only a single decimal digit from 0 through 9 is accepted.
    it('rejects digits outside the decimal range', function () {
        expect(function () {
            countDigit(123, 10);
        }).toThrowError('The digit cannot be negative or greater than 9');
    });
});
