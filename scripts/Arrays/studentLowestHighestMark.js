//input: array of students; each student has a name and a mark
//output: object that contains the student with the highest and the lowest mark

const findBestAndWorstMarks = students => {
    if(students.length == 0) {
        throw new Error("The array is empty");
    }
    if(students.length == 1) {
        return {
            max: students[0],
            min: students[0]
        }
    }

    let minMark = students[0];
    let maxMark = students[0];

    for (let i = 0; i < students.length; i++) {
        if(students[i].mark < minMark.mark) {
            minMark = students[i];
        }
        if(students[i].mark > maxMark.mark) {
            maxMark = students[i];
        }
    }

    return {
        max: maxMark,
        min: minMark
    };
}