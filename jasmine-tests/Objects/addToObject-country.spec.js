describe('addToCountry project', function () {
    it('adds the country details to the original object', function () {
        return withObjectScript('addToObject/country.js', function (evaluate) {
            const result = evaluate(
                '(() => { const country = { name: "Japan" }; const result = addToCountry(country); return { country, result }; })()'
            );

            expect(result.result).toBe(result.country);
            expect(result.country).toEqual({
                name: 'Japan',
                size: 447400,
                region: 'Central Asia',
                continent: 'Asia',
                independence: 1991,
            });
        });
    });

    it('throws when no country object is provided', function () {
        return withObjectScript('addToObject/country.js', function (evaluate) {
            expect(function () {
                evaluate('addToCountry(null)');
            }).toThrowError('A country object is required.');
        });
    });
});
