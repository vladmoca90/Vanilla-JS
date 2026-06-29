// An object representing a country and its properties.

const country = {
    name: "Uzbekistan",
    population: 27, // Population in millions
    capital: "Tashkent",
    otherCities: ["Samarkand", "Bukhara", "Nukus"],
};

// Adds additional properties to a country object.
const addToCountry = (country) => {
    // Validate the object
    if (!country) {
        throw new Error("A country object is required.");
    }

    return Object.assign(country, {
        size: 447400, // Area in square kilometres
        region: "Central Asia",
        continent: "Asia",
        independence: 1991,
    });
};

// Update the country object
const updatedCountry = addToCountry(country);

// Display the updated object
console.log(updatedCountry);

/*
Theory

- Objects can be modified after they are created by adding
  new properties.

- Object.assign(target, source) copies the properties from
  the source object into the target object.

- The first argument is the object to update.
- The second argument contains the new properties.

Syntax

Object.assign(targetObject, {
    property1: value1,
    property2: value2
});
*/