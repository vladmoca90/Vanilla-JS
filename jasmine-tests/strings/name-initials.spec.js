describe('name-initials project', function () {
    it('returns initials for a name', function () {
        expect(nameInitials('Vlad Mocanu')).toBe('VM');
        expect(nameInitials('Jean-Claude Van Damme')).toBe('JCVD');
    });
});
