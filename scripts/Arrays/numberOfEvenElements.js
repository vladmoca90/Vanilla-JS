//A function that returns the number of even elements in an list

const numberOfEvenElements = list => {
    if(list.length == 0) {
        return 0;
    }
    if(list.length == 1) {
        return list[0] % 2 == 0 ? 1 : 0;
    }

    let count = 0;

    for (let i = 0; i < list.length; i++) {
        if(list[i] % 2 == 0) {
            count++;
        }
    }

    return count;
}