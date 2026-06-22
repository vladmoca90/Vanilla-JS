//Given an list, return the reverse of the list

const reverse = list => {
    for (let i = 0; j = list.length - 1; i < list.length / 2 && j >= list.length / 2; i++, j--) {
        let a = list[i];
        let b = list[j];

        list[i] = b;
        list[j] = a;
    }

    return list;
}

//Return the reverse of an list with 3 elements in the opposite way {

const inverse = list => {
    let x = list[0];
    let y = list[1];
    let z = list[2];

    let reverseList = [];

    reverseList.push(z);
    reverseList.push(y);
    reverseList.push(x);

    return reverseList;
}