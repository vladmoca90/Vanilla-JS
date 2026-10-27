describe('numberToString project', function () {
    it('returns true when a positive number has two digits', function () {
        expect(numberToString(42)).toBe(true);
    });

    it('returns false when the number does not have two digits', function () {
        expect(numberToString(7)).toBe(false);
        expect(numberToString(100)).toBe(false);
    });

    it('rejects non-positive input', function () {
        expect(function () {
            numberToString(0);
        }).toThrowError('The number must be positive');
    });
});
