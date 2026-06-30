// A function that calculates the number of properties in an object

const student = {
    name: "David Ray",
    degree: "BSc Computer Science",
    university: "University of Birmingham",
    studentId: 1098085,
    age: 16,
    nationality: "Canadian",
    accommodation: "Maple Bank",
};

const getStudentLength = (student) => {
    // Check if the argument is a valid object
    if (
        student === null ||
        typeof student !== "object" ||
        Array.isArray(student)
    ) {
        throw new Error("Expected a non-null object.");
    }

    const keys = Object.keys(student);

    // Check if the object is empty
    if (keys.length === 0) {
        throw new Error("The object cannot be empty.");
    }

    return keys.length;
};

try {
    const totalProperties = getStudentLength(student);
    console.log(`The student object has ${totalProperties} properties.`);
} catch (error) {
    console.error(error.message);
}