describe('math-utilities', function () {
    describe('longestList()', function () {
        it('returns an error if one of the lists is empty', function () {
            expect( function() {
                longestList([], [3])
            }).toThrowError();
        });
        it('returns the first list if the have equal length', function () {
            expect(longestList(['a'], ['c'])).toEqual(['a']);
        });
        it('returns the first list is this one is longer than the second', function () {
            expect(longestList([1, 2, 3], ['a'])).toEqual([1, 2, 3]);
        });
        it('returns the second list if this one is longer than the first', function () {
            expect(longestList([1], ['a', 'b'])).toEqual(['a', 'b']);
        });
    });
});
