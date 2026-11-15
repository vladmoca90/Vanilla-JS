/*
 * Test overview:
 * - Returns the correct price for a valid grocery item
 * - Accepts uppercase input by normalizing it
 * - Returns a not-available message for items not in stock
 */
describe('choose grocery project', function () {
    it('returns the correct price for a valid grocery item', function () {
        expect(getGrocery('papaya')).toBe('Papayas are £1.29');
    });

    it('accepts uppercase input by normalizing it', function () {
        expect(getGrocery('LIME')).toBe('Limes are £1.49');
    });

    it('returns a not-available message for items not in stock', function () {
        expect(getGrocery('banana')).toBe('Sorry, we ran out of banana.');
    });

    it('throws when the grocery item is empty', function () {
        expect(function () {
            getGrocery('   ');
        }).toThrowError('A grocery item is required.');
    });
});
