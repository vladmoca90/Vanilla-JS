describe('math-utilities', function () {
    describe('digitsAddition()', function () {
        it('returns an error if the number does not exist', function () {
            expect(function () {
                digitsAddition()
            }).toThrowError();
        });
         it('returns an error if the number is negative', function () {
            expect(function () {
                digitsAddition(-3)
            }).toThrowError();
        });
        it('returns the sum of digits if the number exists and it is positive', function () {

            expect(digitsAddition(123)).toBe(6);
        });
    });
});