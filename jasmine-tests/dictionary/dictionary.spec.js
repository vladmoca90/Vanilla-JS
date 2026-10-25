describe('dictionary project', function () {
    describe('object dictionaries', function () {
        it('updates and reads values by key', function () {
            // Checks that object properties can be accessed by their keys.
            expect(animalDict.bird).toBe('eagle');
            expect(animalDict[key]).toBe('shark');
        });

        it('creates an empty dictionary object', function () {
            // Checks that a new dictionary starts with no properties.
            expect(dictionary).toEqual({});
        });
    });

    describe('Map dictionaries', function () {
        it('stores and retrieves a value by key', function () {
            // Checks that a Map returns the value stored for a key.
            expect(map.get('apple')).toBe(5);
        });

        it('returns undefined for a key that is not present', function () {
            // Checks that looking up a missing Map key returns undefined.
            expect(map.get('orange')).toBeUndefined();
        });
    });
});
