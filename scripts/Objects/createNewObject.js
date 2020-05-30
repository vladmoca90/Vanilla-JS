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
    if(Object.keys(student).length == 0) {
        throw new Error('The object cannot be empty');
    }

    return Object.assign({
        length: Object.keys(student).length,
        keys: Object.keys(student),
        entries: Object.entries(student),
        values: Object.values(student),
    });
}

addElements(student);