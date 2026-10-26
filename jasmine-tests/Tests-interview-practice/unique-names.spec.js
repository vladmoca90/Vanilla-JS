describe("unique service names", function () {
    it("contains each service once in the order it first appears", function () {
        expect(services).toEqual(["payments", "users", "orders"]);
    });
});
