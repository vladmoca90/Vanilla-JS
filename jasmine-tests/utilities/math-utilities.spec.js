describe('math-utilities', function () {
    describe('calcPitagora()', function () {
        it('Returns an error one of the sides has a value of 0.', function() {
            expect(function() {
                calcPitagora(5, 5, 0).toThrowError();
            });
        });
        it('Returns false if the sum of squares of a and b is not equal to the square of c.', function() {
            expect(function() {
                calcPitagora(2, 3, 4).toBeFalsy();
            });
        });
        it('Returns true if the sum of squares of a and b is equal to the square of c.', function() {
            expect(function() {
                calcPitagora(4, 3, 5).toBeFalsy();
            });
        });
    });
});
