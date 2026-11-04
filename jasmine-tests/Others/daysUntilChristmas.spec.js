describe('daysUntilChristmas project', function () {
    beforeEach(function () {
        jasmine.clock().install();
    });

    afterEach(function () {
        jasmine.clock().uninstall();
    });

    it('returns one day when Christmas is tomorrow', function () {
        jasmine.clock().mockDate(new Date(2024, 11, 24));

        expect(returnDaysUntilChristmas()).toBe(1);
    });

    it('returns zero on Christmas Day', function () {
        jasmine.clock().mockDate(new Date(2024, 11, 25));

        expect(returnDaysUntilChristmas()).toBe(0);
    });

    it('counts down to next year after Christmas has passed', function () {
        jasmine.clock().mockDate(new Date(2024, 11, 26));

        expect(returnDaysUntilChristmas()).toBe(364);
    });
});
