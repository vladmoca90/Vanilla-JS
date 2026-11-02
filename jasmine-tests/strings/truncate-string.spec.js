describe('truncate-string project', function () {
    it('truncates text to the requested number of characters', function () {
        expect(truncateString('Hello world', 5)).toBe('Hello');
    });
});
