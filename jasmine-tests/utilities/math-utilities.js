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
    if(Object.keys(country).length == 0) {
        throw new Error('The object cannot be empty');
    }

    return Object.keys(country).length;
}