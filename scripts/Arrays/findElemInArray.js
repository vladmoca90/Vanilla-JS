//A function that find certain element/elements in a given array. 
//find() locates a specific entry by a predicate and returns it. .map() is for all entries!

const findElem = (list) => {
    if (list.length == 0) {
        throw new Error('The list cannot be empty');
    }

    const found = list.find((element) => element % 2 == 0);

    return found;
}