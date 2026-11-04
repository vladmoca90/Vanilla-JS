describe('language project', function () {
    beforeEach(function () {
        language.log.length = 0;
    });

    it('records each language assigned to current in order', function () {
        language.current = 'English';
        language.current = 'French';
        language.current = 'Spanish';

        expect(language.log).toEqual(['English', 'French', 'Spanish']);
    });
});
