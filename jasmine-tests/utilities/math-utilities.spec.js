describe('math-utilities', function () {
    describe('degreesToRadians()', function () {
        it('Returns an error if the degrees number is smaller than 0.', function() {
            expect(function() {
                degreesToRadians(-90).toThrowError();
            });
        });
         it('Returns an error if the degrees number is greater than 360.', function() {
            expect(function() {
                degreesToRadians(425).toThrowError();
            });
        });
        it('Returns the degrees converted into radians if the number is between 0 and 360', function() {
            expect(degreesToRadians(75)).toBe(7.53);
        });
    });
});
