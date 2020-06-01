//A function that filters an list
const filterList = list => {
    if(list.lenth == 0) {
        throw new Error('The list cannot be empty');
    }

    for (let i = 0; i < list.length; i++) {
        let result = list.filter(i => list.length > 6);

        return result;
    }
}