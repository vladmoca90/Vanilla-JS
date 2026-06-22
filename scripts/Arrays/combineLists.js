//Given two lists, a and b, return a list c such that
//c = [a0, b0, a1, b1, ...]

const combineLists = (a, b) => {
    if(a.length == 0) {
        return b;
    }
    if(b.length == 0) {
        return a;
    }

    let c = [];

    let shortList = [], longList = [];

    if(a.length > b.length) {
        longList = a;
        shortList = b;
    }
    else {
        longList = b;
        shortList = a;
    }

    let firstLongList = a == longList;

    for (let i = 0; i < shortList.length; i++) {
        if(firstLongList) {
            c.push(longList[i]);
            c.push(shortList[i]);
        }
        else {
            c.push(shortList[i]);
            c.push(longList[i]);
        }
    }

    for (let i = shortList.length; i < longList.length; i++) {
        c.push(longList[i]);
    }

    return c;
}
