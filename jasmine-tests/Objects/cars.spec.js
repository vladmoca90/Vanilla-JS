describe('cars project', function () {
    it('returns a car model, its property names, and its entries', function () {
        return withObjectScript('cars.js', function (evaluate) {
            expect(evaluate('getCarModel(2)')).toBe('Mercedes');
            expect(evaluate('getCarProperties(0)')).toEqual(['model', 'country', 'number']);
            expect(evaluate('getCarEntries(1)')).toEqual([
                ['model', 'Honda'],
                ['country', 'Japan'],
                ['number', '06GF090'],
            ]);
        });
    });

    it('rejects indexes outside the cars array', function () {
        return withObjectScript('cars.js', function (evaluate) {
            expect(function () {
                evaluate('getCarModel(-1)');
            }).toThrowError('The index must be between 0 and 2.');
            expect(function () {
                evaluate('getCarProperties(3)');
            }).toThrowError('The index must be between 0 and 2.');
        });
    });
});
