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

// Returns the model of the selected car.
const chooseCarModel = (index) => {
    if (index < 0 || index >= cars.length) {
        throw new Error(`The index must be between 0 and ${cars.length - 1}.`);
    }

    return cars[index].model;
};

console.log(chooseCarModel(2));

// Returns the property names of the selected car.
const chooseCarProperty = (index) => {
    if (index < 0 || index >= cars.length) {
        throw new Error(`The index must be between 0 and ${cars.length - 1}.`);
    }

    return Object.keys(cars[index]);
};

console.log(chooseCarProperty(0));

// Returns the property/value pairs of the selected car.
const chooseCarEntries = (index) => {
    if (index < 0 || index >= cars.length) {
        throw new Error(`The index must be between 0 and ${cars.length - 1}.`);
    }

    return Object.entries(cars[index]);
};

console.log(chooseCarEntries(1));