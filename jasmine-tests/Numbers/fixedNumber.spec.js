describe('fixedNumber project', function () {
    it('returns a string formatted to the requested decimal places', function () {
        expect(fixedNumber(3.14159, 2)).toBe('3.14');
    });

    it('returns zero for zero', function () {
        expect(fixedNumber(0, 2)).toBe(0);
    });

    it('rejects negative input', function () {
        expect(function () {
            fixedNumber(-1, 2);
        }).toThrowError('The number must be greater than 0');
    });
});
