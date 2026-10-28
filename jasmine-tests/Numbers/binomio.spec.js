describe('binomio project', function () {
    beforeEach(function () {
        // Supply the combination and power helpers used by the binomial expansion.
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
        // Remove the test helpers so they do not affect other specs.
        delete window.comb;
        delete window.power;
    });

    // Raise (2 + 3) to the third power using repeated multiplication.
    it('calculates a binomial power by repeated multiplication', function () {
        expect(calcGeneralBinomio(2, 3, 3)).toBe(125);
    });

    // Check that the combination-based expansion gives the same result.
    it('calculates a binomial power using combinations', function () {
        expect(calculateBinomioWithCombinations(2, 3, 3)).toBe(125);
    });

    // The binomial functions require all arguments to be positive.
    it('rejects non-positive inputs', function () {
        expect(function () {
            calcGeneralBinomio(0, 2, 3);
        }).toThrowError('a, b and n must be > 0');
    });
});
