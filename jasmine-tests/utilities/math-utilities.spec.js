describe('math-utilities', function () {
    describe('nameInitials()', function () {
        it('throws an error if the name does not exist', function () {

            expect(function () {
                nameInitials('')
            }).toThrowError();
        });
        it('Returns the name if it has only one character', function () {

            expect(nameInitials('V')).toBe('V');
        });
        it('Returns the name initials if the name has more characters', function () {

            expect(nameInitials('Vlad Mocanu')).toBe('VM');
        });
        it('Returns the name initials if the name has more characters', function () {

            expect(nameInitials('Ilinca Rolea Stroia')).toBe('IRS');
        });
        it('Returns the name initials if the name has more characters', function () {

            expect(nameInitials('Ana-Maria Stanescu')).toBe('AMS');
        });
        it('Returns the name initials if the name has more characters', function () {

            expect(nameInitials('ALEXANDRU MOCANU')).toBe('AM');
        });
    });
});