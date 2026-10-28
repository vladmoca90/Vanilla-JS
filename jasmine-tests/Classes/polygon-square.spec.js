describe('Polygon and Square classes project', function () {
    // Square provides the area implementation required by the base Polygon class.
    it('calculates a square area from its side length', function () {
        const square = new Square(5);

        expect(square.side).toBe(5);
        expect(square.area).toBe(25);
        expect(square instanceof Polygon).toBe(true);
    });

    // The base class signals that subclasses must provide their own area getter.
    it('throws when the base polygon area is requested', function () {
        expect(function () {
            return new Polygon().area;
        }).toThrowError('Area must be implemented by subclasses.');
    });
});
