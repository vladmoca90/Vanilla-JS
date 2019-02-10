describe('math-utilities', function () {
    describe('swapcaseText()', function () {
        it('returns an error if text does not exist', function () {
            expect(function() {
                swapcaseText('')
            }).toThrowError();
        });
        it('returns all lowercase if the original has only uppercase', function () {

            expect(swapcaseText('AACBBC')).toBe('aacbbc');
        });
        it('returns all uppercase if the original has only lowercase', function () {

            expect(swapcaseText('aabbcc')).toBe('AABBCC');
        });
        it('returns swapcase string if the text exists', function () {

            expect(swapcaseText('aaBBcD')).toBe('AAbbCd');
        });
    });
});