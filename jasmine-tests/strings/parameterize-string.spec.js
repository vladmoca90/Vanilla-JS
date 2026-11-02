describe('parameterize-string project', function () {
    it('lowercases text and replaces a space with a hyphen', function () {
        expect(parameterizeText('Hello World')).toBe('hello-world');
    });
});
