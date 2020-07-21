//A function that returns certain properties of an object in another object

const student = {
    name: 'David Rayy',
    degree: 'Bsc Computer Science',
    university: 'University of Birmingham',
    stuentId: 1098085,
    age: 16,
    nationality: 'Canadian',
    accomodation: 'Maple Bank',
};

const addStudentProp = student => {
    let studentProp = Object.keys(student);

    if(studentProp.length == 0) {
        throw new Error('The object cannot be empty');
    }

    return Object.assign({
        length: studentProp.length,
        keys: studentProp,
        entries: Object.entries(student),
        values: Object.values(student),
    });
}

addStudentProp(student);