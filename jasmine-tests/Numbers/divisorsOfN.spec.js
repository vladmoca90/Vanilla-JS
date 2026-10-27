describe('divisorsOfN project', function () {
    it('returns all positive divisors of a number', function () {
        expect(findDivisors(12)).toEqual([1, 2, 3, 4, 6, 12]);
    });

    it('returns one as the only divisor of one', function () {
        expect(findDivisors(1)).toEqual([1]);
    });

    it('rejects non-positive input', function () {
        expect(function () {
            findDivisors(0);
        }).toThrowError('The n must be positive only');
    });
});
