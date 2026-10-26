describe("firstDuplicate", function () {
    it("returns the first value encountered for a second time", function () {
        expect(firstDuplicate([2, 1, 3, 5, 3, 2])).toBe(3);
    });

    it("returns null when the array has no duplicates", function () {
        expect(firstDuplicate([1, 2, 3])).toBeNull();
    });

    it("returns null for an empty array", function () {
        expect(firstDuplicate([])).toBeNull();
    });
});
