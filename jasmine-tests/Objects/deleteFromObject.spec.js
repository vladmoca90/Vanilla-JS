describe('deleteFromObject project', function () {
    it('removes library IDs without changing the original books', function () {
        return withObjectScript('deleteFromObject.js', function (evaluate) {
            const result = evaluate(
                '(() => { const books = [{ title: "Book", libraryId: 7 }]; return { original: books, updated: removeLibraryId(books) }; })()'
            );

            expect(result.updated).toEqual([{ title: 'Book' }]);
            expect(result.original).toEqual([{ title: 'Book', libraryId: 7 }]);
        });
    });

    it('rejects non-array and empty input', function () {
        return withObjectScript('deleteFromObject.js', function (evaluate) {
            expect(function () {
                evaluate('removeLibraryId(null)');
            }).toThrowError('Input must be an array.');
            expect(function () {
                evaluate('removeLibraryId([])');
            }).toThrowError('The array cannot be empty.');
        });
    });
});
