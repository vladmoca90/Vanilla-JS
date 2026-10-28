describe('numberToString project', function () {
    // A two-character positive integer should pass the length check.
    it('returns true when a positive number has two digits', function () {
        expect(numberToString(42)).toBe(true);
    });

    // One- and three-digit inputs should fail the two-digit length check.
    it('returns false when the number does not have two digits', function () {
        expect(numberToString(7)).toBe(false);
        expect(numberToString(100)).toBe(false);
    });

    // The function requires a positive number before converting it to text.
    it('rejects non-positive input', function () {
        expect(function () {
            numberToString(0);
        }).toThrowError('The number must be positive');
    });
});
