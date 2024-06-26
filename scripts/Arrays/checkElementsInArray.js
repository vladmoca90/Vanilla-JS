// A function that checks if all elements in an list fulfill a certain condition

const checkElementsInList = list => {
    if (list.length == 0) {
        throw new Error("The list cannot be empty");
    }

    for (let i = 0; i < list.length; i++) {
        if(list[i] > 10) {
            return false;
        }
    }

    return true;
}