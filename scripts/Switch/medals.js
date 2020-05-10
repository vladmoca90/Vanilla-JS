const getAthletePosition = position => {
    if (!position) {
        throw new Error('The grocery must exist');
    }
    if (position.length == 0) {
        throw new Error('The grocery must be given.');
    }

    switch (position) {
        case 'first place':
            console.log('You get the gold medal!');
            break;
        case 'second place':
            console.log('You get the silver medal!');
            break;
        case 'third place':
            console.log('You get the bronze medal!');
            break;
        default:
            console.log('No medal awarded.');
            break;
    }
}

getAthletePosition('first place');