/*
 * Test overview:
 * - Logs the correct message for Monday
 * - Logs the correct message for Sunday
 * - Throws for an invalid day
 */
describe('calculate area project', function () {
    it('logs the correct message for Monday', function () {
        const logSpy = spyOn(console, 'log');

        checkDay('Monday');

        expect(logSpy).toHaveBeenCalledWith('This is the first day of the week!');
    });

    it('logs the correct message for Sunday', function () {
        const logSpy = spyOn(console, 'log');

        checkDay('Sunday');

        expect(logSpy).toHaveBeenCalledWith('This is the last day of the week!');
    });

    it('throws for an invalid day', function () {
        expect(function () {
            checkDay('Funday');
        }).toThrowError('The day is not in a valid format.');
    });
});
