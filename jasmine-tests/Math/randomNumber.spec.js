describe('randomNumber project', function () {
    it('returns an integer within the inclusive interval', function () {
        spyOn(Math, 'random').and.returnValue(0.5);

        expect(randomNumber(1, 5)).toBe(3);
    });

    it('supports an interval containing one value', function () {
        expect(randomNumber(4, 4)).toBe(4);
    });

    it('throws when the interval is reversed', function () {
        expect(function () {
            randomNumber(5, 1);
        }).toThrowError('The interval is invalid.');
    });
});
