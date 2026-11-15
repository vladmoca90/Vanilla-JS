/*
 * Test overview:
 * - Returns Gold for first place
 * - Returns Silver for second place
 * - Returns Bronze for third place
 */
describe('medals project', function () {
    it('returns Gold for first place', function () {
        expect(getAthletePosition('first place')).toBe('Gold medal');
    });

    it('returns Silver for second place', function () {
        expect(getAthletePosition('second place')).toBe('Silver medal');
    });

    it('returns Bronze for third place', function () {
        expect(getAthletePosition('third place')).toBe('Bronze medal');
    });

    it('returns no medal for an unranked position', function () {
        expect(getAthletePosition('fourth place')).toBe('No medal awarded');
    });

    it('throws when the position is empty', function () {
        expect(function () {
            getAthletePosition('   ');
        }).toThrowError('Position is required.');
    });
});
