//A function that returns true if all elements have a certain condition

const everyElemSmaller = (list, n) => {
    if(list.length == 0) {
        throw new Error('The list cannot be empty');
    }
    if(!n) {
        throw new Error('The n number must be given');
    }

    return list.every(elem => elem < n);
}