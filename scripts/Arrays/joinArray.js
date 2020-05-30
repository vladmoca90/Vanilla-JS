//A function that joins the elements of an list into a string

function joinList(list) {
    if(list.length == 0) {
        throw new Error('The list cannot be empty');
    }

    return list.join();
}