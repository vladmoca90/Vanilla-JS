describe('power, square and hypotenuse project', function () {
    describe('power()', function () {
        it('raises a number to a non-negative integer power', function () {
            expect(power(3, 4)).toBe(81);
        });

        it('returns one when the exponent is zero', function () {
            expect(power(7, 0)).toBe(1);
        });

        it('throws for negative arguments', function () {
            expect(function () {
                power(-2, 3);
            }).toThrowError('Arguments must be non-negative');
        });
    });

    describe('square()', function () {
        it('returns the square of a number', function () {
            expect(square(5)).toBe(25);
        });

        it('throws for a negative number', function () {
            expect(function () {
                square(-1);
            }).toThrowError('Number cannot be negative');
        });
    });

    describe('calculateHyp()', function () {
        it('calculates the hypotenuse of a right triangle', function () {
            expect(calculateHyp(3, 4)).toBe(5);
        });

        it('throws when either side is negative', function () {
            expect(function () {
                calculateHyp(3, -4);
            }).toThrowError('Sides must be non-negative');
        });
    });
});
