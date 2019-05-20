describe('math-utilities', function () {
    describe('repeatText()', function () {
        it('returns an error if the text does not exist', function () {
            expect(function() {
                repeatText('', 4)
            }).toThrowError();
        });
        it('returns an error if the number is 0', function () {

            expect(function() {
                repeatText('Ana', 0)
            }).toThrowError();
        });
        it('returns a text repeated n timesif everything is valid', function () {

            expect(repeatText('Ana', 3)).toBe('AnaAnaAna');
        });
    });
});