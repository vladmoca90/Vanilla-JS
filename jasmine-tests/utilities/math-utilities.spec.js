describe('math-utilities', function () {
    describe('allNumbersSmaller()', function () {
        it('Returns an error if the number n is negative or equal to 0.', function() {
            expect(function() {
                allNumbersSmaller(-3).toThrowError();
            });
        });
        it('The number n is greater or equal than 0.', function() {
            expect(allNumbersSmaller(3)).toEqual([0, 1, 2]);
        });
    });
});
