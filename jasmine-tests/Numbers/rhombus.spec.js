describe('rhombus project', function () {
    it('calculates the area from the base and height', function () {
        expect(calcAreaRhombus(6, 4)).toBe(24);
    });

    it('rejects a zero base or height', function () {
        expect(function () {
            calcAreaRhombus(0, 4);
        }).toThrowError('The shape is not a rhombus.');
    });
});
