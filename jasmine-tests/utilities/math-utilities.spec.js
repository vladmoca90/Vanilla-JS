describe('math-utilities', function () {
    describe('minElem()', function () {
        it('returns an error if the list is empty', function () {
            expect(function () {
                minElem([])
            }).toThrowError();
        });
        it('returns the element if the list has only one', function () {
            expect(function () {
               minElem([1]).toBe(1);
            });
        });
        it('returns the smallest element in the list if the list has more than one', function () {
            expect(function () {
               minElem([3, 7, 5, 10]).toBe(3);
            });
        });
    });
});