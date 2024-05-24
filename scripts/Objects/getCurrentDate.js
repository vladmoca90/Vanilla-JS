// A function that return the current date

const getCurrentDate = today => {
    let today = new Date();

    return today.getDate() + '-' + today.getMonth() + '-' + today.getFullYear();
}

getCurrentDate();