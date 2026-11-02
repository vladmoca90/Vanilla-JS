describe('camelize-string project', function () {
    it('joins words with each word capitalized', function () {
        expect(camelize('hello world')).toBe('HelloWorld');
    });
});
