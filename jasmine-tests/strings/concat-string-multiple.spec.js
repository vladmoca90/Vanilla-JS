describe('concat-string-multiple project', function () {
    it('concatenates text the requested number of times', function () {
        expect(concatenateMultiple('ha', 3)).toBe('hahaha');
    });
});
