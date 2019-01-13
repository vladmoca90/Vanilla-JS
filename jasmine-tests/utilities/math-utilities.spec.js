describe('math-utilities', function () {
    describe('returnDaysUntilChristmas()', function () {
        it('returns the number of days until Christmas if it is 1-24 December', function () {

            expect(returnDaysUntilChristmas(2019, 11, 11)).toBe(14);
        });
        it('returns zero if today is Christmas Day', function () {

            expect(returnDaysUntilChristmas(2019, 11, 25)).toBe(0);
        });
        it('returns zero if today is Christmas Day', function () {

            expect(returnDaysUntilChristmas(2019, 11, 31)).toBe(359);
        });
        it('returns the total number of days until Christmas if is not December', function () {

            expect(returnDaysUntilChristmas(2019, 10, 25)).toBe(30);
        });
    });
});