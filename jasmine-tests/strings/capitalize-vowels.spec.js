/*
 * Test overview:
 * - Capitalizes vowels in text
 */
describe('capitalize-vowels project', function () {
    it('capitalizes vowels in text', function () {
        expect(capitalizeVowels('hello world')).toBe('hEllO wOrld');
    });
});
