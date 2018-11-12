//A object with properties of a country

var country = {
    name: "Uzbekistan",
    population: 27, // in millions //
    capital: "Tashkent",
    otherCities: ["Samarkhand", "Burkhara", "Nukus"],
    size: 447400,
    region: "Central Asia",
    independence: 1991,
}

function countryProp(country) {

    return Object.keys(country);
}

function countryValues(country) {

    return Object.values(country);
}

function countryPairs(country) {

    return Object.entries(country);
}