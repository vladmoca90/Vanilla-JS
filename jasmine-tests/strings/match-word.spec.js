describe('match-word project', function () {
    it('counts exact word matches', function () {
        expect(countWord('Alex', 'Alex Alex Sam')).toBe(2);
    });
});
