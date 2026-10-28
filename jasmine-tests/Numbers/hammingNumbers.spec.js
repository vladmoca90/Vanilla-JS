describe('hammingNumbers project', function () {
    // These are the values up to 15 whose prime factors are limited to 2, 3, and 5.
    it('returns positive numbers with no prime factors other than 2, 3, and 5', function () {
        expect(getHammingNumbers(15)).toEqual([1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15]);
    });

    // No positive Hamming numbers fit below a limit of one.
    it('returns an empty list for a limit below one', function () {
        expect(getHammingNumbers(0)).toEqual([]);
    });
});
