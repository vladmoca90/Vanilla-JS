describe('bookStatus project', function () {
    it('returns the titles of books that have been read', function () {
        return withObjectScript('bookStatus.js', function (evaluate) {
            expect(evaluate(
                'getReadBooks([{ title: "Read", readingStatus: true }, { title: "Unread", readingStatus: false }])'
            )).toEqual(['Read']);
        });
    });

    it('rejects an empty library and non-array input', function () {
        return withObjectScript('bookStatus.js', function (evaluate) {
            expect(function () {
                evaluate('getReadBooks([])');
            }).toThrowError('The library cannot be empty.');
            expect(function () {
                evaluate('getReadBooks(null)');
            }).toThrowError('The library cannot be empty.');
        });
    });
});
