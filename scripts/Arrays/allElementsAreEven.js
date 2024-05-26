// A function that returns true if all elements in an list are even and false otherwise

const allElementsAreEven = list => {
    if (list.length == 0) {
        throw new Error("The list cannot be empty");
    }
    if (list.length == 1) {
        if (list[0] % 2 !== 0) {
            return false;
        }
    }

    for (let i = 0; i < list.length; i++) {
        if (list[i] % 2 !== 0) {
            return false;
        }
    }

    return true;
}