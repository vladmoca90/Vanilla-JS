/*
 * Test overview:
 * - Confirms cube roots are computed correctly for positive numbers.
 * - Verifies the function handles negative numbers correctly.
 * - Ensures zero returns zero without producing an error.
 */
describe('cubic root project', function () {
    it('returns the cube root of a positive number', function () {
        expect(returnCubeRoot(27)).toBe(3);
    });

    it('returns the cube root of a negative number', function () {
        expect(returnCubeRoot(-8)).toBe(-2);
    });

    it('returns zero for zero', function () {
        expect(returnCubeRoot(0)).toBe(0);
    });
});
