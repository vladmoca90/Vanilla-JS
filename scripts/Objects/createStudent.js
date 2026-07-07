// A function that returns certain properties of an object in another object.

const student = {
  name: 'David James Ray',
  degree: 'BSc Computer Science',
  university: 'University of Birmingham',
  studentId: 1098085,
  age: 16,
  nationality: 'Canadian',
  accommodation: 'Maple Bank',
};

const getStudentProperties = (student) => {
  const studentProps = Object.keys(student);

  if (studentProps.length === 0) {
    throw new Error('The object cannot be empty.');
  }

  return {
    length: studentProps.length,
    keys: studentProps,
    entries: Object.entries(student),
    values: Object.values(student),
  };
};

console.log(getStudentProperties(student));