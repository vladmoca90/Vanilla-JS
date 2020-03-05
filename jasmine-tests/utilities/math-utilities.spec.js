describe('math-utilities', function () {
    describe('increaseXbyN()', function () {
        it('returns undefined if n is greater than 6', function () {
            expect(increaseXbyN(11)).toBe('undefined');
        });
          it('returns 6 if n is smaller than 6', function () {
            expect(increaseXbyN(4)).toBe(6);
        });
    });
});