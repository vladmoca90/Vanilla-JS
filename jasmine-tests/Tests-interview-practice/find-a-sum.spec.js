describe("twoSum", function () {
    it("returns the indices of two numbers that add to the target", function () {
        expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    });

    it("uses distinct entries when the target requires a repeated number", function () {
        expect(twoSum([3, 3], 6)).toEqual([0, 1]);
    });

    it("returns an empty array when no pair matches", function () {
        expect(twoSum([1, 2, 4], 8)).toEqual([]);
    });
});
