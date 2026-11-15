/*
 * Test overview:
 * - Verifies the natural logarithm of e is approximately 1.
 * - Confirms log(1) returns 0.
 * - Checks that non-positive input values throw the correct error.
 */
describe('calcLog project', function () {
    it('calculates the natural logarithm', function () {
        expect(calcLog(Math.E)).toBeCloseTo(1);
    });

    it('calculates the natural logarithm of one', function () {
        expect(calcLog(1)).toBe(0);
    });

    it('throws when the input is not positive', function () {
        expect(function () {
            calcLog(0);
        }).toThrowError('Input must be greater than 0.');
    });
});
