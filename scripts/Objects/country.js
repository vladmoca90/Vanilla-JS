// A object with properties of a country

const country = {
    name: 'United States',
    population: 323, // in millions //
    capital: 'Washington DC',
    otherCities: ['Los Angeles', 'Chicago', 'Miami', 'Houston'],
    size: 9826630, // in square km
    region: 'North America',
    independence: 1776,
    landlocked: false,
}

const countryProp = country => Object.keys(country);
const countryValues = country => Object.values(country);
const countryPairs = country => Object.entries(country);