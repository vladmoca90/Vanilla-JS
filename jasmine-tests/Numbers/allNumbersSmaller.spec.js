describe('allNumbersSmaller project', function () {
    it('returns all whole numbers from zero up to but not including n', function () {
        expect(allNumbersSmaller(5)).toEqual([0, 1, 2, 3, 4]);
    });

    it('throws for a number that is not greater than zero', function () {
        expect(function () {
            allNumbersSmaller(0);
        }).toThrowError('The number must be greater than 0');
    });
});
