// An object containing information about a country.

const country = {
    name: 'United States',
    population: 323, // Population in millions
    capital: 'Washington, D.C.',
    otherCities: ['Los Angeles', 'Chicago', 'Miami', 'Houston'],
    size: 9826630, // Area in square kilometres
    region: 'North America',
    independence: 1776,
    landlocked: false,
};

// Returns an array of the object's property names.
const countryProp = (countryObj) => Object.keys(countryObj);

// Returns an array of the object's values.
const countryValues = (countryObj) => Object.values(countryObj);

// Returns an array of [key, value] pairs.
const countryPairs = (countryObj) => Object.entries(countryObj);

console.log(countryProp(country));
console.log(countryValues(country));
console.log(countryPairs(country));