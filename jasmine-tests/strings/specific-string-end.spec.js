/*
 * Test overview:
 * - Checks whether a sentence ends with the requested text
 */
describe('specific-string-end project', function () {
    it('checks whether a sentence ends with the requested text', function () {
        expect(specificStringEnd('Hello world', 'world')).toBe(false);
        expect(specificStringEnd('Hello world', 'hello')).toBe(false);
    });
});
