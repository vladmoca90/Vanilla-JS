describe('rhombus project', function () {
    // The area is calculated as base multiplied by height.
    it('calculates the area from the base and height', function () {
        expect(calcAreaRhombus(6, 4)).toBe(24);
    });

    // Both dimensions must be non-zero to calculate a rhombus area.
    it('rejects a zero base or height', function () {
        expect(function () {
            calcAreaRhombus(0, 4);
        }).toThrowError('The shape is not a rhombus.');
    });
});
