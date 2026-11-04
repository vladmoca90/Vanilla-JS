describe('getCurrentDate project', function () {
    it('returns the current date in DD-MM-YYYY format', function () {
        return withObjectScript('getCurrentDate.js', function (evaluate) {
            expect(evaluate('getCurrentDate()')).toMatch(/^\d{2}-\d{2}-\d{4}$/);
        });
    });
});
