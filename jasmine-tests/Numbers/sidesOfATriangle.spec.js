describe('sidesOfATriangle project', function () {
    it('recognizes sides that satisfy the triangle inequality', function () {
        expect(isTriangle({ a: 3, b: 4, c: 5 })).toBe(true);
    });

    it('rejects sides that cannot form a triangle', function () {
        expect(isTriangle({ a: 1, b: 2, c: 3 })).toBe(false);
    });
});
