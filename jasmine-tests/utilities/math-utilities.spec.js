describe('math-utilities', function () {
    describe('everyElemSmaller()', function () {
        it('returns an error if list is empty', function () {
            expect(function () {
                everyElemSmaller([], 1)
            }).toThrowError();
        });
        it('returns an error if n does not exist', function () {
            expect(function () {
                everyElemSmaller([10, 20, 30])
            }).toThrowError();
        });
        it('returns true is at least one element is greater than n', function () {
            expect(everyElemSmaller([1, 2, 3], 4)).toBeTruthy();
        });
        it('returns false if no element is greater than n', function () {
            expect(everyElemSmaller([1, 2, 3], 3)).toBeFalsy();
        });
        it('returns false if all elements in the list are equal and no element is greater than n', function () {
            expect(everyElemSmaller([7, 7], 7)).toBeFalsy();
        });
    });
});