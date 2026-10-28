describe('fibonacci project', function () {
    // Verify the exercise's base values and the following recursive sequence values.
    it('returns the sequence with the exercise base values', function () {
        expect([0, 1, 2, 3, 4, 5].map(fibonacci)).toEqual([1, 1, 2, 3, 5, 8]);
    });

    // Fibonacci indices cannot be negative.
    it('rejects negative input', function () {
        expect(function () {
            fibonacci(-1);
        }).toThrowError('n must be positive or 0 only!');
    });
});
