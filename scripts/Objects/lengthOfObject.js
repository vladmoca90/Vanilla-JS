// A function that counts the number of properties in an object.

const student = {
  name: "David Ray",
  degree: "BSc Computer Science",
  university: "University of Birmingham",
  studentId: 1098085,
  age: 16,
  nationality: "Canadian",
  accommodation: "Maple Bank",
};

const getStudentPropertyCount = (student) => {
  // Check if the argument is a valid object.
  if (
    student === null ||
    typeof student !== "object" ||
    Array.isArray(student)
  ) {
    throw new Error("Expected a non-null object.");
  }

  // Check if the object is empty.
  if (Object.keys(student).length === 0) {
    throw new Error("The object cannot be empty.");
  }

  return Object.keys(student).length;
};

try {
  const totalProperties = getStudentPropertyCount(student);
  console.log(`The student object has ${totalProperties} properties.`);
} catch (error) {
  console.error(error.message);
}