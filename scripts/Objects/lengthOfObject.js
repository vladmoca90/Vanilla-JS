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

const getStudentPropertyCount = (obj) => { // Changed parameter name
  // Check if the argument is a valid object.
  if (
    obj === null ||
    typeof obj !== "object" ||
    Array.isArray(obj)
  ) {
    throw new Error("Expected a non-null object.");
  }

  const propertyCount = Object.keys(obj).length; // Store length once

  // Check if the object is empty.
  if (propertyCount === 0) {
    throw new Error("The object cannot be empty.");
  }

  return propertyCount;
};

try {
  const totalProperties = getStudentPropertyCount(student);
  console.log(`The student object has ${totalProperties} properties.`);
} catch (error) {
  console.error(error.message);
}