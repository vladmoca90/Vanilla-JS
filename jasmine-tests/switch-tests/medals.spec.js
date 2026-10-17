describe('medals switch project', function () {
    it('returns the medal for a recognized position', function () {
        expect(getAthletePosition('first place')).toBe('Gold medal');
    });

    it('returns the fallback for an unrecognized position', function () {
        expect(getAthletePosition('fourth place')).toBe(
            'No medal awarded'
        );
    });

    it('throws when the position is empty', function () {
        expect(function () {
            getAthletePosition(' ');
        }).toThrowError('Position is required.');
    });
});
