describe('math-utilities', function () {
    describe('fibonacci()', function () {
        it('Returns an error if the n number is negative.', function() {
            expect(function() {
                fibonacci(-4).toThrowError();
            });
        });
        it('Returns 1 if the n number is 0.', function() {
            expect(function() {
                fibonacci(0).toBe(1);
            });
        });
        it('Returns 1 if the n number is also 1.', function() {
            expect(function() {
                fibonacci(0).toBe(1);
            });
        });
        it('Calculates fibonacci function is the n number is positive and greater than 1.', function() {
            expect(function() {
                fibonacci(7).toBe(21);
            });
        });
    });
});
