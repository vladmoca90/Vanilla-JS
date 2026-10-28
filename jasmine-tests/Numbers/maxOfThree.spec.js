describe('maxOfThree project', function () {
    // Check that the greatest value is found in different argument positions.
    it('returns the largest of three values', function () {
        expect(maxOfThree(1, 9, 4)).toBe(9);
        expect(maxOfThree(8, 2, 3)).toBe(8);
    });

    // Equal inputs should be returned without choosing a different value.
    it('handles equal values', function () {
        expect(maxOfThree(5, 5, 5)).toBe(5);
    });
});
