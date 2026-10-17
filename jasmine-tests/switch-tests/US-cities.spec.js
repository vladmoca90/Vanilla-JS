describe('US-cities switch project', function () {
    it('returns information for a recognized city', function () {
        expect(getCity({ name: 'Atlanta' })).toBe(
            'Atlanta is the capital of Georgia.'
        );
    });

    it('returns a fallback for an unrecognized city', function () {
        expect(getCity({ name: 'Denver' })).toBe(
            'Sorry, information about Denver is not available.'
        );
    });

    it('throws when the city name is missing', function () {
        expect(function () {
            getCity({});
        }).toThrowError('A city name is required.');
    });
});
