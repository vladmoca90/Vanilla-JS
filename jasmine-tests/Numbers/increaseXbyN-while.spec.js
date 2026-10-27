describe('increaseXbyN-while project', function () {
    it('increases x by n', function () {
        expect(increaseXbyN(3, 4)).toBe(7);
    });

    it('leaves x unchanged when n is zero', function () {
        expect(increaseXbyN(20, 0)).toBe(20);
    });
});
