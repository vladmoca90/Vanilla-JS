//A function that assigns values to an object
var student = {
    name: 'Lech Katchinsky',
    age: 25,
    nationality: 'Polish'
};

function addToStudent(student) {

    return Object.assign(student, {
        grade: 10,
        pastConvictions: false
    });
}

//Second object

//A object with properties of a country

var country = {
    name: "Uzbekistan",
    population: 27, // in millions //
    capital: "Tashkent",
    otherCities: ["Samarkhand", "Burkhara", "Nukus"],
}

function addNewProperties(country) {

    return Object.assign(country, {
        size: 447400,
        region: "Central Asia",
        independence: 1991,
    });
}