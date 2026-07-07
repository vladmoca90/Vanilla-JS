// An array of objects representing cars.

const cars = [
    {
        model: "Volvo",
        country: "Sweden",
        number: "34BR345",
    },
    {
        model: "Honda",
        country: "Japan",
        number: "06GF090",
    },
    {
        model: "Mercedes",
        country: "Germany",
        number: "00JY676",
    },
];

// Validates the selected index.
const validateIndex = (index) => {
    if (index < 0 || index >= cars.length) {
        throw new Error(`The index must be between 0 and ${cars.length - 1}.`);
    }
};

// Returns the model of the selected car.
const getCarModel = (index) => {
    validateIndex(index);

    const car = cars[index];
    return car.model;
};

console.log(getCarModel(2));
// Output: Mercedes

// Returns the property names of the selected car.
const getCarProperties = (index) => {
    validateIndex(index);

    const car = cars[index];
    return Object.keys(car);
};

console.log(getCarProperties(0));
// Output: ['model', 'country', 'number']

// Returns the property/value pairs of the selected car.
const getCarEntries = (index) => {
    validateIndex(index);

    const car = cars[index];
    return Object.entries(car);
};

console.log(getCarEntries(1));
// Output:
// [
//   ['model', 'Honda'],
//   ['country', 'Japan'],
//   ['number', '06GF090']
// ]