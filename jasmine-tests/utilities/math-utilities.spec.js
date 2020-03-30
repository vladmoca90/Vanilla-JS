describe('math-utilities', function () {
    describe('nameInitials()', function () {
        it('returns an error if there is no name', function () {
            expect( function() {
                nameInitials('')
            }).toThrowError();
        });
        it('returns the name is it has only one letter', function () {
            expect(nameInitials('V')).toBe('V');
        });
        it('returns the initials if there is a full name', function () {
            expect(nameInitials('Vlad Mocanu')).toBe('VM');
        });
    });
});