describe('math-utilities', function () {
    describe('fact()', function () {
        it('Returns an error if the n is negative.', function() {
            expect(function() {
                fact(-7).toThrowError();
            });
        });
        it('Returns 1 if the n number is 0.', function() {
            expect(fact(0)).toBe(1);
        });
        it('Calculates the factorial if n is positive and greater than 0.', function() {
            expect(fact(3)).toEqual(6);
        });
    });
});
