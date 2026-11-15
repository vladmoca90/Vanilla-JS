/*
 * Test overview:
 * - Returns the longest word
 */
describe('longest-word project', function () {
    it('returns the longest word', function () {
        expect(longestWord('A short sentence')).toBe('sentence');
    });
});
