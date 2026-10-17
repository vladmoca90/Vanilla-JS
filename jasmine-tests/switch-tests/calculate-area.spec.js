describe('calculate-area switch project', function () {
    it('logs the matching message for a supported day', function () {
        spyOn(console, 'log');

        checkDay('Monday');

        expect(console.log).toHaveBeenCalledWith(
            'This is the first day of the week!'
        );
    });

    it('throws for an invalid day', function () {
        expect(function () {
            checkDay('Funday');
        }).toThrowError('The day is not in a valid format.');
    });
});
