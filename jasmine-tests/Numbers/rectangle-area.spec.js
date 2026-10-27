describe('rectangle-area project', function () {
    it('calculates the area of a rectangle', function () {
        expect(rectArea(7, 4)).toBe(28);
    });

    it('rejects zero dimensions and square dimensions', function () {
        expect(function () {
            rectArea(0, 4);
        }).toThrowError('The shape is not a rectangle.');
        expect(function () {
            rectArea(4, 4);
        }).toThrowError('The shape is not a rectangle, itis actually a square.');
    });
});
