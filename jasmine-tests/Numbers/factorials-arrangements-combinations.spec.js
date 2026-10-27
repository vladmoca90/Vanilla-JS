describe('factorials-arrangements-combinations project', function () {
    it('calculates factorials including zero factorial', function () {
        expect(fact(0)).toBe(1);
        expect(fact(5)).toBe(120);
    });

    it('calculates arrangements', function () {
        expect(calcArrangements(5, 2)).toBe(20);
        expect(calcArrangements(5, 1)).toBe(5);
    });

    it('calculates combinations', function () {
        expect(calcCombinations(5, 2)).toBe(10);
        expect(calcCombinations(5, 1)).toBe(5);
    });

    it('rejects k greater than n', function () {
        expect(function () {
            calcCombinations(2, 3);
        }).toThrowError('The k must be < than n');
    });
});
