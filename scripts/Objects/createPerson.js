// An array of objects representing different cars.
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
        throw new Error("The index is out of range.");
    }

    return cars[index].model;
};

// Returns the property names of the selected car.
const chooseCarProperty = (index) => {
    if (index < 0 || index >= cars.length) {
        throw new Error("The index is out of range.");
    }

    return Object.keys(cars[index]);
};

// Returns the property/value pairs of the selected car.
const chooseCarEntries = (index) => {
    if (index < 0 || index >= cars.length) {
        throw new Error("The index is out of range.");
    }

    return Object.entries(cars[index]);
};

// Display the results
console.log(chooseCarModel(2));

console.log(chooseCarProperty(0));

console.log(chooseCarEntries(1));