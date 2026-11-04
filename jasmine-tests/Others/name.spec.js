describe('name project', function () {
    it('trims whitespace when setting a name', function () {
        person.name = '  Vlad Mocanu  ';

        expect(person.name).toBe('Vlad Mocanu');
    });

    it('trims whitespace from a name containing only spaces', function () {
        person.name = '   ';

        expect(person.name).toBe('');
    });
});
