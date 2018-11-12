//A function that calculates the length of an object

var student = {
    name: "David Rayy",
    degree: "Bsc Computer Science",
    university: "University of Birmingham",
    stuentId: 1098085,
    age: 16,
    nationality: "Canadian",
    accomodation: "Maple Bank",
};

function getObjectLength(student) {
    if(Object.keys(student).length == 0) {
        throw new Error('The object cannot be empty');
    }

    return Object.keys(student).length;
}