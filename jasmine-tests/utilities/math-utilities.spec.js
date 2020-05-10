describe('math-utilities', function () {
    describe('createPerson()', function () {
        it('Returns an error if the text is empty.', function () {
            expect(function () {
                createPerson('').toThrowError();
            });
        });
        it('Returns the list if the list hasonly one element.', function () {
            expect(createPerson(['Alexandru'])).toBe("person = { name: 'Alexandru Mocanu' }");
        });
        it('Returns an object with two properties of the list has two elements.', function () {
            expect(createPerson('Vlad Mocanu', 25)).toBe("person = {name: 'Alexandru', age: 25}");
        });
    });
});