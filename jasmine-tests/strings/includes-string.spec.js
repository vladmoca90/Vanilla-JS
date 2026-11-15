/*
 * Test overview:
 * - Checks whether text includes another string
 */
describe('includes-string project', function () {
    it('checks whether text includes another string', function () {
        expect(includeText('Vanilla JavaScript', 'Java')).toBe(true);
        expect(includeText('Vanilla JavaScript', 'Python')).toBe(false);
    });
});
