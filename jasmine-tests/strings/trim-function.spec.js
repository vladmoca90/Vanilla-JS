describe('trim-function project', function () {
    it('removes whitespace from text', function () {
        expect(trimText('  hello world  ')).toBe('helloworld');
    });
});
