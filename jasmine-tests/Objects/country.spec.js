describe('country project', function () {
    it('returns an object’s keys, values, and entries', function () {
        return withObjectScript('country.js', function (evaluate) {
            expect(evaluate('countryProp({ name: "Japan", population: 125 })')).toEqual([
                'name',
                'population',
            ]);
            expect(evaluate('countryValues({ name: "Japan", population: 125 })')).toEqual([
                'Japan',
                125,
            ]);
            expect(evaluate('countryPairs({ name: "Japan", population: 125 })')).toEqual([
                ['name', 'Japan'],
                ['population', 125],
            ]);
        });
    });
});
