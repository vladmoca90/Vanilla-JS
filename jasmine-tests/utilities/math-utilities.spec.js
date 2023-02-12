describe('math-utilities', function () {
    describe('longestList()', function () {
        it('returns an error if one of the lists is empty', function () {
            expect(function () {
                longestList([], [1, 2, 3])
            }).toThrowError();
        });
        it('returns any of the list if they are equal in number of characters', function () {
            expect(function () {
                longestList([1, 2], [1, 2]).toBe([1, 2]);
            });
        });
        it('returns the first list if it is longer than the second', function () {
            expect(function () {
                longestList([1, 2, 3], [1, 2]).toBe([1, 2, 3]);
            });
        });
        it('returns the second list if it is longer than the first', function () {
            expect(function () {
                longestList([1, 2, 3], [1, 2, 6, 7]).toBe([1, 2, 6, 7]);
            });
        });
    });
});