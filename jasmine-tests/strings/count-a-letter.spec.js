describe('count-a-letter project', function () {
    it('counts a letter case-insensitively by default or sensitively when requested', function () {
        expect(letterCount('Abracadabra', 'a')).toBe(5);
        expect(letterCount('Abracadabra', 'a', true)).toBe(4);
    });
});
