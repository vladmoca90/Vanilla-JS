describe('dictionary project', function () {
    describe('object dictionaries', function () {
        it('updates and reads values by key', function () {
            expect(animalDict.bird).toBe('eagle');
            expect(animalDict[key]).toBe('shark');
        });

        it('creates an empty dictionary object', function () {
            expect(dictionary).toEqual({});
        });
    });

    describe('Map dictionaries', function () {
        it('stores and retrieves a value by key', function () {
            expect(map.get('apple')).toBe(5);
        });

        it('returns undefined for a key that is not present', function () {
            expect(map.get('orange')).toBeUndefined();
        });
    });
});
