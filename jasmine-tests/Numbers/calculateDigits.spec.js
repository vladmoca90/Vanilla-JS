describe('calculateDigits project', function () {
    it('adds the digits of a positive integer', function () {
        expect(digitsAddition(12345)).toBe(15);
    });

    it('throws when the number is missing or negative', function () {
        expect(function () {
            digitsAddition(0);
        }).toThrowError('The number must be given');
        expect(function () {
            digitsAddition(-12);
        }).toThrowError('The number must be positive');
    });
});
