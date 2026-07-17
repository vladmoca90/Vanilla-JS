// A function that joins the elements of an list into a string

const joinList = list => {
    if (!Array.isArray(list)) {
        throw new TypeError("Expected an array");
    }

    if (list.length === 0) {
        throw new Error("The list cannot be empty");
    }

    return list.join(",");
};