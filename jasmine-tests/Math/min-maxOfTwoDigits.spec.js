describe('numberOfTwo project', function () {
    it('returns an integer in the inclusive interval', function () {
        spyOn(Math, 'random').and.returnValue(0.5);

        expect(numberOfTwo(25, 40)).toBe(33);
    });

    it('rounds the minimum down and maximum up', function () {
        spyOn(Math, 'random').and.returnValue(0);

        expect(numberOfTwo(10.8, 20.2)).toBe(10);
    });

    it('throws when a bound is outside the two-digit range', function () {
        expect(function () {
            numberOfTwo(9, 20);
        }).toThrowError('Numbers must be between 10 and 99.');
    });

    it('throws when the minimum is greater than the maximum', function () {
        expect(function () {
            numberOfTwo(40, 30);
        }).toThrowError('Minimum value cannot be greater than maximum value.');
    });
});
