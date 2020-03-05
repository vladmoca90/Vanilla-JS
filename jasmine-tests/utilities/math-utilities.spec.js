describe('math-utilities', function () {
    describe('increaseXbyN()', function () {
        it('returns the x value if n is greater than 6', function () {
            expect(increaseXbyN(11, 4)).toBe(4);
        });
          it('returns the x value if n is equal to 6', function () {
            expect(increaseXbyN(6, 4)).toBe(4);
        });
        it('returns the x increased value by n if n is smaller than 6', function () {
            expect(increaseXbyN(4, 4)).toBe(6);
        });
    });
});