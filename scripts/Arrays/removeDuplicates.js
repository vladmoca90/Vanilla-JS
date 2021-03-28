//A const that removes the duplicates from an array

//Method 1 - sort the array and compare each element one by one

const removeDuplicates = list => {
    if(list.length == 0) {
        throw new Error('The list cannot be empty');
    }

    let withoutDuplicates = [];

    for (let i = 0; i < list.length; i++) {
        if(list[i] != list[i + 1]) {
            withoutDuplicates.push(list[i]);
        }
    }

    return withoutDuplicates;
}

//Method 2 - check if it exists or not already

const removeDuplicates = list => {
    if(list.length == 0) {
        throw new Error('The list cannot be empty');
    }

    list.sort();

    let withoutDuplicates = [];

    for (let i = 0; i < list.length; i++) {
        if(withoutDuplicates.indexOf(list[i]) == -1) {
            withoutDuplicates.push(list[i]);
        }
    }

    return withoutDuplicates;
}

//Method 3 - use a dictionary

let dict = {}

const createDictionary = list => {
    for (let i = 0; i < list.length; i++) {
        let key = list[i];

        if(dict[key]) {
            dict[key]++;
        }
        else {
            dict[key] = 1;
        }
    }

    return Object.keys(dict);
}

//Method 4 - Splice your array

const removeDuplicates = list => {
    if(list.length == 0) {
        throw new Error('The list cannot be empty');
    }

    list.sort();

    for (let i = 0; i < list.length - 1; i++) {
        if(list[i] == list[i + 1]) {
            list.splice(i + 1, 1);
        }
    }

    return list;
}