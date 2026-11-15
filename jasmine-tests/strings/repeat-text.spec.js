/*
 * Test overview:
 * - Repeats text the requested number of times
 */
describe('repeat-text project', function () {
    it('repeats text the requested number of times', function () {
        expect(repeatText('ha', 3)).toBe('hahaha');
    });
});
