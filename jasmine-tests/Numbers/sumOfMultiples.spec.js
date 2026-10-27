describe('sumOfMultiples project', function () {
    it('sums the multiples of three below the given limit', function () {
        expect(sumOfMultiplesOne(10)).toBe(18);
        expect(sumOfMultiplesTwo(10)).toBe(18);
    });

    it('rejects a non-positive limit', function () {
        expect(function () {
            sumOfMultiplesOne(0);
        }).toThrowError('The n must be positive and greater than 0');
    });
});
