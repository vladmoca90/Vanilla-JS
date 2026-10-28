describe('sortingNumbers project', function () {
    // Spy on console output so the test can check the printed descending order.
    it('prints the three numbers in descending order', function () {
        spyOn(console, 'log');

        sortDescNumbers(-1, 7, 0);

        expect(console.log).toHaveBeenCalledWith('7, 0, -1');
    });

    // Invalid numeric input should be rejected with a clear error.
    it('throws when an argument is not a valid number', function () {
        expect(function () {
            sortDescNumbers('x', 2, 3);
        }).toThrowError('The x must be a valid number');
    });
});
