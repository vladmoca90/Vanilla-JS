describe('Animal classes project', function () {
    // The subclass inherits the family and species values from its parent class.
    it('combines the inherited animal details in its type getter', function () {
        const tiger = new Tiger('Felidae', 'Panthera tigris');

        expect(tiger.family).toBe('Felidae');
        expect(tiger.species).toBe('Panthera tigris');
        expect(tiger.animalType).toBe('Felidae and Panthera tigris');
    });
});
