describe('correct day project', function () {
    it('logs the correct message for Wednesday', function () {
        const logSpy = spyOn(console, 'log');

        describeDay('Wednesday');

        expect(logSpy).toHaveBeenCalledWith('This is the third day of the week!');
    });

    it('logs a generic message for a weekday that is not Monday or Wednesday', function () {
        const logSpy = spyOn(console, 'log');

        describeDay('Friday');

        expect(logSpy).toHaveBeenCalledWith('The day is not what you are looking for.');
    });

    it('throws for an invalid day', function () {
        expect(function () {
            describeDay('Holiday');
        }).toThrowError('Invalid day. Please enter a valid weekday.');
    });
});
