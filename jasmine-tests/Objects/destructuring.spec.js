describe('destructuring project', function () {
    it('creates an updated copy without changing the original person', function () {
        return withObjectScript('destructuring.js', function (evaluate) {
            expect(evaluate('personCopy')).toEqual({
                name: 'Vlad Mocanu',
                age: 33,
                isMarried: false,
            });
            expect(evaluate('updatedPerson')).toEqual({
                name: 'Ana Mocanu',
                age: 33,
                isMarried: false,
            });
            expect(evaluate('person.name')).toBe('Vlad Mocanu');
            expect(evaluate('names2')).toEqual(['Pedro', 'Jack', 'Jessica', 'Joel']);
        });
    });
});
