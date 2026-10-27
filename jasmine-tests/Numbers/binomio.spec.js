describe('binomio project', function () {
    beforeEach(function () {
        window.comb = function (n, k) {
            let result = 1;
            for (let i = 1; i <= k; i++) {
                result = result * (n - i + 1) / i;
            }
            return result;
        };
        window.power = Math.pow;
    });

    afterEach(function () {
        delete window.comb;
        delete window.power;
    });

    it('calculates a binomial power by repeated multiplication', function () {
        expect(calcGeneralBinomio(2, 3, 3)).toBe(125);
    });

    it('calculates a binomial power using combinations', function () {
        expect(calculateBinomioWithCombinations(2, 3, 3)).toBe(125);
    });

    it('rejects non-positive inputs', function () {
        expect(function () {
            calcGeneralBinomio(0, 2, 3);
        }).toThrowError('a, b and n must be > 0');
    });
});
