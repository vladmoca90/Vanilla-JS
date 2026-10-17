describe('correct-day switch project', function () {
    it('logs the matching message for a supported day', function () {
        spyOn(console, 'log');

        describeDay('Sunday');

        expect(console.log).toHaveBeenCalledWith(
            'This is the last day of the week!'
        );
    });

    it('throws for an invalid day', function () {
        expect(function () {
            describeDay('Funday');
        }).toThrowError('Invalid day. Please enter a valid weekday.');
    });
});
