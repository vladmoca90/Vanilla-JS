describe('remove-with-substring project', function () {
    it('keeps the requested number of characters', function () {
        expect(removeCharacters('JavaScript', 4)).toBe('Java');
    });
});
