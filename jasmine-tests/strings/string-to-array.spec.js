describe('string-to-array project', function () {
    it('converts text to a whole-string, character, or word array', function () {
        expect(textToList1('hello world')).toEqual(['hello world']);
        expect(textToList2('hello')).toEqual(['h', 'e', 'l', 'l', 'o']);
        expect(textToList3('hello world')).toEqual(['hello', 'world']);
    });
});
