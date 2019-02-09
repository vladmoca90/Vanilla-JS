describe('math-utilities', function () {
    describe('swapcaseText()', function () {
        it('returns an error if text does not exist', function () {
            expect(function() {
                swapcaseText('')
            }).toThrowError();
        });
        it('returns swapcase string if the text exists', function () {

            expect(swapcaseText('aaBB')).toBe('AAbb');
        });
    });
});