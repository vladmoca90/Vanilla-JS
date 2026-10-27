describe('Pitagora project', function () {
    it('recognizes a right triangle', function () {
        expect(calcPitagora(3, 4, 5)).toBe(false);
    });

    it('returns true when the sides do not satisfy the Pythagorean theorem', function () {
        expect(calcPitagora(3, 4, 6)).toBe(true);
    });

    it('throws when any side is zero', function () {
        expect(function () {
            calcPitagora(0, 4, 5);
        }).toThrowError('The shape is not a triangle');
    });
});
