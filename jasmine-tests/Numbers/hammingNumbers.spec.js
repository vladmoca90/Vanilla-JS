describe('hammingNumbers project', function () {
    it('returns positive numbers with no prime factors other than 2, 3, and 5', function () {
        expect(getHammingNumbers(15)).toEqual([1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15]);
    });

    it('returns an empty list for a limit below one', function () {
        expect(getHammingNumbers(0)).toEqual([]);
    });
});
