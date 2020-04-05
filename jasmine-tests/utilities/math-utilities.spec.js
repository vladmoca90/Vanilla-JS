describe('math-utilities', function () {
    describe('numberOfTwo()', function () {
        it('Returns an error if min or max are < 0 or > 99', function() {
            expect(function() {
                numberOfTwo(2, 105).toThrowError();
            });
        });
        it('', function() {
            expect(numberOfTwo(29, 75)).toBe(48);
        });
    });
});
