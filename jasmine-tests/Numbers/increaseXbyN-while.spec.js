describe('increaseXbyN-while project', function () {
    // Repeatedly increment x four times.
    it('increases x by n', function () {
        expect(increaseXbyN(3, 4)).toBe(7);
    });

    // With no increments requested, the starting value stays the same.
    it('leaves x unchanged when n is zero', function () {
        expect(increaseXbyN(20, 0)).toBe(20);
    });
});
