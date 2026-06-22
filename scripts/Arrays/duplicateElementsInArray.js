// A function that duplicates elements of an array

const duplicateElements = list => {
    if (list.length == 0) {
        throw new Error("The list cannot be empty");
    }

    let duplicated = [];

    for (let i = 0; i < list.length; i++) {
        duplicated.push(list[i]);
        duplicated.push(list[i]);
    }

    return duplicated;
}


// A function that duplicates elements of an array n times

const duplicateMultipleTimes = (list, n) => {
    if (list.length == 0) {
        throw new Error("The list cannot be empty");
    }
    if(n < 0) {
        throw new Error('n must be greater or equal to 0');
    }
    if(n == 0) {
        return list;
    }

    let multipleDuplicates = [];

    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < n; j++) {
            multipleDuplicates.push(list[i]);
        }
    }

    return multipleDuplicates;
}