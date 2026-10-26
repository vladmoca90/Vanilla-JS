describe("getServiceStats", function () {
    it("aggregates requests, errors, and average duration by service", function () {
        expect(getServiceStats(events)).toEqual([
            {
                service: "payments",
                requests: 3,
                errors: 1,
                averageDuration: 200,
            },
            {
                service: "users",
                requests: 2,
                errors: 1,
                averageDuration: 300,
            },
        ]);
    });

    it("returns an empty array when there are no events", function () {
        expect(getServiceStats([])).toEqual([]);
    });
});
