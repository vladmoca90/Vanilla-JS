describe('angle conversion project', function () {
    describe('degreesToRadians()', function () {
        it('converts 180 degrees to pi radians', function () {
            expect(degreesToRadians(180)).toBeCloseTo(Math.PI);
        });

        it('throws for null', function () {
            expect(function () {
                degreesToRadians(null);
            }).toThrowError('Value cannot be null or undefined.');
        });

        it('throws a type error for a non-number', function () {
            expect(function () {
                degreesToRadians('90');
            }).toThrowError(TypeError, 'Value must be a valid number.');
        });
    });

    describe('radiansToDegrees()', function () {
        it('converts pi radians to 180 degrees', function () {
            expect(radiansToDegrees(Math.PI)).toBeCloseTo(180);
        });

        it('throws for undefined', function () {
            expect(function () {
                radiansToDegrees(undefined);
            }).toThrowError('Value cannot be null or undefined.');
        });

        it('throws a type error for NaN', function () {
            expect(function () {
                radiansToDegrees(NaN);
            }).toThrowError(TypeError, 'Value must be a valid number.');
        });
    });
});
