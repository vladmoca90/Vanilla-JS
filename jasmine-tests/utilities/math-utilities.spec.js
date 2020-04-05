describe('math-utilities', function () {
    describe('preciseNumber()', function () {
        it('Returns an error if the n number is negative.', function () {
            expect(function () {
                preciseNumber(-10, 3).toThrowError();
            });
        });
        it('Returns 0 if the n number is 0.', function () {
            expect(preciseNumber(0, 3)).toBe(0);
        });
        it('Returns a precise number if n number is greater than 0.', function () {
            expect(preciseNumber(1.757548, 3)).toBe(1.76);
        });
    });
});