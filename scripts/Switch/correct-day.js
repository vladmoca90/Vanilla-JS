const correctDay = day =>{
    switch (day) {
        case 'Monday':
            console.log('This is the first day of the week!');
            break;
        case 'Wednesday':
            console.log('This is the third day of the week!');
            break;
        case 'Sunday':
            console.log('This is the last day of the week!');
            break;
        case 'Tuesday':
        case 'Thursday':
        case 'Friday':
        case 'Saturday':
            console.log('The day is not what you are looking for.');
            break;
        default:
            throw new Error('The day is not a valid format.');
    }
}

correctDay('Sunday');