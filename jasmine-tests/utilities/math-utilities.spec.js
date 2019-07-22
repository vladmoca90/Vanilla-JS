describe('math-utilities', function () {
    describe('randomizeElem()', function () {
        it('returns an error if the list is empty', function () {
            expect(function() {
                randomizeElem([])
            }).toThrowError();
        });
        it('returns the list itself if it has only one element', function () {

            expect(function() {
                randomizeElem([1])
            }).toBe([1]);
        });
        it('returns a random array if it has more than one element', function () {

            expect(randomizeElem([1, 2, 3])).toBe([3, 2, 1]);
        });
    });
});