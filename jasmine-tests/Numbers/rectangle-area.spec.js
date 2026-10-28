describe('rectangle-area project', function () {
    // The area is calculated by multiplying the rectangle's dimensions.
    it('calculates the area of a rectangle', function () {
        expect(rectArea(7, 4)).toBe(28);
    });

    // Check both invalid zero dimensions and equal dimensions (a square).
    it('rejects zero dimensions and square dimensions', function () {
        expect(function () {
            rectArea(0, 4);
        }).toThrowError('The shape is not a rectangle.');
        expect(function () {
            rectArea(4, 4);
        }).toThrowError('The shape is not a rectangle, itis actually a square.');
    });
});
