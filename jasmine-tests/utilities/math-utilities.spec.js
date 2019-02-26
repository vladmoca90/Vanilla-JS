describe('math-utilities', function () {
    describe('capitalizeVowels()', function () {
        it('returns an error if text does not exist', function () {
            expect(function() {
                capitalizeVowels('')
            }).toThrowError();
        });
        it('capitalize all letters if it contains only vowels', function () {

            expect(capitalizeVowels('aaaa')).toBe('AAAA');
        });
        it('do not capitalize any letter if there are no vowels', function () {

            expect(capitalizeVowels('bbcc')).toBe('bbcc');
        });
        it('capitalize all vowels in a text', function () {

            expect(capitalizeVowels('aabbeedd')).toBe('AAbbEEdd');
        });
    });
});