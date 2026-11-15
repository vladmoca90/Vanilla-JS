/*
 * Test overview:
 * - Converts a numeric string to a number
 */
describe('string-to-number project', function () {
    it('converts a numeric string to a number', function () {
        expect(textToNumber('42')).toBe(42);
    });
});
