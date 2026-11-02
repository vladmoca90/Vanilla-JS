describe('upper-lower-case project', function () {
    it('converts text to upper and lower case', function () {
        expect(upperCaseText('Hello World')).toBe('HELLO WORLD');
        expect(lowerCaseText('Hello World')).toBe('hello world');
    });
});
