/*
 * Test overview:
 * - Abbreviates a two-word name
 */
describe('abbreviated-form project', function () {
    it('abbreviates a two-word name', function () {
        expect(becomeAbbreviated('Alex Mocanu')).toBe('A.M.');
    });
});
