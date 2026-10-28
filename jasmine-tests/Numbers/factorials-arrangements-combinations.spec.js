describe('factorials-arrangements-combinations project', function () {
    // Check the special zero-factorial result as well as a regular factorial.
    it('calculates factorials including zero factorial', function () {
        expect(fact(0)).toBe(1);
        expect(fact(5)).toBe(120);
    });

    // Arrangements count ordered selections from a set.
    it('calculates arrangements', function () {
        expect(calcArrangements(5, 2)).toBe(20);
        expect(calcArrangements(5, 1)).toBe(5);
    });

    // Combinations count selections without regard to order.
    it('calculates combinations', function () {
        expect(calcCombinations(5, 2)).toBe(10);
        expect(calcCombinations(5, 1)).toBe(5);
    });

    // A selection cannot contain more items than the available set.
    it('rejects k greater than n', function () {
        expect(function () {
            calcCombinations(2, 3);
        }).toThrowError('The k must be < than n');
    });
});
