describe('sumOfMultiples project', function () {
    // Both implementations should sum 0, 3, 6, and 9 below the limit of 10.
    it('sums the multiples of three below the given limit', function () {
        expect(sumOfMultiplesOne(10)).toBe(18);
        expect(sumOfMultiplesTwo(10)).toBe(18);
    });

    // A zero or negative upper limit is not accepted.
    it('rejects a non-positive limit', function () {
        expect(function () {
            sumOfMultiplesOne(0);
        }).toThrowError('The n must be positive and greater than 0');
    });
});
