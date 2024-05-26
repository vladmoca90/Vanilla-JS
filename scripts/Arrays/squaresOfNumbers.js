//Give a list of numbers, return a list with the squares of these numbers

const squareList = list => {
    if (list.length == 0) {
        return list;
    }

    for (let i = 0; i < list.length; i++) {
        let number = list[i] * list[i];
        list[i] = number;
    }

    return list;
}