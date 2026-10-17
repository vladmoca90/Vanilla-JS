describe('switch projects', function () {
    describe('checkDay()', function () {
        it('logs the matching message for a supported day', function () {
            spyOn(console, 'log');

            checkDay('Monday');

            expect(console.log).toHaveBeenCalledWith(
                'This is the first day of the week!'
            );
        });

        it('throws for an invalid day', function () {
            expect(function () {
                checkDay('Funday');
            }).toThrowError('The day is not in a valid format.');
        });
    });

    describe('describeDay()', function () {
        it('logs the matching message for a supported day', function () {
            spyOn(console, 'log');

            describeDay('Sunday');

            expect(console.log).toHaveBeenCalledWith(
                'This is the last day of the week!'
            );
        });

        it('throws for an invalid day', function () {
            expect(function () {
                describeDay('Funday');
            }).toThrowError('Invalid day. Please enter a valid weekday.');
        });
    });

    describe('getAthletePosition()', function () {
        it('returns the medal for a recognized position', function () {
            expect(getAthletePosition('first place')).toBe('Gold medal');
        });

        it('returns the fallback for an unrecognized position', function () {
            expect(getAthletePosition('fourth place')).toBe(
                'No medal awarded'
            );
        });

        it('throws when the position is empty', function () {
            expect(function () {
                getAthletePosition(' ');
            }).toThrowError('Position is required.');
        });
    });

    describe('getGrocery()', function () {
        it('returns a price for a recognized item', function () {
            expect(getGrocery('papaya')).toBe('Papayas are £1.29');
        });

        it('matches item names without regard to case', function () {
            expect(getGrocery('APPLE')).toBe('Apples are £0.99');
        });

        it('returns a fallback for an unrecognized item', function () {
            expect(getGrocery('pear')).toBe('Sorry, we ran out of pear.');
        });

        it('throws when the item is empty', function () {
            expect(function () {
                getGrocery('');
            }).toThrowError('A grocery item is required.');
        });
    });

    describe('getCity()', function () {
        it('returns information for a recognized city', function () {
            expect(getCity({ name: 'Atlanta' })).toBe(
                'Atlanta is the capital of Georgia.'
            );
        });

        it('returns a fallback for an unrecognized city', function () {
            expect(getCity({ name: 'Denver' })).toBe(
                'Sorry, information about Denver is not available.'
            );
        });

        it('throws when the city name is missing', function () {
            expect(function () {
                getCity({});
            }).toThrowError('A city name is required.');
        });
    });
});
