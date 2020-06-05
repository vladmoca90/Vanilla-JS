describe('math-utilities', function () {
    describe('threeEVenNum()', function () {
        it('returns true if all three numbers are even.', function () {
            expect(function () {
                threeEvenNum(2, 4, 6).toBeTruthy()
            });
        });
        it('returns falseif at least of of the numbers is not even.', function () {
            expect(function () {
                threeEvenNum(2, 5, 6).toBeFalsy()
            });
        });
    });
});