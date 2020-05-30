//Given a list and an the number n, return all the numbers from the list that can be divided by n

function allDivisors(list, n) {
    if(n <= 0) {
        throw new Error("The n must be positive only");
    }
    if(list.length == 0) {
        return list;
    }

    var divisorsList = [];

    for (var i = 0; i < list.length; i++) {
        if(list[i] % n == 0) {
            divisorsList.push(list[i]);
        }
    }

    return divisorsList;
}