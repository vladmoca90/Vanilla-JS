describe('math-utilities', function () {
    describe('capitalizeConsonants()', function () {
        it('returns an error if text does not exist', function () {
            expect(function() {
                capitalizeConsonants('')
            }).toThrowError();
        });
        it('capitalize all letters if it contains only consonants', function () {

            expect(capitalizeConsonants('bbbb')).toBe('BBBB');
        });
        it('do not capitalize any letter if there are no consonants', function () {

            expect(capitalizeConsonants('aaee')).toBe('aaee');
        });
        it('capitalize all consonants in a text', function () {

            expect(capitalizeConsonants('aabbeedd')).toBe('aaBBeeDD');
        });
    });
});