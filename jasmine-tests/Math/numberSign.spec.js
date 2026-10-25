describe('number sign project', function () {
    it('returns 1 for a positive number', function () {
        expect(returnSignOfNumber(5)).toBe(1);
    });

    it('returns -1 for a negative number', function () {
        expect(returnSignOfNumber(-5)).toBe(-1);
    });

    it('returns 0 for zero', function () {
        expect(returnSignOfNumber(0)).toBe(0);
    });
});
