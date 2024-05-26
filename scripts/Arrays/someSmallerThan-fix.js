//Returns true is at least one element in an array in smaller than a given number

const compareNumbersWith = (list, n) => {
    if (list.length == 0) {
        throw new Error("The list cannot be empty");
    }

    return list.some(function(elem) {
        return elem > n;
    });
}