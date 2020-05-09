//A object with properties of a country

const country = {
    name: "Uzbekistan",
    population: 27, // in millions //
    capital: "Tashkent",
    otherCities: ["Samarkhand", "Burkhara", "Nukus", "Fergana Valley"],
    size: 447400,
    region: "Central Asia",
    independence: 1991,
}

const countryProp = country => Object.keys(country);
const countryValues = country => Object.values(country);
const countryPairs = country => Object.entries(country);