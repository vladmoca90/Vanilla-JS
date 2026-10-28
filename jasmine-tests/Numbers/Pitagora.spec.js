describe('Pitagora project', function () {
    // This function returns false when the sides form a right triangle.
    it('recognizes a right triangle', function () {
        expect(calcPitagora(3, 4, 5)).toBe(false);
    });

    // A non-right triangle does not satisfy c^2 = a^2 + b^2.
    it('returns true when the sides do not satisfy the Pythagorean theorem', function () {
        expect(calcPitagora(3, 4, 6)).toBe(true);
    });

    // Zero-length sides are rejected as an invalid triangle.
    it('throws when any side is zero', function () {
        expect(function () {
            calcPitagora(0, 4, 5);
        }).toThrowError('The shape is not a triangle');
    });
});
