//A function that joins the elements of an list into a string

const joinList = list => {
    if(list.length == 0) {
        throw new Error('The list cannot be empty');
    }

    return list.join();
}