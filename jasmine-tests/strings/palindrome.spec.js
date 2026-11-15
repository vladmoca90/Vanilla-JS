/*
 * Test overview:
 * - Identifies palindromes and non-palindromes
 */
describe('palindrome project', function () {
    it('identifies palindromes and non-palindromes', function () {
        expect(checkPalindromeText('racecar')).toBe(true);
        expect(checkPalindromeText('hello')).toBe(false);
    });
});
