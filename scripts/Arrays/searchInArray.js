﻿//search the element in an list//

const searchInList = (list, n) => {
    if (list.length == 0) {
        return false;
    }
    if (list.length == 1) {
        if(n == list[0]) {
            return true;
        } else {
            return false;
        }
    }
    for (let i = 0; i < list.length; i++) {
        if(list[i] == n) {
            return true;
        }
    }

    return false;
}