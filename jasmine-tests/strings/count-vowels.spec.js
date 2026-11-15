/*
 * Test overview:
 * - Counts vowels without regard to case
 */
describe('count-vowels project', function () {
    it('counts vowels without regard to case', function () {
        expect(countVowels('Education')).toBe(5);
    });
});
