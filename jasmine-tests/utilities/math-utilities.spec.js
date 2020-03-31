describe('math-utilities', function () {
    describe('longestList()', function () {
        it('returns an error if the lists are equal', function () {
            expect( function() {
                longestList([1, 2], [3, 4])
            }).toThrowError();
        });
        it('returns the first list is this one is longer than the second', function () {
            expect(longestList([1, 2, 3], ['a'])).toBe([1, 2, 3]);
        });
        it('returns the second list if this one is longer than the first', function () {
            expect(longestList([1], ['a', 'b'])).toBe(['a', 'b']);
        });
    });
});