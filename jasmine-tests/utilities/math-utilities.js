//smallest element in an list//

const min = list => {
    if(list.length == 0) {
        throw new Error("The list cannot be empty");
    }
    if(list.length == 1) {
        return list[0];
    }

    let minSoFar = list[0];

    for (let i = 0; i < list.length; i++) {
        if(list[i] < minSoFar) {
            minSoFar = list[i];
        }
    }

    return minSoFar;
}