describe('maxOfThree project', function () {
    it('returns the largest of three values', function () {
        expect(maxOfThree(1, 9, 4)).toBe(9);
        expect(maxOfThree(8, 2, 3)).toBe(8);
    });

    it('handles equal values', function () {
        expect(maxOfThree(5, 5, 5)).toBe(5);
    });
});
