describe('char-freq project', function () {
    it('returns the frequency of each character', function () {
        expect(charFreq('abbc')).toEqual({ a: 1, b: 2, c: 1 });
    });
});
