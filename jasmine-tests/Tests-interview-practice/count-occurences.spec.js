describe("countStatuses", function () {
    it("counts each status in the supplied array", function () {
        expect(countStatuses(["error", "success", "error", "warning", "error"])).toEqual({
            error: 3,
            success: 1,
            warning: 1,
        });
    });

    it("returns an empty object when there are no statuses", function () {
        expect(countStatuses([])).toEqual({});
    });
});
