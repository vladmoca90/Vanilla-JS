// A function that assigns values to an object

const student = {
    name: "Angelika Kloc",
    age: 25,
    nationality: "Polish"
};

const addToStudent = student => {
    return Object.assign(student, {
        grade: 10,
        pastConvictions: false,
    });
}
