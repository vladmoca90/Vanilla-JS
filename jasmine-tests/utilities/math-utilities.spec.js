describe('math-utilities', function () {
    describe('randomizeElem()', function () {
        it('returns an error if the list is empty', function () {
            expect(function () {
                randomizeElem([])
            }).toThrowError();
        });
        it('returns the list if it has only one element', function () {

            expect(randomizeElem([1])).toBe([1]);
        });
        it('returns a list with random elements', function () {

            expect(randomizeElem([1, 2, 3])).toBe([3, 1, 2]);
        });
    });
});