describe('Profile class project', function () {
    // Check that constructor values are stored and used to build the greeting.
    it('stores the profile details and returns a personalized greeting', function () {
        const profile = new Profile('Alex', 30);

        expect(profile.name).toBe('Alex');
        expect(profile.age).toBe(30);
        expect(profile.greet).toBe('My name is Alex and I am 30 years old.');
    });
});
