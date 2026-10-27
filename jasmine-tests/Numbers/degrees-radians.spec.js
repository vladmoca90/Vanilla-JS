describe('degrees-radians project', function () {
    it('converts degrees to radians using the exercise pi approximation', function () {
        expect(degreesToRadians(180)).toBe(3.14);
        expect(degreesToRadians(90)).toBe(1.57);
    });

    it('converts radians to degrees', function () {
        expect(radiansToDegrees(3.14)).toBe(180);
    });

    it('rejects degrees outside the supported range', function () {
        expect(function () {
            degreesToRadians(-1);
        }).toThrowError('The degrees must be a positive number');
        expect(function () {
            degreesToRadians(361);
        }).toThrowError('The degrees must be a number 0 and 360');
    });
});
