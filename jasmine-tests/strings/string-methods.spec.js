describe('string-methods project', function () {
    it('applies substring and substr to text', function () {
        expect(subText('JavaScript', 0, 4)).toBe('Java');
        expect(substrText('JavaScript', 4, 6)).toBe('Script');
    });
});
