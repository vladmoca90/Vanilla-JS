describe('choose-grocery switch project', function () {
    it('returns a price for a recognized item', function () {
        expect(getGrocery('papaya')).toBe('Papayas are £1.29');
    });

    it('matches item names without regard to case', function () {
        expect(getGrocery('APPLE')).toBe('Apples are £0.99');
    });

    it('returns a fallback for an unrecognized item', function () {
        expect(getGrocery('pear')).toBe('Sorry, we ran out of pear.');
    });

    it('throws when the item is empty', function () {
        expect(function () {
            getGrocery('');
        }).toThrowError('A grocery item is required.');
    });
});
