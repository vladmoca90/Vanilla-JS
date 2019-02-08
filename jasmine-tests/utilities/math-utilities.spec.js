describe('math-utilities', function () {
    describe('parameterizeText()', function () {
        it('returns an error if text does not exist', function () {
            expect(function() {
                parameterizeText('')
            }).toThrowError();
        });
        it('returns parameterize string if the text exists', function () {

            expect(parameterizeText('Alexandru Mocanu')).toBe('alexandru-mocanu');
        });
    });
});