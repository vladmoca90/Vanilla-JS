//A function that return the current date

function getCurrentDate() {
    var today = new Date();

    return today.getDate() + '-' + today.getMonth() + '-' + today.getFullYear();
}

getCurrentDate();