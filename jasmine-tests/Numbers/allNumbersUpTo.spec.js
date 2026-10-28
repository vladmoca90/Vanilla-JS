describe('allNumbersUpTo project', function () {
    // Count each number below 100 that is divisible by 4 or by 6.
    it('counts values below 100 divisible by either divisor', function () {
        expect(numbersDivisibleWithOr(4, 6)).toBe(32);
    });

    // Count multiples of 3 that occur before the limit of 10.
    it('counts values below the limit divisible by the given divisor', function () {
        expect(numbersDivisibleWithAnd(3, 10)).toBe(3);
    });

    // Count integers from the lower bound up to, but not including, the upper bound.
    it('counts integers in the half-open interval', function () {
        expect(countNumbersBetweenInterval(3, 10)).toBe(7);
    });
});
