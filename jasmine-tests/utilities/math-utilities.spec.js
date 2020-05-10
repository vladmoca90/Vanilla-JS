describe('math-utilities', function () {
    describe('createPerson()', function () {
        it('Returns an error if the list is empty.', function () {
            expect(function () {
                createPerson([]).toThrowError();
            });
        });
        it('Returns an error if the list has only one element.', function () {
            expect(function () {
                createPerson(['Vlad Mocanu']).toThrowError();
            });
        });
        it('Returns an object with two properties of the list has two elements.', function () {
            expect(createPerson(['Vlad Mocanu', 25])).toBe("{name:'Vlad Mocanu', age: 25}");
        });
    });
});