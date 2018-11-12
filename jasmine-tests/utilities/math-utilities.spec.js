describe('math-utilities', function () {
    describe('countryProp()', function () {
        it('throws an error if the object if empty', function () {

            expect(function () {
                specificStringEnd('', 'abc')
            }).toThrowError();
        });
        it('Returns the number of keys if the object is not empty', function () {

            var country = {
                name: "Uzbekistan",
                population: 27, // in millions //
                capital: "Tashkent",
                otherCities: ["Samarkhand", "Burkhara", "Nukus"],
                size: 447400,
                region: "Central Asia",
                independence: 1991,
            }

            expect(countryProp(country)).toBe(7);
        });
    });
});