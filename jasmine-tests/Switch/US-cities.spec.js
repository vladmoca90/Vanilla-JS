describe('US cities project', function () {
    it('returns the known message for New York City', function () {
        expect(getCity({ name: 'New York City' })).toBe('The city is called New York City.');
    });

    it('returns the known message for Los Angeles', function () {
        expect(getCity({ name: 'Los Angeles' })).toBe('This Californian city is Los Angeles.');
    });

    it('returns a not-available message for a city not in the list', function () {
        expect(getCity({ name: 'Chicago' })).toBe('Sorry, information about Chicago is not available.');
    });

    it('throws when the city name is missing', function () {
        expect(function () {
            getCity({ name: '   ' });
        }).toThrowError('A city name is required.');
    });
});
