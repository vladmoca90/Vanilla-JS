describe('Vehicle and Car classes project', function () {
    // Car reuses Vehicle's description getter to describe its make and model.
    it('returns a car description using the inherited vehicle details', function () {
        const car = new Car('Seat', 'Leon');

        expect(car.make).toBe('Seat');
        expect(car.model).toBe('Leon');
        expect(car.description).toBe('Seat Leon');
        expect(car.vehicleType).toBe('This car is a Seat Leon');
        expect(car instanceof Vehicle).toBe(true);
    });
});
