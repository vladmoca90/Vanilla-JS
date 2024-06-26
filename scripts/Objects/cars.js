// An array of objects that has the properties of cars and returns an array with specific values from the object
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
    }
];

// Returns the values of the properties
const chooseCarModel = n => {
    if (n < 0 || n > 3) {
        throw new Error("The number must be 0, 1, 2 or 3");
    }

    return Object.values(cars[n].model).join("");
}

chooseCarModel(3);

// Returns the the properties
const chooseCarProperty = n => {
    if (n < 0 || n > 2) {
        throw new Error("The number must be 0, 1, 2 or 3");
    }

    return Object.keys(cars[n]);
}

chooseCarProperty(0);

// Returns the properties and values as pairs of arrays
const chooseCarEntries = n => {
    if (n < 0 || n > 3) {
        throw new Error("The number must be 0, 1 or 2");
    }

    return Object.entries(cars[n]);
}

chooseCarEntries(1);