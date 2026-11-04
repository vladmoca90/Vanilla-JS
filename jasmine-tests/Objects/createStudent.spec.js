describe('createStudent project', function () {
    it('returns the keys, entries, values, and property count', function () {
        return withObjectScript('createStudent.js', function (evaluate) {
            const result = evaluate(
                'getStudentProperties({ name: "Ada", age: 20 })'
            );

            expect(result).toEqual({
                length: 2,
                keys: ['name', 'age'],
                entries: [['name', 'Ada'], ['age', 20]],
                values: ['Ada', 20],
            });
        });
    });

    it('rejects an empty student object', function () {
        return withObjectScript('createStudent.js', function (evaluate) {
            expect(function () {
                evaluate('getStudentProperties({})');
            }).toThrowError('The object cannot be empty.');
        });
    });
});
