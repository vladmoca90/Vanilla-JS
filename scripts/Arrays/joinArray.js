//A function that joins the elements of an list into a string

const joinList = list => {
    if(list.length == 0) {
        throw new Error('The list cannot be empty');
    }
    if(list.length == 1) {
        return list[0];
    }

    return list.join();
}