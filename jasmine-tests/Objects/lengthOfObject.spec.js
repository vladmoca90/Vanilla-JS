describe('lengthOfObject project', function () {
    it('returns the number of properties in a non-empty object', function () {
        return withObjectScript('lengthOfObject.js', function (evaluate) {
            expect(evaluate('getStudentPropertyCount({ name: "Ada", age: 20 })')).toBe(2);
        });
    });

    it('rejects invalid and empty objects', function () {
        return withObjectScript('lengthOfObject.js', function (evaluate) {
            expect(function () {
                evaluate('getStudentPropertyCount(null)');
            }).toThrowError('Expected a non-null object.');
            expect(function () {
                evaluate('getStudentPropertyCount([])');
            }).toThrowError('Expected a non-null object.');
            expect(function () {
                evaluate('getStudentPropertyCount({})');
            }).toThrowError('The object cannot be empty.');
        });
    });
});
