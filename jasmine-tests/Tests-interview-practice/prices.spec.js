describe("prices", function () {
    it("provides the expected price for each listed product", function () {
        expect(prices).toEqual({
            apple: 1.2,
            banana: 1,
            orange: 1.59,
            coconut: 1.99,
        });
    });
});
