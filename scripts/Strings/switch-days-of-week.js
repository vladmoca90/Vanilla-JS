//A function that switches the days of the week

function getCurrentDay(day) {
    var day = new Date();

    switch (day.getDay()) {
        case 0:
            day = 'Sunday';
            break;
        case 1:
            day = 'Monday';
            break;
        case 2:
            day = 'Tuesday';
            break;
        case 3:
            day = 'Wednesday';
            break;
        case 4:
            day = 'Thursday';
            break;
        case 5:
            day = 'Friday';
            break;
        case 6:
            day = 'Saturday';
        default:
            throw new Error('Date is not a valid format');
    }
}