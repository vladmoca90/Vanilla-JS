describe('sortingNumbers project', function () {
    it('prints the three numbers in descending order', function () {
        spyOn(console, 'log');

        sortDescNumbers(-1, 7, 0);

        expect(console.log).toHaveBeenCalledWith('7, 0, -1');
    });

    it('throws when an argument is not a valid number', function () {
        expect(function () {
            sortDescNumbers('x', 2, 3);
        }).toThrowError('The x must be a valid number');
    });
});
