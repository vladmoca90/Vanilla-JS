describe('sidesOfATriangle project', function () {
    // Each pair of sides sums to more than the remaining side.
    it('recognizes sides that satisfy the triangle inequality', function () {
        expect(isTriangle({ a: 3, b: 4, c: 5 })).toBe(true);
    });

    // These sides fail the triangle inequality because 1 + 2 is not greater than 3.
    it('rejects sides that cannot form a triangle', function () {
        expect(isTriangle({ a: 1, b: 2, c: 3 })).toBe(false);
    });
});
