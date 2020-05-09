//A object with properties of a country
const country = {
    name: "Uzbekistan",
    population: 27, // in millions //
    capital: "Tashkent",
    otherCities: ["Samarkhand", "Burkhara", "Nukus"],
}

const addToCountry = country => {
    return Object.assign(country, {
        size: 447400,
        region: "Central Asia",
        continent: "Asia",
        independence: 1991,
    });
}