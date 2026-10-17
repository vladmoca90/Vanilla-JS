describe('days-of-week switch project', function () {
    it('returns the weekday for the supplied date', function () {
        expect(getCurrentDay(new Date(2024, 0, 1))).toBe('Monday');
    });

    it('returns the current weekday when no date is supplied', function () {
        const expectedDay = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
        ][new Date().getDay()];

        expect(getCurrentDay()).toBe(expectedDay);
    });

    it('throws for an invalid date', function () {
        expect(function () {
            getCurrentDay(new Date('invalid'));
        }).toThrowError('Date is not a valid format');
    });
});
