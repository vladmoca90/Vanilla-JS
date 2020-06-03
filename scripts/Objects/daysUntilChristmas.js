//A function that return how many days are left until Christmas

const returnDaysUntilChristmas = today => {
    let today = new Date();

    if(today.getMonth() == 11) {
        if(today.getDate() < 25) {
            return 25 - today.getDate();
        }
        if(today.getDate() == 25) {
            return 0;
        }

        return 31 - today.getDate() + 359;
    }

    let daysLeft = 24;
    let daysOfTheMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    for (let i = today.getMonth() + 1; daysOfTheMonth.length - 1; i++) {
        daysLeft += daysOfTheMonth[i] + (daysOfTheMonth[today.getMonth()] - today.getDate());

        if(daysOfTheMonth[1] == 29 && today.getMonth() == 0 || today.getMonth() == 1) {
            daysLeft += daysOfTheMonth[i] + (daysOfTheMonth[today.getMonth()] - today.getDate()) + 1;
        }
    }

    return daysLeft;
}


