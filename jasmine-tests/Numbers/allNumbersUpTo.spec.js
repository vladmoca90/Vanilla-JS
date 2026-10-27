describe('allNumbersUpTo project', function () {
    it('counts values below 100 divisible by either divisor', function () {
        expect(numbersDivisibleWithOr(4, 6)).toBe(32);
    });

    it('counts values below the limit divisible by the given divisor', function () {
        expect(numbersDivisibleWithAnd(3, 10)).toBe(3);
    });

    it('counts integers in the half-open interval', function () {
        expect(countNumbersBetweenInterval(3, 10)).toBe(7);
    });
});
