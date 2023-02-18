//A function that calculates the length of an object

const student = {
    name: "David Ray",
    degree: "Bsc Computer Science",
    university: "University of Birmingham",
    studentId: 1098085,
    age: 16,
    nationality: "Canadian",
    accommodation: "Maple Bank",
};

const getStudentLength = student => {
    let total = Object.keys(student);

    if(total.length == 0) {
        throw new Error('The object cannot be empty');
    }

    return total.length;
}

getStudentLength(student);