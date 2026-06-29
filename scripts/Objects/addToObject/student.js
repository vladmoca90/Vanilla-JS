// A student object

const student = {
    name: "Angelika Kloc",
    age: 25,
    nationality: "Polish",
};

// A function that adds new properties to the student object

const addToStudent = (student) => {
    return Object.assign(student, {
        grade: 10,
        pastConvictions: false,
    });
};

console.log(addToStudent(student));