//Write the following functions, each of them takes an list as a parameter
//head([]): returns the first element of the list
//tail([]): returns the list without the first element
//last([]): returns the last element of the list 

function head(list) {
    if (list.length == 0) {
        throw new Error("The list is empty");
    }
    if (list.length == 1) {
        return list[0];
    }

    return list[0];
}

function tail(list) {
    if (list.length == 0) {
        throw new Error("The list is empty");
    }
    if (list.length == 1) {
        return [];
    }

    return list;
}

function last(list) {

    if (list.length == 0) {
        throw new Error("The list is empty");
    }
    if (list.length == 1) {
        return list[0];
    }

    return list.pop();
}