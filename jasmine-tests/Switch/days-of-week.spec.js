describe('days of week project', function () {
    it('returns Sunday for a Sunday date', function () {
        const sunday = new Date('2024-01-07');

        expect(getCurrentDay(sunday)).toBe('Sunday');
    });

    it('returns Monday for a Monday date', function () {
        const monday = new Date('2024-01-08');

        expect(getCurrentDay(monday)).toBe('Monday');
    });

    it('returns Saturday for a Saturday date', function () {
        const saturday = new Date('2024-01-13');

        expect(getCurrentDay(saturday)).toBe('Saturday');
    });
});
